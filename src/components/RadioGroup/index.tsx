import React from "react"

import { Icon } from "@chakra-ui/icons"
import { IconType } from "react-icons"
import { StringOrNumber } from "@chakra-ui/utils"
import {
  Box,
  Stack,
  useRadio,
  Text,
  FormHelperText,
  useRadioGroup,
  StackProps,
  IconProps,
} from "@chakra-ui/react"

interface RadioGroupProps extends StackProps {
  label?: string
  setValue?: (value: string | number) => void
  helperText?: string
  options: {
    content: string
    icon?: IconType
    iconProps?: IconProps
  }[]
}
declare type EventOrValue = React.ChangeEvent<HTMLInputElement> | StringOrNumber

type RadioType = {
  onChange?: (e: EventOrValue) => void
  value?: string | number
  isChecked?: boolean
  name?: string
}

export function RadioGroup({
  options,
  label,
  helperText,
  setValue,
  spacing = "8px",
  direction = "row",
  ...rest
}: RadioGroupProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "cardRadio",
    onChange: setValue,
    defaultValue: "Preço Fixo",
  })

  const group = getRootProps()

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
          color="gray.200"
          fontWeight="normal"
          lineHeight="19px"
        >
          {helperText}
        </FormHelperText>
      )}
      <Stack
        {...rest}
        mt="18px"
        spacing={spacing}
        direction={direction}
        display="flex"
        {...group}
      >
        {options.map((value) => {
          const radio: RadioType = getRadioProps({
            value: value.content,
          })

          return (
            <RadioCard value={value} key={value.content} {...radio}>
              {value.icon && (
                <Icon
                  key={value.content}
                  mb="8px"
                  color={radio.isChecked ? "#fdc921" : ""}
                  height="27px"
                  width="27px"
                  {...value.iconProps}
                  as={value.icon}
                />
              )}
              {value.content}
            </RadioCard>
          )
        })}
      </Stack>
    </>
  )
}

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box w="136px" h="132px" as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        border=" 1px solid"
        borderColor="#DFDFDF"
        display="flex"
        flexDir="column"
        height="100%"
        padding="20px"
        fontSize="14px"
        alignItems="center"
        flex="1"
        justifyContent="center"
        color="gray.200"
        transition="0.2s"
        _hover={{
          transform: "translateY(-2px)",
        }}
        fontWeight="bold"
        textAlign="center"
        _checked={{
          border: "1px solid #FDC921",
          color: "#FDC921",
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}
