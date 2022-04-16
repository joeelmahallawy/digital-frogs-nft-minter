import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  Td,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const NftRarityComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [image, setimage] = useState("");
  const [details, setdetails] = useState("");
  const [rank, setrank] = useState("");
  const [attributes, setattributes] = useState([]);
  const [tokenID, settokenID] = useState("");
  const tokenSearch = useRef();
  const [hasSearched, sethasSearched] = useState(false);
  return (
    <>
      <Button onClick={onOpen}>NFT Rarity Calculator</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          sethasSearched(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rarity Calculator</ModalHeader>
          <form onSubmit={(e) => e.preventDefault()}>
            <Center flexDir="column">
              <FormControl p={3} isRequired>
                <FormLabel>Enter your token ID here</FormLabel>

                <NumberInput ml="auto">
                  <NumberInputField placeholder="Token ID" ref={tokenSearch} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button
                type="submit"
                ml="auto"
                mr={3}
                onClick={() => {
                  if (
                    // @ts-expect-error
                    tokenSearch.current.value > 400 ||
                    // @ts-expect-error
                    tokenSearch.current.value < 1
                  ) {
                    // @ts-expect-error
                    alert(`There is no frog #${tokenSearch.current.value}`);
                  } else {
                    sethasSearched(true);
                    loadDetails(
                      //   @ts-expect-error
                      tokenSearch.current.value,
                      setimage,
                      setrank,
                      setdetails,
                      setattributes
                    );
                  }
                }}
              >
                Find rarity
              </Button>
            </Center>
          </form>

          <ModalCloseButton />
          <ModalBody pb={6}>
            <div className="flex-container">
              <h2 id="details">{details}</h2>
              <h2 id="rank">{rank}</h2>
              <div>
                {hasSearched && (
                  <Image
                    // @ts-expect-error
                    src={require(`../Anura_NFT/${tokenSearch.current.value}.png`)}
                  />
                )}
                <Table size="md">
                  {attributes.map((att, i) => {
                    return (
                      <Tr key={i}>
                        <Td>
                          <p style={{ fontWeight: "bold" }}>
                            {att.trait_type}:{" "}
                          </p>
                        </Td>
                        <Td>
                          <p> {att.value}</p>
                        </Td>
                        {/* </Flex> */}
                      </Tr>
                    );
                  })}
                </Table>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default NftRarityComponent;

const traitDenom = 400;

const metadata = [
  {
    name: "Digital Frog NFT's #1",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/1.png",
    dna: "2c57a0e6863c3430630be3285287379d90ac0666",
    edition: 1,
    date: 1646062635762,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #2",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/2.png",
    dna: "1d6943953b4f400ba3db98d9ba5f5992a929ce34",
    edition: 2,
    date: 1646062636275,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #3",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/3.png",
    dna: "e94c719e3f7fea8c58ac93037c4a81a8be502e5a",
    edition: 3,
    date: 1646062636776,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #4",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/4.png",
    dna: "077fe47faadb0bba966a9de786d552442f54797b",
    edition: 4,
    date: 1646062637419,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #5",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/5.png",
    dna: "caca7b21e74bde7fe030637b6d0333db40cda1f8",
    edition: 5,
    date: 1646062637918,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #6",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/6.png",
    dna: "1fe3274fbed1193de017e769d8bc72ef58a2fa9b",
    edition: 6,
    date: 1646062638500,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #7",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/7.png",
    dna: "474748b7f8de72b2e95581e0e8e2d4a3965922b0",
    edition: 7,
    date: 1646062638974,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #8",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/8.png",
    dna: "7f07a7281d74a03c60cf29ebf6b73f48d93eeb7a",
    edition: 8,
    date: 1646062639463,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #9",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/9.png",
    dna: "ff1c0757fb76597d5fecfb5685a8f5a1935f5a67",
    edition: 9,
    date: 1646062639896,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #10",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/10.png",
    dna: "e64c634b92ec4552518d1b28bc19e22a9b9d287c",
    edition: 10,
    date: 1646062640450,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #11",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/11.png",
    dna: "699e23f3a658806f5c184659634884b481f2e61a",
    edition: 11,
    date: 1646062640932,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #12",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/12.png",
    dna: "6b75f9964cd411cdab0fab59cc586077925a0221",
    edition: 12,
    date: 1646062641431,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #13",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/13.png",
    dna: "412fb787d20eaffcf00adeabc1ee1120447e2a9c",
    edition: 13,
    date: 1646062642017,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #14",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/14.png",
    dna: "989c7207394f65d96d7e7e234a0cec51c5663f49",
    edition: 14,
    date: 1646062642509,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #15",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/15.png",
    dna: "9581f5afee6b8e5b0a3171062026e53ecb8f4394",
    edition: 15,
    date: 1646062642984,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #16",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/16.png",
    dna: "b419714dc29b442419ee2a6d4983a17de83b9585",
    edition: 16,
    date: 1646062643502,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #17",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/17.png",
    dna: "97f9391aea06998b4b7239bc6f6fef094f9a5d10",
    edition: 17,
    date: 1646062644019,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #18",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/18.png",
    dna: "0d267187f60cb31cc8bbbe0a7363f05fa187905c",
    edition: 18,
    date: 1646062644462,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #19",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/19.png",
    dna: "82b7ca634b045a0661e25e22b707e8b9e5a707e3",
    edition: 19,
    date: 1646062644969,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #20",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/20.png",
    dna: "936573671a2d9f49e55be715a4bc4cbc10589be8",
    edition: 20,
    date: 1646062645504,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #21",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/21.png",
    dna: "35b1753a8c508eaae90a064b14e1f45f62c9ed5e",
    edition: 21,
    date: 1646062646082,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #22",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/22.png",
    dna: "a05e0ecd23f59b42f47169f1b600a40ac2459bc4",
    edition: 22,
    date: 1646062646634,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #23",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/23.png",
    dna: "1b7cfe0e3434adf31fb069c024e44e83a80318ae",
    edition: 23,
    date: 1646062647176,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #24",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/24.png",
    dna: "58a061c702c68b076fa619670d604db544a73029",
    edition: 24,
    date: 1646062647698,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #25",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/25.png",
    dna: "df1fbde4e98bf2f618eea9b509e3cdfafcec13e7",
    edition: 25,
    date: 1646062648282,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #26",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/26.png",
    dna: "93e93f74eef9d52d4d80d9b71a47273d4079a7be",
    edition: 26,
    date: 1646062648649,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #27",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/27.png",
    dna: "33b557e84166d192575683eee29d63f75c3d351f",
    edition: 27,
    date: 1646062649118,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #28",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/28.png",
    dna: "292e95f47925d7aba8e253252e723df5404172c6",
    edition: 28,
    date: 1646062649671,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #29",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/29.png",
    dna: "ee3699721669329d2b6f0cedf6a14c943263b760",
    edition: 29,
    date: 1646062650562,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #30",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/30.png",
    dna: "440279cd4786c0765cd4a6e4ab40a76796f48099",
    edition: 30,
    date: 1646062651200,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #31",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/31.png",
    dna: "50a24d31d3a17a5a785485344397524a1efc2a48",
    edition: 31,
    date: 1646062651644,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #32",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/32.png",
    dna: "a84f5d6507b473f4424c53cbd1a7f73ba1f6e9fe",
    edition: 32,
    date: 1646062652116,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #33",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/33.png",
    dna: "3859dd69fd6f99076f97cbe844e62c26e6ea853a",
    edition: 33,
    date: 1646062652679,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #34",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/34.png",
    dna: "fb1ce6e069751db35f077265dc1091fb2502dd4e",
    edition: 34,
    date: 1646062653160,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #35",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/35.png",
    dna: "dd9eb5508f201f30818dba1c68ffb6224c062f9b",
    edition: 35,
    date: 1646062654044,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #36",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/36.png",
    dna: "2c33ca9737d1d5b67dae535c3e31a641d4820725",
    edition: 36,
    date: 1646062654557,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #37",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/37.png",
    dna: "4bf3e107628fbe402950603023691f2bec85d868",
    edition: 37,
    date: 1646062655009,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #38",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/38.png",
    dna: "deeb6783f6cad2f07498c7e43ed5f338ed4228c2",
    edition: 38,
    date: 1646062655508,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #39",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/39.png",
    dna: "7e60870b0f71ac6075bd5e125b02fe6c8f20ee63",
    edition: 39,
    date: 1646062656002,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #40",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/40.png",
    dna: "7b1af6b21d9761c53873ebdfae917303d224cd81",
    edition: 40,
    date: 1646062656399,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #41",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/41.png",
    dna: "6c2799bd076630822bb725ed4389a05dddd67fd0",
    edition: 41,
    date: 1646062656943,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #42",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/42.png",
    dna: "ff9d04e6faaa9b0eb0ecb5176c39e759d2213549",
    edition: 42,
    date: 1646062657374,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #43",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/43.png",
    dna: "84d8b61a265e5ac845bd213ea1c33b6dda11ae5b",
    edition: 43,
    date: 1646062657925,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #44",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/44.png",
    dna: "c3bc8e72247c4c8b3f5e7201cafd3b4e556bed53",
    edition: 44,
    date: 1646062658833,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #45",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/45.png",
    dna: "f363c1e6c70dcc4e90e5bfd8ebdc19baef5f26b6",
    edition: 45,
    date: 1646062659297,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #46",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/46.png",
    dna: "6472ce77ea1f2c22497307560ba32a57bd6e05a9",
    edition: 46,
    date: 1646062660193,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #47",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/47.png",
    dna: "b2e7a84add1d9739e9e37a56afb3ee844f9e1db9",
    edition: 47,
    date: 1646062660767,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #48",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/48.png",
    dna: "57b96ef769406f8d1901a7afffff370238f22fe7",
    edition: 48,
    date: 1646062661270,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #49",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/49.png",
    dna: "c295257056f53ceec930e663100a225f27f002ad",
    edition: 49,
    date: 1646062661722,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #50",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/50.png",
    dna: "caa0c4afe18b9c16536336f04cc93ba08f1d2a18",
    edition: 50,
    date: 1646062662198,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #51",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/51.png",
    dna: "bea959d642e8ef244dd318f603acf6eee5f490df",
    edition: 51,
    date: 1646062662712,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #52",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/52.png",
    dna: "fb18a8efde2d7912d8ea99b52aa0e2c31cf3bda4",
    edition: 52,
    date: 1646062663236,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #53",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/53.png",
    dna: "5e9d8b4a44932a54743eb4e98e9e0a437d00b89a",
    edition: 53,
    date: 1646062663777,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #54",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/54.png",
    dna: "e7e4de18b5cbd9a075bdcea93ed3943297a1bbe3",
    edition: 54,
    date: 1646062664387,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #55",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/55.png",
    dna: "d8b49e29f463de23bf82ac96efcc80fcd51a4b1d",
    edition: 55,
    date: 1646062664878,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #56",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/56.png",
    dna: "76a8366e0621d5ce2c31e640649a5b14bd357603",
    edition: 56,
    date: 1646062665383,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #57",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/57.png",
    dna: "36b5b548cf3c61baab5672104f58e4975beb7361",
    edition: 57,
    date: 1646062665854,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #58",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/58.png",
    dna: "dd282bffefb750917c231f53967c7b33841b2f3c",
    edition: 58,
    date: 1646062666369,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #59",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/59.png",
    dna: "86e77d3f3844bfe151925af6a929ab76ef53a5eb",
    edition: 59,
    date: 1646062666851,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #60",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/60.png",
    dna: "9907c2b5bc1c6ff26a78b0e2afa859ab3296ddc2",
    edition: 60,
    date: 1646062667366,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #61",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/61.png",
    dna: "f5b00d8b6aff8a97d87652aa16d0c5813cd02435",
    edition: 61,
    date: 1646062667843,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #62",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/62.png",
    dna: "4570720175b3cc34568c8e7117c74bca1e1985d1",
    edition: 62,
    date: 1646062668365,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #63",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/63.png",
    dna: "40bbe1a7d45ce6f380519b82c999a49a93470935",
    edition: 63,
    date: 1646062668834,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #64",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/64.png",
    dna: "493db99d1f5e108a53a64b52f7e1ec1011fb9c43",
    edition: 64,
    date: 1646062669333,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #65",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/65.png",
    dna: "6df667ae22fcbd82a14dde815bbded30810c65cd",
    edition: 65,
    date: 1646062669812,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #66",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/66.png",
    dna: "2ea3902cde8dadca2051112fd4b9b46948bb2735",
    edition: 66,
    date: 1646062670295,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #67",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/67.png",
    dna: "767ca1bb9fa267d53155ecb8045de22a8ea65957",
    edition: 67,
    date: 1646062670792,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #68",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/68.png",
    dna: "dfe8941590adb2fe5ff81c92d806af91b022201a",
    edition: 68,
    date: 1646062671274,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #69",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/69.png",
    dna: "231d14adb6ee20f6b0e4d409da6f19e17fb59e34",
    edition: 69,
    date: 1646062671674,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #70",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/70.png",
    dna: "6d2c9f0d256c33a2c6271d9bddff602b67753d74",
    edition: 70,
    date: 1646062672219,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #71",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/71.png",
    dna: "dbd4f3cebc39d0eb0a69c16adef1e0f83a984895",
    edition: 71,
    date: 1646062672807,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #72",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/72.png",
    dna: "2bacaaca5d7bfdd58cf61960ddc534172a5e118f",
    edition: 72,
    date: 1646062673278,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #73",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/73.png",
    dna: "29fb0d4b7a14022b600cd730b191975b8cf09b65",
    edition: 73,
    date: 1646062674141,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #74",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/74.png",
    dna: "e466ed70293a2d5cc9aad38ed5540a508aefeb60",
    edition: 74,
    date: 1646062674687,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #75",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/75.png",
    dna: "01f1d2a71b1c2a287f3241bd9843ce7e56140e69",
    edition: 75,
    date: 1646062675212,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #76",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/76.png",
    dna: "85ca662b569d9b93eaff4b0db6f1a10582fb7be9",
    edition: 76,
    date: 1646062676065,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #77",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/77.png",
    dna: "1b5e60bef25be962c51b20b8839d99da880d0578",
    edition: 77,
    date: 1646062676666,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #78",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/78.png",
    dna: "e1d8c34650aa1a9619e436ab3de63f9a05e6e1d4",
    edition: 78,
    date: 1646062677171,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #79",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/79.png",
    dna: "2e172ac3a9144dccaf8df0bd5d14f0ec9b0c7ad2",
    edition: 79,
    date: 1646062677641,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #80",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/80.png",
    dna: "28240f11f2f196ae7039c963f14cddd51f7a6992",
    edition: 80,
    date: 1646062678279,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #81",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/81.png",
    dna: "cd561718a3ee9d2dbb1b2ad7735a451920de5dde",
    edition: 81,
    date: 1646062678748,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #82",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/82.png",
    dna: "d38b370580ece94000c5ad3e8dd0969b7bd6b6bc",
    edition: 82,
    date: 1646062679289,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #83",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/83.png",
    dna: "b47f3a75ff45e4216e6d5e8a285c9f08c6c0fb3f",
    edition: 83,
    date: 1646062679814,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #84",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/84.png",
    dna: "66411dbe86eebf61932e2c2b47e5dcb88b2cc585",
    edition: 84,
    date: 1646062680395,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #85",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/85.png",
    dna: "0d73edb463772c957daf7f95da378789d649851e",
    edition: 85,
    date: 1646062680903,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #86",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/86.png",
    dna: "681ba3ff88b2901af92d5636f8772af93593544a",
    edition: 86,
    date: 1646062681515,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #87",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/87.png",
    dna: "6f58ad65fcc749ee6dade51018aad1c535c6b737",
    edition: 87,
    date: 1646062681959,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #88",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/88.png",
    dna: "e8a53e067ab16efc20934f5c35c9b224fe7deb5d",
    edition: 88,
    date: 1646062682451,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #89",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/89.png",
    dna: "7b5aa5bc6d28d74c29316864db5516d2f298295b",
    edition: 89,
    date: 1646062682939,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #90",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/90.png",
    dna: "8a9b47a8573b3135a3ed276bc1b55ba10843aac5",
    edition: 90,
    date: 1646062683365,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #91",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/91.png",
    dna: "6666ec0fad7dd5d8eeb5c0b199cc82ae6bd40380",
    edition: 91,
    date: 1646062683941,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #92",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/92.png",
    dna: "01965b44e4adc4ea7544f10e85dd5e79f437ef22",
    edition: 92,
    date: 1646062684464,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #93",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/93.png",
    dna: "77312c43d8dc5e2c8da56eb2eac21291e819769b",
    edition: 93,
    date: 1646062684994,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #94",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/94.png",
    dna: "224e9a47beae88e8c84a1f44ec5cb5bf4c4c1798",
    edition: 94,
    date: 1646062685385,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #95",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/95.png",
    dna: "a76a4378d37b5a94348d064fc295c860fdfc9c30",
    edition: 95,
    date: 1646062685908,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #96",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/96.png",
    dna: "c20615f481e7f181c781942398693f196c0dc8de",
    edition: 96,
    date: 1646062686425,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #97",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/97.png",
    dna: "bdb05c5628cb093b2d0cf41653b0ddd7b98ec47f",
    edition: 97,
    date: 1646062686857,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #98",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/98.png",
    dna: "320378587b9f88e91b0be18ee25f4218746d198a",
    edition: 98,
    date: 1646062687324,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #99",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/99.png",
    dna: "4c09914a775996cd428168be1a14ce993af79969",
    edition: 99,
    date: 1646062687854,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #100",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/100.png",
    dna: "2aea05604306a0ff6afdb3a78e0c2be1157d3176",
    edition: 100,
    date: 1646062688322,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Medal",
        value: "OGmedal",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #101",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/101.png",
    dna: "2ca34c5358a2c4207e826040e32a7dec1eef226c",
    edition: 101,
    date: 1646062688711,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #102",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/102.png",
    dna: "6e023c539c6f15eaedeff79a51c8d62ea833202b",
    edition: 102,
    date: 1646062689149,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #103",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/103.png",
    dna: "6bcb29489f1099a18fe0d52aaa4c6b446368cc0f",
    edition: 103,
    date: 1646062689645,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #104",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/104.png",
    dna: "29fed241ca7ac9dcd501c9c24010c1a4fb1d170c",
    edition: 104,
    date: 1646062690519,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #105",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/105.png",
    dna: "457e1b32dcd139afec46912ca055dad57164e1dd",
    edition: 105,
    date: 1646062691039,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #106",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/106.png",
    dna: "d6e2a9c47353718261ae3c9e1b1fe02df8a40407",
    edition: 106,
    date: 1646062691544,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #107",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/107.png",
    dna: "cc40812655c543003dee6720fcb1a27d03d1f9fb",
    edition: 107,
    date: 1646062691925,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #108",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/108.png",
    dna: "2d6eaa8714452fade6947aee84220687d155d144",
    edition: 108,
    date: 1646062692357,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #109",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/109.png",
    dna: "68a1bcdae2fef99c11235e52cfe9d6ee93dd80b0",
    edition: 109,
    date: 1646062692867,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #110",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/110.png",
    dna: "0306ec80712cd0dd8b15d0228c4770c0d46dfc50",
    edition: 110,
    date: 1646062693345,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #111",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/111.png",
    dna: "71e9936cf49ae0ed0c4ac2b9e754c6c1892d4918",
    edition: 111,
    date: 1646062693864,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #112",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/112.png",
    dna: "498214abe48987becb831b203deddedd73f7566d",
    edition: 112,
    date: 1646062694408,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #113",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/113.png",
    dna: "e8882f2d8649538caf8e81709c315d3eebe72d1b",
    edition: 113,
    date: 1646062695141,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #114",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/114.png",
    dna: "0e8bdf19f0dd289a58274c37444abd2b38a02f27",
    edition: 114,
    date: 1646062695634,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #115",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/115.png",
    dna: "bd9273cbeebd69d842bde158cdc2dcdb7a2cec64",
    edition: 115,
    date: 1646062696068,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #116",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/116.png",
    dna: "34c0bd56abea17670885ed721f6f91fadea03968",
    edition: 116,
    date: 1646062696553,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #117",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/117.png",
    dna: "bf490eb98944472134ae7dfb9bfc6411c0c9e688",
    edition: 117,
    date: 1646062697028,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #118",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/118.png",
    dna: "8a1267574c7897f9931cbf861a0abad29c453953",
    edition: 118,
    date: 1646062697487,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #119",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/119.png",
    dna: "418165d77bf7cc2a487d58f0d4c123ad1f8fba0d",
    edition: 119,
    date: 1646062697973,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #120",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/120.png",
    dna: "359a8302b5216cb2af3a3eb97a0090c7d2ea5179",
    edition: 120,
    date: 1646062698374,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #121",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/121.png",
    dna: "c13cdc9b46ee8388b99c05fc9a57287c3ddf7ce1",
    edition: 121,
    date: 1646062698964,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #122",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/122.png",
    dna: "7b5d7de2bc461d1a0e8de6d5b4f2d0bfbc24d58a",
    edition: 122,
    date: 1646062699376,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #123",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/123.png",
    dna: "7c001b9dc3978814cbfae77b5b9bc4fa1d3e3f63",
    edition: 123,
    date: 1646062699841,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #124",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/124.png",
    dna: "38529cc2bb3088bd95d0a671b7a1454abe10f64a",
    edition: 124,
    date: 1646062700384,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #125",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/125.png",
    dna: "0574114f4e067f8be467590bedf02875a8d7a53f",
    edition: 125,
    date: 1646062700889,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #126",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/126.png",
    dna: "5ce69a90eb64d06c75db32d6c7d5a2aeb984f1c3",
    edition: 126,
    date: 1646062701346,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #127",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/127.png",
    dna: "9054cc1ad33480bb63295d1713b899be6390e9b2",
    edition: 127,
    date: 1646062701738,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #128",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/128.png",
    dna: "a0fac499042475a89c4af275c25f36ae3309f271",
    edition: 128,
    date: 1646062702537,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #129",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/129.png",
    dna: "25998b00e45a44935e019d55347951bbd6c04217",
    edition: 129,
    date: 1646062702919,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #130",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/130.png",
    dna: "add32a5e92c3ffe96c8f9d2c4e26bf065c0237aa",
    edition: 130,
    date: 1646062703307,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #131",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/131.png",
    dna: "4d68892ba99cf7a5aab4570a4e615eb8b9038e18",
    edition: 131,
    date: 1646062703775,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #132",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/132.png",
    dna: "5688a8f79b37da38d097dc003f79f7060f958185",
    edition: 132,
    date: 1646062704273,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #133",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/133.png",
    dna: "5677f38f7bb3a7234166c3ff4c9d177f3ea851d4",
    edition: 133,
    date: 1646062704648,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #134",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/134.png",
    dna: "2ced62b1d1c1e2f08b73a2da11c95b53c1725d16",
    edition: 134,
    date: 1646062705104,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #135",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/135.png",
    dna: "aba7d6c3f2282a85dde188002ba5faee2613f321",
    edition: 135,
    date: 1646062705549,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #136",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/136.png",
    dna: "04c71c37249f61c4138c947a5dfed15b8606c504",
    edition: 136,
    date: 1646062706375,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #137",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/137.png",
    dna: "603fe19f0bc0ba3ca1181311db1e2974d12db71a",
    edition: 137,
    date: 1646062706816,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #138",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/138.png",
    dna: "b41364bf4f3e55e9583af0650ec709a29000425a",
    edition: 138,
    date: 1646062707234,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #139",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/139.png",
    dna: "a8d4fcd20bf93b072fae41d8ab70546aaaa8546e",
    edition: 139,
    date: 1646062707601,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #140",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/140.png",
    dna: "20256a5658d06f3fcdc36980766aae794cc98a13",
    edition: 140,
    date: 1646062708423,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #141",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/141.png",
    dna: "e92bf97d0bff4950ddb13699b56bdc062e974eeb",
    edition: 141,
    date: 1646062709061,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #142",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/142.png",
    dna: "d162499b43397363af7ecd7cae36614901bb0088",
    edition: 142,
    date: 1646062709528,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #143",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/143.png",
    dna: "72c40c4bc12c64ce6a06f4d391aeed6d1d3cdd8b",
    edition: 143,
    date: 1646062709965,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #144",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/144.png",
    dna: "ffb5387fbd1e9ba46eb172b0a235afad3209f293",
    edition: 144,
    date: 1646062710425,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #145",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/145.png",
    dna: "e16a03e1a27065d43804eb435da4b12804594af8",
    edition: 145,
    date: 1646062711199,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #146",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/146.png",
    dna: "2f62cba77f305c547946b3bd4667afb1e34205c5",
    edition: 146,
    date: 1646062711611,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #147",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/147.png",
    dna: "06ba5f4d2dc05556797be65e14a7d11cc2d840ec",
    edition: 147,
    date: 1646062712331,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #148",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/148.png",
    dna: "0ce6d39d0aacd3465a607a7977ed0f46d65816bc",
    edition: 148,
    date: 1646062712845,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #149",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/149.png",
    dna: "aed32b7adb98420d6de51ce402a1a48eeb4ef3d1",
    edition: 149,
    date: 1646062713393,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #150",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/150.png",
    dna: "041b5fcc7d81330cc6a637ce0fe76562451c11c7",
    edition: 150,
    date: 1646062713821,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #151",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/151.png",
    dna: "eb437f1e1c8d15fb1cf94de358da8391878c2350",
    edition: 151,
    date: 1646062714187,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #152",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/152.png",
    dna: "4b98aafd6c1a4a0681fee04529eecac255389d0c",
    edition: 152,
    date: 1646062714607,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #153",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/153.png",
    dna: "73a5ef5bb6bfed898d98562be7c660b3d3acc921",
    edition: 153,
    date: 1646062715154,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #154",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/154.png",
    dna: "647ecca1e28239c5896b50f285e8e485457f6b70",
    edition: 154,
    date: 1646062715613,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #155",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/155.png",
    dna: "94c98950caab2ebb5ea9042b949c9b40900e7d2f",
    edition: 155,
    date: 1646062716069,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #156",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/156.png",
    dna: "a803abe3b39b5f77db49c98e2270540a4d29c248",
    edition: 156,
    date: 1646062716656,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #157",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/157.png",
    dna: "a751a95b6c6c422404197ef97ef30321d116b1e8",
    edition: 157,
    date: 1646062717187,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #158",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/158.png",
    dna: "a74a354fb5d1fc17e0de96f4efce7d2f89188dfe",
    edition: 158,
    date: 1646062717572,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #159",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/159.png",
    dna: "ee6aff729ec1a8ef8ccead925ca9c77363ab2af3",
    edition: 159,
    date: 1646062717933,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #160",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/160.png",
    dna: "fbc88ae5ca69c17e7f9b22a6a0e7a79ef8237fe2",
    edition: 160,
    date: 1646062718385,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #161",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/161.png",
    dna: "4bde9291ae06f51c4da31e80005c6a82cd67f937",
    edition: 161,
    date: 1646062718802,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #162",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/162.png",
    dna: "c66b8410f64e2d0ad04bc854cd670ff70d7b73df",
    edition: 162,
    date: 1646062719270,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #163",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/163.png",
    dna: "6f030e30786bb6bf722761fb377d3d0fd36ca144",
    edition: 163,
    date: 1646062719748,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #164",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/164.png",
    dna: "85db9a499729df771d9ca327c6731d2f8e045cfc",
    edition: 164,
    date: 1646062720187,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #165",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/165.png",
    dna: "9a72585c1676f56e3533923de7b3c418e9cb0247",
    edition: 165,
    date: 1646062720677,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #166",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/166.png",
    dna: "06cc7d18e734df662d10137b5d0431bfb218c070",
    edition: 166,
    date: 1646062721219,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #167",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/167.png",
    dna: "da0773b80717e64a3fb1ad31133e8b8817f65209",
    edition: 167,
    date: 1646062721644,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #168",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/168.png",
    dna: "d16ff57a4ba36823985342e6705d30fc24a62ecf",
    edition: 168,
    date: 1646062722099,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #169",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/169.png",
    dna: "941fc6ba1e73fda7ca46f9640de17c2ea4a53704",
    edition: 169,
    date: 1646062722564,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #170",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/170.png",
    dna: "2826d95ce56e39cbc4ebdaf6189f61c5e03355d5",
    edition: 170,
    date: 1646062723083,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #171",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/171.png",
    dna: "d12f07f38adcf9cda9bfa29f292d6713180dcb37",
    edition: 171,
    date: 1646062723515,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #172",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/172.png",
    dna: "42a2ec24b0073c0ac5931095f3c9fef00616e9b0",
    edition: 172,
    date: 1646062723926,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #173",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/173.png",
    dna: "4c9dbff5c8976b020adc4c15bcc01451101c7003",
    edition: 173,
    date: 1646062724296,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #174",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/174.png",
    dna: "b6aa746c600948ec0b10400c8f4513665795c610",
    edition: 174,
    date: 1646062724782,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #175",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/175.png",
    dna: "ce12018183376eb3f78e1134b118b3ed03e3cc01",
    edition: 175,
    date: 1646062725641,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #176",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/176.png",
    dna: "e21d4d88df5b3d9634559db495075c1ff98c4930",
    edition: 176,
    date: 1646062726006,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #177",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/177.png",
    dna: "084381f724353fdc8903001694fbdfe58e07025c",
    edition: 177,
    date: 1646062726447,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #178",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/178.png",
    dna: "d3aa20129cb3310c30472dfc2ed3c754690fc78d",
    edition: 178,
    date: 1646062726906,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #179",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/179.png",
    dna: "23e2931d22d0ea0f24f2a91786a0702a270a9076",
    edition: 179,
    date: 1646062727342,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #180",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/180.png",
    dna: "332af9aee01a1178e8d354cd3c092ace27fd0b09",
    edition: 180,
    date: 1646062727829,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #181",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/181.png",
    dna: "187589520a96885924fe23353f77455e7a641a3e",
    edition: 181,
    date: 1646062728379,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #182",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/182.png",
    dna: "909fb553f689d5ee589c571c67160fab8bdc82df",
    edition: 182,
    date: 1646062728805,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #183",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/183.png",
    dna: "c599208fbd82394e984b9102d9587b652712bebf",
    edition: 183,
    date: 1646062729309,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #184",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/184.png",
    dna: "90b8354bf98634f3895cd7c4a6a5fa7985532ad7",
    edition: 184,
    date: 1646062729647,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #185",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/185.png",
    dna: "2d6ed178e185f30eeec106999fdebbc7d12167d5",
    edition: 185,
    date: 1646062730086,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #186",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/186.png",
    dna: "655c123506fdb26e648c447f0f20b5fcf22e7a75",
    edition: 186,
    date: 1646062730549,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #187",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/187.png",
    dna: "1f3c4528b9817e09e9207762d1dfb22a6eb2a90e",
    edition: 187,
    date: 1646062731049,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #188",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/188.png",
    dna: "422905a03726d7de404297e43a40d75ecfcc2065",
    edition: 188,
    date: 1646062731537,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #189",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/189.png",
    dna: "8ac93fadc6a0d98a73dfae307417bc7bab474e29",
    edition: 189,
    date: 1646062731931,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #190",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/190.png",
    dna: "426e357fd2438e215bd3509d6b8b86eb7dbddefd",
    edition: 190,
    date: 1646062732447,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #191",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/191.png",
    dna: "b3f6a6deaee0e457869c1f4ca60796d9595ee653",
    edition: 191,
    date: 1646062732948,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #192",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/192.png",
    dna: "51cab09124cdecf1ca3f37de02c7fcd5c2dc7a2d",
    edition: 192,
    date: 1646062733320,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #193",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/193.png",
    dna: "b81f1e6132bd23d3f998066bdae3d7d7b5c7f916",
    edition: 193,
    date: 1646062733795,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #194",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/194.png",
    dna: "6b007759ddbf7a86a2915295f65e34fe82462ea8",
    edition: 194,
    date: 1646062734281,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #195",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/195.png",
    dna: "3ec9b271b277d0a86f618edb9d088a2c1b1be31a",
    edition: 195,
    date: 1646062734766,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #196",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/196.png",
    dna: "b391b6c749687a304a322f2ffd3df5170ab3d270",
    edition: 196,
    date: 1646062735203,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #197",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/197.png",
    dna: "7f13545e4e8d0fde99ef3bafbf727524c7d65764",
    edition: 197,
    date: 1646062735679,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #198",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/198.png",
    dna: "d32ad209d1c6a2c9f6fdfad191fa6b9c18b9346b",
    edition: 198,
    date: 1646062736244,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #199",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/199.png",
    dna: "755c7c18cfe3abab1dad3cd25dbfabd294d9101f",
    edition: 199,
    date: 1646062736725,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #200",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/200.png",
    dna: "c760652f67e313d2faf14aa5be6a0b712f9e8171",
    edition: 200,
    date: 1646062737075,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #201",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/201.png",
    dna: "633947a9385885c796cb4f1264d2efbe1d24cc69",
    edition: 201,
    date: 1646062737498,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #202",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/202.png",
    dna: "4adc0314447efc9df38303ad226c6e19178eb0b4",
    edition: 202,
    date: 1646062737932,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #203",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/203.png",
    dna: "54e7f6d48252bec23d12358fe557c77d39c748d1",
    edition: 203,
    date: 1646062738330,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #204",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/204.png",
    dna: "617147b02c8b295c2b9b134fd5c6c73159286408",
    edition: 204,
    date: 1646062739093,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #205",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/205.png",
    dna: "891f75a292a8707f80e19d992d3e19d4c3adcc8a",
    edition: 205,
    date: 1646062739603,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #206",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/206.png",
    dna: "26dcef31c149bb6b09c3b658b8af0528535767c9",
    edition: 206,
    date: 1646062740019,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #207",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/207.png",
    dna: "9d9fc3207de25574dfd1d388cb1516302a036d89",
    edition: 207,
    date: 1646062740525,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #208",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/208.png",
    dna: "0c3aea5c2d29020a5bb84a9baacfde265ffa1d6d",
    edition: 208,
    date: 1646062741005,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #209",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/209.png",
    dna: "76e075d92c424c0583e55088531ea06a5033511d",
    edition: 209,
    date: 1646062741384,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #210",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/210.png",
    dna: "636240c75a850b3eeae25477c487020d07b1abf5",
    edition: 210,
    date: 1646062741747,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #211",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/211.png",
    dna: "b63884edddc20524bf454803fac35f0149229315",
    edition: 211,
    date: 1646062742149,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #212",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/212.png",
    dna: "cf4fdbe1cb2810e3053a79d078bdd09cfea98b45",
    edition: 212,
    date: 1646062742645,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #213",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/213.png",
    dna: "754624408d785bd3fdcc2aba44a60b39c5ddefc0",
    edition: 213,
    date: 1646062743031,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #214",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/214.png",
    dna: "e2b269a3c4d8ccc1bca1db49861524f53972f2f5",
    edition: 214,
    date: 1646062743464,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #215",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/215.png",
    dna: "5498db7377109f47ade2932934f166099367543b",
    edition: 215,
    date: 1646062743843,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #216",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/216.png",
    dna: "31313f818a3066048df523de3d508b34211bc455",
    edition: 216,
    date: 1646062744211,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #217",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/217.png",
    dna: "130e847ad66568dc5e1d8791d8bba5ca15e87753",
    edition: 217,
    date: 1646062744704,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #218",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/218.png",
    dna: "4203bc2dbcd3304e544846e0daa5a41d4b58bd29",
    edition: 218,
    date: 1646062745196,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #219",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/219.png",
    dna: "e548f27644fb00c126e54b406e0adc22f862e13d",
    edition: 219,
    date: 1646062745664,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #220",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/220.png",
    dna: "d24bbafbdd770582d10eb1d57d94bc5046eced3d",
    edition: 220,
    date: 1646062746158,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #221",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/221.png",
    dna: "ba38e17c673b8169924814bba63c3322943b829f",
    edition: 221,
    date: 1646062746594,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #222",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/222.png",
    dna: "1b8e446959b9698723d1fbfb4f431f27811fa0ab",
    edition: 222,
    date: 1646062746987,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #223",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/223.png",
    dna: "9f05cd3048bf4580ca367204a0769bcd6fe9a01f",
    edition: 223,
    date: 1646062747394,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #224",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/224.png",
    dna: "a6f79491632f6b1c875995a7339012c614870d4b",
    edition: 224,
    date: 1646062748248,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #225",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/225.png",
    dna: "ad39e596abd1e0ca707a3cd51c5b82035e362d08",
    edition: 225,
    date: 1646062748689,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #226",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/226.png",
    dna: "a89189016fa28b4d22599b1de70fa2a0cbadbf3f",
    edition: 226,
    date: 1646062749210,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #227",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/227.png",
    dna: "753914f637c92013f5ffa20a7b8978621030d9cc",
    edition: 227,
    date: 1646062749628,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #228",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/228.png",
    dna: "dbb1962c4ae9feef8b2201dfc29b4fc6291655cc",
    edition: 228,
    date: 1646062750449,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #229",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/229.png",
    dna: "09371efa80b0871ae1fd41fb37617548cf53016b",
    edition: 229,
    date: 1646062750910,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #230",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/230.png",
    dna: "07b5a835cf4d30b1d9a0458ebd2375121ea6a4d8",
    edition: 230,
    date: 1646062751298,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #231",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/231.png",
    dna: "c4a181e43c933ea3c84585e33c146346b66d7237",
    edition: 231,
    date: 1646062751854,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #232",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/232.png",
    dna: "3101adf4b0b12eb2815cf18d674104f155f8bf29",
    edition: 232,
    date: 1646062752312,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #233",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/233.png",
    dna: "e3f6d20e9737c404bec619ba14cc1f7d82dbcf13",
    edition: 233,
    date: 1646062752763,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #234",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/234.png",
    dna: "011e0fc93833fe36bcba340557641acbf63166ec",
    edition: 234,
    date: 1646062753089,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #235",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/235.png",
    dna: "d0035b38fc8a40a1ff366f72f4fdbd0333b31d63",
    edition: 235,
    date: 1646062753555,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #236",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/236.png",
    dna: "dd9e6e677557dea0a9260c28d387620ed31254db",
    edition: 236,
    date: 1646062753918,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #237",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/237.png",
    dna: "8be6cec003761faac6bb5173a6b7f4ab826cafa3",
    edition: 237,
    date: 1646062754696,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #238",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/238.png",
    dna: "723ce0a8aeda056789852945ff834733738e58a6",
    edition: 238,
    date: 1646062755183,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #239",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/239.png",
    dna: "c4e7589b69092d74023483ae0fc981a265da99e1",
    edition: 239,
    date: 1646062755548,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #240",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/240.png",
    dna: "8ca963b000c06cb61fbfd073185e9ab58b7b9c7c",
    edition: 240,
    date: 1646062755951,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #241",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/241.png",
    dna: "25445a8ce32f1eabab64bc56ff714ae323143441",
    edition: 241,
    date: 1646062756730,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #242",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/242.png",
    dna: "9d37dd72708f4fb923d32e850976b87415f79879",
    edition: 242,
    date: 1646062757172,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #243",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/243.png",
    dna: "daba167cd2a469b825d7cfd6787a21da8a9b355f",
    edition: 243,
    date: 1646062757571,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #244",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/244.png",
    dna: "4f09619986a0af852bf96dca4117564607ed347d",
    edition: 244,
    date: 1646062758442,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #245",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/245.png",
    dna: "284013c8894ba049282acd6375d888dcb042b0ff",
    edition: 245,
    date: 1646062758834,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #246",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/246.png",
    dna: "ddb878ac3fcc966a8159be79d61ff9ee47c306bf",
    edition: 246,
    date: 1646062759233,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #247",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/247.png",
    dna: "71b8db69e9ee25ca9c95b04ce92abdb2260a7ee3",
    edition: 247,
    date: 1646062759708,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #248",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/248.png",
    dna: "f8474335c0b9285581ccf6739e6045b50f68e817",
    edition: 248,
    date: 1646062760216,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #249",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/249.png",
    dna: "892749174d4c76a8db0e8e72827af60a773bc62e",
    edition: 249,
    date: 1646062760615,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #250",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/250.png",
    dna: "7ccb10f7a07987e347aa7ee6aabacab0d5aa4fe2",
    edition: 250,
    date: 1646062761043,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #251",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/251.png",
    dna: "badf22b482a78b0d30aa6ad118a045e58ec013f3",
    edition: 251,
    date: 1646062761386,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #252",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/252.png",
    dna: "72f9ad53ac20866194e26b811eeb0768e185b433",
    edition: 252,
    date: 1646062761775,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #253",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/253.png",
    dna: "40c8db2debf3a292288a75b661ff054767c95a20",
    edition: 253,
    date: 1646062762276,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #254",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/254.png",
    dna: "0f9b17b3832af89243f8a4d9262fd646f598d395",
    edition: 254,
    date: 1646062762783,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #255",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/255.png",
    dna: "a207b92ee3cd8dcaa21c4b3385b170efbfea6ca8",
    edition: 255,
    date: 1646062763176,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #256",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/256.png",
    dna: "97d40bc9be3755b2ebc59162c9bcbf90e2789650",
    edition: 256,
    date: 1646062763611,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #257",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/257.png",
    dna: "c4a2869f39dda2c57e0f0d45b06501a97a270a1f",
    edition: 257,
    date: 1646062764092,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #258",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/258.png",
    dna: "363463e249003ca755032e8523004548753be859",
    edition: 258,
    date: 1646062764581,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #259",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/259.png",
    dna: "1d86d97c4e6270ff089bb582e57b7d2c7af220f6",
    edition: 259,
    date: 1646062764942,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #260",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/260.png",
    dna: "8db57b91b171286066bb3b6bf9afb958a00a6d12",
    edition: 260,
    date: 1646062765326,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #261",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/261.png",
    dna: "e802dc3caf3e76fd1d23064e7baf405cad2b0215",
    edition: 261,
    date: 1646062765634,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #262",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/262.png",
    dna: "a97f98fd9b6af7f0c163b359c47b88b3da73552d",
    edition: 262,
    date: 1646062766013,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #263",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/263.png",
    dna: "e9d59651740ea30ffc2a0cdccb1111a062c2ea26",
    edition: 263,
    date: 1646062766554,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #264",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/264.png",
    dna: "525d5331db113ee99b746b67b7d3cc4c85be7fb7",
    edition: 264,
    date: 1646062766975,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #265",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/265.png",
    dna: "aaf9f611b5b1331673f5a9730d23bf101c180962",
    edition: 265,
    date: 1646062767398,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #266",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/266.png",
    dna: "2cae6c81bc8338546626a54d1953292cb9c678e9",
    edition: 266,
    date: 1646062767788,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #267",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/267.png",
    dna: "cf280b0d0e6e2a9ae5969d47040aacdbaaa4ab6c",
    edition: 267,
    date: 1646062768208,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #268",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/268.png",
    dna: "1868b00a49f8d4ac43c6359ed69045b48989300b",
    edition: 268,
    date: 1646062768571,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #269",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/269.png",
    dna: "472f100c9884cae7d64b67ec49a5e65d7f38c387",
    edition: 269,
    date: 1646062769061,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #270",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/270.png",
    dna: "0342a01664001504d1d0cdbb6cb0bdfbd4a6ae95",
    edition: 270,
    date: 1646062769429,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #271",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/271.png",
    dna: "e3b5e45c4cd0e3e0dc619de32ca7299784ad64ff",
    edition: 271,
    date: 1646062769797,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #272",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/272.png",
    dna: "46033fc3ed28fb45e54c4c5fabce1955e7af8f01",
    edition: 272,
    date: 1646062770355,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #273",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/273.png",
    dna: "33efa7d518a4bb2db332b879ec80c7965ef49925",
    edition: 273,
    date: 1646062770770,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #274",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/274.png",
    dna: "47ab450ce5779989d669724a41f70f37a4d6cb7d",
    edition: 274,
    date: 1646062771195,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #275",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/275.png",
    dna: "0deca00007ab4c2ae9a47cbf6c0d4221c78e19f7",
    edition: 275,
    date: 1646062771964,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #276",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/276.png",
    dna: "a3c499890d43580d6220d6b2fe2fe6aa5237bcb4",
    edition: 276,
    date: 1646062772392,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #277",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/277.png",
    dna: "54ce68895216e4a3a2ba72f9d0822b7aebef12ed",
    edition: 277,
    date: 1646062772742,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #278",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/278.png",
    dna: "7790f24e606588b361c281052e7bad6b6af54f78",
    edition: 278,
    date: 1646062773364,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #279",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/279.png",
    dna: "637bee0932b96126136b1f699f270341879830b7",
    edition: 279,
    date: 1646062773866,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #280",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/280.png",
    dna: "3f1d91d13adff8e90e70d6b1f5d49f87be8f8308",
    edition: 280,
    date: 1646062774259,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #281",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/281.png",
    dna: "6025c13a9c22022e57333f8b010fff63733f8859",
    edition: 281,
    date: 1646062774754,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #282",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/282.png",
    dna: "d84b3782db590d899e0bc7e24308a8ef47e22459",
    edition: 282,
    date: 1646062775176,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #283",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/283.png",
    dna: "00e5cdab38372772ba0ac9711a7ab1cbd8ffaa04",
    edition: 283,
    date: 1646062775693,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #284",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/284.png",
    dna: "03cefa084d1b7f82429254d9894f83c748cf564a",
    edition: 284,
    date: 1646062776420,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #285",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/285.png",
    dna: "eb3cdcb54fa1b2e4e15ac7f0e0531b31bd0a095a",
    edition: 285,
    date: 1646062776832,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #286",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/286.png",
    dna: "ce046389e0678df94701148681b417d5a3ad7fa7",
    edition: 286,
    date: 1646062777286,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #287",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/287.png",
    dna: "2d262fdaaefac0c56cfb01329f4249f1a48d8e25",
    edition: 287,
    date: 1646062777620,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #288",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/288.png",
    dna: "b55c0c1e5bf5505c9ff8ed8aaeaca117c03dd373",
    edition: 288,
    date: 1646062778047,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #289",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/289.png",
    dna: "0133dee9cbdd5c1711ea9ead4daee39aeef8941c",
    edition: 289,
    date: 1646062778479,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #290",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/290.png",
    dna: "b541066500348ffab93a8787bf7932371fd24543",
    edition: 290,
    date: 1646062779009,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #291",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/291.png",
    dna: "66445ed0f10e66742887f2e209b20480ce31a94c",
    edition: 291,
    date: 1646062779397,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #292",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/292.png",
    dna: "887974b1bad9513f9decfdab0a64adc8c10e5acc",
    edition: 292,
    date: 1646062779754,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #293",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/293.png",
    dna: "6cc9db8b716bbe87fa8652f3a3ccdc8afb542a7b",
    edition: 293,
    date: 1646062780159,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #294",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/294.png",
    dna: "ad66469fff85419fda8640eb6d6fb995759ce678",
    edition: 294,
    date: 1646062780683,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #295",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/295.png",
    dna: "540dca6915bec93ce5bb796575e911c2bc36d1bd",
    edition: 295,
    date: 1646062781441,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #296",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/296.png",
    dna: "6b2b5da81b0836159a8374114c0cea2af57388ee",
    edition: 296,
    date: 1646062782255,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #297",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/297.png",
    dna: "c38c4939fbefe6b4db5d22d6fee00def77246b58",
    edition: 297,
    date: 1646062782672,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "GoldWatch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #298",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/298.png",
    dna: "62c4d6aac64866626b99a57c37ac186c3700af59",
    edition: 298,
    date: 1646062783137,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #299",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/299.png",
    dna: "095584ce5c9a760805aaa6fc8c57a0c232ebb415",
    edition: 299,
    date: 1646062783631,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #300",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/300.png",
    dna: "94f2c4ca00b185058e168f810d9e389e575828d1",
    edition: 300,
    date: 1646062784032,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #301",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/301.png",
    dna: "6aac7d37aa26ffc62cc80e0f67e60702f2eaefa1",
    edition: 301,
    date: 1646062784481,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #302",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/302.png",
    dna: "8beed3f4b2a78ddc49ffcf6912b3b8d5f3607809",
    edition: 302,
    date: 1646062784894,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #303",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/303.png",
    dna: "a36b6945f5adec57dedab04fb6eb823a7667036c",
    edition: 303,
    date: 1646062785486,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #304",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/304.png",
    dna: "e0358a686a9475c56332184363c236cfd3d7bd72",
    edition: 304,
    date: 1646062785903,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #305",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/305.png",
    dna: "b82184d4c4da75ff04545c538442f7e08975ec57",
    edition: 305,
    date: 1646062786248,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #306",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/306.png",
    dna: "517869c7e6d17a2c80ba291e310e7a8c44d4ee48",
    edition: 306,
    date: 1646062786646,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #307",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/307.png",
    dna: "3f079b1fa9153da6f18b75d094827bfbcf7731f3",
    edition: 307,
    date: 1646062787083,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #308",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/308.png",
    dna: "0e7251579f9bd30731919e4e43f0ca132b964a9f",
    edition: 308,
    date: 1646062787490,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #309",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/309.png",
    dna: "ac4402cf2f9b13805704d63973d7212f2699c7e3",
    edition: 309,
    date: 1646062787921,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #310",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/310.png",
    dna: "d50a5e670ff48f9f6b3bed3c38b86dae74cfc8da",
    edition: 310,
    date: 1646062788319,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #311",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/311.png",
    dna: "e75b1ece88f581b2aa46645feaed81d746136708",
    edition: 311,
    date: 1646062788892,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #312",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/312.png",
    dna: "ec1835a5bf0578ad773cfcf354c22c33d0f10c0c",
    edition: 312,
    date: 1646062789375,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #313",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/313.png",
    dna: "13100bcfa0e8ac6140c2bf4e04e4a8c3b5498587",
    edition: 313,
    date: 1646062789886,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #314",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/314.png",
    dna: "1b916615b7a73f51d4091303233b214f6e81b8d7",
    edition: 314,
    date: 1646062790369,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #315",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/315.png",
    dna: "2fe56d8dfd93d9912b198f4baf56e8c86714c954",
    edition: 315,
    date: 1646062790809,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #316",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/316.png",
    dna: "6de5fee6717ac351a6874242fe3f21befe90bf38",
    edition: 316,
    date: 1646062791349,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #317",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/317.png",
    dna: "d362a56fae475c135416d85e05a1de3818af001a",
    edition: 317,
    date: 1646062791737,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #318",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/318.png",
    dna: "269b0a03724354dd7f85ad66f13f7a3063cf05e9",
    edition: 318,
    date: 1646062792172,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #319",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/319.png",
    dna: "56b39ca56596be479e83ea30747b179a57d7d79b",
    edition: 319,
    date: 1646062792674,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #320",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/320.png",
    dna: "6ea582ec58ba2b3ad914af4d9817f26f2070d5a5",
    edition: 320,
    date: 1646062793522,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #321",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/321.png",
    dna: "6bfce21d3696e120ad04f2beb84c32978dc852e3",
    edition: 321,
    date: 1646062793949,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #322",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/322.png",
    dna: "d5a3d15cd8f5c7c2a9b13bf918e98bc0a95ba23c",
    edition: 322,
    date: 1646062794286,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #323",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/323.png",
    dna: "e92604c69240999c0012995d2c1fc08b7cf14162",
    edition: 323,
    date: 1646062794670,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #324",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/324.png",
    dna: "129ea1024b748358301e733d0779f8ccaf12f039",
    edition: 324,
    date: 1646062795244,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #325",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/325.png",
    dna: "d17a7f5957aaacb6eb4b11af19d51d77623ac25f",
    edition: 325,
    date: 1646062795695,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #326",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/326.png",
    dna: "480981fc35392e55977149381b27478cd4eb3c30",
    edition: 326,
    date: 1646062796270,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #327",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/327.png",
    dna: "19a01cc6fa8057a3e7805b6c06783e6f5ab7b31a",
    edition: 327,
    date: 1646062796767,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #328",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/328.png",
    dna: "1e8686e3ca35bb7e09081bbbea1b67731f011913",
    edition: 328,
    date: 1646062797217,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #329",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/329.png",
    dna: "6aae4de4d13351788f9893ffdf0884cf038406ed",
    edition: 329,
    date: 1646062797742,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #330",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/330.png",
    dna: "9a969ce84111e11ba4e661f117e3492a0742da67",
    edition: 330,
    date: 1646062798297,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #331",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/331.png",
    dna: "b1b94c4b442353922cfa819234ca538b1e6be6f3",
    edition: 331,
    date: 1646062798636,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #332",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/332.png",
    dna: "03758243da9200a77fe2a0b127df3bdafa30b7ac",
    edition: 332,
    date: 1646062799239,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #333",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/333.png",
    dna: "09577befe39c8041f26d60addc487351028148cb",
    edition: 333,
    date: 1646062799721,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #334",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/334.png",
    dna: "9cef646ba1425d4ce3adac2c7ca2eb5cb9d093ce",
    edition: 334,
    date: 1646062800202,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #335",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/335.png",
    dna: "c0e05d00ff6f9c70aca2cdba8184efc96116e523",
    edition: 335,
    date: 1646062801045,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #336",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/336.png",
    dna: "9ab32804dedf7da44e48e111b4b6985d918b1521",
    edition: 336,
    date: 1646062801483,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #337",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/337.png",
    dna: "9ab650273374d96bf1106c14797a77b06bea7c22",
    edition: 337,
    date: 1646062801842,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #338",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/338.png",
    dna: "c36840b24535c516485d13fb940b6efe24308536",
    edition: 338,
    date: 1646062802339,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #339",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/339.png",
    dna: "6e5d85b00202e2e8d27500dee9d5bebb88ffdc8f",
    edition: 339,
    date: 1646062802904,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #340",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/340.png",
    dna: "36bab125a010e99490f6ea3bdcfcfd66026c39f4",
    edition: 340,
    date: 1646062803351,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #341",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/341.png",
    dna: "883cc2d43f748a698ae0daaa324f5e78e62f8d9d",
    edition: 341,
    date: 1646062803926,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #342",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/342.png",
    dna: "e3306852a53feb23267dd773888377b8af26596b",
    edition: 342,
    date: 1646062804359,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #343",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/343.png",
    dna: "7f7d81bb9cdc9accd2c83b105cda791765147f9f",
    edition: 343,
    date: 1646062804846,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #344",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/344.png",
    dna: "696d8a64b1d53ef7f504481bea165ad6fffbfc2f",
    edition: 344,
    date: 1646062805328,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #345",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/345.png",
    dna: "aff887ebac4ba4aae88af2aaec5c5f9817e49c2a",
    edition: 345,
    date: 1646062805787,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #346",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/346.png",
    dna: "0fe6362c24d312b17cb7463e33c9affa5a86e671",
    edition: 346,
    date: 1646062806229,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #347",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/347.png",
    dna: "c4c1adc223c99701675b27a8d602a5b3601fae43",
    edition: 347,
    date: 1646062806712,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #348",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/348.png",
    dna: "e4362584179cc1e54f078ede66443e5439fc01b3",
    edition: 348,
    date: 1646062807167,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #349",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/349.png",
    dna: "ad771ef31c865597e7fa5efc47468729db62fe6a",
    edition: 349,
    date: 1646062807610,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #350",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/350.png",
    dna: "d826839d51627753f6b1cea67e0fe74fc02492a9",
    edition: 350,
    date: 1646062808016,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #351",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/351.png",
    dna: "36a30b98a4c1b55d986655e1b28048ce204b4f81",
    edition: 351,
    date: 1646062808491,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #352",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/352.png",
    dna: "2df400e577f8291aaf0b7a28cb4d5151b392ead4",
    edition: 352,
    date: 1646062808984,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #353",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/353.png",
    dna: "386ac30d3d5f3c2b46661e863020b3a871531641",
    edition: 353,
    date: 1646062809406,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #354",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/354.png",
    dna: "80051a05365c8dd5f7a0151dc310898ca3b975a9",
    edition: 354,
    date: 1646062809828,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #355",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/355.png",
    dna: "98d9ec7a03ab7b52091c02b3c990443f0c1ad0bb",
    edition: 355,
    date: 1646062810280,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #356",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/356.png",
    dna: "89b091033585cb1e0c6fd1587587d6a688a61c49",
    edition: 356,
    date: 1646062810760,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #357",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/357.png",
    dna: "e773887374fc5cbf38a17d750ea8fac6783cbdf7",
    edition: 357,
    date: 1646062811190,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #358",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/358.png",
    dna: "de097482bfdbe67472282661bdad2f8b9e47cf3a",
    edition: 358,
    date: 1646062811647,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #359",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/359.png",
    dna: "ca48ea15ef248a7f3087345c534b5045dd5d6c44",
    edition: 359,
    date: 1646062811984,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #360",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/360.png",
    dna: "5228aa987d8b03a5ad0fcb93c7e37093c47a8712",
    edition: 360,
    date: 1646062812440,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Salmon Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #361",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/361.png",
    dna: "7b7f2d6a91e98ccbe6c55a06d9ae2cf972f2ca0b",
    edition: 361,
    date: 1646062812868,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #362",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/362.png",
    dna: "4fb09702c0e15297c7d3730d85fe52b2a78af4c9",
    edition: 362,
    date: 1646062813334,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #363",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/363.png",
    dna: "9c67da4f35a98f313f0d7c1d9dec65a2b8d7009f",
    edition: 363,
    date: 1646062813791,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "White Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #364",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/364.png",
    dna: "1f125020aae3e865da4bada3f3f3bdf05cb2fd49",
    edition: 364,
    date: 1646062814370,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Blank",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #365",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/365.png",
    dna: "f40e8778412a3c5c366fe267350a3add0d559a6e",
    edition: 365,
    date: 1646062814829,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #366",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/366.png",
    dna: "0b3598d1a88089ae19f7be2e2f443601bbe46688",
    edition: 366,
    date: 1646062815292,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #367",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/367.png",
    dna: "ab55136b6044fd8de5f3851dba858c241f76433b",
    edition: 367,
    date: 1646062815757,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #368",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/368.png",
    dna: "fcf890d30ecf27e0ed7ef8417b71a98f1e00a6f8",
    edition: 368,
    date: 1646062816242,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "MidnightBlue",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #369",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/369.png",
    dna: "f9ba9dd15b38758f4cba330707741f26a7dbbd44",
    edition: 369,
    date: 1646062817182,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #370",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/370.png",
    dna: "acdd7bdd16a49799b0ae3ca0a014b99148444dcb",
    edition: 370,
    date: 1646062817626,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #371",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/371.png",
    dna: "94b4976e274f461b108bbd201be1adc688221c45",
    edition: 371,
    date: 1646062818421,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #372",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/372.png",
    dna: "7a350d28f8bad65a75ced72a8307065b966315ac",
    edition: 372,
    date: 1646062818907,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #373",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/373.png",
    dna: "66daf733971c878499810bb3cd3289d8824d6d98",
    edition: 373,
    date: 1646062819393,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "vaporwave",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #374",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/374.png",
    dna: "7b8ad1095644ebe4ca00588dd264a966dc918f1d",
    edition: 374,
    date: 1646062819831,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Yellow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #375",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/375.png",
    dna: "6ec3d35f6692380a3a2b3ece0fe01392f0db75bc",
    edition: 375,
    date: 1646062820512,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "TropicalShirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #376",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/376.png",
    dna: "2c6f327e33af6726fa0767dd8f9f4d8a021a03ec",
    edition: 376,
    date: 1646062821095,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #377",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/377.png",
    dna: "eeeb980c9b960b6968413b1f4d3e0505302a65d7",
    edition: 377,
    date: 1646062821619,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #378",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/378.png",
    dna: "a1897dd980d2a6cfe2faa18d9e9c5a8aad7694ec",
    edition: 378,
    date: 1646062822028,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #379",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/379.png",
    dna: "ca44cf28b9fdb9df9a8efda5991725d7aeb53fd4",
    edition: 379,
    date: 1646062822493,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Shade_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #380",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/380.png",
    dna: "c7faf41996f7534d4bd58a4200ffac4c1372ba59",
    edition: 380,
    date: 1646062822885,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "8bitVines",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Normal",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tie",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #381",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/381.png",
    dna: "0a5bb6666d59f6bfcf10c1dcc1d40d6f108112ab",
    edition: 381,
    date: 1646062823388,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #382",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/382.png",
    dna: "844bf06fa965e669b9c7c4ffcd2c4613b531c875",
    edition: 382,
    date: 1646062823919,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "PolygonTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #383",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/383.png",
    dna: "09fb971cf7197a0905cfb20d69d5f3d7bb699d93",
    edition: 383,
    date: 1646062824691,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #384",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/384.png",
    dna: "9d1cb73eb05903dd7c4e1b6744ec43eaebd87dba",
    edition: 384,
    date: 1646062825090,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #385",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/385.png",
    dna: "9920a99654a7c0cf3706318054a9f1c6b873a65b",
    edition: 385,
    date: 1646062825850,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #386",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/386.png",
    dna: "454cea741d5e00183a86bcb097c0c5bdfe9634b0",
    edition: 386,
    date: 1646062826239,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "ToeRing",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #387",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/387.png",
    dna: "b87c21be1aed3192465e787178ae3909c0ccd807",
    edition: 387,
    date: 1646062826730,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Blue_glow",
      },
      {
        trait_type: "Accessory",
        value: "MoneyBag",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #388",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/388.png",
    dna: "74181a0404a1128ee1c3c9c449400d20cef2c3ce",
    edition: 388,
    date: 1646062827194,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "lowPolyOasis",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #389",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/389.png",
    dna: "9d5c2aeb3382c0505fb3a3be190b593226fe2701",
    edition: 389,
    date: 1646062828082,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Tan Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #390",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/390.png",
    dna: "1e433943c5b521d2bd8e3b2a2f2445707e403a80",
    edition: 390,
    date: 1646062828599,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "purpleHaze",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #391",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/391.png",
    dna: "a7501c23719e0082a34d602c1ce062ce2f818a77",
    edition: 391,
    date: 1646062829084,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "BlueEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Mountains Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #392",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/392.png",
    dna: "f5011211f9b6e5d977931f39935385eb18d8c9d6",
    edition: 392,
    date: 1646062829551,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Blue_Glow",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #393",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/393.png",
    dna: "b873ac6d3d3d240e2e1cb332d4542031d22ec2c5",
    edition: 393,
    date: 1646062830373,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pastelTiger",
      },
      {
        trait_type: "Eyes",
        value: "orangeEye",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "LegTatPlain",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #394",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/394.png",
    dna: "fcb5e16fb7dec5bf2e50b67731562343f8383897",
    edition: 394,
    date: 1646062830799,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "BrownBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Burnt Orange",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #395",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/395.png",
    dna: "53b382a9c442b71ff7a74000d300081946eef5da",
    edition: 395,
    date: 1646062831204,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "deepBlue",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "SandBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "blank",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #396",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/396.png",
    dna: "e71535b7a3dbb1fd623b907c7555ad2016584884",
    edition: 396,
    date: 1646062831641,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "GreenEyes",
      },
      {
        trait_type: "Body",
        value: "Snow",
      },
      {
        trait_type: "Accessory",
        value: "Silver_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #397",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/397.png",
    dna: "e7fe1f246335a9dde9922fd3f1b06f313abf03fb",
    edition: 397,
    date: 1646062832054,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "pond",
      },
      {
        trait_type: "Eyes",
        value: "RedEyes",
      },
      {
        trait_type: "Body",
        value: "Black Steel",
      },
      {
        trait_type: "Accessory",
        value: "Black_Watch",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Red Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #398",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/398.png",
    dna: "b49f53edd206d824133fbaa888cc8b8a4d6971b2",
    edition: 398,
    date: 1646062832398,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "bloodFog",
      },
      {
        trait_type: "Eyes",
        value: "YellowEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "Pipe",
      },
      {
        trait_type: "AccessoryTwo",
        value: "LeftHandRing",
      },
      {
        trait_type: "Outfit",
        value: "Slate Shirt",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #399",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/399.png",
    dna: "4c519a4c0ddf6e0855e99e635f99ecef2d859a8f",
    edition: 399,
    date: 1646062832994,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "artsplash",
      },
      {
        trait_type: "Eyes",
        value: "BlackEyes",
      },
      {
        trait_type: "Body",
        value: "Dark_Purple",
      },
      {
        trait_type: "Accessory",
        value: "DesertBeads",
      },
      {
        trait_type: "AccessoryTwo",
        value: "None",
      },
      {
        trait_type: "Outfit",
        value: "Slate Gray",
      },
    ],
  },
  {
    name: "Digital Frog NFT's #400",
    description:
      "Anura DAO brings you the Digital Frogs collection. Minter will hold a game pass, boosted yields, and much more as our ecosystem grows!",
    image:
      "https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/400.png",
    dna: "cb3806a04045665d741f9e830cea8c2515b0e0a0",
    edition: 400,
    date: 1646062833518,
    artist: "Migaloo",
    developers: "Logan.io, Kotor39, and MoreThanYourAverageJoe",
    attributes: [
      {
        trait_type: "Background",
        value: "smokeySwamp",
      },
      {
        trait_type: "Eyes",
        value: "WhiteEyes",
      },
      {
        trait_type: "Body",
        value: "Light_Green",
      },
      {
        trait_type: "Accessory",
        value: "LegTat",
      },
      {
        trait_type: "AccessoryTwo",
        value: "GoldRing",
      },
      {
        trait_type: "Outfit",
        value: "Frog Sweater",
      },
    ],
  },
];
// TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:
const attrMap = new Map();
var traitMapBackground = new Map();
var traitMapEyes = new Map();
var traitMapBody = new Map();
var traitMapAccessory = new Map();
var traitMapOutfit = new Map();
var traitMapAccessoryTwo = new Map();
var traitMapMedal = new Map();

