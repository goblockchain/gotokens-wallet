import React, { ReactElement } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button as ChakraButton,
  Icon,
  Image,
  Badge,
  Center,
  Image as ChakraImage,
} from "@chakra-ui/react"

import NoNavNoFooterLayout from "../../layouts/noNavNoFooterLayout"
import MetamaskImg from '../../../public/MetamaskImg.png'
import nftCover from "../../../public/default-nft-cover-home.png"
import fundoNft from "../../../public/space/fundoNft.png"

import { FaAngleLeft } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'


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
    title: "The Communicador",
    image: nftCover.src,
    creator: "METASPRAY",
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
    <Box width="100%" height="100%">
      <Center
        position="relative" bg="#0A03AB"
      >
        <Box textAlign="center" position="absolute">
          <Heading
            fontSize="35px"
            lineHeight="45px"
            fontWeight="extrabold"
            mt="30px"
            color="#FFFFFF"
          >
          </Heading>
        </Box>
        <Box ml="80%" cursor="pointer">
          <Center
            mt="20px"
            bg="#FFFFFF"
            w="68px"
            h="68px"
            borderRadius="50%"
          >
            <ChakraImage
              alt="Metamask"
              src={MetamaskImg.src}
            >
            </ChakraImage>
          </Center>
        </Box>
      </Center>
      <Flex flexWrap="wrap" maxW="1367px" bg="#0A03AB">
        {isRouteReady && (
          <>
            <Box>
              <Center
                w="36px"
                h="36px"
                p="0 10px"
                border="1px solid #FFFFFF"
                ml="20px"
                onClick={() => router.push('/')}
                cursor="pointer"
              >
                <FaAngleLeft color='#FFFF'/>
              </Center>
              <Box p="0 100px">
                <Flex height="380px">
                  <Box
                    border="1px"
                    borderColor="#FFFFFF"
                    h="380px"
                    w="36px"
                    mr="10px"
                  >
                    <Box
                      borderTop="1px"
                      borderColor="#FFFFFF"
                      mt="340px"
                    >
                    </Box>
                  </Box>
                  <Image
                    height="380px"
                    width="380px"
                    src={fundoNft.src}
                    alt="nft"
                  />
                </Flex>
              </Box>
            </Box>
            <Box minW="450px" p="0 60px" flex="1" borderLeft="1px solid #DFDFDF">
              <Heading mt="25px"
                fontFamily= "PT Serif"
                fontStyle= "Bold"
                fontSize= "32px"
                lineHeight= "42px"
                color="#FFFFFF"
              >
                {data.title}
              </Heading>
              <Text
                mt="5px"
                mb="25px"
                color="#FFFFFF"
                fontFamily= "Roboto"
                fontStyle= "Regular"
                fontSize= "16px"
                lineHeight= "19px"
                fontWeight="thin"
              >
                By Cadumen
              </Text>
              <Flex>
                <Badge
                  mr="19px"
                  color="#A19D9D"
                  bg="#f2f2f2"
                  borderRadius="38px"
                  p="5px 15px"
                >
                0xb236...
                </Badge>
                <Icon fontSize="25px" color="#0A03AB" as={Copy}></Icon>
                <Text
                  fontFamily="Roboto"
                  fontStyle="Regular"
                  fontSize="16px"
                  lineHeight="19px"
                  color="#FFFFFF"
                  ml="25px"
                >
                  60/499
                </Text>
              </Flex>
              <Text
                color="#FFFFFF"
                fontSize="14px"
                mt="38px"
                fontWeight="normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed amet augue odio gravida nunc risus elit tellus.
              </Text>
              <Box>
                <Text
                  color="gray.500"
                  mt="40px"
                  mb="4px"
                  fontSize="16px"
                >
                  Criador
                </Text>
                <Flex alignItems="center">
                  <Text color="#FFFFFF" >{data.creator}</Text>
                </Flex>
              </Box>
              <Flex mt="38px" alignItems="center">
                <Flex
                  w="190px"
                  h="63px"
                  alignItems="center"
                  border="1px solid"
                  borderColor="gray.100"
                >
                  <Box p="0 10px">
                    <Text fontSize="14px" fontWeight="thin" color="#FFFFFF">
                      FIXED PRICE
                    </Text>
                    <Text fontSize="14px" fontWeight="bold" color="#FFFFFF">
                      {data.price}
                    </Text>
                  </Box>
                </Flex>
                <Box
                  w="78px"
                  h="63px"
                  alignItems="center"
                  justifyContent="space-around"
                  border="1px solid"
                  borderColor="gray.100"
                >
                  <ChakraButton
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="0"
                    _hover={{ bg: '' }}
                    _focus={{ outline: 0 }}
                    w="100%"
                    h="100%"
                    p="0"
                    onClick={triggerPaymentModal }
                  >
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      h="40px"
                      w="40px"
                    >
                      <BsCart2 color='#FFFFFF' size={30}/>
                    </Flex>
                  </ChakraButton>
                </Box>
                {type === 'multiple' && (
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
      <Box
        bg="#0A03AB"
        h="138px"
      >
      </Box>
    </Box>
  )
}

nft.getLayout = function getLayout(page: ReactElement) {
  return <NoNavNoFooterLayout>{page}</NoNavNoFooterLayout>
}
