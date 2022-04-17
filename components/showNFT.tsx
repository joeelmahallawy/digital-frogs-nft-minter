import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IPFS_BASE_URI } from "../utils";
// import Image from "next/image";

const NftModal = ({ tokenID, isOpen, onClose }) => {
  console.log("TOKEN:", tokenID);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Digital Frog #{tokenID}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* FIXME: account for when wallet doesn't haev NFT */}
            {Number(tokenID) > 0 && (
              <Image
                // src={require(`../Anura_NFT/${tokenID}.png`)}
                src={`/${tokenID}.png`}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default NftModal;
