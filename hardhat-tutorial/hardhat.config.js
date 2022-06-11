require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};