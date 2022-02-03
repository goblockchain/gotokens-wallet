import {
  Select as ChakraSelect,
  SelectFieldProps,
  FormHelperText,
  Text,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useController, UseControllerProps } from "react-hook-form"

interface SelectProps extends SelectFieldProps {
  label?: string
  options: string[]
  helperText?: string
  rightElement?: string
}
export function Select(props: UseControllerProps<SelectProps>) {
  const { field } = useController(props)
  const {
    label,
    helperText,
    rightElement,
    defaultValue,
    options,
    name,
    placeholder,
    focus,
    ...rest
  } = props
  return (
    <>
      {label && (
        <Text
          lineHeight="21px"
          color="gray.400"
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
          color="gray.200"
          fontWeight="bold"
          lineHeight="19px"
        >
          {helperText}
        </FormHelperText>
      )}
      <InputGroup>
        <ChakraSelect
          height="50px"
          mt="18px"
          border=" 1px solid"
          borderColor="#DFDFDF"
          borderRadius="10px"
          focusBorderColor={focus ? focus : "yellow.500"}
          iconColor="yellow.500"
          {...field}
          {...rest}
        >
          <Text as="option" color="gray.200">
            {placeholder}
          </Text>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </ChakraSelect>
        {rightElement && (
          <InputRightElement
            pointerEvents="none"
            right="35px"
            top="23px"
            children={
              <Text fontWeight="bold" color="yellow.500">
                {rightElement}
              </Text>
            }
          />
        )}
      </InputGroup>
    </>
  )
}
