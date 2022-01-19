import {
    Box,
    Flex,
    Text,
    Heading,
    Image as ChakraImage,
  } from "@chakra-ui/react"

  import { AiFillStar } from "react-icons/ai";
  
  import { Button } from "../components"
  import { Footer } from "../components/NFTCardFooter/Footer"
  
  import { useRouter } from "next/router"
  
  export function SpaceLayoutFiltr({ children, user }) {
    const router = useRouter()
    function handleQuery(tab) {
      router.query.tab = tab
      router.push(router)
    }
return (
  <>
    <Box  width="100%" >
      <Box position="relative" >
        <ChakraImage
          objectFit="cover"
          width="100%"
          height={{ base: "180px", md: "280px" }}
          src="/space/gotokens-cover.png"
        />
      </Box>
      <Flex px="31px" flexDir="column">
        <Box
          flexDir={{ base: "column", lg: "row" }}
          mx="auto"
          display="flex"
          position="relative"
          zIndex="10"
        >
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="50%"
            border="12px solid #fff"
            height="200px"
            width="220px"
            mt="-107px"
          >
            <ChakraImage
              borderRadius="50%"
              border="1px solid #009FE3"
              height="200px"
              width="220px"
              src="/space/gb-avatar.png"
            >
            </ChakraImage>
          </Box>
          <Box
            position={{ lg: "absolute", sm: "static" }}
            left="100%"
            textAlign="left"
            alignSelf="center"
            width="120px"
          >
            <Text  lineHeight="16px" fontSize="14px" fontWeight="normal" color="#A19D9D">
              Espaço criado por
            </Text>
            <Text lineHeight="16px" fontSize="14px" fontWeight="bold" mt="5px" color="#454545">
              {user}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box px={{ base: "22px", md: "52px", xl: "32px", "2xl": "72px" }}>
        <Box textAlign="center">
          <Heading fontSize="32px" lineHeight="37px" mt="24px" color="#454545">
          Espaço goBlockchain
          </Heading>
        </Box>
        {children}
      </Box>
      <Footer/>
    </Box>
  </>
)
}
  