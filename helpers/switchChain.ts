import { web3 } from "../utils";

const switchNetworkMumbai = async () => {
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x13881" }],
  });

  //   if (error.code === 4902) {
  //     try {
  //       await window.ethereum.request({
  //         method: "wallet_addEthereumChain",
  //         params: [
  //           {
  //             chainId: "0x13881",
  //             chainName: "Mumbai",
  //             rpcUrls: ["https://rpc-mumbai.matic.today"],
  //             nativeCurrency: {
  //               name: "Matic",
  //               symbol: "Matic",
  //               decimals: 18,
  //             },
  //             blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com"],
  //           },
  //         ],
  //       });
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   }
};

export default switchNetworkMumbai;