var rarityMapBackground = new Map();
var rarityMapEyes = new Map();
var rarityMapBody = new Map();
var rarityMapAccessory = new Map();
var rarityMapOutfit = new Map();
var rarityMapAccessoryTwo = new Map();
var rarityMapMedal = new Map();

var scoreArr = [];
var rankingMap = new Map();

function setMapping() {
  for (let i = 0; i < metadata.length; i++) {
    attrMap.set(metadata[i].edition, metadata[i].attributes);
  }
}

setMapping();
// console.log(attrMap);
let count = 0;

function captureTraitOccurences(value) {
  for (var i = 0; i < value.length; i++) {
    if (value[i].trait_type == "Background") {
      var background = value[i].value;
    }
    if (value[i].trait_type == "Eyes") {
      var eyes = value[i].value;
    }
    if (value[i].trait_type == "Body") {
      var body = value[i].value;
    }
    if (value[i].trait_type == "Accessory") {
      var accessory = value[i].value;
    }
    if (value[i].trait_type == "Outfit") {
      var outfit = value[i].value;
    }
    if (value[i].trait_type == "AccessoryTwo") {
      var accessoryTwo = value[i].value;
    }
    if (value[i].trait_type == "Medal") {
      var medal = value[i].value;
    }
  }
  traitMapBackground = traitUniqueCalculator(traitMapBackground, background);
  traitMapEyes = traitUniqueCalculator(traitMapEyes, eyes);
  traitMapBody = traitUniqueCalculator(traitMapBody, body);
  traitMapAccessory = traitUniqueCalculator(traitMapAccessory, accessory);
  traitMapOutfit = traitUniqueCalculator(traitMapOutfit, outfit);
  traitMapAccessoryTwo = traitUniqueCalculator(
    traitMapAccessoryTwo,
    accessoryTwo
  );
  if (medal) {
    traitMapMedal = traitUniqueCalculator(traitMapMedal, value[6].value);
  }
}

