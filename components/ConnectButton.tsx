import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Address } from "@web3-ui/components";

const ConnectButton = ({ state }) => {
  return state.value?.wallet ? (
    <Flex ml="auto" mt="2.5%" mr="2.5%">
      <Button
        // p="0.75rem"
        // fontSize="0.75rem"
        variant="outline"
        borderTopLeftRadius={5}
        borderBottomLeftRadius={5}
        borderRadius={0}
        color="white"
        _focus={{}}
        _hover={{ cursor: "default" }}
        _active={{}}
      >
        <Address value={state.value?.wallet} shortened copiable />
      </Button>
      <Button
        // p="0.75rem"
        // fontSize="0.75rem"
        borderRadius={0}
        borderTopEndRadius={5}
        borderBottomEndRadius={5}
        colorScheme="green"
        color="white"
        _hover={{ cursor: "default" }}
        _active={{}}
      >
        Connected
      </Button>
    </Flex>
  ) : (
    <Button
      variant="outline"
      colorScheme="gray"
      color="white"
      _hover={{ bg: "gray.500" }}
      _active={{ bg: "gray.600" }}
      ml="auto"
      mt="5%"
      mr="5%"
      onClick={async () => {
        window.ethereum.request({ method: "eth_requestAccounts" });
      }}
    >
      Connect wallet
    </Button>
  );
};
export default ConnectButton;
