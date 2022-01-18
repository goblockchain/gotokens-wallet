import { Flex, Text } from "@chakra-ui/react"

interface TransactionProp {
  value: number
  description: string
  date: string
}

export function Transaction({ date, description, value }: TransactionProp) {
  return (
    <Flex
      mt="10px"
      p="10px 0"
      justifyContent="space-between"
      borderBottom="1px solid #dfdfdf"
    >
      <Text color={value > 0 ? "#8AC576" : "#E37070"}>
        {value > 0 ? `+${value}` : `${value}`}
      </Text>
      <Text fontSize="14px" fontWeight="300">
        {description}
      </Text>
      <Text fontSize="14px" fontWeight="300">
        {date}
      </Text>
    </Flex>
  )
}
