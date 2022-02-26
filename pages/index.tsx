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
import { Address } from "@web3-ui/components";
import React, { useEffect, useState } from "react";
import { POLYGON_MUMBAI_CHAIN_ID, TOTAL_NUMBER_OF_NFTS, web3 } from "../utils";
import themes from "../utils/themes";
import loadContract from "../web3/loadContract";
import { useAsyncFn } from "react-use";
import NftModal from "../components/showNFT";
import mintNFT from "../web3/contractMethods/mint";
import Countdown from "react-countdown";
import { useWallet } from "@web3-ui/hooks";
import switchNetworkMumbai from "../helpers/switchChain";
import init from "../helpers/init";
import ConnectButton from "../components/ConnectButton";
import { useRouter } from "next/router";

const Completionist = () => <span>Minting opened!</span>;

const IndexPage = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tokenid, setTokenid] = useState();
  const [showModal, setshowModal] = useState(false);
  const router = useRouter();
  // const [userMinted, SetuserMinted] = useState(false)
  const [state, doFetch] = useAsyncFn(async () => {
    if ((await web3.eth.getChainId()) != POLYGON_MUMBAI_CHAIN_ID) {
      // check if we're not on the right chain
      switchNetworkMumbai()
        .then(async () => {
          // return await init();
          //if successfully switched, reload and reinitialize
          router.reload();
        })
        .catch(() => {
          // if failed, prompt user
          alert("Please switch chain to Polygon");
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

  return (
    <Center h="100vh">
      <Box h="100%" w={["45%", "45%", "50%", "50%", "55%", "60%"]}>
        <Image
          h="100%"
          w="100%"
          src="https://hhuzrwzphweoxbywzhhv.supabase.co/storage/v1/object/public/dao-images/daos/351969574104727552.png"
        />
      </Box>
      <Flex
        bg={themes.colors.green}
        h="100%"
        flexDir="column"
        w={["55%", "55%", "50%", "50%", "45%", "40%"]}
      >
        <Center>
          <Link isExternal href="http://anuradao.finance">
            <Center
              color="white"
              border="1px solid gray"
              bg="gray.800"
              borderRadius="50%"
              p={3}
              mt={5}
              ml={10}
              w="110px"
              h="90px"
            >
              <Image
                w="100%"
                h="100%"
                src="https://hhuzrwzphweoxbywzhhv.supabase.in/storage/v1/object/public/dao-images/daos/646417780576616458.png"
              />
            </Center>
          </Link>
          <Heading
            ml={3}
            fontSize="5xl"
            bgGradient="linear(to-r, orange.300,red.500, green.700)"
            bgClip="text"
            mt={5}
          >
            Anura DigitalFrogs
          </Heading>

          <ConnectButton state={state} />
        </Center>
        <Center flexDir="column" gap={5} h="100%">
          <Heading color="white">
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
            w={["55%", "55%", "55%", "70%", "70%", "55%"]}
            borderRadius={10}
            flexDir="column"
          >
            <Center w="100%" gap={5} justifyContent="space-between">
              <Text fontWeight="bold" fontSize="2xl">
                Remaining:
                <br />
                <span style={{ fontWeight: "500" }}>
                  {TOTAL_NUMBER_OF_NFTS - Number(state.value?.totalNFTsMinted)}
                </span>
              </Text>
              <Text fontWeight="bold" fontSize="2xl">
                Public price:
                <br />
                <span style={{ fontWeight: "500" }}>0 AVAX</span>
              </Text>
              <Button _hover={{ cursor: "default" }} _focus={{}} _active={{}}>
                Live
              </Button>
            </Center>
            <Button
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
          {(showModal || state.value?.hasUserMinted.hasMinted) && (
            <Button onClick={onOpen}>Show my NFT</Button>
          )}
        </Center>
        <Center justifyContent="flex-end" fontSize="xl" p={7} color="white">
          &copy; Copyright 2022
        </Center>
      </Flex>
    </Center>
  );
};

export default IndexPage;
