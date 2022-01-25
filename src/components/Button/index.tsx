import {
  forwardRef,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react"
export const Button = forwardRef((props: ChakraButtonProps, ref) => {
  const styledProps = props.variant !== "unstyled" && {
    height: "50px",
    p: "15px 33px",
    borderRadius: "42px",
    bg: "#0e0bf5",
    _hover: { bg: "#0d0b7e" },
    transition: "all 250ms",
    color: "#FFFFFF",
  }
  return (
    <ChakraButton
      _disabled={{
        _hover: {},
        pointerEvents: "none",
        opacity: "0.5",
      }}
      ref={ref}
      {...styledProps}
      {...props}
    ></ChakraButton>
  )
})
