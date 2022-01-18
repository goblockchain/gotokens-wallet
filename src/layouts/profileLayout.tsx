import {
  Box,
  Flex,
  Text,
  Heading,
  List,
  Icon,
  Tooltip,
  Image,
  Badge,
  Button as ChakraButton,
  Input as ChakraInput,
} from "@chakra-ui/react"
import React, { ReactElement, useState } from "react"

import { AddIcon } from "@chakra-ui/icons"

import { FaCamera, FaPen } from "react-icons/fa"
import { NFTCard, Button, Input } from "../components"
import router, { Router } from "next/router"
import Head from "next/head"
import { Copy, SwitchIcon } from "../styles/CustomIcons"
import { useEffect } from "react"
import { Nft, User } from "../types"
import { api } from "../services/api"
import { useRouter } from "next/router"
import { useNotification } from "../hooks/NotificationContext"
import AppLayout from "./appLayout"
import { message } from "../components/EditProfileModal"
import { twitterModal } from "../components/VerifyTwitterModal"
import { instagramModal } from "../components/VerifyInstagramModal"

const filters = ["Dashboard", "Minhas NFTs", "Em venda", "Rascunho"]
export default function profileLayout({ children }) {
  const [tooltipText, setTooltipText] = useState("Clique aqui para copiar")

  const [loggedUser, setLoggedUser] = useState({} as User)
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState("")

  /*   useEffect(() => {
    if (typeof window !== "undefined") {
      const storagedUser = JSON.parse(window.localStorage.getItem("@user"))
      setLoggedUser(storagedUser)
      api.defaults.headers = { Authorization: `Bearer ${storagedUser.token}` }
      api.get("/nft").then((response) => setNfts(response.data))
    }
  }, []) */

  useEffect(() => {
    if (!router.query.tab) {
      setSelectedFilter("Dashboard")
      return
    }
    setSelectedFilter(router.query.tab as string)
  }, [router.query.tab])
  const { emitModal } = useNotification()

  function handleQuery(tab) {
    router.query.tab = tab
    router.push(router)
  }

  const editProfile = () => {
    emitModal({ message, options: { size: "5xl", isCentered: true } })
  }

  const verifyTwitter = () => {
    emitModal({
      message: twitterModal,
      options: { size: "md", isCentered: true },
    })
  }
  const verifyInstagram = () => {
    emitModal({
      message: instagramModal,
      options: { size: "md", isCentered: true },
    })
  }
  return (
    <AppLayout>
      <Head>
        <title>GoTokens | Perfil</title>
      </Head>
      <Box mb="50px" width="100%">
        <Flex
          flexDirection={{ base: "column", xl: "row" }}
          p="0 30px"
          maxWidth="1360px"
          m="0 auto"
        >
          <Box
            alignSelf={{ base: "center", lg: "start" }}
            minW="305px"
            mr={{ base: "0" }}
            flexDir="column"
          >
            {!loggedUser ? (
              <Image
                backgroundColor="gray"
                borderRadius="50%"
                border="8px solid #fff"
                height="195px"
                width="195px"
                mb="25px"
                src="/default-cover.png"
              />
            ) : (
              <Flex>
                <Box
                  backgroundColor="gray.200"
                  borderRadius="50%"
                  border="8px solid #fff"
                  height="195px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="195px"
                  mb="25px"
                >
                  <Icon color="#A19D9D" w="58px" h="58px" as={FaCamera}></Icon>
                </Box>
                <ChakraButton
                  background="#fff"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid"
                  borderColor="gray.100"
                  ml="15px"
                  cursor="pointer"
                  mr="28px"
                  mt="45px"
                  w="36px"
                  h="36px"
                  borderRadius="10px"
                  _hover={{ borderColor: "yellow.500" }}
                  onClick={editProfile}
                >
                  <Icon color="gray.500" as={FaPen} />
                </ChakraButton>
              </Flex>
            )}
            <Flex alignItems="center" mt="25px">
              <Heading color="gray.500">
                Nome Usuário
                {loggedUser?.user?.fullName}
              </Heading>
            </Flex>
            <Flex mt="10px">
              <Text mr="26px" fontWeight="bold">
                Nome de usuário {loggedUser?.user?.username}
              </Text>
              <Badge
                p="5px 19px"
                color="gray.300"
                borderRadius="38px"
                textTransform="none"
                fontWeight="bold"
                bg="#f2f2f2"
              >
                0xb236
              </Badge>

              <Tooltip hasArrow bg="black" label={tooltipText}>
                <Box ml="20px">
                  <Icon
                    as={Copy}
                    cursor="pointer"
                    fontSize="20px"
                    color="yellow.500"
                    onMouseOver={() =>
                      setTooltipText("Clique aqui para copiar")
                    }
                    onClick={() => {
                      navigator.clipboard.writeText("0xb2364j982t")
                      setTooltipText("Copiado")
                    }}
                  />
                </Box>
              </Tooltip>
            </Flex>
            <Text color="#A19D9D" fontWeight="normal" mt="40px">
              Clique para adicionar sua bio...
            </Text>
            <Box
              marginTop="20px"
              paddingTop="20px"
              borderTop="1.5px solid"
              borderColor="gray.200"
            >
              <Text fontWeight="bold">Links</Text>
            </Box>
            <List
              spacing={5}
              borderBottom="1.5px solid #BDBDBD"
              mb="30px"
              p="20px 0"
            >
              <Box alignItems="flex-end" display="flex">
                <Box display="flex">
                  <Image
                    src="/twitter-logo.png"
                    objectFit="contain"
                    w="26px"
                    h="24px"
                  />
                </Box>
                <Flex
                  width="28px"
                  height="28px"
                  ml="10px"
                  p="2px 8px"
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius="50%"
                  cursor="pointer"
                  alignItems="center"
                  onClick={verifyTwitter}
                >
                  <AddIcon color="#A19D9D" w="10px" h="10px"></AddIcon>
                </Flex>
              </Box>
              <Box alignItems="center" display="flex">
                <Box display="flex">
                  <Image
                    src="/instagram-logo.png"
                    objectFit="contain"
                    w="26px"
                    h="24px"
                  />
                </Box>
                <Flex
                  width="28px"
                  height="28px"
                  ml="10px"
                  p="2px 8px"
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius="50%"
                  cursor="pointer"
                  alignItems="center"
                  onClick={verifyInstagram}
                >
                  <AddIcon color="#A19D9D" w="10px" h="10px"></AddIcon>
                </Flex>
              </Box>
            </List>
            <Text mt="20px" fontWeight="bold">
              Membro desde 2021
            </Text>
          </Box>

          <Flex
            flexDirection="column"
            alignItems="flex-start"
            ml={{ base: "0", xl: "89px" }}
            width="100%"
          >
            <Box
              mb="27px"
              mt="30px"
              paddingBottom="15px"
              w="100%"
              borderBottom="1px solid"
              borderColor="gray.100"
            >
              <Flex alignItems="center">
                <Heading>NFT</Heading>
              </Flex>
            </Box>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              display={{ base: "block", lg: "flex" }}
              mb="38px"
              width="100%"
            >
              <Box>
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    borderRadius="0"
                    variant="unstyled"
                    _hover={{
                      color:
                        selectedFilter === filter ? "yellow.500" : "buddha",
                    }}
                    width="fit-content"
                    p="0"
                    value={filter}
                    mr="20px"
                    color={
                      selectedFilter === filter ? "yellow.500" : "gray.400"
                    }
                    onClick={(e) => {
                      setSelectedFilter(e.currentTarget.value)
                      handleQuery(e.currentTarget.value)
                    }}
                  >
                    {filter}
                  </Button>
                ))}
              </Box>
              <Button
                onClick={() => router.push("/user/space?tab=nft")}
                mt={{ base: "20px", lg: "0" }}
                maxW="250px"
              >
                <Image
                  src="/icons/market-place.png"
                  width="21px"
                  height="21px"
                  mr="10px"
                />
                Gerenciar meu espaço
              </Button>
            </Flex>
            {children}
          </Flex>
        </Flex>
      </Box>
    </AppLayout>
  )
}
