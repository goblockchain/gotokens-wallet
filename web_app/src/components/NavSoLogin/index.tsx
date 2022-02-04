import { Image as ChakraImage, Text, Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React, { useState, useEffect } from 'react'

import Metamask from '../../../public/MetamaskImg.png'
import { FcKey } from 'react-icons/fc'

export default function Nav() {
  const [isConnected, setConnectedStatus] = useState(false)
  const [status, setStatus] = useState('')
  const [walletAddress, setWallet] = useState('')

  const connect = {
    conectar: ' MetaMask'
  }

  useEffect(()=>{
    connectWalletPressed();
  })

  const connectWalletPressed = async () => {
     
    const walletResponse = await connectWallet()
    setConnectedStatus(walletResponse.connectedStatus)
    setStatus(walletResponse.status)
    setWallet(walletResponse.address)
  }

  const connectWallet = async () => {
    const ethereum = window["ethereum"];
    if (ethereum) {
      try {
        const address = await ethereum.enable()
        const obj = {
          connectedStatus: true,
          status: 'Conectado',
          address: address
        }
        return obj
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
        {connectWalletPressed && (
          <>
            <Box display="flex" flexDir="column" alignItems="end" >
              <Button
                _hover={{
                  transform: 'translateY(-4px)'
                }}
                bg="#DFDFDF"
                color="000"
                borderRadius="30px"
                p="10 5px"
                onClick={connectWalletPressed}
              >
                {status}{connect.conectar}
                <ChakraImage
                  ml="5px"
                  alt="Metamask"
                  src={Metamask.src}
                >
                </ChakraImage>
              </Button>
              {isConnected &&
                <Flex>
                  <Text color="#FFFFFF" mt="5px">
                    {String(walletAddress).substring(0, 5) + '...' + String(walletAddress).substring(38)}
                  </Text>
                  <Box mt="5px" ml="3px" cursor="pointer">
                    <FcKey size={22}/>
                  </Box>
                </Flex>
              }
            </Box>
          </>
        )}
      </Flex>
    </>
  )
}
