import { CheckIcon, Icon } from "@chakra-ui/icons"
import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react"
import { Button } from "../Button"
import React from "react"

export function CreatorsCard({ data }) {
  return (
    <Box
      maxW="290px"
      border="1px solid"
      borderColor={data.type === "Embaixador" ? "blue.500" : "#dfdfdf"}
      borderRadius="15px"
      background="#fff"
      p="14px"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow:
          "0 1.3px 6px rgba(0, 0, 0, 0.025), 0 10px 48px rgba(0, 0, 0, 0.05)",
      }}
      transition="all 500ms"
    >
      <Box>
        <Image
          width="264px"
          height="105px"
          src={data.cover || "/default-nft-cover.png"}
          alt="creator cover"
        />
      </Box>

      <Box p="0 15px">
        <Flex>
          <Image
            height="71px"
            width="71px"
            src={data.avatar || "/default-nft-cover.png"}
            alt="creator picture"
            borderRadius="50%"
            border="8px solid #fff"
            mt="-30px"
            borderColor={data.type === "Embaixador" && "#FFE389"}
          />
        </Flex>
        <Heading mt="20px">{data.name}</Heading>
        <Text fontWeight="bold" color="#C8C8C8" mt="5px">
          {data.username}
        </Text>

        <Text mt="20px">{data.bio}</Text>

        <Flex m="30px 0" flexDirection="column">
          <Flex>
            <Image src="/instagram-logo.png" width="21px" height="21px" />
            <Text ml="16px">
              Instagram <Icon as={CheckIcon} color="yellow.500" />
            </Text>
          </Flex>
          <Flex mt="10px">
            <Image src="/twitter-logo.png" width="26px" height="23px" />
            <Text ml="10px">
              Twitter <Icon as={CheckIcon} color="yellow.500" />
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent="space-between">
          <Box>
            <Text>2.456</Text>
            <Text>Seguidores</Text>
          </Box>
          {data.type !== "Embaixador" && <Button>Seguir</Button>}
        </Flex>
      </Box>
    </Box>
  )
}
