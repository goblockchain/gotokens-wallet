import React, { useState } from 'react'
import {
  Box,
  Button as ChakraButton,
  Center,
  Image as ChakraImage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

import NoNavNoFooterLayout from '../../layouts/noNavNoFooterLayout'

export default function nft () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWallet] = useState('')

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const pressedConnectWallet = async () => {
    if (isConnected) return alert('Conta já conectada: ' + walletAddress)

    const walletResponse = await connectWallet()
    setIsConnected(walletResponse.connectedStatus)
    setWallet(walletResponse.address)
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const address = await window.ethereum.request({
          method: 'eth_requestAcconts'
        })
        const object = {
          connectedStatus: true,
          status: 'Conectado com sucesso',
          address
        }
        return object
      } catch (err) {
        return {
          connectedStatus: false,
          status: 'Erro ao conectar carteira'
        }
      }
    } else {
      return {
        connectedStatus: false,
        status: 'MetaMask não está instalada no navegador'
      }
    }
  }
  return (
    <>
      <Box width="100%" height="100%">
        <Center mt="150px">
          <ChakraButton
            bg="#DFDFDF"
            color="000"
            borderRadius="30px"
            p="10 5px"
            onClick={onOpen}
          >
                Connect Wallet
          </ChakraButton>
        </Center>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={pressedConnectWallet}>
                Connectar Metamask
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

nft.getLayout = function getLayout (page: SVGAElement) {
  return <NoNavNoFooterLayout>{page}</NoNavNoFooterLayout>
}
