const hre = require("hardhat");

async function main() {
    const GoBlockchain = await hre.ethers.getContractFactory("GoBlockchain");
    const nftMarket = await GoBlockchain.deploy(5);
    await nftMarket.deployed();
    console.log("nftMarket deployed to:", nftMarket.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

