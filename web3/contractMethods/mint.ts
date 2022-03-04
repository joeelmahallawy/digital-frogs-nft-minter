import { web3 } from "../../utils";

const mintNFT = async (setTokenid, state, toast, onOpen, setshowModal) => {
  const gasLimit = await web3.eth.getBlock("latest");
  return state.value?.contract.methods
    .safeMint(state.value?.wallet)
    .send({
      from: state.value?.wallet,
      // gasLimit: 500000000000000,
      gasPrice: 9200000000,
      // 120000000
      // TODO:
      // gasLimit: gasLimit.gasLimit,
      gas: 5000000,
    })
    .then((val) => {
      const tokenID = val.events.Transfer.returnValues.tokenId;
      setTokenid(tokenID);
      onOpen();
      setshowModal(true);
      return toast({
        title: "Successfully minted!",
        description: `Tx hash: ${val.transactionHash}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    })
    .catch((err) => alert(err.message));
};

export default mintNFT;
