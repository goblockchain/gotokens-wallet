// hardhat.config.js

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.YOUR_PROJECT_ID}`,
      accounts: [process.env.PRIV_KEY]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.YOUR_PROJECT_ID}`,
      accounts: [process.env.PRIV_KEY]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.YOUR_PROJECT_ID}`,
      accounts: [process.env.PRIV_KEY]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.YOUR_PROJECT_ID}`,
      accounts: [process.env.PRIV_KEY]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.YOUR_PROJECT_ID}`,
      accounts: [process.env.PRIV_KEY]
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.MY_API_KEY
  },
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};