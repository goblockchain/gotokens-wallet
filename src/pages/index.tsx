/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid

} from '@chakra-ui/react'

import {Button} from '../components'
import { NFTCardStore } from '../components/NFTCardFiltrStore'
import { NFTCardStorePop } from '../components/NFTCardFiltrStorePop'
import { useRouter } from 'next/router'
import Head from 'next/head'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ReactElement, useEffect } from 'react'
import { SpaceLayoutFiltr } from '../layouts/spaceLayoutFiltr'

export default function space () {
  const nfts = [
    {
      name: 'goPunk #246',
      nftCover: '/space/fazendeiro.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.1 ETH',
        PriceBRL: '1.900,00 BRL'
      }
    },
    {
      name: 'goPunk #246',
      nftCover: '/space/ninja.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'multiple' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.025 ETH',
        PriceBRL: '475,00 BRL',
        stockNft: 'ESTOQUE',
        quantityNft: '8/20'
      }
    },
    {
      name: 'goPunk #197',
      nftCover: '/space/punk.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.025 ETH',
        PriceBRL: '475,00 BRL'
      }
    },
    {
      name: 'goPunk #138',
      nftCover: '/space/robô.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'readOnly' as const,
        fixedPrice: '0.010 ETH',
        PriceBRL: '475,00 BRL',
        about: 'LANCE ATUAL',
        throw: '0.57 ETH'
      }
    }
  ]
  const router = useRouter()

  
  const ftoTab = router.query.tab === 'fto'
  return (
    <>
      <Head>
        <title>GoTokens | Meu Espaço</title>
      </Head>
      
        <SimpleGrid
          mt="67px"
          p="0 50px"
          justifyItems="center"
          cursor="pointer"
          spacing="16px"
          columns={{ sm: 1, lg: 2, xl: 4 }}
        >
          {nfts.map((nft) => (
            <NFTCardStore data={nft} key={nft.name} />
          ))}
        </SimpleGrid>
     
      {ftoTab && <Fto />}
    </>
  )
}

function Fto() {

  const nfts = [

    {
      name: 'Arte Exclusiva goBlockchain',
      nftCover: '/space/arteGoBlockchain.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.025 ETH',
        modoCompra: 'PREÇO FIXO',
        price: '475,00 BRL',
        button: 'Comprar'
      }

    },

    {
      name: 'Curso Avançado Blockchain',
      nftCover: '/space/bgGoBlockchain.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.025 ETH',
        modoCompra: 'LANCE MIN',
        price: '475,00 BRL',
        button: 'Dar lance'
      }
    },
    {
      name: 'Avatar Charlie Brown Jr.',
      nftCover: '/space/bgGoBlockchain.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.025 ETH',
        modoCompra: 'LANCE MIN',
        price: '475,00 BRL',
        button: 'Dar lance'
      }
    },
    {
      name: 'Vídeo Exclusivo',
      nftCover: '/space/bgGoBlockchain.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.5 ETH',
        modoCompra: 'PREÇO FIXO',
        price: '1.900,00 BRL',
        button: 'Comprar'
      }

    }

  ]

  return (
    <Box maxW="1200px" mx="auto" mt="80px" mb="55px">

      <Box
        borderRadius="10px"
        p="65px"
        boxShadow="0px 1px 4px 0px #00000030"
      >
        <Flex textAlign="left">
          <Heading fontSize="24px" fontWeight="500" color="#454545">
            Benefícios  Exclusivos goBlockchain NFT
          </Heading>

        </Flex>
        <Text mt="39px" fontWeight="normal" fontSize="16px">
            Verifique os benefícios para a comunidade incluídos na compra do NFT:
        </Text>
        <Flex mt="20px" justifyContent="space-between">
          <SimpleGrid
            mt="20px"
            justifyItems="center"
            spacing="16px"
            cursor="pointer"
            columns={{ sm: 1, lg: 2, xl: 4 }}
          >
            {nfts.map((nft) => (
              <NFTCardStorePop data={nft} key={nft.name} />
            ))}
          </SimpleGrid>
        </Flex>
        <Flex mt="45px" justifyContent="space-around">
          <Button
            fontSize="16px"
          >
              Ver mais
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

space.getLayout = function getLayout(page: ReactElement) {
  return <SpaceLayoutFiltr user="goBlockchain">{page}</SpaceLayoutFiltr>
}
