import React, { useState } from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Button as ChakraButton,
  Icon,
  Grid,
  Spinner,
  Image,
  Badge,
} from "@chakra-ui/react"

import { Avatar, Button, Input } from "../../components"
import nftCover from "../../../public/default-nft-cover-home.png"

import { FaQrcode, FaCreditCard } from "react-icons/fa"
import { useNotification } from "../../hooks/NotificationContext"

import Head from "next/head"
import { Copy } from "../../styles/CustomIcons"
import { useRouter } from "next/router"
import { PaymentModal } from "../../components/payment-modal"

export default function nft() {
  const type = "single"

  const filtrData = {
    title: "Natiruts Sound System",
    image: "/filtr/natiruts-nft.png",
    creator: "Filtr Store",
    price: "15 FiltrTokens",
  }
  const nftData = {
    title: "Non Fungible Token    ",
    image: nftCover.src,
    creator: "Daniel Água",
    price: "15 ETH",
  }
  const router = useRouter()
  const isRouteReady = router.isReady
  const data = router.asPath.includes("Natiruts") ? filtrData : nftData

  const { emitModal } = useNotification()
  const triggerPaymentModal = () => {
    emitModal({
      message: PaymentModal,
      options: { size: "sm", isCentered: true },
    })
  }
  return (
    <Flex flexWrap="wrap" maxW="1367px" m="49px auto">
      {isRouteReady && (
        <>
          <Box
            minWidth="560px"
            p="0 60px"
            borderRight="1px solid"
            borderColor="gray.100"
            flex="1"
            display="flex"
          >
            <Image m="0 auto" borderRadius="15px" src={data.image}></Image>
          </Box>
          <Box minW="450px" p="0 60px" flex="1">
            <Heading mt="25px" mb="25px">
              {data.title}
            </Heading>
            <Badge
              mr="19px"
              color="gray.300"
              bg="#f2f2f2"
              borderRadius="38px"
              p="5px 15px"
            >
              0xb236...
            </Badge>
            <Icon fontSize="25px" color="yellow.500" as={Copy}></Icon>
            <Text
              color="gray.500"
              fontSize="14px"
              mt="38px"
              fontWeight="normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              justo, est pulvinar eget purus gravida et tincidunt at. Convallis
              odio in sed vulputate tincidunt accumsan odio. Est pellentesque
              massa etiam condimentum et luctus vitae eget neque. Etiam nibh
              lacus, quis nibh. Tortor nec, amet sed viverra habitant. Lorem
              scelerisque aliquet in egestas amet risus.
            </Text>
            <Box>
              <Text color="gray.300" mt="40px" mb="4px">
                Criador
              </Text>
              <Flex alignItems="center">
                <Avatar></Avatar>
                <Text ml="16px">{data.creator}</Text>
              </Flex>
            </Box>
            <Flex mt="38px" alignItems="center">
              <Flex
                w="183px"
                h="71px"
                alignItems="center"
                justifyContent="center"
                mr="18px"
                borderRadius="15px"
                border="1px solid"
                borderColor="gray.100"
              >
                <Box>
                  <Text fontSize="14px" fontWeight="normal">
                    PREÇO FIXO
                  </Text>
                  <Text fontSize="14px" fontWeight="bold">
                    {data.price}
                  </Text>
                </Box>
                <ChakraButton
                  ml="10px"
                  borderRadius="10px"
                  border="1px solid #dfdfdf"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="0"
                  _hover={{ bg: "" }}
                  _focus={{ outline: 0 }}
                  w="44px"
                  h="44px"
                  p="0"
                  onClick={triggerPaymentModal}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    h="20px"
                    w="20px"
                  >
                    <Image src="/icons/cart.svg"></Image>
                  </Flex>
                </ChakraButton>
              </Flex>
              {type === "multiple" && (
                <Box>
                  <Text fontWeight="normal">ESTOQUE</Text>
                  <Text fontWeight="bold"> 10/10</Text>
                </Box>
              )}
            </Flex>
          </Box>
        </>
      )}
    </Flex>
  )
}
