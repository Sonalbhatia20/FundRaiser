const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "duty cloth seed weapon staff crack trophy buddy relief reunion because cute",

  "https://rinkeby.infura.io/v3/19165a65da2f4ff5af99bf311616c5a5"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({
      gas: "5000000",
      gasPrice: web3.utils.toWei("2", "gwei"),
      from: accounts[0],
    });

  console.log("Contract deployed to", result.options.address);
};
deploy();
