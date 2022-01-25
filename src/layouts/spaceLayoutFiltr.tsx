import{
  Box,
  Flex,
  Text,
  Heading,
  Image as ChakraImage,
  Center
} from "@chakra-ui/react"

import MetamaskImg from '../../public/MetamaskImg.png'
import bg from '../../public/fundoHome.png'

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
      <Box bg="black">
        <Center position="relative" zIndex="1">
          <Box textAlign="center" position="absolute">
            <Heading fontSize="35px"
              lineHeight="45px"
              fontWeight="extrabold"
              mt="30px"
              color="#FFFFFF"
            >
            METASPRAY
            </Heading>
          </Box>
          <Box ml="80%" cursor="pointer">
            <Center
              mt="20px"
              bg="#FFFFFF"
              w="70px"
              h="70px"
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
        <ChakraImage
          mt="-85px"
          w="100%"
          src={bg.src}
        ></ChakraImage>
        <Box mt="-290px" px={{ base: '22px', md: '52px', xl: '32px', '2xl': '72px' }}>
          <Box textAlign="center">
            <Heading
              color="#FFFFFF"
              fontFamily= "PT Serif"
              fontStyle= "normal"
              fontWeight= "bold"
              fontSize= "36px"
              lineHeight= "48px"
            >
              This NFT unlocks exclusive content
            </Heading>
            <Text
              fontFamily= "Inter"
              fontStyle= "normal"
              fontWeight= "normal"
              fontSize= "20px"
              color="#FFFFFF"
            >
              Game-ready 3D file | AR/VR view | Genesis Block Metaverse | HD Film renders | NFT short Film <br/>
              and early access to upcoming Metaspray projects
            </Text>
          </Box>
          <Flex mt="38px" justifyContent="center">
            <Button
              onClick={() => handleQuery('nft')}
              w="130px"
              mr="33px"
              colorScheme='blue'
            >
              collect
            </Button>
            <Button
              onClick={() => handleQuery('fto')}
              w="230px">
              Unlock Extra Content
            </Button>
          </Flex>
          {children}
        </Box>
        <Footer/>
      </Box>
  </>
)
}
  