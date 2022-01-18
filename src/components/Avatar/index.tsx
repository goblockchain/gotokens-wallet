import Image from "next/image"
import { Avatar as ChakraAvatar } from "@chakra-ui/react"
interface AvatarProps {
  image?: string
}

export function Avatar({ image }: AvatarProps) {
  return (
    <>
      {image ? (
        <Image src={image} height="36px" width="36px" />
      ) : (
        <ChakraAvatar height="36px" width="36px" />
      )}
    </>
  )
}
