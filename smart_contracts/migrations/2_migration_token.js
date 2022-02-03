const GoBlockchain = artifacts.require("GoBlockchain");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(GoBlockchain, 2);
};
