import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const TOTAL_NUMBER_OF_NFTS = 500;
// 100 OG
// 400 Not OG
const POLYGON_MUMBAI_CHAIN_ID = 137;
const IPFS_BASE_URI =
  "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck";

export { web3, TOTAL_NUMBER_OF_NFTS, POLYGON_MUMBAI_CHAIN_ID, IPFS_BASE_URI };
