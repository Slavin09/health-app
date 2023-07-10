/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
const SHARDEUM_RPC = process.env.SHARDEUM_RPC;
const privateKey = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    shardeum: {
      url: SHARDEUM_RPC,
      accounts: [privateKey],
      chainId: 8080,
    }
  },
};
