import {
  Box,
  Flex,
  Text,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  HStack,
  Badge,
  Stack,
  Select,
} from "@chakra-ui/react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import { AddIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { useForm } from "react-hook-form"
import { FaQrcode, FaLink } from "react-icons/fa"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { NFTCard, Button, Input } from "../../../components"
import { useRouter } from "next/router"
import Head from "next/head"
import React, { ReactElement, useEffect, useState } from "react"
import { SpaceLayout } from "../../../layouts/spaceLayout"
import {
  Clock,
  Database,
  Medal,
  StockUp,
  Unlock,
} from "../../../styles/CustomIcons"
import { fakeChartData } from "../../../utils/fakeChartData"

export default function space() {
  const nfts = [
    {
      name: "Skin Herói Exclusivo",
      owner: "Jimmy Wellson",
      nftCover: "/hero-skin.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "1 ETH",
      },
    },
    {
      name: "Espada Edição Limitada",
      owner: "Jimmy Wellson",
      nftCover: "/limited-sword.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "0.05 ETH",
      },
    },
    {
      name: "Pet Game Exclusivo",
      owner: "Jimmy Wellson",
      nftCover: "/ingame-pet.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "0.02 ETH",
      },
    },
    {
      name: "Concept Art Única",
      owner: "Jimmy Wellson",
      nftCover: "/concept-art.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "0.520 ETH",
      },
    },
  ]
  const filtrNfts = [
    {
      name: "Natiruts Sound System",
      owner: "Jimmy Wellson",
      nftCover: "/filtr/nft4.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "15 FiltrTokens",
      },
    },
    {
      name: "Corazion Zona de Risco",
      owner: "Jimmy Wellson",
      nftCover: "/filtr/nft2.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "15 FiltrTokens",
      },
    },
    {
      name: "Charlie Brown Jr Zóio de Lula",
      owner: "Jimmy Wellson",
      nftCover: "/filtr/nft3.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "15 FiltrTokens",
      },
    },
    {
      name: "Natiruts Leoa",
      owner: "Jimmy Wellson",
      nftCover: "/filtr/nft1.png",
      options: [{ title: "report", icon: "report" }],
      type: "marketplace" as const,
      quantity: "single" as const,
      marketplace: {
        type: "fixedPrice" as const,
        fixedPrice: "15 FiltrTokens",
      },
    },
  ]
  const router = useRouter()
 const filtrSpace = router.asPath.includes('/filtr/')
  const nftTab = router.query.tab === "nft"
  const ftoTab = router.query.tab === "fto"

  const [hover, setHover] = useState(false)

  return (
    <>
      <Head>
        <title>GoTokens | Meu Espaço</title>
      </Head>
      {nftTab && (
        <Flex
          mt="67px"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          {filtrSpace ? (<> {filtrNfts.map((nft) => (
                <NFTCard data={nft} key={nft.name} />
              ))}
            </> ) :(
        <>
              {nfts.map((nft) => (
                <NFTCard data={nft} key={nft.name} />
              ))}
        </> )}

          <Flex
            border="1px solid #dfdfdf"
            borderRadius="15px"
            bg="transparent"
            width={{ base: "280px", sm: "290px" }}
            height="398px"
            mt="31px"
            cursor="pointer"
            padding="162px 102px"
            justifyContent="center"
            alignItems="center"
            _hover={{ borderColor: "#FDC921" }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <Button
              border="1px solid"
              borderColor={ hover ? "#FDC921" : "#DFDFDF" }
              borderRadius="100%"
              variant="unstyled"
              widht="38px"
              height="38px"
            >
              <Text fontSize="18px" fontWeight="400" color={ hover ? "#FDC921" : "#A19D9D" }>+</Text>
            </Button>

          </Flex>

        </Flex>
    )}
    {ftoTab && <Fto />}
  </>
)
}

