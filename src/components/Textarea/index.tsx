import {
  FormHelperText,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  Text,
} from "@chakra-ui/react"
import React from "react"

interface TextareaProps extends ChakraTextareaProps {
  label?: string
  helperText?: string
}

export function Textarea({ label, helperText, ...rest }: TextareaProps) {
  return (
    <>
      {label && (
        <Text
          lineHeight="21px"
          color="gray.500"
          fontSize="18px"
          fontWeight="bold"
        >
          {" "}
          {label}
        </Text>
      )}
      {helperText && (
        <FormHelperText
          fontSize="16px"
          mt="6px"
          color="gray.300"
          fontWeight="normal"
          lineHeight="19px"
        >
          {helperText}
        </FormHelperText>
      )}
      <ChakraTextarea
        height="159px"
        mt="18px"
        border=" 1px solid"
        borderColor="#DFDFDF"
        borderRadius="10px"
        focusBorderColor="yellow.500"
        {...rest}
      ></ChakraTextarea>
    </>
  )
}
