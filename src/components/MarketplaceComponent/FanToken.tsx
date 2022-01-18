import {
    Box,
    SimpleGrid,
    Flex,
    Grid,
    Select,
    Text,
} from "@chakra-ui/react"

import { createBreakpoints } from "@chakra-ui/theme-tools"

import { NFTCard } from '../NFTCard'
import { SelectDays } from '../SelectDays'
import { User } from '../User'
import { LoadMore } from '../LoadMore'
import { FanTokenCard } from '../FanTokenCard'

import styles from './marketplace.module.css'

export function FanToken() {
    const breakpoints = createBreakpoints({ 
        sm : "320px", 
        md : "768px", 
        lg : "960px", 
        xl : "1200px",
    })

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

    const FanTokenNfts = [
        {
            name: "Gordofreldo",
            options: [{ title: "report", icon: "report" }],
            price: "2,40"
        },
        {
            name: "Gordofreldo",
            options: [{ title: "report", icon: "report" }],
            price: "2,40"
        },
        {
            name: "Gordofreldo",
            options: [{ title: "report", icon: "report" }],
            price: "2,40"
        },
        {
            name: "Gordofreldo",
            options: [{ title: "report", icon: "report" }],
            price: "2,40"
        },
    ]

    const userInfo = [
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {
            user: "Renan Gustavo",
            value: 82
        },
        {

            user: "Renan Gustavo",
            value: 82
        },
        {

            user: "Renan Gustavo",
            value: 82
        },
        {

            user: "Renan Gustavo",
            value: 82
        },
        {

            user: "Renan Gustavo",
            value: 82
        },
        {

            user: "Renan Gustavo",
            value: 82
        },
        {

            user: "Renan Gustavo",
            value: 82
        },
    ]

    return(
        <>
            <Box
                m={{ base: "40px 0", md: "76px 0 96px 0" }}
                mx={{ base: "0", md: "auto" }}
                width={{ base: "100%", md: "672px" }} 
            >
                <Text fontSize="32px" fontWeight="700">Invista nos Fan Tokens criados na plataforma</Text>
                <Text 
                    fontSize="18px" 
                    fontWeight="500" 
                    color="#575757"
                    mt="35px"
                    width={{ base: "100%", md: "642px" }}
                >
                    De insdústrias estabelecidas a emergentes em franca ascenção, escolha diversas maneiras para um investimendo inteligente e moderno.
                </Text>
            </Box>
            
            <Box className={styles.bests} mb="80px">
                <Box className="fan-tokens">
                    <SelectDays image="/icons/rotated-ray.svg" alt="rotated-ray">Top Fan Tokens em</SelectDays>

                    <Box className={styles.nfts}>
                        <Flex
                            mt="67px"
                            flexWrap="wrap"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            {FanTokenNfts.map((card) => (
                                <FanTokenCard data={card} key={card.name} />
                            ))}
                        </Flex>

                        <Flex className="slide" justify="center" css={{ gap: "9px" }} mt="61px" mb="90px">
                            <Box width="58px" height="4px" borderRadius="58px" background="yellow.500"></Box>
                            <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
                            <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
                            <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
                            <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
                        </Flex>
                    </Box>
                </Box>

                <Box className="best-issuers">
                    <SelectDays image="/icons/rotated-ray.svg" alt="rotated-ray">Top Emissores em</SelectDays>

                    <Box className="users" mt="66px">
                        <SimpleGrid
                            justifyItems="center"
                            spacing="54px"
                            columns={{ sm: 2, lg: 3, xl: 5 }}
                        >
                            {userInfo.map((user, index) => (
                                <User data={user} index={index + 1} key={index} />
                            ))}
                        </SimpleGrid>
                    </Box>
                </Box>

                <Box className="explore" mt="103px">
                    <Flex 
                        direction={{ base: "column", md: "row" }} 
                        alignItems={{ base: "flex-start" , md: "center" }}
                    >
                        <Text mr="52px" fontSize={{ base: "17px", md: "32px" }}>Explorar</Text>
                        <Grid className={styles.filter}>
                            <Select iconColor="yellow.500">
                                <option value="category">Categoria</option>
                            </Select>
                            <Select iconColor="yellow.500">
                                <option value="type">Tipo</option>
                            </Select>
                            <Select iconColor="yellow.500">
                                <option value="price">Preço</option>
                            </Select>
                        </Grid>
                    </Flex>

                    <Box className={styles.nfts} mt="66px">
                        <Flex
                            mt="67px"
                            flexWrap="wrap"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            {FanTokenNfts.map((card) => (
                                <FanTokenCard data={card} key={card.name} />
                            ))}
                        </Flex>
                    </Box>

                    <LoadMore /> 
                </Box>
            </Box>
        </>
    )
}