import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

export function PaymentModal({ onClose }) {
  const [step, setStep] = useState<
  'cryptoCheckout' | 'confirmPayment' | 'loading'
  >('cryptoCheckout')
  const [paymentType, setPaymentType] = useState('crypto')
  const [selectedCurreny, setSelectedCurrency] = useState('ETH')

  useEffect(() => {
    if (step === 'loading') {
      setInterval(onClose, 1500)
    }

    console.log(step)
  })
  const router = useRouter()

  function double () {
    setStep('loading')
    router.push('/nftpurchased')
  }
  return (
    <>
      {step === 'cryptoCheckout' && (
        <Box w="100%" m="0 auto">
          <Text mb="32px" fontSize="20px" textAlign="center">
            Pagamento
          </Text>
          <Flex w="100%" justifyContent="space-around" mt="32px">
            <Button
              bg="#fff"
              borderRadius="10px"
              border="1px solid #dfdfdf"
              height="52px"
              width="82px"
              _hover={{ bg: '' }}
              _focus={{ outline: '0' }}
              borderColor={selectedCurreny === 'ETH' ? 'blue.500' : '#dfdfdf'}
              onClick={() => setSelectedCurrency('ETH')}
            >
              <Image mr="8px" src="/payment/eth.png"></Image>
              ETH
            </Button>
          </Flex>
          <Box
            mt="30px"
            textAlign="end"
            borderRadius="10px"
            background="#f4f4f4"
            p="19px 26px"
            fontSize="12px"
            fontWeight="normal"
          >
            <Flex w="100%" justifyContent="space-between">
              <Text fontWeight="400">VALOR</Text>
              <Box>
                <Text fontWeight="400" color="#a19d9d">
                  15 {selectedCurreny}
                </Text>
                <Text fontWeight="400">1.900,00 BRL</Text>
              </Box>
            </Flex>
            <Box mt="15px" w="100%" height="1px" background="#dfdfdf" />
            <Flex mt="15px" w="100%" justifyContent="space-between">
              <Text fontWeight="400">Taxa de cartão (5%) </Text>
              <Text fontWeight="400">95,00 BRL</Text>
            </Flex>
            <Flex w="100%" justifyContent="space-between">
              <Text fontWeight="400">Taxa GoTokens (10%)</Text>
              <Text fontWeight="400" color="#a19d9d">
                190,00 BRL
              </Text>
            </Flex>
          </Box>
          <Box mt="30px" w="100%" height="1px" background="#dfdfdf" />
          <Flex mt="15px" w="100%" justifyContent="space-between">
            <Text fontSize="14px">PAGAMENTO TOTAL</Text>
            <Text fontWeight="400" fontSize="12px">
              15 {selectedCurreny}
            </Text>
          </Flex>
          <Flex w="100%" m="0 auto" mt="33px">
            <Button
              onClick={() => double() }
              borderRadius="45px"
              border="1px solid #dfdfdf"
              bg="#fff"
              // _hover={{ bg: "" }}
              m="0 auto"
              height="48px"
              textAlign="center"
              width="123px"
            >
              Concluir
            </Button>
          </Flex>
        </Box>
      )}
      {step === 'loading' && (
        <Flex
          w="100%"
          m="0 auto"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text mb="32px" fontSize="20px" textAlign="center">
            Processando
          </Text>
          <Spinner
            thickness="6px"
            speed="1s"
            emptyColor="#DFDFDF"
            color="blue.500"
            size="xl"
            mt="57px"
          />
          <Text
            fontSize="14px"
            mt="45px"
            color="#A19D9D"
            fontWeight="bold"
          >
            Só um momento...
          </Text>
          <Text textAlign="center" fontSize="14px">
            Seu pedido está sendo processado
          </Text>
        </Flex>
      )}
    </>
  )
}
