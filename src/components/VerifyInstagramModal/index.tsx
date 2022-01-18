import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react"
import React, { useState } from "react"
import { Button } from ".."

export const instagramModal = ({ onClose }) => {
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
      textAlign="center"
    >
      {step === 0 && (
        <>
          <Heading fontSize="26px">Verificar via Twitter</Heading>
          <Text mt="30px" color="#BDBDBD" fontSize="16px">
            Passo Um
          </Text>
          <Text maxW="340px" mt="8px" textAlign="center">
            Conecte-se com o Instagram para verificar sua conta
          </Text>

          <Text fontWeight="400" fontSize="14px" color="#454545" mt="30px">
            Uma conta autenticada ajuda a passar credibilidadde para seu perfil
            como criado.
          </Text>

          <Flex
            mt="15px"
            alignItems="center"
            justifyContent="center"
            w="100%"
            borderRadius="74px"
            background="#F5F5F5"
          >
            <Text
              fontWeight="400"
              fontSize="14px"
              color="#454545"
              p="15px 20px"
            >
              Lembre-se de checar o <strong>Instagram</strong> para saber se
              certificar de estar logado na conta certa.
            </Text>
          </Flex>

          <Button
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            mt="30px"
            onClick={verify}
          >
            <Box>
              <Image
                src="/instagram-logo.png"
                objectFit="contain"
                w="26px"
                h="24px"
                mr="15px"
              />
            </Box>
            Conectar Instagram
          </Button>
        </>
      )}
      {step === 1 && (
        <>
          <Image src="/verify.png"></Image>
          <Text mt="30px">Seu Instagram foi verificado com sucesso!</Text>

          <Button mt="30px" onClick={onClose}>
            Concluir
          </Button>
        </>
      )}
    </Flex>
  )
}
