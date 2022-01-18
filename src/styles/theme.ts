import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        height: "100%",
      },
      body: {
        display: "flex",
        flexDirection: "column",
      },
      "#__next": {
        flex: 1,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      a: {
        cursor: "pointer",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "gray.500",
        fontWeight: "bold",
      },
    },
    Heading: {
      baseStyle: {
        color: "gray.500",
      },
    },
    Button: {
      variants: {
        solid: {
          _active: {
            background: "white",
          },
        },
      },
    },
  },
  colors: {
    yellow: {
      500: "#FDC921",
    },
    gray: {
      50: "#F5F5F5",
      100: "#DFDFDF",
      200: "#C8C8C8",
      300: "#A19D9D",
      400: "#717171",
      500: "#454545",
    },
    dark: "#0B0C0C",
    success: "#8AC576",
    danger: "#EF7A7C",
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
})
