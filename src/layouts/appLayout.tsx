import { Footer, Navtop } from "../components"
import { Box } from "@chakra-ui/react"
export default function NoNavNoFooterLayout({ children }) {
  return (
    <>
      <Navtop />
      <Box height="100%">{children}</Box>
      <Footer></Footer>
    </>
  )
}