function traitUniqueCalculator(traitMap, value) {
  if (traitMap.get(value) === undefined) {
    traitMap.set(value, 1);
  } else {
    var traitPreviousCount = traitMap.get(value);
    traitPreviousCount = parseInt(traitPreviousCount);
    traitPreviousCount++;
    traitMap.set(value, traitPreviousCount);
  }
  return traitMap;
}

attrMap.forEach(captureTraitOccurences);
// console.log(traitMapBackground,traitMapEyes,traitMapBody,traitMapAccessory,traitMapOutfit,traitMapAccessoryTwo,traitMapMedal)

// @ts-expect-error
var backgroundArr = [...traitMapBackground];
// @ts-expect-error
var eyesArr = [...traitMapEyes];
// @ts-expect-error
var bodyArr = [...traitMapBody];
// @ts-expect-error
var accessoryArr = [...traitMapAccessory];
// @ts-expect-error
var outfitArr = [...traitMapOutfit];
// @ts-expect-error
var traitMapAccessoryTwo = [...traitMapAccessoryTwo];
// @ts-expect-error
var traitMapMedal = [...traitMapMedal];

function generateRarityMaps(inputArr, outputMap) {
  for (let i = 0; i < inputArr.length; i++) {
    outputMap.set(inputArr[i][0], 1 / (inputArr[i][1] / traitDenom));
  }
}

