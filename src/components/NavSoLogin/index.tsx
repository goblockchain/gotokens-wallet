import {
  Box,
  Text,
  Center,
  Image as ChakraImage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'

import MetamaskImg from '../../../public/MetamaskImg.png'

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('xl')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xl']

  const [isConnected, setConnectedStatus] = useState(false)
  const [status, setStatus] = useState('')
  const [walletAddress, setWallet] = useState('')

  const connectWalletPressed = async () => {
    if (isConnected) {return alert(
      'Conta já conectada! ' +
        String(walletAddress).substring(0, 5) +
        '...' +
        String(walletAddress).substring(38)
    )
}

    const walletResponse = await connectWallet()
    setConnectedStatus(walletResponse.connectedStatus)
    setStatus(walletResponse.status)
    setWallet(walletResponse.address)
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const address = await window.ethereum.enable() 
        const obj = {
          connectedStatus: true,
          status: 'Conectado',
          address: address
        }
        return obj;
      } catch (error) {
        return {
          connectedStatus: false,
          status: 'Erro durante a conexão com a conta'
        }
      }
    } else {
      return {
        connectedStatus: false,
        status: 'Instale a Metamask no seu browser: https://metamask.io/download.html'
      }
    }
  }
  return (
    <>
      <Flex
        p="30px"
        background="0"
        alignItems="center"
        justifyContent="flex-end"
        flexDir={{ base: 'column', sm: 'row' }}
        w="100%"
        m="0 auto 20px"
        maxW="1367px"
        style={{ gap: '41px' }}
        position="relative"
        zIndex="1"
      >
        {sizes.map((size) => (
          <Button
            _hover={{
              transform: 'translateY(-4px)'
            }}
            bg="#DFDFDF"
            color="000"
            borderRadius="30px"
            p="10 5px"
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          >
                Connect Wallet
          </Button>
        ))}
      </Flex>
      <Modal onClose={onClose} size={size} isOpen={isOpen} >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex w="100%" h="100%">
              <Center
                flexDirection="column"
                textAlign="center"
                cursor="pointer"
                bg="#FFFFFF"
                _hover={{
                  bg: '#DFDFDF'
                }}
                onClick={connectWalletPressed}
                p="0 10px"
                borderRadius="8px"
              >
                <ChakraImage
                  alt="Metamask"
                  src={MetamaskImg.src}
                  w="35px"
                  h="35px"
                  mt="15px"
                >
                </ChakraImage>
                <Text
                  mt="8px"
                  fontSize="25px"
                  color="#291f1f"
                >
                  MetaMask
                </Text>
                <Text
                  mt="8px"
                  fontSize="18px"
                  color="#857d7d"
                  fontWeight="thin"
                >
                  Connect to your MetaMask Wallet
                </Text>
              </Center>
              <Box
                textAlign="center"
                ml="10px"
              >
                <Text>Torus</Text>
                <Text>Connect to your Torus accont</Text>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
