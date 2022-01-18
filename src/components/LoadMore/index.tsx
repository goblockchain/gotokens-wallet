import {
    Box,
    Text,
    Button,
} from "@chakra-ui/react"

export function LoadMore() {
    return(
        <Box className="load-more" textAlign="center" mt="80px">
            <Button 
                style={{ border: "1px solid #DFDFDF" }} 
                borderRadius="100%" 
                variant="unstyled" 
                width="38px" 
                height="38px"
            >
                <Text fontSize="18px" fontWeight="400" color="#A19D9D">+</Text>
            </Button>
        </Box>
    )
}