import { Box, Input as ChakraInput, Text, InputGroup } from "@chakra-ui/react"
import React, { useState } from "react"

export function ColorPicker({ label, helperText, ...rest }) {
  const [value, setValue] = useState("#FFFFFF")

  // console.log(value)
  return (
    <Box
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
    >
      {label && (
        <Text
          lineHeight="21px"
          color="#454545"
          fontSize="18px"
          fontWeight="bold"
        >
          {" "}
          {label}
        </Text>
      )}
      {helperText && (
        <Text
          fontSize="16px"
          mt="6px"
          color="#A19D9D"
          fontWeight="400"
          lineHeight="19px"
        >
          {helperText}
        </Text>
      )}
      <InputGroup mt="25px" display="flex" alignItems="center">
        <Box
          background={value}
          borderRadius="50%"
          width="39px"
          height="39px"
          border="1px solid"
          borderColor="#dfdfdf"
          position="relative"
        >
          <ChakraInput
            w="100%"
            opacity="0"
            position="absolute"
            h="100%"
            type="color"
            {...rest}
          />
        </Box>

        <Text fontWeight="bold" color="#A19D9D" ml="8px">
          {value}
        </Text>
      </InputGroup>
    </Box>
  )
}
