import {
  Box,
  Flex,
  Text,
  Heading,
  Icon,
  Image as ChakraImage,
} from "@chakra-ui/react"

import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Button } from "../components"
import { FaQrcode, FaPen } from "react-icons/fa"

import { useRouter } from "next/router"

export function SpaceLayout({ children }) {
  const router = useRouter()
  function handleQuery(tab) {
    router.query.tab = tab
    router.push(router)
  }

  const filtrData = {
    name:'Filtr Store',
    avatar: '/filtr/filtr-store-avatar.png',
    cover: '/filtr/filtr-store-cover.png',
    hasFto: false,

  }


  const data = {
    name:'Marcos Wendes',
    avatar: '/daniel-agua.png',
    cover: '/gamer-cover.png',
    hasFto: true,
  }
  const isRouteReady = router.isReady
  const isUserOwner = router.asPath.includes('/filtr/') ? false : true
  const spaceData = router.asPath.includes('/filtr/') ? filtrData : data
  return (
    <>
      <Box mb="50px" width="100%">
        <Box position="relative">
          <ChakraImage
            objectFit="cover"
            width="100%"
            height={{ base: "180px", md: "280px" }}
            src={spaceData.cover}
          />
        </Box>
        <Flex px={{ base: "22px", md: "52px", xl: "32px", "2xl": "72px" }} flexDir="column">
          <Box
            flexDir={{ base: "column", lg: "row" }}
            mx="auto"
            display="flex"
            position="relative"
            zIndex="10"
          >
            <ChakraImage
              backgroundColor="gray"
              borderRadius="50%"
              border="8px solid #fff"
              height="195px"
              width="195px"
              mt="-100px"
              src={spaceData.avatar}
            />
            <Box
              position={{ lg: "absolute", sm: "static" }}
              left="100%"
              textAlign="center"
              alignSelf="center"
              width="fit-content"
              mt="17px"
            >
              <Text fontSize="18px" fontWeight="bold" color="gray.200">
                Espaço criado por
              </Text>
              {isRouteReady &&
              <Text fontSize="18px" fontWeight="bold">
                {spaceData.name}
              </Text>
              }
            </Box>
          </Box>
          <Flex mt="-80px" justifyContent="space-between">
            <Button display="flex" variant="unstyled" border="1px solid #DFDFDF" borderRadius="10px" onClick={() => router.push("/user/me")}>
              <ChevronLeftIcon w="20px" h="20px" color="gray.500" />
            </Button>
            { isUserOwner && isRouteReady && <Flex flexDirection={{ base: "column", md: "row" }}>
                <Button
                  onClick={() => router.push("/manage-space")}
                  variant="unstyled"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="15px"
                  mr="13px"
                >
                  <Icon color="gray.400" as={FaPen}></Icon>
                </Button>
                <Button
                  variant="unstyled"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="15px"
                  margin={{ base: "13px 13px 0 0", md: "0" }}
                >
                  <Icon color="gray.400" as={FaQrcode}></Icon>
                </Button>
              </Flex>}
          </Flex>
        </Flex>
        <Box px={{ base: "22px", md: "52px", xl: "32px", "2xl": "72px" }}>
          <Box>
            {isRouteReady &&

            <Heading textAlign="center" mt="67px">
             {spaceData.name}
            </Heading>
            }
          </Box>
          {isRouteReady && (


          <Flex mt="38px" justifyContent="center">
            <Button onClick={() => handleQuery("nft")} w="130px" mr="33px">
              NFT
            </Button>
            {spaceData.hasFto ?  <Button onClick={() => handleQuery("fto")} w="130px">
              Fan Token
            </Button> :

            <Button  >
              Benefícios exclusivos
            </Button>
            }

          </Flex>
          )}
          {children}
        </Box>
      </Box>
    </>
  )
}
