import { Box, Heading, Flex, Icon, Text } from "@chakra-ui/react"
import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { FaImage } from "react-icons/fa"
import { Button, Input, Textarea } from ".."

export function message() {
  const onDrop = useCallback(async (acceptedFiles) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      console.log(reader.result)
    }
    reader.readAsDataURL(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  return (
    <Box mt="25px">
      <Heading>Edite seu Perfil</Heading>

      <Flex mt="35px" w="100%" justifyContent="space-around" flexDirection={{ base: "column", md: "row" }}>
        <Box mr="35px" maxW="450px" w="100%">
          <Input height="44px" mb="18px" label="Nome"></Input>
          <Input height="44px" mb="18px" label="Nome de Usuário"></Input>
          <Textarea height="109px" label="Bio"></Textarea>
        </Box>
        <Box w="100%" mt={{ base: "18px", md: "0px" }}>
          <Text>Carregar Imagem de Perfil</Text>
          <Box maxW="443px" w="100%">
            <Box
              background="#F2F2F2"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              p="30px"
              height="310px"
              width="100%"
              {...getRootProps()}
            >
              <input name="file" {...getInputProps()} />
              <Box>
                <Icon
                  w="56px"
                  h="56px"
                  display="block"
                  margin="0 auto"
                  color="gray.200"
                  as={FaImage}
                />
                <Text
                  textAlign="center"
                  color="gray.200"
                  maxW="38ch"
                  mt="15px"
                  fontSize="12px"
                >
                  {isDragActive
                    ? "ARRASTE OS ARQUIVOS AQUI"
                    : "CLIQUE OU ARRESTE PARA CARREGAR ARQUIVOS .JPG, .PNG, .GIF, .MP4,.MOV, .AVI"}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Flex mt="36px" justifyContent="center" w="100%">
        <Button>Salvar alterações</Button>
      </Flex>
    </Box>
  )
}
