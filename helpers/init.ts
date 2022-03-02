import { web3 } from "../utils";
import loadContract from "../web3/loadContract";

const init = async () => {
  const wallet = await web3.eth.requestAccounts();
  const { totalNFTsMinted, contract } = await loadContract();
  const isWhiteListed = await contract.methods.whiteList(wallet[0]).call();
  const hasUserMinted: { hasMinted: boolean; tokenID: string } =
    await contract.methods.usersMinted(wallet[0]).call();
  return {
    contract,
    wallet: wallet[0],
    totalNFTsMinted,
    hasUserMinted,
    isWhiteListed,
  };
};

export default init;
