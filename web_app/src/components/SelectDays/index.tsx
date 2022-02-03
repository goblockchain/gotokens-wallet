import { Flex, Select, Text, Image } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

interface SelectProps {
  image: string
  alt: string
  children: string
}

export function SelectDays({ children, image, alt }: SelectProps) {
  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  })

  return (
    <Flex align="center">
      <Image src={image} alt={alt} />
      <Text 
        fontSize={{ base: "17px", md: "32px" }}
        fontWeight="700" 
        ml="29px"
        mr="12px"
      >
        {children}
      </Text>

      <Select
        variant="unstyled"
        width={{ base: "initial", md: "119px" }}
        fontSize={{ base: "17px", md: "32px" }}
        fontWeight="700"
        color="yellow.500"
      >
        <option value="7days">7 dias</option>
        <option value="15days">15 dias</option>
        <option value="30days">30 dias</option>
      </Select>
    </Flex>
  )
}