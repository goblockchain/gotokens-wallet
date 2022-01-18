import { Input, Select, Textarea, Switch } from "../components"

export const formFields = [
  {
    name: "title",

    containerProps: {
      width: "66%",
      mr: "31px",
    },
    element: Input,
    elementProps: {
      label: "Título",
      helperText: "Ex. Arte Resgatável Única",
    },
  },
  {
    name: "quantity",

    containerProps: {
      width: "26.8%",
      alignSelf: "flex-end",
    },
    element: Input,
    elementProps: {
      type: "number",
      max: 20,
      label: "Qtd.",
      helperText: "Max: 20",
      placeholder: "Selecione...",
    },
  },
  {
    name: "initialDate",

    element: Select,
    containerProps: {
      flex: 1,
      mr: "16px",
    },
    elementProps: {
      label: "Data Inicial",
      placeholder: "Selecione...",
      options: [
        "1 dia após lançamento",
        "5 dias após lançamento",
        "10 dias após lançamento",
      ],
    },
  },
  {
    name: "expirationDate",

    element: Select,
    containerProps: {
      flex: 1,
    },
    elementProps: {
      label: "Data de Expiração",
      placeholder: "Selecione...",
      options: [
        "1 dia após lançamento",
        "5 dias após lançamento",
        "10 dias após lançamento",
      ],
    },
  },
  {
    name: "description",

    element: Textarea,
    containerProps: {
      width: "100%",
    },
    elementProps: {
      label: "Descrição",
      helperText: "Adicionar descrição opcional da peça colecionável",
    },
  },
  {
    name: "value",

    element: Input,
    containerProps: {
      flex: 3,
    },
    elementProps: {
      type: "number",
      label: "Valor",
      helperText: "A GoTokens ficará com uma taxa de x% da transação.",
    },
  },
  {
    name: "currency",

    element: Select,
    containerProps: {
      flex: 1,
      alignSelf: "flex-end",
    },
    elementProps: {
      fontSize: "14px",
      border: "0",
      fontWeight: "bold",
      label: "",
      placeholder: "Selecione",
      focus: "none",
      options: ["ETH", "R$"],
    },
  },

  {
    name: "unlockAfterBuy",

    element: Switch,
    containerProps: {
      width: "100%",
    },
    elementProps: {
      label: "Desbloquear depois de comprar?",
    },
  },
  {
    name: "royalities",

    element: Input,
    containerProps: {
      width: "100%",
    },
    elementProps: {
      label: "Royalities",
      helperText: "Sugerido: 0%, 10%, 20%, 30%. Max: 50%",
      type: "number",
      max: 50,
      rightElement: "%",
    },
  },
]
