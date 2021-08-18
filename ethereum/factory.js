import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x7e28E91a1E18B5116eA2A8aA3144ec0871B6c29C"
);

export default instance;
