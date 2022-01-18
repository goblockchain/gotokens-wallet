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
} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import React from "react"
import Image from "next/image"
import { FaCode } from "react-icons/fa"

import { Avatar } from "../Avatar"
import { useRouter } from "next/router"

interface NftCardProps {
  data: {
    name: string
    owner: string
    nftCover: string
    avatar?: string
    options?: { title: string; icon: string }[]
    type: "marketplace" | "editable" | "readOnly" | "preview"
    quantity: "single" | "multiple"
    marketplace?: {
      type: "fixedPrice" | "indeterminatedAuction" | "timedAuction"
      fixedPrice?: string
      stock?: number | string
      currentBid?: number | string
      starsAt?: number | string
      finishesAt?: number | string
    }
  }
}
export function NFTCard({ data }: NftCardProps) {
  // const breakpoints = createBreakpoints({
  //   sm: "320px",
  //   md: "768px",
  //   lg: "960px",
  //   xl: "1200px",
  // })
  const breakpoints = createBreakpoints({
    sm: "15em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })

  const router = useRouter()
  function goTo(hash: string = "hash") {
    if (data.type === "preview") return
    router.push(`/nft/${data.name}`)
  }

  return (
    <Box
      background="0"
      position="relative"
      _hover={
        data.type !== "preview" && {
          transform: "translateY(-4px)",
        }
      }
      transition="all 500ms"
      mt="15px"
      // width="100%"
      width={{ base: "280px", sm: "290px" }}
    >
      {data.type !== "preview" && (
        <Flex>
          <Menu placement="bottom">
            <MenuButton fontSize="18px" fontWeight="bold">
              ...
            </MenuButton>
            <MenuList>
              {data.options?.map((option) => (
                <MenuItem
                  key={option.title}
                  _hover={{ background: "yellow.500" }}
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
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onClick={() => goTo()}
        position="relative"
        background="#fff"
      >
        <Flex width={{ base: "280px", sm: "290px" }}>
          {data.type === "readOnly" ? (
            <Image
              height="269px"
              width="241px"
              src={data.nftCover ? data.nftCover : "/default-nft-cover.png"}
              alt="nft"
            />
          ) : (
            <Image
              height="269px"
              width="290px"
              src={data.nftCover ? data.nftCover : "/default-nft-cover.png"}
              alt="nft"
            />
          )}
        </Flex>

        <Flex
          width={{ base: "280px", sm: "290px" }}
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
                  color="gray.400"
                  fontSize="18px"
                >
                  {data.name || "Título do NFT"}
                </Heading>
              </Tooltip>

            </Box>
          </Flex>
          {data.type !== "readOnly" && (
            <Flex mt="16px" justifyContent="space-between">
              {data.marketplace?.type === "fixedPrice" ? (
                <Box>
                  <Text>Preço Fixo:</Text>
                  <Text>{data.marketplace?.fixedPrice}</Text>
                </Box>
              ) : (
                <>
                  <Box>
                    <Text fontSize="12px" fontWeight="300">
                      LANCE ATUAL
                    </Text>
                    <Text fontWeight="bold" fontSize="12px">
                      {data.marketplace?.currentBid}
                    </Text>
                  </Box>
                  {data.marketplace?.type === "timedAuction" && (
                    <Box>
                      <Text fontSize="12px" fontWeight="300">
                        ACABA EM
                      </Text>
                      <Text fontWeight="bold" fontSize="12px">
                        {data.marketplace?.finishesAt}
                      </Text>
                    </Box>
                  )}
                  {data.quantity === "multiple" && (
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
        {data.quantity === "multiple" && (
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
