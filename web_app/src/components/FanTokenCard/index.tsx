import {
    Box,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Image,
    Avatar,
    Tooltip,
} from "@chakra-ui/react"

import { FaCode } from "react-icons/fa"

import { Graphic } from '../Graphic'

interface FanTokenCardProps {
    data: {
        name: string;
        FanTokenCover?: string;
        avatar?: string;
        options?: { title: string; icon: string; }[]
        price: string;
    }
}

export function FanTokenCard({ data }: FanTokenCardProps) {
    return(
        <Box 
            width="290px"
            mx="auto" 
            mb="70px" 
            _hover={{ transform: "translateY(-4px)" }}
            transition="all 500ms"
            overflow="hidden"
            textAlign="center"
        >
            <Flex>
                <Menu placement="bottom">
                    <MenuButton fontSize="18px" fontWeight="bold">
                    ...
                    </MenuButton>
                    <MenuList>
                        {data.options.map((option) => {
                            <MenuItem
                                _hover={{ background: "yellow.500" }} 
                                key={option.title}
                                icon={<FaCode />}
                            >
                                {option.title}
                            </MenuItem>
                        })}
                    </MenuList>
                </Menu>
            </Flex>

            <Flex position="relative" flexDirection="column">
                <Box>
                    <Image
                        width="100%" 
                        height="117px"
                        borderRadius="15px 15px 0 0"
                        src={data.FanTokenCover ? data.FanTokenCover : "/default-fan-token.png"}
                        alt="nft"
                    />
                </Box>

                <Avatar 
                    position="absolute" 
                    right="22px" 
                    bottom="-22px" 
                    height="65px" 
                    width="65px" 
                    border="3px solid #fff"
                />
            </Flex>

            <Flex
                border="1.5px solid #e2e2e2"
                background="#fff"
                borderRadius="0 0 15px 15px"
                p="18px 26px"
                flexDirection="column"
                alignItems="start"
            >
                <Box textAlign="start">
                    <Tooltip
                        bg="dark"
                        aria-label="A tooltip"
                        label={data.name}
                        hasArrow
                    >
                        <Text fontWeight="500" fontSize="14px" mb="8px">
                            {data.name}
                        </Text>
                    </Tooltip>

                    <Text fontWeight="400" fontSize="12px">
                        Clube do Fã
                    </Text>
                </Box>

                <Box border="1px solid #DFDFDF" bg="#DFDFDF" width="100%" m="19px 0"></Box>

                <Box mb="8px">
                    <Text fontWeight="500" fontSize="14px">{data.price} $GT</Text>
                    <Text fontWeight="400" fontSize="12px">= 5.20 BRL</Text>
                </Box>

                <Graphic />
            </Flex>
        </Box>
    )
}