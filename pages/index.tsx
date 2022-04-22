import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  useToast,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import OGFROG from "../images/OG_FROG.png";
import React, { useEffect, useState } from "react";
import { POLYGON_MUMBAI_CHAIN_ID, TOTAL_NUMBER_OF_NFTS, web3 } from "../utils";
import themes from "../utils/themes";
import { useAsyncFn } from "react-use";
import NftModal from "../components/showNFT";
import mintNFT from "../web3/contractMethods/mint";
import Countdown from "react-countdown";
import switchNetworkPolygon from "../helpers/switchChain";
import init from "../helpers/init";
import ConnectButton from "../components/ConnectButton";
import { useRouter } from "next/router";
import NftRarityComponent from "../components/NftRarity";

const Completionist = () => <span>Minting opened!</span>;

const IndexPage = () => {
  const [imageURL, setimageURL] = useState();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tokenid, setTokenid] = useState();
  const [showModal, setshowModal] = useState(false);
  const router = useRouter();

  const [state, doFetch] = useAsyncFn(async () => {
    if ((await web3.eth.getChainId()) != POLYGON_MUMBAI_CHAIN_ID) {
      // check if we're not on the right chain
      switchNetworkPolygon()
        .then(async () => {
          // return await init();
          //if successfully switched, reload and reinitialize variables
          router.reload();
        })
        .catch(async () => {
          try {
            await switchNetworkPolygon();
          } catch (err) {
            // if failed, prompt user
            alert(err.message);
          }
        });
    } else {
      if (!window.ethereum) {
        // if metamask doesn't exist, prompt user
        alert("Please install Metamask");
        return null;
      }
      // get web3 data
      return await init();
    }
  }, []);

  useEffect(() => {
    doFetch();
  }, []);

  // (async () => {
  //   console.log(

  //   );
  // })();

  return (
    <Center h="100vh">
      {/* <Box
        h="100%"
        w={["45%", "45%", "50%", "50%", "55%", "60%"]}
      >
        <Image
          objectFit="contain"
          h="100%"
          w="100%"
          src="https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/1.png"
        />
      </Box> */}
      <Flex
        // bg={themes.colors.green}
        // bgImage={OGFROG.src}
        bg="linear-gradient(182.27deg, #061D1E 40%, #074223 100%)"
        h="100%"
        flexDir="column"
        w="100%"
        // w={["55%", "55%", "50%", "50%", "45%", "40%"]}
      >
        <Center>
          <Center
            color="white"
            border="1px solid gray"
            bg="gray.800"
            borderRadius="50%"
            p={3}
            mt={5}
            ml={5}
            w={["110px", "110px", "60px", "80px", "80px", "110px"]}
          >
            <Link isExternal href="http://anuradao.finance">
              <Image
                w="100%"
                h="100%"
                src="https://hhuzrwzphweoxbywzhhv.supabase.in/storage/v1/object/public/dao-images/daos/646417780576616458.png"
              />
            </Link>
          </Center>
          <Heading
            ml={3}
            fontSize={["xl", "xl", "xl", "2xl", "2xl", "5xl"]}
            bgGradient="linear(to-r, orange.300,red.500, green.700)"
            bgClip="text"
            mt={5}
          >
            Anura DigitalFrogs
          </Heading>

          <ConnectButton state={state} />
        </Center>
        <Center w="100%" flexDir="column" gap={5} h="100%">
          <Heading color="white" fontSize="1.75rem">
            Countdown clock:{" "}
            <span style={{ fontWeight: "500", color: "lightgreen" }}>
              <Countdown date={new Date("3/1/22")}>
                <Completionist />
              </Countdown>
            </span>
          </Heading>
          <Center
            color="black"
            bg="gray.500"
            p={5}
            pt={5}
            w={["65%", "60%", "60%", "60%", "50%", "40%"]}
            borderRadius={10}
            flexDir="column"
          >
            <Center
              display={["block", "block", "flex", "flex", "flex"]}
              w="100%"
              gap={5}
              justifyContent="space-between"
            >
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="xl"
                mb={[5, 4, 4, 2, 0]}
              >
                Remaining:
                <br />
                <span style={{ fontWeight: "500" }}>
                  {/* {state.value?.isWhiteListed
                    ? TOTAL_NUMBER_OF_NFTS -
                      Number(state.value?.totalNFTsMinted) -
                      25
                    : TOTAL_NUMBER_OF_NFTS -
                      Number(state.value?.totalNFTsMinted) -
                      68} */}
                  {TOTAL_NUMBER_OF_NFTS -
                    Number(state.value?.totalNFTsMinted) -
                    68}
                </span>
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="xl"
                mb={[5, 4, 4, 2, 0]}
              >
                Public price:
                <br />
                <span style={{ fontWeight: "500" }}>0 MATIC</span>
              </Text>
              <Center flexDir="column">
                <Button _hover={{ cursor: "default" }} _focus={{}} _active={{}}>
                  Live
                </Button>
                <Text fontWeight="500">
                  You are {state.value?.isWhiteListed ? null : "not"} an OG
                </Text>
              </Center>
            </Center>
            <Button
              isDisabled={
                TOTAL_NUMBER_OF_NFTS -
                  Number(state.value?.totalNFTsMinted) -
                  68 ==
                0

                // state.value?.isWhiteListed
                //   ? TOTAL_NUMBER_OF_NFTS -
                //       Number(state.value?.totalNFTsMinted) -
                //       25 ==
                //     0
                //   : TOTAL_NUMBER_OF_NFTS -
                //       Number(state.value?.totalNFTsMinted) -
                //       68 ==
                //     0
              }
              onClick={async () => {
                if (state.value?.hasUserMinted.hasMinted || showModal) {
                  return toast({
                    title: "You have already minted!",
                    description:
                      "Every member can only mint 1 Digital Frog NFT",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  mintNFT(setTokenid, state, toast, onOpen, setshowModal);
                }
              }}
              // isDisabled={new Date().getTime() < new Date("3/1/22").getTime()}
              boxShadow="1px 2px 5px black"
              w="100%"
              // colorScheme="twitter"
              bg="#1da1f2"
              _hover={{ bg: "#0e83cb" }}
              _active={{ bg: "#0469a7" }}
              mt={5}
            >
              Mint
            </Button>
            <NftModal
              isOpen={isOpen}
              onClose={onClose}
              tokenID={tokenid || state.value?.hasUserMinted.tokenID}
            />
          </Center>
          <Center gap={10}>
            {(showModal || state.value?.hasUserMinted.hasMinted) && (
              <Button onClick={onOpen}>Show my NFT</Button>
            )}
            <NftRarityComponent />
          </Center>
        </Center>
        <Center justifyContent="flex-end" fontSize="xl" p={7} color="white">
          &copy; Copyright 2022
        </Center>
      </Flex>
    </Center>
  );
};
export default IndexPage;
