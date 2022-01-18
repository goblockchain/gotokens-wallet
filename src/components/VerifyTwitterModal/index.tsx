import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react"
import React, { useState } from "react"
import { Button, Input } from ".."

export const twitterModal = ({ onClose }) => {
  const [step, setStep] = useState(0)

  const verify = () => {
    setStep(1)
  }
  return (
    <Flex
      maxW="360px"
      m="0 auto"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {step === 0 && (
        <>
          <Heading fontSize="26px">Verificar via Twitter</Heading>
          <Text mt="30px" color="#BDBDBD" fontSize="16px">
            Passo Um
          </Text>
          <Text maxW="340px" mt="8px" textAlign="center">
            Poste um tweet público que contenha o endereço de sua carteira
          </Text>
          <Flex
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            m="15px auto 0"
            w="100%"
            height="31px"
            maxWidth="310px"
            borderRadius="27px"
            background="#ECECEC"
            color="#A19D9D"
            fontSize="14px"
          >
            0x234E500d2345edC148d48545DOF450e93
          </Flex>

          <Button
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            mt="30px"
          >
            <Box>
              <Image
                src="/twitter-logo.png"
                objectFit="contain"
                w="26px"
                h="24px"
                mr="15px"
              />
            </Box>
            Postar Tweet
          </Button>

          <Text mt="30px" color="#BDBDBD" fontSize="16px">
            Passo Dois
          </Text>
          <Text mt="8px" textAlign="center">
            Cole o URL do tweet publicado para verificar sua conta
          </Text>
          <Input height="45px"></Input>

          <Button onClick={verify} mt="30px">
            Confirmar
          </Button>
        </>
      )}
      {step === 1 && (
        <>
          <Image src="/verify.png"></Image>
          <Text mt="30px">Seu Twitter foi verificado com sucesso!</Text>

          <Button mt="30px" onClick={onClose}>
            Concluir
          </Button>
        </>
      )}
    </Flex>
  )
}