generateRarityMaps(backgroundArr, rarityMapBackground);
generateRarityMaps(eyesArr, rarityMapEyes);
generateRarityMaps(bodyArr, rarityMapBody);
generateRarityMaps(accessoryArr, rarityMapAccessory);
generateRarityMaps(outfitArr, rarityMapOutfit);
generateRarityMaps(traitMapAccessoryTwo, rarityMapAccessoryTwo);
generateRarityMaps(traitMapMedal, rarityMapMedal);

var mergedMap = new Map([
  // @ts-expect-error
  ...rarityMapBackground,
  // @ts-expect-error
  ...rarityMapEyes,
  // @ts-expect-error
  ...rarityMapBody,
  // @ts-expect-error
  ...rarityMapAccessory,
  // @ts-expect-error
  ...rarityMapOutfit,
  // @ts-expect-error
  ...rarityMapAccessoryTwo,
  // @ts-expect-error
  ...rarityMapMedal,
]);

function calculateRarityScore(key) {
  let i = 0;
  let rarityScore = 0;
  if (key <= 100) {
    for (i = 0; i < 7; i++) {
      // @ts-expect-error
      rarityScore += mergedMap.get(attrMap.get(key)[i].value);
    }
  } else {
    for (i = 0; i < 6; i++) {
      // @ts-expect-error
      rarityScore += mergedMap.get(attrMap.get(key)[i].value);
    }
  }
  scoreArr.push({ key, rarityScore });
}

