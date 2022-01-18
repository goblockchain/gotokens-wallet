import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  Image,
  Tooltip,
} from "@chakra-ui/react"
import React, { ReactElement, useEffect, useState } from "react"

import { Button } from "../../components"
import router, { useRouter } from "next/router"
import ProfileLayout from "../../layouts/profileLayout"
import { Nft } from "../../types"
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip as RechartTooltip,
} from "recharts"
import { fakeChartData } from "../../utils/fakeChartData"

const statsCards = [
  {
    title: "Vendas",
    value: "16",
  },
  {
    title: "Criadas",
    value: "18",
  },
  {
    title: "Adquiridas",
    value: "13",
  },
]
export default function user() {
  const { query } = useRouter()

  return (
    <>
      {query.tab === "Dashboard" || !query.tab ? <Dashboard /> : null}
      {query.tab === "Minhas NFTs" && <MyNFT />}
    </>
  )
}
function Dashboard() {
  return (
    <>
      <Flex
        width="100%"
        display={{ sm: "block", md: "flex" }}
        justifyContent="space-between"
      >
        <Flex flexWrap="wrap">
          {statsCards.map((card) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="23px"
              w={{ base: "100%", md: "134px" }}
              h="119px"
              border="1px solid"
              borderColor="gray.100"
              borderRadius="15px"
              fontWeight="500"
              flexDir="column"
              mb="15px"
              mr={{ base: "0px", md: "16px" }}
              key={card.title}
            >
              {card.title}
              <Text fontSize="30px" fontWeight="700">
                {card.value}
              </Text>
            </Box>
          ))}
        </Flex>
        <Box
          textAlign="center"
          color="success"
          mb="15px"
          justifyContent="center"
          alignItems="center"
          p="23px 40px"
          border="1px solid"
          borderColor="gray.100"
          borderRadius="15px"
          fontWeight="500"
          flexDir="column"
        >
          Ganhos Totais
          <Text color="success" fontSize={{ base: "16px", lg: "30px" }} fontWeight="700">
            1.2 ETH
          </Text>
        </Box>
      </Flex>
      <Grid w="100%" templateColumns={{ base: "1fr", lg: "1fr 1fr"}}>
        <Box mt="38px">
          <Text mb="22px" color="gray.300">
            Visitantes
          </Text>
          <ResponsiveContainer width="100%" height={250}>
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
              <XAxis
                tick={{ fontSize: 10 }}
                dy={20}
                stroke="#9FA2B4"
                dataKey="name"
              />
              <YAxis
                tick={{ fontSize: 10 }}
                dx={20}
                stroke="#9FA2B4"
                orientation="right"
                axisLine={false}
              />
              <RechartTooltip />
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
        </Box>

        <Box mt="38px" position="relative" left={{ base: "0px", lg: "29px", xl: "50px" }}>
          <Text mb="22px" color="gray.300">
            Vendas
          </Text>
          <ResponsiveContainer width="100%" height={250}>
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
              <XAxis
                tick={{ fontSize: 10 }}
                dy={20}
                stroke="#9FA2B4"
                dataKey="name"
              />
              <YAxis
                tick={{ fontSize: 10 }}
                dx={20}
                stroke="#9FA2B4"
                orientation="right"
                axisLine={false}
              />
              <RechartTooltip />
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
        </Box>
      </Grid>
    </>
  )
}
function MyNFT() {
  const [nfts, setNfts] = useState<Nft[]>([])
  return (
    <>
      {!nfts.length ? (
        <Box>
          <Text
            maxW="50ch"
            textAlign="left"
            color="gray.200"
            fontWeight="normal"
            mb="48px"
          >
            Opa, parece que você ainda não tem um colecionável para exibição,
            que tal criar sua primeira NFT?
          </Text>
          <Button onClick={() => router.push("/create-nft")}>Criar NFT</Button>
        </Box>
      ) : (
        <Grid
          gap={6}
          alignItems="center"
          templateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
        ></Grid>
      )}
    </>
  )
}
user.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>
}
