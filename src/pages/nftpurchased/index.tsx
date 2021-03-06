import React, { ReactElement } from 'react'
import {
  Box,
  Flex,
  Text,
  Icon,
  Badge,
  Center
} from '@chakra-ui/react'

import Nav from '../../components/NavSoLogin'

import NoNavNoFooterLayout from '../../layouts/noNavNoFooterLayout'

import bg from '../../../public/bgNftpurchased.png'

import { FaAngleLeft } from 'react-icons/fa'

import { useRouter } from 'next/router'
import { Copy } from '../../styles/CustomIcons'

export default function nftpurchased() {
const router = useRouter()
  return (
    <Box width="100%" height="100%" bgImage={`url(${bg.src})`} >
      <Nav/>
      <Flex
        flexWrap="wrap"
        maxW="1367px"
        justifyContent="space-around"
        mb={{ base: '138px', md: '1px', xl: '1px' }}
      >
        <Box>
          <Center
            w="36px"
            h="36px"
            p="0 10px"
            border="1px solid #DFDFDF"
            borderRadius="12px"
            bg="#FFFFFF"
            onClick={async () => router.push('/')}
            cursor="pointer"
            ml={{ base: '10px', md: '15px', xl: '20px' }}
            _hover={{
              transform: 'translateY(-4px)'
            }}
          >
            <FaAngleLeft color='#000000'/>
          </Center>
          <Box
            mt="20px"
            ml={{ base: '10px', md: '300px', xl: '600px' }}
          >
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
            </Flex>
          </Box>
        </Box>
        <Box
          p="0 60px"
          flex="1"
        >
          <Text
            mb="25px"
            color="#FFFFFF"
            fontFamily= "Roboto"
            fontStyle= "Regular"
            fontSize= "16px"
            lineHeight= "19px"
            fontWeight="thin"
            mt={{ base: '70px', md: '85px', xl: '100px' }}
          >
            Transaction complete, you legend!
          </Text>
          <Text
            fontFamily="PT Serif"
            color="#FFFFFF"
            fontSize="38px"
            lineHeight="48px"
            mt="15px"
            fontWeight="bold"
          >
            You`re now the owner of <br/> a street art masterpiece.
          </Text>
          <Text
            mt="10px"
            mb="25px"
            color="#FFFFFF"
            fontFamily= "Roboto"
            fontStyle= "Regular"
            fontSize= "16px"
            lineHeight= "19px"
            fontWeight="thin"
          >
            Don`t forget to unlock your perks once it`s in your wallet.
          </Text>
          <Flex>
            <Text
              mt="5px"
              fontFamily= "Roboto"
              fontStyle= "Bold"
              fontSize= "16px"
              lineHeight= "19px"
              color="#FFFFFF"
            >
              TxHash
            </Text>
            <Badge
              ml="15px"
              mr="19px"
              color="#A19D9D"
              bg="#f2f2f2"
              borderRadius="38px"
              p="5px 15px"
            >
            0xb236...
            </Badge>
            <Icon fontSize="25px" color="transparent" as={Copy}></Icon>
            <Center
              w="20px"
              h="20px"
              ml="10px"
              mt="4px"
              borderRadius="50%"
              color="#454545"
              border="1px solid #454545"
              bg="#FFFFFF"
            >
              ?
            </Center>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

nftpurchased.getLayout = function getLayout (page: ReactElement) {
  return <NoNavNoFooterLayout>{page}</NoNavNoFooterLayout>
}