for (let k = 1; k < 401; k++) {
  calculateRarityScore(k);
}

scoreArr.sort((a, b) => {
  return b.rarityScore - a.rarityScore;
});

var rankingMap = new Map(scoreArr.map((key) => [key.key, key.rarityScore]));

// TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:
async function loadDetails(
  tokenId,
  setimage,
  setrank,
  setdetails,
  setattributes
) {
  var myRarity = rankingMap.get(Number(tokenId));
  var myRank = scoreArr.findIndex((object) => {
    return object.rarityScore === myRarity;
  });

  myRank = myRank + 1;
  myRarity = parseFloat(myRarity).toFixed(3);
  setdetails(`Your NFT Rarity Score is ${myRarity}.`);
  setrank(`Your NFT is ranked #${myRank} based on it's attributes!`);

  var d = new Date();
  setimage(
    `https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/${tokenId}.png?` +
      d.getTime()
  );

  var attributes = attrMap.get(Number(tokenId));

  count = 0;
  const atts = [];
  for (let i = 0; i < attributes.length; i++) {
    count++;

    atts.push(attributes[i].trait_type + ":   " + attributes[i].value);
  }
  setattributes([...attributes]);
}
// TODO:TODO:TODO:TODO:

function buttonClick(input, setimage, setrank, setdetails, setattributes) {
  setimage(
    `https://ipfs.io/ipfs/QmdWcJzoZpeD8DtCUSAC5QLvjMrespWbTeKaphMt9PmBck/${input}.png?`
  );
  loadDetails(input, setimage, setrank, setdetails, setattributes);
}
