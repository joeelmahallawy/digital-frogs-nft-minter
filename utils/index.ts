import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const TOTAL_NUMBER_OF_NFTS = 500;
const POLYGON_MUMBAI_CHAIN_ID = 137;

export { web3, TOTAL_NUMBER_OF_NFTS, POLYGON_MUMBAI_CHAIN_ID };
