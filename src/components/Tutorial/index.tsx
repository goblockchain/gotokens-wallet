import {
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverHeader,
  Text,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  CircularProgress,
  CircularProgressLabel,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react"
import React from "react"
import { Button } from ".."
import { LightBulb } from "../../styles/CustomIcons"

const steps = [
  {
    percentage: 0,
    title: "Crie seu perfil",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Nesta página vamos configurar e criar seu Perfil. Preencha cada
          formulário e prossiga para a próxima etapa.
        </Text>
        <Text fontSize="14px" fontWeight="normal" mt="13px" color="gray.400">
          Poderá editar seus dados posteriormente na sua página de perfil assim
          como poderá carregar uma imagem de perfil e capa.
        </Text>
      </>
    ),
  },
  {
    percentage: 10,
    title: "Incremente seu perfil",
    content: () => (
      <>
        <Text fontSize="14px" fontWeight="normal" mt="13px" color="gray.400">
          Na sua Página de perfil você poderá gerenciar e ter informações sobre
          seus tokens criados ou comprados.
        </Text>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          É de extrema importância que as pessoas conheçam mais você e sua
          identidade visual para comprar seus tokens. Adicione os detalhes do
          seu perfil clicando no ícone “Editar Perfil” como, imagem de perfil e
          capa, uma breve bio e não se esqueça de conectar com suas redes
          sociais se assim preferir.
        </Text>
      </>
    ),
  },
  {
    percentage: 20,
    title: "Crie seu 1º NFT",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Agora que você incrementou seu perfil está na hora de criar seu
          primeiro colecionável, clique no botão “Criar NFT” ou na barra de
          navegação superior.
        </Text>
        <Box fontSize="14px" mt="39px" fontWeight="bold">
          Se não quiser vender um colecionável por agora{" "}
          <Link color="yellow.500">clique aqui</Link> que pularemos algumas
          algumas etapas.
        </Box>
      </>
    ),
  },
  {
    percentage: 40,
    title: "Conecte-se a uma carteira",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Wow! Parabéns pelo seu primeiro colecionável criado. Lembre-se que
          todo colecionável criado irá primeiramente para sua aba de “Rascunhos”
          dentro do seu Perfil. Agora para poder publicar seu colecionável, você
          precisará setar alguma forma de transferência, clique em “Conectar
          Carteira” no canto superior direito e veja as opções que lhe
          oferecemos.
        </Text>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Agora para poder publicar seu colecionável, você precisará setar
          alguma forma de transferência, clique em “Conectar Carteira” no canto
          superior direito e veja as opções que lhe oferecemos.
        </Text>
      </>
    ),
  },
  {
    percentage: 60,
    title: "Gerenciamento de carteiras",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Nesta tela você poderá gerenciar e terá todas as informações sobre
          suas carteiras cadastradas. Ao setar sua primeira carteira ela será
          dada como padrão, e sua chave pública apresentada no seu perfil será a
          da carteira escolhida. Você terá opções de configurar novas carteiras
          e decidir qual será sua padrão. Clique nos ícones de cada carteira
          para comprar, receber ou trocar fundos.
        </Text>
        <Text fontSize="14px" fontWeight="normal" mt="13px" color="gray.400">
          Agora você sabe gerenciar sua carteira já pode voltar a sua tela de
          rascunhos no navegando para o seu perfil e publicar sua NFT.
        </Text>
      </>
    ),
  },
  {
    percentage: 80,
    title: "Publicar seu colecionável",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Para públicar seu colecionável clique no botão de “Publicar” no card
          desabilitado dentro da aba de “Rascunhos” e ele já estará disponível
          para a venda e compartilhamento.
        </Text>
        <Text fontSize="14px" fontWeight="normal" mt="13px" color="gray.400">
          Clique no card do NFT para visualizar os detalhes do conteúdo e suas
          informações. Após públicado você poderá compartilhar o link de seu
          colecionável e editar ele caso precise mudar algo.
        </Text>
      </>
    ),
  },
  {
    percentage: 90,
    title: "Gerencie seu espaço pessoal",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Estamos quase lá... Agora que seu colecionável está pronto para a
          venda, que tal colocar ele na sua própria vitrine personalizada? A
          GoTokens lhe oferece um espaço de vendas compartilhável e
          customizável. Clique em “Gerenciar meu espaço” para ter acesso a sua
          área pessoal e adicionar{" "}
        </Text>
      </>
    ),
  },
  {
    percentage: 95,
    title: "Adicione um colecionável",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Clique no campo de adição em branco para selecionar qual colecionável
          você quer adicionar na sua vitrine.
        </Text>
      </>
    ),
  },
  {
    percentage: 100,
    title: "Conclusão",
    content: () => (
      <>
        <Text fontSize="14px" mt="39px" fontWeight="bold">
          Parabéns! Você cumpriu todas as etapas de aprendizado da nossa
          plataforma e agora estará pronto para explorar, criar e comprar na
          GoTokens.
        </Text>
      </>
    ),
  },
]
export function Tutorial() {
  const [currentStep, setCurrentStep] = React.useState(0)
  return (
    <Popover offset={[0, 10]} placement="top">
      <PopoverTrigger>
        <Button
          boxShadow=" 0px 1px 4px 0px #00000030"
          position="fixed"
          border="none"
          bottom="25%"
          height="34px"
          right="10%"
          padding="5px 19px"
          display="flex"
          fontSize="14px"
          alignItems="center"
        >
          <Icon mr="5px" as={LightBulb}></Icon>
          Inicio Rápido
        </Button>
      </PopoverTrigger>
      <PopoverContent
        borderRadius="15px"
        p=" 26px"
        border="none"
        boxShadow=" 0px 1px 4px 0px #00000030;"
        _focus={{
          boxShadow: "0px 1px 4px 0px #00000030;",
        }}
      >
        <PopoverBody display="flex" flexDir="column">
          <Flex alignItems="center">
            <CircularProgress
              onClick={() =>
                setCurrentStep(
                  currentStep === steps.length - 1 ? 0 : currentStep + 1
                )
              }
              thickness="8px"
              size="80px"
              mr="16px"
              value={steps[currentStep].percentage}
              color="yellow.500"
            >
              <CircularProgressLabel fontWeight="bold">
                {steps[currentStep].percentage}%
              </CircularProgressLabel>
            </CircularProgress>
            <Box>
              <Text fontSize="14px" color="yellow.500">
                Etapa atual:
              </Text>
              <Text fontSize="18px">{steps[currentStep].title}</Text>
            </Box>
          </Flex>
          <Box
            paddingBottom="35px"
            borderBottom="2px solid"
            borderColor={
              currentStep === steps.length - 1 ? "transparent" : "#dfdfdf"
            }
          >
            {steps[currentStep].content()}
          </Box>
          <Box mt="26px">
            {currentStep !== steps.length - 1 ? (
              <>
                <Text fontSize="14px" color="yellow.500">
                  Próxima etapa:
                </Text>
                <Text fontSize="14px">{steps[currentStep + 1]?.title}</Text>
              </>
            ) : (
              <Button display="flex" m="0 auto" height="34px">
                Concluir
              </Button>
            )}
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
