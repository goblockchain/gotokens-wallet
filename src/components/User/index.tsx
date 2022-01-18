import {
    Box,
    Flex,
    Text,
    Avatar
} from "@chakra-ui/react"

interface UserProps {
    data: {
        user: string;
        value: number;
    }

    index: number;
}

export function User({data, index}: UserProps) {
    return(
        <Flex css={{ gap: "16px" }}>
            <Flex css={{ gap: "16px" }} align="center">
                <Text fontSize="16px" fontWeight="700" color="yellow.500">{index}</Text>
                <Avatar />
            </Flex>

            <Box>
                <Text fontSize="16px" fontWeight="700">{data.user}</Text>
                <Text fontSize="14px" fontWeight="700" color="gray.400">R$ {data.value.toFixed(3)}</Text>
            </Box>
        </Flex>
    )
}