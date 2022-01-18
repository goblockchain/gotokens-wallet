import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import React, { useEffect, useState } from "react"
import { Input } from ".."

export function PaymentModal({ onClose }) {
  const [step, setStep] = useState<
    "paymentType" | "newCard" | "confirmPayment" | "cryptoCheckout" | "loading"
  >("paymentType")
  const [paymentType, setPaymentType] = useState<"credit" | "crypto">("credit")
  const [selectedCurreny, setSelectedCurrency] = useState("FTR")

  const [crediCard, setCreditCard] = useState({
    cardNumber: "",
    expiration: "",
    cvc: "",
    cardType: "MasterCard",
  })

  useEffect(() => {
    if (step === "loading") {
      setInterval(onClose, 1500)
    }

    console.log(step)
  })

  return (
    <>
      {step === "paymentType" && (
        <Box w="100%" m="0 auto">
          <Text fontSize="20px" textAlign="center">
            Pagamento
          </Text>
          <Box mt="32px" w="100%">
            <Button
              onClick={() => setPaymentType("credit")}
              transition="all 500ms"
              borderRadius="10px"
              m="0 auto"
              height="100%"
              maxW="298px"
              p="19px"
              w="100%"
              border="1px solid #dfdfdf"
              borderColor={paymentType === "credit" && "yellow.500"}
              bg="0"
              _focus={{
                outline: "0",
                boxShadow: "inherit",
              }}
              _hover={{
                bg: "0",
              }}
              display="block"
            >
              <Box w="140px">
                <Flex
                  alignItems="center"
                  w="100%"
                  justifyContent="space-between"
                >
                  <Image
                    src="/payment/credit.png"
                    alt="credit card"
                    mr="10px"
                  ></Image>
                  <Text fontWeight="400" color="#454545" fontSize="14px">
                    Pagar com cartão de crédito/débito
                  </Text>
                </Flex>
                <Flex mt="16px">
                  <Image
                    height="11px"
                    width="11px"
                    src="/payment/clock.png"
                    alt="clock"
                    mr="10px"
                  ></Image>
                  <Text fontWeight="400" color="#717171" fontSize="12px">
                    Instântaneo
                  </Text>
                </Flex>
                <Flex mt="7px">
                  <Image
                    height="12px"
                    width="8px"
                    src="/payment/dollar-bill.png"
                    alt="dollar"
                    mr="10px"
                  ></Image>
                  <Text fontWeight="400" color="#717171" fontSize="12px">
                    5% taxa de pagamento
                  </Text>
                </Flex>
                <Flex mt="7px">
                  <Image
                    src="/payment/thumbs-up.png"
                    alt="thumbs up"
                    mr="10px"
                    height="11px"
                    width="10px"
                  ></Image>
                  <Text fontWeight="400" color="#717171" fontSize="12px">
                    Recomendado
                  </Text>
                </Flex>
              </Box>
            </Button>
            <Button
              onClick={() => setPaymentType("crypto")}
              transition="all 500ms"
              borderRadius="10px"
              m="0 auto"
              mt="20px"
              height="100%"
              maxW="298px"
              p="19px"
              w="100%"
              border="1px solid #dfdfdf"
              borderColor={paymentType === "crypto" && "yellow.500"}
              bg="0"
              _focus={{
                outline: "0",
                boxShadow: "inherit",
              }}
              _hover={{
                bg: "0",
              }}
              display="block"
            >
              <Flex w="100%" justifyContet="space-between">
                <Image src="/payment/crypto.png" alt="crypto" mr="10px"></Image>
                <Text fontWeight="400" color="#454545" fontSize="14px">
                  ETH, BNB
                </Text>
              </Flex>
              <Box w="140px">
                <Flex mt="16px">
                  <Image
                    height="11px"
                    width="11px"
                    src="/payment/clock.png"
                    alt="clock"
                    mr="10px"
                  ></Image>
                  <Text fontWeight="400" color="#717171" fontSize="12px">
                    Instântaneo
                  </Text>
                </Flex>
                <Flex mt="7px">
                  <Image
                    height="12px"
                    width="8px"
                    src="/payment/dollar-bill.png"
                    alt="dollar"
                    mr="10px"
                  ></Image>
                  <Text fontWeight="400" color="#717171" fontSize="12px">
                    Taxa de emissão inclusa
                  </Text>
                </Flex>
                <Flex mt="7px">
                  <Image
                    src="/payment/fire.png"
                    alt="thumbs up"
                    mr="10px"
                    width="12px"
                    height="12px"
                  ></Image>
                  <Text fontWeight="400" color="#717171" fontSize="12px">
                    Pagamento descentralizado
                  </Text>
                </Flex>
              </Box>
            </Button>
          </Box>

          <Box mt="20px" p="0 17px">
            <Flex w="100%" justifyContent="space-between">
              <Text>TOTAL</Text>
              <Box>
                <Text textAlign="end">0.1ETH</Text>

                <Text fontSize="12px" color="#a19d9d">
                  1.900,00 BRL
                </Text>
              </Box>
            </Flex>
          </Box>

          <Flex w="100%" m="0 auto" mt="20px">
            <Button
              onClick={() =>
                paymentType === "credit"
                  ? setStep("confirmPayment")
                  : setStep("cryptoCheckout")
              }
              borderRadius="45px"
              border="1px solid #dfdfdf"
              bg="#fff"
              _hover={{ bg: "" }}
              m="0 auto"
              height="48px"
              textAlign="center"
              width="123px"
            >
              Prosseguir
            </Button>
          </Flex>
        </Box>
      )}

      {step === "confirmPayment" && (
        <Box w="100%" m="0 auto">
          <Text mb="32px" fontSize="20px" textAlign="center">
            Pagamento
          </Text>

          {crediCard.cardNumber.length > 1 ? (
            <Flex alignItems="center">
              <Flex
                alignItems="center"
                height="52px"
                justifyContent="space-between"
                w="100%"
                borderRadius="10px"
                border="1px solid #dfdfdf"
                p="0 20px"
              >
                <Flex alignItems="center">
                  <Image
                    src="/payment/logo_mastercard.png"
                    alt="master card logo"
                    height="18px"
                    width="26px"
                    mr="12px"
                  />
                  <Text fontWeight="400" fontSize="12px">
                    {crediCard.cardType} {crediCard.cardNumber}
                  </Text>
                </Flex>
                <Image
                  src="/payment/confirmed.png"
                  width="18px"
                  height="18px"
                />
              </Flex>
              <button>
                <Image
                  src="/payment/switch-cards.png"
                  width="16px"
                  height="18px"
                  ml="12px"
                ></Image>
              </button>
            </Flex>
          ) : (
            <Flex alignItems="center">
              <Flex
                onClick={() => setStep("newCard")}
                cursor="pointer"
                alignItems="center"
                height="52px"
                justifyContent="space-between"
                w="100%"
                borderRadius="10px"
                border="1px solid #dfdfdf"
                p="0 20px"
              >
                <Flex alignItems="center">
                  <Text fontWeight="400" fontSize="12px">
                    Novo cartão de crédito/débito
                  </Text>
                </Flex>
                <Image src="/payment/plus.png" width="12px" height="12px" />
              </Flex>
              <button>
                <Image
                  src="/payment/switch-cards.png"
                  width="16px"
                  height="18px"
                  ml="12px"
                ></Image>
              </button>
            </Flex>
          )}

          <Box
            mt="30px"
            textAlign="end"
            borderRadius="10px"
            background="#f4f4f4"
            p="19px 26px"
            fontSize="12px"
            fontWeight="normal"
          >
            <Flex w="100%" justifyContent="space-between">
              <Text fontWeight="400">VALOR</Text>
              <Box>
                <Text fontWeight="400">1.900,00 BRL</Text>
                <Text fontWeight="400" color="#a19d9d">
                  0.1 ETH
                </Text>
              </Box>
            </Flex>
            <Box mt="15px" w="100%" height="1px" background="#dfdfdf" />
            <Flex mt="15px" w="100%" justifyContent="space-between">
              <Text fontWeight="400">Taxa de cartão (5%) </Text>
              <Text fontWeight="400">95,00 BRL</Text>
            </Flex>
            <Flex w="100%" justifyContent="space-between">
              <Text fontWeight="400">Taxa GoTokens (10%)</Text>
              <Text fontWeight="400" color="#a19d9d">
                190,00 BRL
              </Text>
            </Flex>
          </Box>

          <Box mt="30px" w="100%" height="1px" background="#dfdfdf" />

          <Flex mt="15px" w="100%" justifyContent="space-between">
            <Text fontSize="14px">PAGAMENTO TOTAL</Text>
            <Text fontWeight="400" fontSize="12px">
              2.185 BRL
            </Text>
          </Flex>

          <Flex w="100%" m="0 auto" mt="33px">
            <Button
              onClick={() => setStep("loading")}
              borderRadius="45px"
              border="1px solid #dfdfdf"
              bg="#fff"
              _hover={{ bg: "" }}
              m="0 auto"
              height="48px"
              textAlign="center"
              width="123px"
            >
              Concluir
            </Button>
          </Flex>
        </Box>
      )}

      {step === "cryptoCheckout" && (
        <Box w="100%" m="0 auto">
          <Text mb="32px" fontSize="20px" textAlign="center">
            Pagamento
          </Text>

          <Flex w="100%" justifyContent="space-around" mt="32px">
            <Button
              bg="#fff"
              borderRadius="10px"
              border="1px solid #dfdfdf"
              height="52px"
              width="82px"
              _hover={{ bg: "" }}
              _focus={{ outline: "0" }}
              borderColor={selectedCurreny === "FTR" ? "yellow.500" : "#dfdfdf"}
              onClick={() => setSelectedCurrency("FTR")}
            >
              <Image borderRadius="50%" mr="8px" src="/payment/ftr.png"></Image>
              FTR
            </Button>
            <Button
              bg="#fff"
              borderRadius="10px"
              border="1px solid #dfdfdf"
              height="52px"
              width="82px"
              _hover={{ bg: "" }}
              _focus={{ outline: "0" }}
              borderColor={selectedCurreny === "ETH" ? "yellow.500" : "#dfdfdf"}
              onClick={() => setSelectedCurrency("ETH")}
            >
              <Image mr="8px" src="/payment/eth.png"></Image>
              ETH
            </Button>
            <Button
              bg="#fff"
              borderRadius="10px"
              border="1px solid #dfdfdf"
              height="52px"
              width="82px"
              _hover={{ bg: "" }}
              _focus={{ outline: "0" }}
              borderColor={selectedCurreny === "BNB" ? "yellow.500" : "#dfdfdf"}
              onClick={() => setSelectedCurrency("BNB")}
            >
              <Image mr="8px" src="/payment/bnb.png"></Image>
              BNB
            </Button>
          </Flex>
          <Box
            mt="30px"
            textAlign="end"
            borderRadius="10px"
            background="#f4f4f4"
            p="19px 26px"
            fontSize="12px"
            fontWeight="normal"
          >
            <Flex w="100%" justifyContent="space-between">
              <Text fontWeight="400">VALOR</Text>
              <Box>
                <Text fontWeight="400" color="#a19d9d">
                  15 {selectedCurreny}
                </Text>
                <Text fontWeight="400">1.900,00 BRL</Text>
              </Box>
            </Flex>
            <Box mt="15px" w="100%" height="1px" background="#dfdfdf" />
            <Flex mt="15px" w="100%" justifyContent="space-between">
              <Text fontWeight="400">Taxa de cartão (5%) </Text>
              <Text fontWeight="400">95,00 BRL</Text>
            </Flex>
            <Flex w="100%" justifyContent="space-between">
              <Text fontWeight="400">Taxa GoTokens (10%)</Text>
              <Text fontWeight="400" color="#a19d9d">
                190,00 BRL
              </Text>
            </Flex>
          </Box>

          <Box mt="30px" w="100%" height="1px" background="#dfdfdf" />

          <Flex mt="15px" w="100%" justifyContent="space-between">
            <Text fontSize="14px">PAGAMENTO TOTAL</Text>
            <Text fontWeight="400" fontSize="12px">
              15 {selectedCurreny}
            </Text>
          </Flex>

          <Flex w="100%" m="0 auto" mt="33px">
            <Button
              onClick={() => setStep("loading")}
              borderRadius="45px"
              border="1px solid #dfdfdf"
              bg="#fff"
              _hover={{ bg: "" }}
              m="0 auto"
              height="48px"
              textAlign="center"
              width="123px"
            >
              Concluir
            </Button>
          </Flex>
        </Box>
      )}

      {step === "newCard" && (
        <Box w="100%" m="0 auto">
          <Text mb="32px" fontSize="20px" textAlign="center">
            Adicionar Cartão
          </Text>
          <Image m="0 auto" src="/payment/multiple-cards.png"></Image>
          <Box mt="30px">
            <Text>Número do cartão</Text>
            <Input
              onChange={(e) =>
                setCreditCard({
                  ...crediCard,
                  cardNumber: e.target.value,
                })
              }
            ></Input>
          </Box>
          <Flex mt="18px">
            <Box>
              <Text>Data de validade</Text>
              <Input
                mr="22px"
                onChange={(e) =>
                  setCreditCard({
                    ...crediCard,
                    expiration: e.target.value,
                  })
                }
              ></Input>
            </Box>
            <Box>
              <Flex alignItems="center">
                <Text>CVC</Text>
                <Image ml="6px" src="/payment/question-mark.png" />
              </Flex>
              <Input
                width="102px"
                onChange={(e) =>
                  setCreditCard({
                    ...crediCard,
                    cvc: e.target.value,
                  })
                }
              ></Input>
            </Box>
          </Flex>
          <Flex w="100%" m="0 auto" mt="33px">
            <Button
              onClick={() => setStep("confirmPayment")}
              borderRadius="45px"
              border="1px solid #dfdfdf"
              bg="#fff"
              _hover={{ bg: "" }}
              m="0 auto"
              height="48px"
              textAlign="center"
              width="123px"
            >
              Concluir
            </Button>
          </Flex>
        </Box>
      )}

      {step === "loading" && (
        <Flex
          w="100%"
          m="0 auto"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text mb="32px" fontSize="20px" textAlign="center">
            Processando
          </Text>
          <Spinner
            thickness="6px"
            speed="1s"
            emptyColor="#DFDFDF"
            color="yellow.500"
            size="xl"
            mt="57px"
          />

          <Text
            fontSize="14px"
            mt="45px"
            color="#A19D9D
"
            fontWeight="bold"
          >
            Só um momento...
          </Text>
          <Text textAlign="center" fontSize="14px">
            Seu pedido está sendo processado
          </Text>
        </Flex>
      )}
    </>
  )
}
