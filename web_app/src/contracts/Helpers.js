import Web3 from 'web3';
import GoBlockchain from '../contracts/GoBlockchain';

export default async function loadContract() {
    let ethereum = window['ethereum']
    ethereum.on('chainChanged', (_chainId) => window.location.reload());
    await ethereum.request({ method: 'eth_requestAccounts' });
    let accounts = await ethereum.request({ method: 'eth_accounts' });
    let newWeb3 = window['web3']
    const web3 = new Web3(newWeb3.currentProvider)
    await GoBlockchain.setProvider(web3.currentProvider)
    let deployed = await GoBlockchain.deployed()
    const contract_base = await new web3.eth.Contract(deployed.abi, deployed.address)
    let payload = {
        accounts: accounts.length ? accounts[0] : '',
        contract: contract_base
    };
    return payload;
}