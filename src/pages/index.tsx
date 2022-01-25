import {
  SimpleGrid
} from '@chakra-ui/react'

import { NFTCardStore } from '../components/NFTCardFiltrStore'
import Head from 'next/head'
import React, { ReactElement, useEffect } from 'react'
import { SpaceLayoutFiltr } from '../layouts/spaceLayoutFiltr'

export default function space () {
  const nfts = [
    {
      name: 'The Communicator',
      nftCover: '/space/NFT.png',
      options: [{ title: 'report', icon: 'report' }],
      type: 'marketplace' as const,
      quantity: 'single' as const,
      marketplace: {
        type: 'fixedPrice' as const,
        fixedPrice: '0.1 ETH',
        PriceBRL: '1.900,00 BRL'
      }
    },
    {/*
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
  */}
  ]

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
        // columns={{ sm: 1, lg: 2, xl: 4 }}
      >
        {/* {nfts.map((nft) => (
          <NFTCardStore data={nft} key={nft.name} />
        ))}
       */}
        <NFTCardStore data={{
          name: 'The Communicator',
          nftCover: '/space/nft.png',
          options: [{ title: 'report', icon: 'report' }],
          type: 'marketplace' as const,
          quantity: 'single' as const,
          marketplace: {
            type: 'fixedPrice' as const
          }
        }}/>
      </SimpleGrid>
    </>
  )
}

space.getLayout = function getLayout(page: ReactElement) {
  return <SpaceLayoutFiltr >{page}</SpaceLayoutFiltr>
}
