import{
  Box,
  Flex,
  Text,
  Heading,
  Image as ChakraImage,
  Center
} from '@chakra-ui/react';

import { Footer } from '../components/NFTCardFooter/Footer'
import GoBlockchain from '../contracts/GoBlockchain';
import React, { useEffect, useState } from 'react'
import Nav from '../components/NavSoLogin'
import bg from '../../public/fundoHome.png'
import { useRouter } from 'next/router'
import { Button } from '../components'
import Web3 from 'web3';


export function SpaceLayoutFiltr({ children }) {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState({});

  useEffect(() => {
    async function load() {
      let ethereum = window['ethereum'];
      let accounts = await ethereum.request({ method: 'eth_accounts' });
      setAccount(accounts[0]);
      let newWeb3 = window['web3'];
      const web3 = new Web3(newWeb3.currentProvider);
      await GoBlockchain.setProvider(web3.currentProvider);
      let deployed = await GoBlockchain.deployed();
      const contract_base = await new web3.eth.Contract(deployed.abi, deployed.address);
      setContract(contract_base);
    }
    
    load();
  }, []);
  const router = useRouter()
  
  function handleQuery(tab) {
    router.query.tab = tab
    router.push(router)
  }
  return (
    <Box bg="black">
      <Nav/>
      <Center position="relative" zIndex="1">
        <Box textAlign="center" position="absolute">
          <Heading fontSize="35px"
            lineHeight="45px"
            fontWeight="extrabold"
            mt={{ base: '-50px', md: '-82px', xl: '-105px' }}
            color="#FFFFFF"
          >
          METASPRAY
          </Heading>
        </Box>
      </Center>
      <ChakraImage
        mt={{ base: '-20px', md: '-82px', xl: '-150px' }}
        w="100%"
        src={bg.src}
      ></ChakraImage>
      <Box
        mt={{ base: '2px', md: '-52px', xl: '-290px' }}
        px={{ base: '22px', md: '52px', xl: '32px', '2xl': '72px' }}
      >
        <Box textAlign="center">
          <Heading
            color="#FFFFFF"
            fontFamily= "PT Serif"
            fontStyle= "normal"
            fontWeight= "bold"
            fontSize= "36px"
            lineHeight= "48px"
          >
              This NFT unlocks exclusive content
          </Heading>
          <Text
            fontFamily= "Inter"
            fontStyle= "normal"
            fontWeight= "normal"
            fontSize= "20px"
            color="#FFFFFF"
          >
              Game-ready 3D file | AR/VR view | Genesis Block Metaverse | HD Film renders | NFT short Film <br/>
              and early access to upcoming Metaspray projects
          </Text>
        </Box>
        <Flex mt="38px" justifyContent="center">
          <Button
            onClick={() => handleQuery('nft')}
            w="130px"
            mr="33px"
            colorScheme='blue'
          >
              collect
          </Button>
          <Button
            onClick={() => handleQuery('fto')}
            w="230px">
              Unlock Extra Content
          </Button>
        </Flex>
        {children}
      </Box>
      <Footer/>
    </Box>
  )
}
