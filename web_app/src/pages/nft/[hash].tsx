import {
  Box,
  Flex,
  Heading,
  Text,
  Button as ChakraButton,
  Icon,
  Badge,
  Center,
  CircularProgress,
  SimpleGrid
} from '@chakra-ui/react'
import loadContract from '../../contracts/Helpers';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/NavSoLogin'
import NoNavNoFooterLayout from '../../layouts/noNavNoFooterLayout'

import nftCover from '../../../public/default-nft-cover-home.png'
import { FaAngleLeft } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'

import { useNotification } from '../../hooks/NotificationContext'

import { Copy } from '../../styles/CustomIcons'
import { useRouter } from 'next/router'
import { PaymentModal } from '../../components/payment-modal'

export default function nft () {
  const [contract, setContract] = useState({});
  const [accounts, setAccounts] = useState('');
  const [nftDataGet, setNftData] = useState({});
  const [activeSellOffer, setActiveSellOffer] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState(false);

  const filtrData = {
    title: 'Natiruts Sound System',
    image: '/filtr/natiruts-nft.png',
    creator: 'Filtr Store',
    price: '15 FiltrTokens',
  }
  const nftData = {
    title: 'The Communicador',
    image: nftCover.src,
    creator: 'METASPRAY',
    price: '15 ETH'
  }
  const router = useRouter()
  const isRouteReady = router.isReady
  const data = router.asPath.includes('Natiruts') ? filtrData : nftData;
  let hash

  setTimeout(() => {
    hash = router.query.hash;
    if(!nftDataGet.url){
      fetchEmployees();
    }
  }, 2000);
  
  async function fetchEmployees() {
    try {
      const activeSellOffer = await contract.methods.activeSellOffers(hash).call();
      setActiveSellOffer(activeSellOffer);
      const token_uri = await contract.methods.token_uri(activeSellOffer.IDtoken).call(); 
      let { data } = await axios.get(token_uri);
      setNftData(data);
      setLoading(false);
    } catch (error) { }
  }

  async function loadSmartContract() {
    const returned = await loadContract();
    setContract(returned.contract);
    setAccounts(returned.accounts);
  }

  useEffect(() => {
    setLoading(true);
    loadSmartContract();
  }, []);

  const { emitModal } = useNotification()
  const triggerPaymentModal = () => {
    emitModal({
      message: PaymentModal,
      options: { size: 'sm', isCentered: true }
    })
  }
  const triggerBuy = async () => {
    setLoadingBuy(true);
    try {
      let ethereum = window['ethereum']
      let accounts = await ethereum.request({ method: 'eth_accounts' });
      const return_buy = await contract.methods.buyToken(activeSellOffer.itemId, 1).send({
        from: accounts[0],
        value: activeSellOffer.price
      })
      router.push(`/nftpurchased/${return_buy.transactionHash}?itemId=${activeSellOffer.IDtoken}`)
      setLoadingBuy(false);
    } catch (error) {
      setLoadingBuy(false);
      console.log(error.message);
      if(error.message.includes('User denied')) {
        alert('Você não autorizou a tranzação!');
      }
    }
  }
  return (
    <>
      <Box width="100%" height="100%" bg="#0A03AB">
        <Nav/>
        <Flex flexWrap="wrap" maxW="1367px" justifyContent="space-around" align="center" marginLeft="auto" marginRight="auto">
          {isRouteReady && !loading ? (
            <>
              <Box width="100%" pb="24px" pl="24px">
                <Center
                  w="36px"
                  h="36px"
                  p="0 10px"
                  border="1px solid #FFFFFF"
                  ml={{base: '10px', md: '20px'}}
                  onClick={async () => router.push('/')}
                  cursor="pointer"
                  _hover={{
                    bg: "#332bc9",
                  }}
                >
                  <FaAngleLeft color='#FFFF'/>
                </Center>
              </Box>
              <Box display='flex' alignItems='center'>
                <Box p="0 70px">
                  <Flex height="380px" w="100%">
                    <Box
                      border="1px"
                      borderColor="#FFFFFF"
                      h="380px"
                      w="36px"
                      mr="10px"
                    >
                      <Box borderTop="1px" borderColor="#FFFFFF" mt="340px"></Box>
                    </Box>
                    <Box
                      height="380px"
                      width="450px"
                      bg="#FFFFFF"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={nftDataGet.url} title="description">
                      </iframe>
                    </Box>
                  </Flex>
                </Box>
                <Box
                  // minW="450px"
                  p="0 60px"
                  flex="1"
                  borderLeft="1px solid #DFDFDF"
                >
                  <Heading mt="25px"
                    fontFamily= "PT Serif"
                    fontStyle= "Bold"
                    fontSize= "32px"
                    lineHeight= "42px"
                    color="#FFFFFF"
                  >
                    {nftDataGet.name}
                  </Heading>
                  <Text
                    mt="5px"
                    mb="25px"
                    color="#FFFFFF"
                    fontFamily= "Roboto"
                    fontStyle= "Regular"
                    fontSize= "16px"
                    lineHeight= "19px"
                    fontWeight="thin"
                  >
                    By {nftDataGet.user}
                  </Text>
                  <Flex>
                    <Badge
                      mr="19px"
                      color="#A19D9D"
                      bg="#f2f2f2"
                      borderRadius="38px"
                      p="5px 15px"
                    >
                    0xb236...
                    </Badge>
                    <Icon fontSize="25px" color="#0A03AB" as={Copy}></Icon>
                    <Text
                      fontFamily="Roboto"
                      fontStyle="Regular"
                      fontSize="16px"
                      lineHeight="19px"
                      color="#FFFFFF"
                      ml="25px"
                    >
                      {activeSellOffer.amount}
                    </Text>
                  </Flex>
                  <Text
                    color="#FFFFFF"
                    fontSize="14px"
                    mt="38px"
                    fontWeight="normal"
                  >
                    {nftDataGet.description}
                  </Text>
                  <Box>
                    <Text
                      color="gray.500"
                      mt="40px"
                      mb="4px"
                      fontSize="16px"
                    >
                      Criador
                    </Text>
                    <Flex alignItems="center">
                      <Text color="#FFFFFF" >{activeSellOffer.seller}</Text>
                    </Flex>
                  </Box>
                  <Flex mt="38px" alignItems="center">
                    <Flex
                      w="190px"
                      h="63px"
                      alignItems="center"
                      border="1px solid"
                      borderColor="gray.100"
                    >
                      <Box p="0 10px">
                        <Text fontSize="14px" fontWeight="thin" color="#FFFFFF">
                          FIXED PRICE
                        </Text>
                        <Text fontSize="14px" fontWeight="bold" color="#FFFFFF">
                          { (parseFloat(activeSellOffer.price) / (10 ** 18)).toFixed(5) } ETH
                        </Text>
                      </Box>
                    </Flex>
                    <Box
                      w="78px"
                      h="63px"
                      alignItems="center"
                      justifyContent="space-around"
                      border="1px solid"
                      borderColor="gray.100"
                    >
                      {
                        loadingBuy ? (
                          <SimpleGrid justifyItems="center" mt="8px" mb="8px">
                            <CircularProgress isIndeterminate size='40px' />
                          </SimpleGrid>
                        ) : (
                          <ChakraButton
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bg="0"
                            _hover={{ bg: '' }}
                            _focus={{ outline: 0 }}
                            w="100%"
                            h="100%"
                            p="0"
                            onClick={triggerBuy}
                          >
                            <Flex
                              alignItems="center"
                              justifyContent="center"
                              h="40px"
                              w="40px"
                            >
                              <BsCart2 color='#FFFFFF' size={30}/>
                            </Flex>
                          </ChakraButton>
                        )
                      }
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </>
          ) : (
            <SimpleGrid justifyItems="center" mt="52px" mb="52px">
              <CircularProgress isIndeterminate size='150px' />
            </SimpleGrid>
          )}
        </Flex>
      </Box>
    </>
  )
}

nft.getLayout = function getLayout(page: SVGAElement) {
  return <NoNavNoFooterLayout>{page}</NoNavNoFooterLayout>
}
