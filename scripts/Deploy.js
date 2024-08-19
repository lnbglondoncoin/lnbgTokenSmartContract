const { ethers } = require("hardhat");

async function main() {
  [Owner] = await ethers.getSigners();

  const lnbgCoin = await ethers.getContractFactory("LnbgLondonCoin");

  const lnbgToken = await lnbgCoin.deploy();

  await lnbgToken.deployed();

  console.log("lnbg Token contract address", lnbgToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
