import {
    Box,
    Flex,
    Heading,
    Text,
    Tooltip,
  } from "@chakra-ui/react"
  import React from "react"
  import Image from "next/image"
  import { Button } from ".."
  import { FaCode } from "react-icons/fa"
  
  import { useRouter } from "next/router"
  
  interface NftCardProps {
    data: {
      name: string
      nftCover: string
      avatar?: string
      options?: { title: string; icon: string }[]
      type: "marketplace" | "editable" | "readOnly" | "preview"
      quantity: "single" | "multiple"
      marketplace?: {
        type: "fixedPrice" | "indeterminatedAuction" | "timedAuction"
        fixedPrice?: string
        modoCompra?: string
        price?: string
        button?: string
        stock?: number | string
        currentBid?: number | string
        starsAt?: number | string
        finishesAt?: number | string
      }
    }
  }
  export function NFTCardStorePop({ data }: NftCardProps) {
    const router = useRouter()
    function goTo(hash: string = "hash") {
      if (data.type === "preview") return
      router.push(`/nft/${hash}`)
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
            m="15px"
            width="max-content"
        >

            <Flex background="#fff" width="100%" justifyContent="space-around" >
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
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="16px"
                    >
                        {data.name || "Título do NFT"}
                    </Heading>
                    </Tooltip>
                </Box>
            </Flex>
            <Box
            mt="10px"
            width="max-content"
            onClick={() => goTo()}
            position="relative"
            background="#fff"
            border="1.5px solid #e2e2e2"
            borderRadius="15px"
            overflow="hidden"
            >
            <Flex>
                {data.type === "readOnly" ? (
                <Image
                    height="269px"
                    width="210px"
                    src={data.nftCover ? data.nftCover : "/default-nft-cover.png"}
                    alt="nft"
                />
                ) : (
                <Image
                    height="269px"
                    width="225px"
                    src={data.nftCover ? data.nftCover : "/default-nft-cover.png"}
                    alt="nft"
                />
                )}
            </Flex>
    
            <Flex
                background="#fff"
                borderRadius="0 0 15px 15px"
                p="18px 18px"
                flexDirection="column"
                borderTop="none"
            >
                
                {data.type !== "readOnly" && (
                <Flex mt="16px" justifyContent="space-around">
                    {data.marketplace?.type === "fixedPrice" ? (
                    <Flex justifyContent="space-around">
                        <Box textAlign="left"  >
                            <Text
                            fontWeight= "300"
                            fontSize="10px"
                            lineHeight="12px"
                            color="#454545"
                            >
                                {data.marketplace?.modoCompra}
                            </Text>
                            <Text 
                            mt="2px"
                            fontWeight= "bold"
                            fontSize="10px"
                            lineHeight="12px"
                            color="#454545"
                            >
                            {data.marketplace?.fixedPrice}
                            </Text>
                            <Text
                            mt="2px"
                            fontWeight= "bold"
                            fontSize="10px"
                            lineHeight="12px"
                            color="#A19D90"
                            >
                                {data.marketplace?.price}
                            </Text>
                            
                        </Box>
                        <Button
                        height="34px"
                        width="102px"
                        borderRadius= "45px"
                        ml="15px"
                        fontSize="14px"
                        > 
                            {data.marketplace?.button}
                        </Button>
                    </Flex>
                    
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
  