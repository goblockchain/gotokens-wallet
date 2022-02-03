const GoBlockchain = artifacts.require("GoBlockchain");
const truffleAssert = require('truffle-assertions');
const { expectRevert } = require('@openzeppelin/test-helpers');
 
contract('GoBlockchain', (accounts) => {

  let instance;
  beforeEach('should setup the contract instance', async () => {
    instance = await GoBlockchain.deployed();
  });
 
  it("should check owner", async ()=> {
    const owner = await instance.owner();
 
    assert.equal(owner, accounts[0]);
  });
 
  it("should check not paused", async ()=> {
    const paused = await instance.paused();
    assert.equal(paused, false);
  });
 
  it("should check empty token_uri", async ()=> {
    const uri = await instance.token_uri(0);
    assert.equal(uri, '');
  });
 
  it("should check totalSupply equal 0", async ()=> {
    const supply = await instance.totalSupply(0);
    assert.equal(supply, 0);
  });
 
  it("should check uri is empty", async ()=> {
    const uri = await instance.uri(0);
    assert.equal(uri, '');
  });
 
  it("should check not exists token", async ()=> {
    const exists = await instance.exists(0);
    assert.equal(exists, false);
  });
 
  it("should check balanceOf owner is 0", async ()=> {
    const balance = await instance.balanceOf(accounts[0], 0);
    assert.equal(balance, 0);
  });
 
  it("should mint new NFT and test TransferSingle event", async ()=> {
    const newToken = await instance.mint(accounts[0], 1, 'https://www.google.com', { 'from': accounts[0]});
    truffleAssert.eventEmitted(newToken, 'TransferSingle', (ev) => {
      return ev.value.toString() == 1 && ev.id.toString() == 0 && ev.to == accounts[0];
    }, 'TransferSingle should be emitted with correct parameters');
    assert.notEqual(newToken.tx, '');
    assert.equal(newToken.tx.length, 66);
  });
 
  it("should owner have 1 NFT", async ()=> {
    const balance = await instance.balanceOf(accounts[0], 0);
    assert.equal(balance, 1);
  });
   
  it("should check exists is true", async ()=> {
    const exists = await instance.exists(0);
    assert.equal(exists, true);
  });
   
  it("should check token_uri of NFT is not empty", async ()=> {
    const uri = await instance.token_uri(0);
    assert.equal(uri, 'https://www.google.com');
  });
   
  it("should check totalSupply equal to 1", async ()=> {
    const supply = await instance.totalSupply(0);
    assert.equal(supply, 1);
  });
   
  it("should transfer NFT fom ACC 0 => ACC 1", async ()=> {
    const transfer = await instance.safeTransferFrom(accounts[0], accounts[1], '0', '1', "0x");
    truffleAssert.eventEmitted(transfer, 'TransferSingle', (ev) => {
      return ev.value.toString() == 1 && ev.id.toString() == 0 && ev.to == accounts[1];
    }, 'TransferSingle should be emitted with correct parameters');
    assert.notEqual(transfer.tx, '');
    assert.equal(transfer.tx.length, 66);
  });
     
  it("should check ACC 1 have 1 NFT and ACC 0 have 0", async ()=> {
    const balance1 = await instance.balanceOf(accounts[0], 0);
    assert.equal(balance1, 0);

    const balance2 = await instance.balanceOf(accounts[1], 0);
    assert.equal(balance2, 1);
  });
     
  it("should error to pause contract. OnlyOwner", async ()=> {
    await expectRevert(
      instance.pause({ 'from': accounts[1] }), "Ownable: caller is not the owner"
    );
  });
     
  it("should pause contract by owner", async ()=> {
    let pauser = await instance.pause({ 'from': accounts[0] });
    truffleAssert.eventEmitted(pauser, 'Paused', (ev) => {
      return ev.account == accounts[0];
    }, 'Paused should be emitted with correct parameters');
    assert.notEqual(pauser.tx, '');
    assert.equal(pauser.tx.length, 66);
  });

  it("should NOT transfer NFT fom ACC 1 => ACC 0. Paused", async ()=> {
    await expectRevert(
      instance.safeTransferFrom(accounts[1], accounts[0], '0', '1', "0x", { 'from': accounts[1] }), "Pausable: paused -- Reason given: Pausable: paused."
    );
  });
  
  it("should unpause contract by owner", async ()=> {
    let pauser = await instance.unpause({ 'from': accounts[0] });
    truffleAssert.eventEmitted(pauser, 'Unpaused', (ev) => {
      return ev.account == accounts[0];
    }, 'Unpaused should be emitted with correct parameters');
    assert.notEqual(pauser.tx, '');
    assert.equal(pauser.tx.length, 66);
  });     

  it("should batch mint NFTs and test Transfer event", async ()=> {
    const newTokens = await instance.mintBatch(accounts[0], [0, 1], [2, 2], { 'from': accounts[0]});
    truffleAssert.eventEmitted(newTokens, 'TransferBatch', (ev) => {
      return ev.to == accounts[0] && ev.values.toString() === '2,2';
    }, 'TransferBatch should be emitted with correct parameters');
    assert.notEqual(newTokens.tx, '');
    assert.equal(newTokens.tx.length, 66);
  });

  it("should batch transfer NFT fom ACC 0 => ACC 1", async ()=> {
    const transferBatch = await instance.safeBatchTransferFrom(accounts[0], accounts[1], [0, 1], [1, 1], "0x", { 'from': accounts[0]} );
    truffleAssert.eventEmitted(transferBatch, 'TransferBatch', (ev) => {
      return ev.to == accounts[1] && ev.values.toString() === '1,1';
    }, 'TransferBatch should be emitted with correct parameters');
    assert.notEqual(transferBatch.tx, '');
    assert.equal(transferBatch.tx.length, 66);
  });
 
  it("should owner have 1 NFT on ACC 0 and ACC 1. balanceOfBatch", async ()=> {
    const balance = await instance.balanceOfBatch([accounts[0], accounts[1]], [0, 0]);
    assert.equal(balance.toString(), '1,2');
  });

  it("should try to makeSellOffer of NFT for 0", async () => {
    await expectRevert(
      instance.makeSellOffer('0', '0', '1'), "Price must be at least 1 wei."
    );
  });
  it("should try to makeSellOffer for no NFT", async () => {
    await expectRevert(
      instance.makeSellOffer('0', '10', '0'), "You can't sell 0 tokens -- Reason given: You can't sell 0 tokens."
    );
  });
  it("should try to makeSellOffer for more NFT than you have", async () => {
    await expectRevert(
      instance.makeSellOffer('0', '10', '100'), "You don't have sufficient balance -- Reason given: You don't have sufficient balance."
    );
  });
  it("should try to makeSellOffer from other account with no NFT", async () => {
    await expectRevert(
      instance.makeSellOffer('0', '10', '1', { 'from': accounts[3]}), "You don't have any token -- Reason given: You don't have any token."
    );
  });

  it("should makeSellOffer of NFT", async () => {
    await instance.makeSellOffer('0', '100000000000000000', '1');
  });

  it("should cancelSellOffer of NFT, but you aren't the seller", async () => {
    await expectRevert(
      instance.cancelSellOffer('0', { 'from': accounts[3]}), "You aren't the token seller -- Reason given: You aren't the token seller."
    );
  });
  
  it("should cancelSellOffer of NFT", async () => {
    await instance.cancelSellOffer('0');
  });
  
  it("should get balance of contract", async () => {
    let balance = await instance.balance();
    assert.equal(balance.toString(), '0');
  });

  it("should makeSellOffer of NFT", async () => {
    let event_sell_offer = await instance.makeSellOffer('0', '100000000000000000', '1');
    truffleAssert.eventEmitted(event_sell_offer, 'NewSellOffer', (ev) => {
      return ev.seller == accounts[0] && ev.amount.toString() === '1';
    }, 'NewSellOffer should be emitted with correct parameters');
  });

  it("should fetch all sell offers", async () => {
    let itens = await instance.fetchMarketItems();
    assert.equal(itens.length, 2);
  });

  it("should try to buyToken for less than the price", async () => {
    await expectRevert(
      instance.buyToken('1', { 'from': accounts[3], 'value': '100' }), "You can't send less than the offer price! -- Reason given: You can't send less than the offer price!"
    );
  });

  it("should buyToken from seller", async () => {
    await instance.buyToken('1', { 'from': accounts[3], 'value': '100000000000000000' });
    let offers = await instance.activeSellOffers('1');
    assert.equal(offers.createTime.toString(), 0);
  });

  it("should withdrawFunds funds", async () => {
    let balance = await instance.balance();
    assert.equal(balance.toString(), '2000000000000000');
    await instance.withdrawFunds();
    let balance2 = await instance.balance();
    assert.equal(balance2.toString(), '0');
  });


});