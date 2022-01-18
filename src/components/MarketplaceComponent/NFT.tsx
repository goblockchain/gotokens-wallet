import {
    Box,
    SimpleGrid,
    Flex,
    Grid,
    HStack,
    Select,
    Text,
    Image,
} from "@chakra-ui/react"

import { createBreakpoints } from "@chakra-ui/theme-tools"

import { NFTCard } from '../NFTCard'
import { SelectDays } from '../SelectDays'
import { User } from '../User'
import { LoadMore } from '../LoadMore'

import styles from './marketplace.module.css'

export function NFT() {
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
            <Flex mt={{ base: "40px", md: "76px" }} justify="center">
                <Flex css={{ gap: "131px" }} display={{ sm: "block", md: "flex" }}>
                    <Box>
                        <Image 
                            src="/default-nft-cover-home.png" 
                            alt="default-nft-cover-home" 
                            width="414px" 
                            height="414px"
                        />
                    </Box>

                    <Flex direction="column" align="start" justify="center" mt={{ base: "50px", md: "0px" }}>
                        <Flex align="center" css={{gap: "10px"}}>
                            <Image 
                                src="/icons/fire.svg" 
                                alt="fire" 
                                width="34px" 
                                height="34px"  
                            />
                            <Text fontSize="18px" fontWeight="700">TENDÊNCIAS</Text>
                        </Flex>

                        <Text 
                            className="tokens" 
                            fontSize="32px" 
                            fontWeight="700"
                            textAlign="start"
                            my="33px"
                        >
                            Sem tokens fungíveis
                        </Text>

                        <Box className="creator">
                            <Box>
                                <Text 
                                    fontSize="16px" 
                                    fontWeight="700" 
                                    color="#A19D9D" 
                                    textAlign="start"
                                    mb="4px"
                                >
                                    Criador
                                </Text>

                                <HStack spacing="16px">
                                    <Image 
                                        src="/icons/ellipse.svg"
                                        alt="ellipse" 
                                        width="39px" 
                                        height="39px" 
                                    />
                                    <Text className="user-name" fontSize="16px" fontWeight="700">Nome do usuário</Text>
                                </HStack>
                            </Box>
                                
                            <Flex
                                className="fixed-price" 
                                border="1px" 
                                borderColor="#DFDFDF" 
                                borderRadius="15px"
                                width="183px"
                                height="71px"
                                pl="21px"
                                mt="33px"
                                direction="column"
                                align="start"
                                justify="center"
                            >
                                <Text fontSize="14px" fontWeight="300">PREÇO FIXO</Text>
                                <Text fontSize="14px" fontWeight="700">0.5 ETH</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex className="slide" justify="center" css={{ gap: "9px" }} mt="90px" mb="90px">
                <Box width="58px" height="4px" borderRadius="58px" background="yellow.500"></Box>
                <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
                <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
                <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
                <Box width="58px" height="4px" borderRadius="58px" background="#DFDFDF"></Box>
            </Flex>
            
            <Box className={styles.bests} mb="80px">
                <Box className="best-sales">
                    <SelectDays image="/icons/rotated-ray.svg" alt="rotated-ray">Top vendas em</SelectDays>

                    <Box className={styles.nfts}>
                        <Flex
                            mt="67px"
                            flexWrap="wrap"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            {nfts.map((nft) => (
                                <NFTCard data={nft} key={nft.name} />
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

                <Box className="best-sellers">
                    <SelectDays image="/icons/rotated-ray.svg" alt="rotated-ray">Top vendedores em</SelectDays>

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
                            {nfts.map((nft) => (
                                <NFTCard data={nft} key={nft.name} />
                            ))}
                        </Flex>
                    </Box>

                    <LoadMore /> 
                </Box>
            </Box>
        </>
    )
}