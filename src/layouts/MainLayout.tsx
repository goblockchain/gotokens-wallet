import { Footer, Navtop } from '../components'
import { Box } from '@chakra-ui/react'

export default function MainLayout({ children }) {

  return (
    <>
      <Navtop />
      <Box>{children}</Box>
      <Footer></Footer>
    </>
  )
}
