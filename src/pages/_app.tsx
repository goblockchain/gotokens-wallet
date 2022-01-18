import { theme } from "../styles/theme"
import { ChakraProvider } from "@chakra-ui/react"

import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import NoNavNoFooterLayout from "../layouts/noNavNoFooterLayout"
import AppLayout from "../layouts/appLayout"
import React from "react"
import { Context } from "../hooks"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>)

  return (
    <ChakraProvider theme={theme}>
      <Context>{getLayout(<Component {...pageProps} />)}</Context>
    </ChakraProvider>
  )
}

export default MyApp
