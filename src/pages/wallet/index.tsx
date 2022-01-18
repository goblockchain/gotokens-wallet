import {
  Box,
  Flex,
  Text,
  Icon,
  Heading,
  Tooltip,
  Grid,
  Select as ChakraSelect,
  Spinner,
} from "@chakra-ui/react"

import React, { useEffect, useState } from "react"
import { FaPlus, FaArrowDown, FaKey, FaChevronDown } from "react-icons/fa"

import Head from "next/head"
import Image from "next/image"

import { useNotification } from "../../hooks/NotificationContext"
import { FundAdd, FundUp } from "../../styles/CustomIcons"
import { FundDown } from "../../styles/CustomIcons/FundDown"
import { Button } from "../../components/Button"

import { Input, Transaction } from "../../components"

import styles from './styles.module.css'

const testWallet = [
  {
    name: "ETH",
    funds: 0.8,
  },
  {
    name: "BTC",
    funds: 0.1,
  },
  {
    name: "BNB",
    funds: 0.1,
  },
]

export default function wallet() {
  const [wallet, setWallet] = useState(testWallet)
  const [selectedFilter, setSelectedFilters] = useState("Transações")
  const filters = ["Transações", "Assets"]

  const myHash = "0x234E500d2345edC148d48545DOF450e93"

  const { emitModal } = useNotification()

  const walletTotalAmount = wallet.reduce((acc, value) => {
    return value.funds + acc
  }, 0)

  function shareMyHash() {
    emitModal({
      message: ({ onClose }) => (
        <Flex flexDir="column" alignItems="center">
          <Text fontSize="20px">Meu endereço publico para receber fundos.</Text>
          <Flex
            borderRadius="20px"
            maxWidth="492px"
            // width="100%"
            background="#F5F5F5"
            alignItems="center"
            justifyContent="center"
            height="50px"
            mt="18px"
            className={styles.hash}
          >
            <Icon mr="15px" as={FaKey} size={24} color="yellow.500"></Icon>
            <Text>{myHash}</Text>
          </Flex>
          <Button
            mt="24px"
            onClick={() => {
              navigator.clipboard.writeText(myHash)
              onClose()
            }}
          >
            Copiar Chave
          </Button>
        </Flex>
      ),
    })
  }

  function addFunds() {
    const fundValues = [
      {
        value: 50,
        exchangeValue: 0.005,
      },
      {
        value: 100,
        exchangeValue: 0.01,
      },
      {
        value: 150,
        exchangeValue: 0.015,
      },
      {
        value: 250,
        exchangeValue: 0.025,
      },
      {
        value: 500,
        exchangeValue: 0.05,
      },
      {
        value: 1000,
        exchangeValue: 0.1,
      },
    ]

    emitModal({
      options: { size: "sm" },
      message: ({ onClose }) => {
        const [fundsToBeAdded, setFundsToBeAdded] = useState(0)
        const [currency, setCurrency] = useState("ETH")
        const [step, setStep] = useState(0)

        const nextStep = () => {
          setStep(step + 1)
        }
        useEffect(() => {
          if (step === 1) {
            setInterval(() => {
              nextStep()
            }, 2000)
          }
        })

        return (
          <Box m="0 auto">
            {step === 0 && (
              <>
                <Flex justifyContent="center" alignItems="center" css={{ gap: "10px" }}>
                  <Text fontSize="20px">Comprar</Text>
                  <ChakraSelect
                    width="98px"
                    height="37px"
                    fontWeight="bold"
                    fontSize="20px"
                    bg="#F5F5F5"
                    borderRadius="20px"
                    border="0"
                    cursor="pointer"
                    icon={<FaChevronDown fill="#FDC921" />}
                    onChange={(e) => setCurrency(e.currentTarget.value)}
                  >
                    {["ETH", "BTC", "BNB"].map((currency) => (
                      <option
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                        value={currency}
                      >
                        {currency}
                      </option>
                    ))}
                  </ChakraSelect>
                </Flex>

                <Flex flexWrap="wrap" justifyContent="space-around">
                  {fundValues.map((item) => (
                    <Button
                      variant="unstyled"
                      maxWidth="121px"
                      width="100%"
                      height="87px"
                      border="1px solid"
                      borderRadius="10px"
                      mt="26px"
                      onClick={() => setFundsToBeAdded(item.value)}
                      borderColor={
                        fundsToBeAdded === item.value ? "#FDC921" : "#DFDFDF"
                      }
                    >
                      <Text color="#454545" fontWeight="700" fontSize="20px">
                        R${item.value}
                      </Text>
                      <Text color="#A19D9D" fontSize="14px" fontWeight="700">
                        {item.exchangeValue} {currency}
                      </Text>
                    </Button>
                  ))}
                </Flex>
                <Flex>
                  <Button onClick={nextStep} m="0 auto" mt="35px">
                    Comprar via Sympla
                  </Button>
                </Flex>
              </>
            )}
            {step === 1 && (
              <Flex flexDir="column" alignItems="center" m="0 auto">
                <Spinner
                  thickness="4px"
                  speed="1s"
                  emptyColor="#DFDFDF"
                  color="yellow.500"
                  size="xl"
                  mt="57px"
                />

                <Text
                  fontSize="20px"
                  mt="25px"
                  color="#454545"
                  fontWeight="bold"
                >
                  Aguardando pedido
                </Text>
                <Text textAlign="center" mt="15px" fontSize="12px">
                  Conclua o pagamento na
                  <br /> plataforma ao lado.
                </Text>
              </Flex>
            )}
            {step === 2 && (
              <Flex
                textAlign="center"
                flexDir="column"
                alignItems="center"
                m="0 auto"
              >
                <Box mt="30px">
                  <Image src="/verify.png" height="76px" width="76px"></Image>
                </Box>

                <Text mt="35px" fontWeight="bold" fontSize="20px" color="#454545">
                  Seu pedido está sendo processado
                </Text>
                <Text mt="10px" fontSize="14px" fontWeight="400" color="#454545">
                  Enviaremos uma notificação quando o processamento estiver
                  concluído.
                </Text>
                <Flex mt="30px">
                  <Button onClick={onClose}>Fechar Janela</Button>
                </Flex>
              </Flex>
            )}
          </Box>
        )
      },
    })
  }

  function reciveFunds() {
    emitModal({
      message: ({ onClose }) => {
        const [step, setStep] = useState(1)
        const [address, setAddress] = useState("")
        const [value, setValue] = useState("")
        const [selectedCurrency, setSelectedCurrency] = useState("ETH")

        return (
          <Flex
            m="0 auto"
            maxW="382px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            {step === 1 && (
              <>
                <Box>
                  <Image
                    src="/receber-fundos.png"
                    height="60px"
                    width="60px"
                  ></Image>
                </Box>
                <Text
                  mt="34px"
                  fontWeight="700"
                  fontSize="20px"
                  color="#454545"
                >
                  Enviar fundos
                </Text>
                <Flex mt="34px" flexDir="column" className={styles.container}>
                  <Input
                    label="Recepiente"
                    placeholder="Insira aqui o endereço público para receber"
                    onChange={(e) => setAddress(e.target.value)}
                  ></Input>
                  <Flex
                    mt="30px"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Input
                        mr="18px"
                        width="235px"
                        label="Valor"
                        placeholder="0.000ETH"
                        onChange={(e) => setValue(e.target.value)}
                      ></Input>
                    </Box>
                    <ChakraSelect
                      width="98px"
                      height="37px"
                      fontWeight="bold"
                      fontSize="20px"
                      mt="37px"
                      bg="0"
                      borderRadius="20px"
                      border="0"
                      icon={<FaChevronDown fill="#FDC921" />}
                      onSelect={(e) =>
                        setSelectedCurrency(e.currentTarget.value)
                      }
                    >
                      {["ETH", "BTC", "BNB"].map((currency) => (
                        <option
                          style={{ fontWeight: "bold", fontSize: "20px" }}
                          value={currency}
                        >
                          {currency}
                        </option>
                      ))}
                    </ChakraSelect>
                  </Flex>
                  <Button
                    onClick={() => setStep(step + 1)}
                    m="60px auto 30px auto"
                    w="142px"
                    height="50px"
                  >
                    Transferir
                  </Button>
                </Flex>
              </>
            )}
            {step === 2 && (
              <>
                <Text
                  mt="18px"
                  fontWeight="700"
                  fontSize="20px"
                  color="#454545"
                >
                  Transferir
                </Text>

                <Flex mt="40px" width="100%" flexDir="column">
                  <Flex justifyContent="space-between">
                    <Text text="#A19D9D" fontWeight="300" fontSize="14px">
                      VALOR ENVIADO
                    </Text>
                    <Flex flexDir="column" alignItems="center">
                      <Text text="#454545" fontWeight="700" fontSize="14px">
                        {value} {selectedCurrency}
                      </Text>
                      <Text text="#A19D9D" color="#A19D9D" fontWeight="500" fontSize="14px">
                        R${value}
                      </Text>
                    </Flex>
                  </Flex>
                  <Box width="100%" mt="10px" border="1px solid #dfdfdf"></Box>
                  <Flex mt="8px" justifyContent="space-between">
                    <Text text="#A19D9D" fontWeight="300" fontSize="14px">
                      SEU SALDO
                    </Text>
                    <Box>
                      <Text text="#454545" fontWeight="700" fontSize="14px">
                        {wallet.map((item) => {
                          if (item.name === selectedCurrency) {
                            return item.funds
                          }
                        })}{" "}
                        {selectedCurrency}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>

                <Button
                  onClick={() => setStep(step + 1)}
                  m="40px auto"
                  width="143px"
                  height="50px"
                >
                  Confirmar
                </Button>
              </>
            )}
            {step === 3 && (
              <>
                <Box
                  textAlign="center"
                  width="76px"
                  height="76px"
                  borderRadius="50%"
                  border="14px solid #fdc921"
                ></Box>
                <Text
                  color="#454545"
                  fontSize="20px"
                  fontWeight="700"
                  mt="35px"
                  textAlign="center"
                >
                  Sua transferência <br /> está a caminho
                </Text>
                <Text
                  textAlign="center"
                  color="#454545"
                  fontSize="14px"
                  fontWeight="400"
                  mt="15px"
                >
                  Enviaremos uma notificação quando <br /> a transfêrencia
                  estiver concluída.
                </Text>
                <Button mt="25px" m="50px auto" onClick={onClose}>
                  Fechar Janela
                </Button>
              </>
            )}
          </Flex>
        )
      },
    })
  }

  const transactions = [
    {
      description: "Compra de ETH",
      value: -1,
      date: "2021-03-10",
    },
    {
      description: "Venda de ETH",
      value: 1,
      date: "2021-03-10",
    },
  ]

  return (
    <>
      <Head>
        <title>GoTokens | Wallet</title>
      </Head>
      <Box p="0 20px" m="60px auto" maxW="1200px">
        <Flex
          pb="32px"
          borderBottom="1px solid #c8c8c8"
          justifyContent={{ base: "center", md: "space-between" }}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Box>
            <Text color="#A19D9D">Seus fundos</Text>

            <Flex>
              {wallet.length > 0 ? (
                <Flex
                  width="114px"
                  height="99px"
                  borderRadius="15px"
                  border="1px solid #dfdfdf"
                  fontSize="16px"
                  textAlign="center"
                  alignItems="center"
                >
                  <Text color="#dfdfdf" lineHeight="18px" m="0 auto" maxW="6ch">
                    Sem Fundos
                  </Text>
                </Flex>
              ) : (
                wallet.map((item) => (
                  <Flex
                    flexDir="column"
                    width="114px"
                    height="99px"
                    borderRadius="15px"
                    border="1px solid #dfdfdf"
                    fontSize="16px"
                    textAlign="center"
                    alignItems="center"
                    justifyContent="center"
                    mr="18px"
                  >
                    <Text
                      color="#454545"
                      lineHeight="18px"
                      m="0 auto"
                      maxW="6ch"
                    >
                      {item.name}
                    </Text>
                    <Text
                      color="#454545"
                      fontSize="24px"
                      fontWeight="bold"
                      m="0 auto"
                      maxW="6ch"
                    >
                      {item.funds}
                    </Text>
                  </Flex>
                ))
              )}
            </Flex>
          </Box>
          <Flex mt={{ base: "15px", md: "0" }}>
            <Tooltip
              hasArrow
              borderRadius="10px"
              p="10px"
              label="Receber fundos"
            >
              <Button
                variant="unstyled"
                boxShadow="0px 1px 4px rgba(0, 0, 0, 0.19)"
                borderRadius="10px"
                width="60px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="60px"
                mr="20px"
                transition="all 500ms"
                _hover={{
                  transform: "translateY(-4px)",
                  color: "#FDC921",
                }}
                onClick={reciveFunds}
              >
                <Icon
                  width="33px"
                  height="27px"
                  _hover={{ color: "#FDC921" }}
                  as={FundUp}
                ></Icon>
              </Button>
            </Tooltip>
            <Tooltip
              hasArrow
              borderRadius="10px"
              p="10px"
              label="Transferir fundos"
            >
              <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                variant="unstyled"
                boxShadow="0px 1px 4px rgba(0, 0, 0, 0.19)"
                borderRadius="10px"
                width="60px"
                height="60px"
                transition="all 500ms"
                mr="20px"
                _hover={{
                  transform: "translateY(-4px)",
                  color: "#FDC921",
                }}
                onClick={shareMyHash}
              >
                <Icon
                  width="33px"
                  height="27px"
                  _hover={{ color: "#FDC921" }}
                  as={FundDown}
                ></Icon>
              </Button>
            </Tooltip>
            <Tooltip
              hasArrow
              borderRadius="10px"
              p="10px"
              label="Comprar fundos"
            >
              <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                variant="unstyled"
                boxShadow="0px 1px 4px rgba(0, 0, 0, 0.19)"
                borderRadius="10px"
                width="60px"
                height="60px"
                transition="all 500ms"
                _hover={{
                  transform: "translateY(-4px)",
                  color: "#FDC921",
                }}
                onClick={addFunds}
              >
                <Icon
                  as={FundAdd}
                  width="33px"
                  height="27px"
                  _hover={{ color: "#FDC921" }}
                ></Icon>
              </Button>
            </Tooltip>
          </Flex>
        </Flex>

        <Box>
          <Flex mt="38px">
            {filters.map((filter) => (
              <Button
                key={filter}
                borderRadius="0"
                variant="unstyled"
                _hover={{
                  color: selectedFilter === filter ? "yellow.500" : "buddha",
                }}
                width="fit-content"
                p="0"
                value={filter}
                mr="20px"
                color={selectedFilter === filter ? "yellow.500" : "gray.500"}
                onClick={(e) => setSelectedFilters(e.currentTarget.value)}
              >
                {filter}
              </Button>
            ))}
          </Flex>
          {selectedFilter === "Transações" ? (
            <Flex mt="60px" flexDir="column">
              {transactions.map((transaction) => (
                <Transaction
                  value={transaction.value}
                  description={transaction.description}
                  date={transaction.date}
                />
              ))}
            </Flex>
          ) : null}
        </Box>
      </Box>
    </>
  )
}
