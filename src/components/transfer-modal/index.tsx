import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import React, { useEffect, useState } from "react"

import { Input,  Center, Checkbox } from "@chakra-ui/react"


import transferirModalImg from "../../../public/transferirModalImg.png"

export function transfermodal({ onClose }) {
  const [step, setStep] = useState<
    "paymentType" | "newCard" | "confirmPayment" | "cryptoCheckout" | "loading"
  >("paymentType")
  const [paymentType, setPaymentType] = useState<"credit" | "crypto">("credit")
  const [selectedCurreny, setSelectedCurrency] = useState("FTR")

  {/* useEffect(() => {
      if (step === "loading") {
        setInterval(onClose, 1500)
      }

      console.log(step)
    })
  */}

  return (
    <>
      {step === "paymentType" && (
        <Box w="100%" m="0 auto">
           <Center mt="20px">
            <Image src={transferirModalImg.src}></Image>
           </Center>
           <Text mt="20px" fontSize="20px" textAlign="center">
                Transferir NFT
            </Text>
          <Box mt="40px" p="0 17px">
                <Text
                fontWeight= "bold"
                fontSize= "14px"
                lineHeight= "16px"
                color= "#454545"
                >
                  Endereço da Carteira ou Nome ENS
                </Text>
            <Input mt="15px" 
            focusBorderColor="#FDC921" 
            placeholder="Ex.: 0x1ed3... ou destino.eth"/>
          </Box>
            <Flex w="100%" m="0 auto" mt="40px" mb="10px">
                <Button
                fontWeight= "500"
                fontSize= "14px"
                lineHeight= "16px"
                onClick={() =>
                    paymentType === "credit"
                    ? setStep("confirmPayment")
                    : setStep("cryptoCheckout")
                }
                borderRadius="45px"
                border="1px solid #dfdfdf"
                bg="#fff"
                _hover={{ bg: "" }}
                m="0 auto"
                height="48px"
                textAlign="center"
                width="123px"
                >
                Transferir
                </Button>
            </Flex>
            <Button
            fontWeight= "bold"
            fontSize= "12px"
            lineHeight= "14px"
            color= "#A19D9D"
            bg="#FFFFFF"
            _hover={{ bg: "" }}
            onClick={onClose}
            >
                Fechar
            </Button>
        </Box>
      )}

      {step === "confirmPayment" && (
        <Box w="100%" m="0 auto">
          <Text mb="32px" fontSize="20px" textAlign="center">
            Transferir NFT
          </Text>
          <Text
            fontWeight= "500"
            fontSize= "11px"
            lineHeight= "24px"
            color= "#A19D9D"
          >
              Sugestão taxa de emissão de CO²
          </Text>
          <Flex justifyContent="space-between">
            <Text
              fontWeight= "300"
              fontSize= "12px"
              lineHeight= "24px"
              color="#454545"
            >
                VALOR DE ENVIO
            </Text>
            <Box>
              <Text
                onClick={onClose}        
                fontWeight= "bold"
                fontSize= "12px"
                lineHeight= "24px"
                color= "#454545"
              >
                0.001050 ETH
              </Text>
              <Text
                fontWeight= "500"
                fontSize= "12px"
                lineHeight= "24px"
                color= "#A19D9D"
              >
                R$ 21,65
              </Text>
            </Box>
          </Flex>
          <Box mt="10px" w="100%" height="1px" background="#dfdfdf" />
            <Checkbox 
              mt="20px"
              fontSize="10px"
              defaultIsChecked
              fontWeight= "500"
              lineHeight= "14px"
              color= "#A19D9D"
              colorScheme="yellow"
            >
              <Text ml="7px" color="#AFAFAF" fontWeight="700" fontSize="12px">
                Aceitar Taxa de Emissão
              </Text>
            </Checkbox>
            
            <Flex w="100%" m="0 auto" mt="33px">
              <Button
                onClick={() => setStep("loading")}
                borderRadius="45px"
                border="1px solid #dfdfdf"
                bg="#fff"
                _hover={{ bg: "" }}
                m="0 auto"
                height="48px"
                textAlign="center"
                width="123px"
                fontSize="12px"
                >
                Confirmar
              </Button>
            </Flex>
            <Button
            fontWeight= "bold"
            fontSize= "12px"
            lineHeight= "14px"
            color= "#A19D9D"
            bg="#FFFFFF"
            _hover={{ bg: "" }}
            onClick={onClose}
            >
                Fechar
            </Button>
          </Box>
      )}

      {step === "loading" && (
        <Flex
          w="100%"
          m="0 auto"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner
            thickness="6px"
            speed="1s"
            emptyColor="#DFDFDF"
            color="yellow.500"
            size="xl"
            mt="10px"
          />
          <Text fontSize="20px" 
          lineHeight="23px" 
          textAlign="center" 
          color="#454545"
          mt="20px"
          >
            Sua transferência<br/> 
            está a caminho
          </Text>
          <Text
            fontSize="12px"
            lineHeight="14px"
            mt="10px"
            color="#454545"
            fontWeight="normal"
          >
            Aguarde um minuto enquanto<br/> 
            transferimos seu colecionável<br/> 
            para a sua carteira exeterna.
          </Text>
          <Flex w="100%" m="0 auto" mt="33px">
                <Button
                onClick={onClose}
                borderRadius="45px"
                border="1px solid #dfdfdf"
                bg="#fff"
                _hover={{ bg: "" }}
                m="0 auto"
                height="48px"
                textAlign="center"
                width="123px"
                fontSize="12px"
                >
                Fechar janela
                </Button>
            </Flex>
        </Flex>
      )}
    </>
  )
}
