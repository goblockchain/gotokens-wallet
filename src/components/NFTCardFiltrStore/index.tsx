import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip
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
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function NFTCardStore ({ data }: NftCardProps) {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
            <MenuButton fontSize="25px" fontWeight="bold" >
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
        background="#fff"
      >
        <Flex>
          {data.type === 'readOnly' ? (
            <Image
              height="269px"
              width="201px"
              src={data.nftCover ? data.nftCover : '/default-nft-cover.png'}
              alt="nft"
            />
          ) : (
            <Image
              height="269px"
              width="235px"
              src={data.nftCover ? data.nftCover : '/default-nft-cover.png'}
              alt="nft"
            />
          )}
        </Flex>

        <Flex
          border="1.5px solid #e2e2e2"
          background="#fff"
          borderRadius="0 0 15px 15px"
          p="18px 26px"
          flexDirection="column"
        >
          <Flex background="#fff" width="100%" justifyContent="space-between">
            <Box>
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
                  color="#454545"
                  fontSize="16px"
                >
                  {data.name || 'Título do NFT'}
                </Heading>
              </Tooltip>
            </Box>
          </Flex>
          {data.type !== 'readOnly' && (
            <Flex mt="16px" justifyContent="space-between">
              {data.marketplace?.type === 'fixedPrice' ? (
                <Box>
                  <Flex justifyContent="space-between" w="180px">
                    <Box>
                      <Text
                        fontWeight= "300"
                        fontSize="11px"
                        lineHeight="12px"
                        color="#454545"
                      >
                          PREÇO FIXO:
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight= "300"
                        fontSize="11px"
                        lineHeight="12px"
                        color="#454545"
                      >
                        {data.marketplace?.stockNft}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex>
                    <Text
                      mt="7px"
                      fontWeight= "bold"
                      fontSize="11px"
                      lineHeight="12px"
                      color="#454545"
                    >
                      {data.marketplace?.fixedPrice}
                    </Text>
                    <Text
                      mt="7px"
                      fontWeight= "bold"
                      fontSize="11px"
                      lineHeight="12px"
                      color="#A19D9D"
                      ml="10px"
                    >
                      {data.marketplace?.PriceBRL}
                    </Text>
                    <Text
                      mt="7px"
                      fontWeight= "bold"
                      fontSize="11px"
                      lineHeight="12px"
                      color="#454545"
                      ml="35px"
                    >
                      {data.marketplace?.quantityNft}
                    </Text>
                  </Flex>
                </Box>
              ) : (
                <>
                  <Box>
                    <Flex justifyContent="space-between" w="180px">
                      <Box>
                        <Text
                          fontWeight= "300"
                          fontSize="11px"
                          lineHeight="12px"
                          color="#454545"
                        >
                            LANCE MIN
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontWeight= "300"
                          fontSize="11px"
                          lineHeight="12px"
                          color="#454545"
                        >
                          {data.marketplace?.about}
                        </Text>
                      </Box>
                    </Flex>
                    <Flex>
                      <Text
                        mt="7px"
                        fontWeight= "bold"
                        fontSize="11px"
                        lineHeight="12px"
                        color="#454545"
                      >
                        {data.marketplace?.fixedPrice}
                      </Text>
                      <Text
                        mt="7px"
                        fontWeight= "bold"
                        fontSize="11px"
                        lineHeight="12px"
                        color="#A19D9D"
                        ml="10px"
                      >
                        {data.marketplace?.PriceBRL}
                      </Text>
                      <Text
                        mt="7px"
                        fontWeight= "bold"
                        fontSize="11px"
                        lineHeight="12px"
                        color="#454545"
                        ml="15px"
                      >
                        {data.marketplace?.throw}
                      </Text>
                    </Flex>
                  </Box>
                  {data.marketplace?.type === 'timedAuction' && (
                    <Box>
                      <Text fontSize="12px" fontWeight="300">
                          ACABA EM
                      </Text>
                      <Text fontWeight="bold" fontSize="12px">
                        {data.marketplace?.finishesAt}
                      </Text>
                    </Box>
                  )}
                  {data.quantity === 'multiple' && (
                    <Box>
                      <Text fontSize="12px" fontWeight="300">
                          Estoque
                      </Text>
                      <Text fontWeight="bold" fontSize="12px">
                        {data.marketplace?.stock}
                      </Text>
                    </Box>
                  )}
                </>
              )}
            </Flex>
          )}
        </Flex>
        {data.quantity === 'multiple' && (
          <Box top="0" w="100%" h="100%" position="absolute">
            <Box
              zIndex="-1"
              transition="all 250ms"
              w="100%"
              h="100%"
              position="absolute"
              borderRadius="15px"
              border="1px solid"
              borderColor="#e2e2e2"
              top="2px"
              right="-4px"
            ></Box>
            <Box
              zIndex="-1"
              transition="all 250ms"
              w="100%"
              h="100%"
              position="absolute"
              borderRadius="15px"
              border="1px solid"
              borderColor="#e2e2e2"
              top="6px"
              right="-8px"
            ></Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
