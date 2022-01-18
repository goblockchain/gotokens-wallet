import {
  Box,
  Flex,
  Heading,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  Stack,
  Badge,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  SlideDirection,
  Tooltip,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { BsLightningFill, BsCheck, BsFillPersonFill } from "react-icons/bs"
import { RiDoorOpenFill } from "react-icons/ri"
import Link from "next/link"
import Image from "next/image"
import { Button } from ".."
import { useNotification } from "../../hooks/NotificationContext"
import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Copy, Wallet, WalletFilled } from "../../styles/CustomIcons"

const metamaskIcon = "/icons/metamask-icon.png"
const portisIcon = "/icons/portis-icon.png"
const torusIcon = "/icons/torus-icon.png"

const walletProviders = [
  {
    title: "Metamask",
    icon: metamaskIcon,
    description: "Uma das carteiras mais seguras e flexíveis.",
    label: "Mais Popular",
  },
  {
    title: "Portis",
    icon: portisIcon,
    description: "Conecte-se com seu Google Twitter, Facebook ou Discord.",
    label: "Simples",
  },
  {
    title: "Torus",
    icon: torusIcon,
    description: "Conecte-se com seu e-mail e senha.",
  },
]
const menuOptions = ["GoFund NFT", "NFT", "Educação"]
const searchPhrase = "Procure por criador, coletável ou comunidade"
export function Navtop() {
  const [placement, setPlacement] = useState<SlideDirection>("right")
  const [logged, setLogged] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "ETH comprado",
      message: "1.05 ETH recebidos",
      read: false,
      receivedAt: "1 dia atrás",
      icon: WalletFilled,
    },
    {
      id: "2",
      title: "Upload concluído",
      message: "NFT pronto para venda",
      read: false,
      receivedAt: "1 dia atrás",
      icon: BsCheck,
    },
    {
      id: "3",
      title: "Compra aceita",
      message: "Confira sua NFT",
      read: false,
      receivedAt: "3 dia atrás",
      icon: BsCheck,
    },
  ])
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === "/[user]") setLogged(true)
    if (router.pathname === "/create-nft") setLogged(true)
  }, [router.pathname])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  const { emitModal } = useNotification()

  function handleClick() {
    const message = () => (
      <Box display="flex" flexDir="column" alignItems="center" p="30">
        <Heading
          fontSize="36px"
          color="yellow.500"
          textAlign="center"
          mb="40px"
        >
          Conecte a sua carteira
        </Heading>

        <Stack spacing="4" minW="365px">
          {walletProviders.map((wallet) => (
            <Box
              key={wallet.title}
              cursor="pointer"
              transition="ease-in-out"
              transitionDuration="0.2s"
              _hover={{ transform: "translateY(-2px)" }}
              display="flex"
            >
              <Box
                alignItems="center"
                justifyContent="space-between"
                display="flex"
                borderRadius="10px"
                flex="1"
                padding="10px 17px"
                boxShadow=" 0px 1px 4px 0px #00000030;
"
              >
                <Flex alignItems="center">
                  <Image width="29px" height="29px" src={wallet.icon}></Image>
                  <Text ml="13px" fontWeight="bold">
                    {" "}
                    {wallet.title}
                  </Text>
                </Flex>
                <Text
                  px="10px"
                  fontSize="12px"
                  maxW="30ch"
                  color="gray.200"
                  fontWeight="bold"
                >
                  {" "}
                  {wallet.description}
                </Text>
                <Badge
                  boxShadow=" 0px 1px 4px 0px #00000030
"
                  borderRadius="5px"
                  mr="-50px"
                  color="white"
                  bg="yellow.500"
                >
                  {wallet.label}
                </Badge>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    )
    emitModal({ message, options: { size: "3xl" } })
  }

  function handleHamburguer() {
    setPlacement("right")
    onOpen()
  }
  function handleOpenSearch() {
    setPlacement("bottom")
    onOpen()
  }
  return (
    <Box as="header" height="80px" m="0 auto" width="100%">
      <Flex
        p={{ base: "0 10px", md: "0 30px" }}
        height="80px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          display={{ base: "none", md: "inherit" }}
          fontSize="22px"
          mr="31px"
          color="yellow.500"
        >
          <Link href="/">GoTokens</Link>
        </Heading>

        <Flex
          mr="16px"
          display={{ base: "none", lg: "inherit" }}
          width="100%"
          alignItems="center"
        ></Flex>
        <Button
          display={{ md: "none", base: "flex" }}
          variant="unstyled"
          onClick={handleHamburguer}
          ref={btnRef}
        >
          <HamburgerIcon m="0" w={8} h={8} />
        </Button>
        <Drawer
          placement={placement}
          size="full"
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader boxShadow="md">
              {placement === "right" ? (
                <Flex justifyContent="space-between" align="center">
                  <Heading color="yellow.500">GoTokens</Heading>
                  <DrawerCloseButton position="static" />
                </Flex>
              ) : (
                <Flex alignItems="center">
                  <DrawerCloseButton position="static" />
                </Flex>
              )}
            </DrawerHeader>

            <DrawerBody>
              {placement === "right" ? (
                <Stack mt="16" spacing="4">
                  {menuOptions.map((menu) => (
                    <Text key={menu} fontSize="20" fontWeight="bold">
                      {menu}
                    </Text>
                  ))}
                </Stack>
              ) : (
                <Text textAlign="center" mt="16px" fontWeight="bold">
                  {searchPhrase}
                </Text>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex
          width="100%"
          as="nav"
          justifyContent={{ lg: "flex-end", base: "flex-end" }}
          alignItems="center"
        >
          {logged ? (
            <>
              <HStack
                mr={{ base: "8px", md: "26px" }}
                spacing={{ base: "8px", md: "26px" }}
                display={{ md: "flex", base: "none" }}
              >
                {menuOptions.map((menu) => (
                  <Link
                    key={menu}
                    href={menu === "GoFund NFT" ? `/gofund` : "/"}
                  >
                    <Text fontWeight="bold" color="gray.500">
                      {menu}
                    </Text>
                  </Link>
                ))}
              </HStack>

              <ProfileMenu />

              <Flex align="center" minW="max-content">
                <NotificationsMenu notifications={notifications} />

                <Tooltip
                  label="Conectar Carteira"
                  fontWeight="bold"
                  bg="dark"
                  aria-label="A tooltip"
                >
                  <Flex onClick={() => router.push("/wallet")} cursor="pointer">
                    <Icon
                      transition="0.3s"
                      color="gray.300"
                      _hover={{
                        color: "yellow.500",
                      }}
                      w={25}
                      h={25}
                      as={Wallet}
                    ></Icon>
                  </Flex>
                </Tooltip>
              </Flex>
            </>
          ) : (
            <HStack spacing="25px">
              <Link href="/about">
                <Text cursor="pointer">Quem somos</Text>
              </Link>

              <Button onClick={() => router.push("/signin")} height="34px">
                Logar
              </Button>
            </HStack>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

function ProfileMenu() {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        mr={{ base: "8px", md: "26px" }}
        as={Avatar}
        background="gray"
        borderRadius="50%"
        width="28px"
        height="28px"
      ></MenuButton>
      <MenuList
        boxShadow=" 0px 1px 4px 0px #00000030
"
        borderRadius="15px"
        padding="20px"
      >
        <Text textAlign="center" mb="11px" fontSize="14px" fontWeight="bold">
          Fulano Costa
        </Text>
        <Flex alignItems="center" justifyContent="center">
          <Badge
            borderRadius="36px"
            bg="#F2F2F2"
            fontSize="12px"
            color="gray.300"
            p="5px 15px"
          >
            0xb2364j982t...
          </Badge>
          <Icon fontSize="20px" ml="7px" color="yellow.500" as={Copy}></Icon>
        </Flex>
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          my="16px"
          borderRadius="10px"
          padding="15px"
          bg="#ededed"
        >
          <Box mr="15px">
            <Icon fontSize="36px" color="yellow.500" as={WalletFilled}></Icon>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="10px">
              Seu Saldo
            </Text>
            <Text fontWeight="bold" fontSize="18px" textAlign="center">
              0.000 ETH
            </Text>
          </Box>
        </Box>
        <MenuItem
          _active={{
            bg: "initial",
          }}
          _hover={{
            bg: "initial",
          }}
          py="20px"
          borderBottom="2px solid"
          borderColor="gray.100"
        >
          <Icon fontSize="28px" as={BsFillPersonFill} mr="14px" />
          <Link href="/user/me">Meu perfil</Link>
        </MenuItem>

        <MenuItem
          _active={{
            bg: "initial",
          }}
          _hover={{
            bg: "initial",
          }}
          py="20px"
        >
          <Icon fontSize="28px" as={RiDoorOpenFill} mr="14px" />
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
function NotificationsMenu({ notifications }) {
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true)

  return (
    <Menu>
      <MenuButton onClick={() => setHasUnreadNotifications(false)}>
        <Flex
          position="relative"
          cursor="pointer"
          mr={{ base: "8px", md: "26px" }}
        >
          <Icon as={BsLightningFill} w={25} h={25} color="yellow.500"></Icon>
          {hasUnreadNotifications && (
            <Box
              position="absolute"
              w="7px"
              h="7px"
              borderRadius="full"
              bg="#E37070"
              bottom="3px"
              right="3px"
            ></Box>
          )}
        </Flex>
      </MenuButton>
      <MenuList
        boxShadow=" 0px 1px 4px 0px #00000030
"
        display="flex"
        flexDir="column"
        alignItems="center"
        borderRadius="15px"
        padding="20px 24px"
      >
        <Text textAlign="center" fontSize="18px" fontWeight="bold">
          Notificações
        </Text>

        {notifications.length ? (
          <Box w="100%" mt="17px">
            {notifications.map((notification, index) => {
              const firstItem = index === 0
              const lastItem = index === notifications.length - 1
              return (
                <Box
                  position="relative"
                  display="flex"
                  key={notification.id}
                  justifyContent="start"
                  alignItems="center"
                  borderY={firstItem || lastItem ? "none" : "2px solid"}
                  borderColor="gray.100"
                  padding="12px 0"
                >
                  <Icon mr="15px" as={notification.icon} fontSize="36px" />
                  <Box>
                    <Text fontSize="14px">{notification.title}</Text>
                    <Text fontSize="12px">{notification.message}</Text>
                    <Text fontSize="12px" color="gray.300">
                      {notification.receivedAt}
                    </Text>
                  </Box>
                </Box>
              )
            })}
          </Box>
        ) : (
          <Text
            fontSize="12px"
            mb="10px"
            textAlign="center"
            mt="24px"
            color="gray.300"
          >
            Não há notificações
          </Text>
        )}
      </MenuList>
    </Menu>
  )
}
