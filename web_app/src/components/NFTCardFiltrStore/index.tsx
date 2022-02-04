import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  Center
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { Button } from '../../components'
import { FaCode } from 'react-icons/fa'

import { useRouter } from 'next/router'

import axios from 'axios';

interface NftCardProps {
  data: {
    name: string
    nftCover: string
    options?: Array<{ title: string, icon: string }>
    type: 'marketplace' | 'editable' | 'readOnly' | 'preview'
    quantity: 'single' | 'multiple'
    
  }
}
export function NFTCardStore ({ data }: NftCardProps) {
  const [nftData, setNftData] = useState({});

  async function fetchEmployees() {
    const result = await data.contract.methods.token_uri(data.tokenId).call(); 
    try {
      let { data } = await axios.get(result);
      setNftData(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  const router = useRouter()
  function goTo (hash: string = 'hash') {
    if (data.type === 'preview') return
    router.push(`/nft/${hash}?token=${hash}`)
  }

  return (
    <Box
      background="0"
      position="relative"
      _hover={
        data.type !== 'preview' && {
          transform: 'translateY(-4px)'
        }
      }
      transition="all 500ms"
      m={{ base: '0px', md: '5px', xl: '15px' }}
      width="max-content"
    >
      {data.type !== 'preview' && (
        <Flex ml="7px">
          <Menu placement="bottom" >
            {/* ml="auto" mr="10px" */}
            <MenuButton fontSize="25px" fontWeight="bold" color="#FFFFFF" >
                ...
            </MenuButton>
            <MenuList ml="30px">
              {data.options?.map((option) => (
                <MenuItem
                  key={option.title}
                  _hover={{ background: 'yellow.500' }}
                  icon={<FaCode />}
                >
                  {option.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      )}

      <Box
        width="max-content"
        onClick={(e) => console.log(data)}
        position="relative"
        background="transparent"
      >
        <Flex mb="10px">
          <Box
            border="1px"
            borderColor="#FFFFFF"
            w="40px"
            mr="10px"
          >
            <Box
              borderTop="1px"
              borderColor="#FFFFFF"
              w="40px"
              h="40px"
              mt="230px"
            >
            </Box>
          </Box>
          <iframe src={nftData.url} width={'100%'}></iframe>
        </Flex>
        <Flex
          background="#000"
          flexDirection="column"
        >
          <Flex background="#000" width="100%" justifyContent="space-between" >
            <Box border="1px" borderColor="#FFFFFF" w="100%">
              <Tooltip
                fontWeight="bold"
                bg="dark"
                aria-label="A tooltip"
                // label={data.name}
                label={nftData.name}
                hasArrow
              >
                <Heading
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxW="180px"
                  color="#FFFF"
                  p="5px 7px"
                  fontFamily= "Roboto"
                  fontStyle= "normal"
                  fontWeight= "bold"
                  fontSize= "18px"
                  lineHeight= "21px"
                >
                  {/* {data.name || 'Título do NFT'} */}
                  {nftData.name || 'Título do NFT'}
                </Heading>
              </Tooltip>
              <Flex borderBottom="block" >
                <Box
                  borderTop="1px"
                  borderColor="#FFFFFF"
                  p="2px 5px"
                  w="100%"
                >
                  <Text
                    color="#FFFFFF"
                    fontFamily= "Roboto"
                    fontStyle= "normal"
                    fontWeight= "bold"
                    fontSize= "18px"
                    lineHeight= "21px"
                  >
                    {/* {nftData.checksum} */}
                    {String(nftData.checksum).substring(0, 23) +
                      '...' +
                      String(nftData.checksum).substring(38)}
                  </Text>
                </Box>
                <Center
                  border="1px"
                  borderBottom="0"
                  borderRight="0"
                  borderColor="#FFFFFF"
                  p="0 5px"
                >
                  <Text
                    color="#FFFFFF"
                    fontFamily= "Roboto"
                    fontStyle= "normal"
                    fontWeight= "bold"
                    fontSize= "11px"
                    lineHeight="12px "
                  >
                    {/* 499/499 */}
                    {data.amount}
                  </Text>
                </Center>
              </Flex>
            </Box>
            <Center border="1px" borderColor="#FFFFFF" p="0 10px" borderLeft="0">
              <Text
                color="#FFFFFF"
                fontFamily= "Roboto"
                fontStyle= "normal"
                fontWeight= "bold"
                fontSize= "10px"
                lineHeight="12px "
                w="40px"
              >
                { (parseFloat(data.price) / (10 ** 18)).toFixed(5) } ETH
              </Text>
            </Center>
          </Flex>
          <Box
            mt="10px"
          >
            <Button
              onClick={() => goTo(data.tokenId)}
            >
              Comprar
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