function Fto() {
  return (
    <Box maxW="1200px" mx="auto" mt="103px">
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Box>
          <Image src="/gsfan.png"></Image>
        </Box>
        <Flex flexWrap="wrap">
          <Box
            m="10px"
            h="82px"
            borderRadius="10px"
            p="20px"
            w="196px"
            boxShadow="0px 1px 4px 0px #00000030"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="success" mr="9px" fontSize="14px">
              +3.47%
            </Text>
            <Icon mr="5px" color="success" as={StockUp}></Icon>
            <Box ml="20px">
              <Text fontSize="14px">2,40 $GS</Text>
              <Text fontSize="12px" fontWeight="normal">
                = 5.20 BRL
              </Text>
            </Box>
          </Box>
          <Box
            m="10px"
            h="82px"
            w="143px"
            borderRadius="10px"
            p="20px"
            boxShadow="0px 1px 4px 0px #00000030"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon mr="15px" color="yellow.500" as={Database}></Icon>
            <Box>
              <Text>50,000</Text>
              <Text fontSize="10px" fontWeight="normal">
                Fan Tokens Disponiveis
              </Text>
            </Box>
          </Box>
          <Box
            m="10px"
            h="82px"
            borderRadius="10px"
            w="143px"
            p="20px"
            boxShadow="0px 1px 4px 0px #00000030"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon mr="15px" color="yellow.500" as={Clock}></Icon>
            <Box>
              <Text>02/10/21</Text>
              <Text fontSize="10px" fontWeight="normal">
                Data Início
              </Text>
            </Box>
          </Box>
          <Box
            m="10px"
            h="82px"
            borderRadius="10px"
            w="143px"
            p="20px"
            boxShadow="0px 1px 4px 0px #00000030"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon mr="15px" color="yellow.500" as={AiOutlineCloseCircle}></Icon>
            <Box>
              <Text>02/12/21</Text>
              <Text fontSize="10px" fontWeight="normal">
                Data Término
              </Text>
            </Box>
          </Box>
          <Box
            m="10px"
            h="82px"
            borderRadius="10px"
            w="143px"
            p="20px"
            boxShadow="0px 1px 4px 0px #00000030"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon mr="15px" color="yellow.500" as={Unlock}></Icon>
            <Box>
              <Text>02/10/21</Text>
              <Text fontSize="10px" fontWeight="normal">
                Data de Desbloqueio
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box
        borderRadius="10px"
        p="30px"
        boxShadow="0px 1px 4px 0px #00000030"
        mt="55px"
      >
        <Heading fontSize="24px" fontWeight="500">
          GSFAN
        </Heading>
        <Text mt="31px" fontWeight="400">
          Marcos Mendes é um YouTuber que começou aos 14 anos. Com conteúdo
          diário de jogos, ele cativa cerca de 2 milhões de seguidores em seu
          canal e aumenta seus seguidores cerca de 30% ano. Através do apoio de
          seus fãs, ele deseja expandir a sua rede de influência e criar seu
          próprio jogo! Para poder ter acesso, será disponibilizado a venda de
          personagens em formato de NFT, que já será parte desse novo universo.
          Com esses personagens, você irá receber skins também em NFT, para que
          você possa usar dentro do game ou comercializar com a comunidade.
        </Text>
      </Box>
      <Box
        borderRadius="10px"
        p="30px"
        boxShadow="0px 1px 4px 0px #00000030"
        mt="55px"
      >
        <Flex justifyContent="space-between">
          <Heading fontSize="24px" fontWeight="500">
            Benefícios do Token
          </Heading>
          <Box>
            <Text fontWeight="500" mr="32px" display="inline">
              Oferta total:
            </Text>
            <Badge
              p="7px 16px"
              fontSize="14px"
              bg="#F2F2F2"
              fontWeight="400"
              borderRadius="38px"
            >
              10.000.000
            </Badge>
          </Box>
        </Flex>
        <Text mt="39px" fontWeight="400">
          Verifique os benefícios para a comunidade incluídos na compra do
          token:
        </Text>
        <Flex mt="32px" justifyContent="space-between">
          <Box
            w="186px"
            h="182px"
            border="1px solid"
            borderRadius="10px"
            borderColor="gray.100"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Icon
              fontSize="60px"
              mb="36px"
              color="yellow.500"
              as={Medal}
            ></Icon>
            <Text fontWeight="500">Benefício N° 1</Text>
          </Box>
        </Flex>
      </Box>
      <Flex flexWrap="wrap" mt="74px" justifyContent="space-between">
        <Flex flexDir="column" w="100%" flex="3" mr="20px">
          <Flex mb="97px" justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
            <Box alignItems="center" display="flex">
              <Heading
                mr="10px"
                color="gray.300"
                fontSize="24px"
                fontWeight="500"
              >
                GSFAN
              </Heading>
              <Text fontSize="24px">2.40 $GS</Text>
              <Text ml="27px" color="success" fontSize="14px">
                + 3.47 %
              </Text>
              <Icon ml="9px" color="success" as={StockUp}></Icon>
            </Box>
            <Box w="138px" margin={{ base: "8px 0 0", md: "0" }}>
              <Select
                borderRadius="45px"
                mt="0"
                placeholder="1 ano"
                fontWeight="bold"
                options={["5 meses", "1 mês"]}
              ></Select>
            </Box>
          </Flex>

          <ResponsiveContainer width="100%" height={403}>
            <LineChart
              data={fakeChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#9fa2b43e" vertical={false} />
              <XAxis dy={20} stroke="#9FA2B4" dataKey="name" />
              <YAxis
                dx={20}
                stroke="#9FA2B4"
                orientation="right"
                axisLine={false}
              />
              <Tooltip />
              <Legend wrapperStyle={{ bottom: -25 }} />
              <Line
                type="monotone"
                dataKey="2021"
                strokeWidth={3}
                stroke="#DFE0EB"
                dot={false}
              />
              <Line
                strokeWidth={3}
                type="monotone"
                dataKey="2022"
                stroke="#FDC921"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Flex>

        <Stack spacing="16px" flex="1">
          <Box>
            <Text fontWeight="bold" color="gray.300">
              Quantidade
            </Text>
            <Input height="48px" borderRadius="45px"></Input>
          </Box>
          <Box mb="10px">
            <Text fontWeight="bold" color="gray.300">
              Expiração
            </Text>
            <Input height="48px" borderRadius="45px"></Input>
          </Box>
          <Button w="100%">Comprar</Button>
          <Button w="100%">Vender</Button>
          <Button w="100%">Zerar</Button>
          <Button w="100%">Inverter</Button>
        </Stack>
      </Flex>
      <Box>
        <Heading mt="100px" fontSize="24px" fontWeight="500">
          Informações sobre o emissor
        </Heading>
        <Flex flexDir="column">
          <Flex
            mt="70px"
            borderRadius="10px"
            alignItems="center"
            justifyContent="space-between"
            p="25px 40px"
            boxShadow=" 0px 1px 4px 0px #00000030"
            flexDir={{ base: "column", md: "row" }}
          >
            <Flex mb={{ base: "16px", md: "0" }}>
              👌
              <Text ml="35px">Nova postagem do Emissor no Instagram</Text>
            </Flex>
            <Text color="gray.300">02/08/2021</Text>
            <Flex>
              <Text color="success">+2.09%</Text>
              <Icon ml="9px" color="success" as={StockUp}></Icon>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

space.getLayout = function getLayout(page: ReactElement) {

  return (<SpaceLayout >{page}</SpaceLayout>)
}
