import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4646415C4291b7cfb54Cd33a3C688908D78C8f1B"
);

export default instance;
