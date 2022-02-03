import {
  FormHelperText,
  Switch as ChakraSwitch,
  SwitchProps,
  Flex,
  FlexProps,
  Box,
  FormLabel,
} from "@chakra-ui/react"
import React, { useState } from "react"

interface SwitchType extends SwitchProps {
  containerStyle?: FlexProps
  label?: string
  helperText?: string
}
export function Switch({
  label,
  helperText,
  containerStyle,
  ...rest
}: SwitchType) {
  const [checked, setChecked] = useState(false)
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      {...containerStyle}
    >
      <Box>
        {label && (
          <FormLabel
            htmlFor={label}
            color="gray.500"
            lineHeight="21px"
            fontSize="18px"
            fontWeight="bold"
          >
            {" "}
            {label}
          </FormLabel>
        )}
        {helperText && (
          <FormHelperText lineHeight="21px" color="gray.200" fontWeight="bold">
            {helperText}
          </FormHelperText>
        )}
      </Box>
      <ChakraSwitch
        isChecked={checked}
        value={String(checked)}
        onMouseDown={() => setChecked(!checked)}
        id={label}
        colorScheme="yellow"
        {...rest}
      ></ChakraSwitch>
    </Flex>
  )
}
