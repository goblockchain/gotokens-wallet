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
import React from 'react'
import Image from 'next/image'
import { FaCode } from 'react-icons/fa'

import { useRouter } from 'next/router'

interface NftCardProps {
  data: {
    name: string
    nftCover: string
    avatar?: string
    options?: Array<{ title: string, icon: string }>
    type: 'marketplace' | 'editable' | 'readOnly' | 'preview'
    quantity: 'single' | 'multiple'
    marketplace?: {
      type: 'fixedPrice' | 'indeterminatedAuction' | 'timedAuction'
      fixedPrice?: string
      PriceBRL?: string
      stockNft?: string
      quantityNft?: string
      about?: string
      throw?: string
      stock?: number | string
      currentBid?: number | string
      starsAt?: number | string
      finishesAt?: number | string
    }
  }
}
export function NFTCardStore ({ data }: NftCardProps) {
  const router = useRouter()
  function goTo (hash: string = 'hash') {
    if (data.type === 'preview') return
    router.push(`/nft/${hash}`)
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
      m="15px"
      width="max-content"
    >
      {data.type !== 'preview' && (
        <Flex>
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
        onClick={() => goTo()}
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
          <Image
            height="269px"
            width="235px"
            src={data.nftCover ? data.nftCover : '/default-nft-cover.png'}
            alt="nft"
          />
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
                label={data.name}
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
                  {data.name || 'Título do NFT'}
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
                    Cadumen
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
                    499/499
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
                0.2 ETH
              </Text>
            </Center>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
