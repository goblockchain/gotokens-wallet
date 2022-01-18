import {
    Box,
    Flex,
    Text,
    Heading,
    Image,
    SimpleGrid,
   
  } from "@chakra-ui/react"
  
  import {Button} from "../../../components"
  import { NFTCardStore } from "../../../components/NFTCardFiltrStore"
  import { NFTCardStorePop } from "../../../components/NFTCardFiltrStorePop"
  import { useRouter } from "next/router"
  import Head from "next/head"
  import React, { ReactElement, useEffect } from "react"
  import { SpaceLayoutFiltr } from "../../../layouts/spaceLayoutFiltr"
  
  export default function space() {
    const nfts = [
      {
        name: "Natiruts Sound System",
        nftCover: "/Natiruts.png",
        options: [{ title: "report", icon: "report" }],
        type: "marketplace" as const,
        quantity: "single" as const,
        marketplace: {
          type: "fixedPrice" as const,
          fixedPrice: "15 FTR",
          PriceBRL:"950,00 BRL",
        },
      },
      {
        name: "Corazion Zona de Risco",
        nftCover: "/ZonadeRisco.png",
        options: [{ title: "report", icon: "report" }],
        type: "marketplace" as const,
        quantity: "single" as const,
        marketplace: {
          type: "fixedPrice" as const,
          fixedPrice: "15 FTR",
          PriceBRL:"950,00 BRL",
        },
      },
      {
        name: "Charlie Brown Jr Zóio de Lula",
        nftCover: "/CbJR.png",
        options: [{ title: "report", icon: "report" }],
        type: "marketplace" as const,
        quantity: "single" as const,
        marketplace: {
          type: "fixedPrice" as const,
          fixedPrice: "15 FTR",
          PriceBRL:"950,00 BRL",
        },
      },
      {
        name: "Natiruts Leoa",
        nftCover: "/Natiruts-Leoa.png",
        options: [{ title: "report", icon: "report" }],
        type: "marketplace" as const,
        quantity: "single" as const,
        marketplace: {
          type: "fixedPrice" as const,
          fixedPrice: "15 FTR",
          PriceBRL:"950,00 BRL",
        },
      },
    ]
    const router = useRouter()
  
    const nftTab = router.query.tab === "nft"
    const ftoTab = router.query.tab === "fto"
    return (
      <>
        <Head>
          <title>GoTokens | Meu Espaço</title>
        </Head>
        {nftTab && (
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
        )}
        {ftoTab && <Fto />}
      </>
    )
}
  
  function Fto() {

    const nfts = [

      {
        name: "Ingresso Vip Filtr Live",
        nftCover: "/ingressoVipNFT.png",
        options: [{ title: "report", icon: "report" }],
        type: "marketplace" as const,
        quantity: "single" as const,
        marketplace: {
          type: "fixedPrice" as const,
          fixedPrice: "14 FTR",
          modoCompra: "PREÇO FIXO",
          price:"950,00 BRL",
          button:"Comprar",
        },
        
      },
        
        {
          name: "Arte 3D Secreta",
          nftCover: "/ArteSecretaNFT.png",
          options: [{ title: "report", icon: "report" }],
          type: "marketplace" as const,
          quantity: "single" as const,
          marketplace: {
            type: "fixedPrice" as const,
            fixedPrice: "0.7 FTR",
            modoCompra: "LANCE MIN",
            price:"475,00 BRL",
            button:"Dar lance",
          },
        },
        {
          name: "Avatar Charlie Brown Jr.",
          nftCover: "/cbjrNFT.png",
          options: [{ title: "report", icon: "report" }],
          type: "marketplace" as const,
          quantity: "single" as const,
          marketplace: {
            type: "fixedPrice" as const,fixedPrice: "0.7 FTR",
            modoCompra: "LANCE MIN",
            price:"475,00 BRL",
            button:"Dar lance",
          },
        },
        {
          name: "Vídeo Exclusivo",
          nftCover: "/VideoEsclusivoNFT.png",
          options: [{ title: "report", icon: "report" }],
          type: "marketplace" as const,
          quantity: "single" as const,
          marketplace: {
            type: "fixedPrice" as const,
            fixedPrice: "14 FTR",
            modoCompra: "PREÇO FIXO",
            price:"950,00 BRL",
            button:"Comprar",
          },
          
        },
        
      ]

    return (
      <Box maxW="1200px" mx="auto" mt="80px">
        
        <Box
          borderRadius="10px"
          p="65px"
          boxShadow="0px 1px 4px 0px #00000030"
        >
          <Flex textAlign="left">
            <Heading fontSize="24px" fontWeight="500" color="#454545">
              Benefícios Filtr Store
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
        <Box
          borderRadius="10px"
          p="55px"
          boxShadow="0px 1px 4px 0px #00000030"
          mt="55px"
          mb="55px"
        >
          <Flex>
                <Box>
                    <Image borderRadius="50%" src="/FiltrTokensIMG.png"></Image>
                </Box>
                <Heading margin="auto" fontSize="24px" color="#A19D9D" lineHeight="28px" fontWeight="500" ml="20px">
                FiltrTokens
                </Heading>
          </Flex>
          <Text mt="31px" fontWeight="normal" fontSize="18px" lineHeight="22px">
          Converta suas FiltrCoins em FiltrTokens e compre nossos NFTs licenciados, 
          ao comprar sua NFT na nosso espaço de vendas,<br/> você obtém acesso a loja de 
          benefícios exclusivos da FiltrStore. 
          </Text>
        </Box>
      </Box>
    )
  }
  
  space.getLayout = function getLayout(page: ReactElement) {
    return <SpaceLayoutFiltr user="Filtr Store">{page}</SpaceLayoutFiltr>
  }
  