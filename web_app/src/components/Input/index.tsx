import {
  FormHelperText,
  Input as ChakraInput,
  InputProps,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react"

interface InputType extends InputProps {
  label?: string
  helperText?: string
  type?: string
  max?: number
  defaultValue?: number
  rightElement?: string | JSX.Element
}

export function Input({
  label,
  helperText,
  type,
  max,
  defaultValue,
  rightElement,
  ...rest
}: InputType) {
  return (
    <>
      {label && (
        <Text lineHeight="21px" fontSize="18px" fontWeight="bold">
          {" "}
          {label}
        </Text>
      )}
      {helperText && (
        <Text
          color="gray.500"
          fontSize="16px"
          mt="6px"
          fontWeight="bold"
          lineHeight="19px"
        >
          {helperText}
        </Text>
      )}

      {type === "number" ? (
        <NumberInput
          focusBorderColor="yellow.500"
          defaultValue={defaultValue}
          max={max}
        >
          <NumberInputField
            mt="18px"
            height="50px"
            border=" 1px solid"
            borderColor="#DFDFDF"
            borderRadius="10px"
            {...rest}
          />
          {rightElement && (
            <InputRightElement
              pointerEvents="none"
              right="0"
              top="23px"
              children={
                <Text fontWeight="bold" color="yellow.500">
                  {rightElement}
                </Text>
              }
            />
          )}
        </NumberInput>
      ) : (
        <InputGroup>
          <ChakraInput
            mt="18px"
            height="50px"
            border=" 1px solid"
            type={type}
            borderColor="#DFDFDF"
            borderRadius="10px"
            focusBorderColor="yellow.500"
            {...rest}
          ></ChakraInput>
          {rightElement && (
            <InputRightElement
              pointerEvents="none"
              top="20px"
              right="5px"
              children={
                <Text textAlign="center" fontWeight="bold">
                  {rightElement}
                </Text>
              }
            />
          )}
        </InputGroup>
      )}
    </>
  )
}
