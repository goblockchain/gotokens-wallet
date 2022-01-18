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
    border: "1px solid",
    borderColor: "gray.100",
    bg: "#fff",
    _hover: { borderColor: "yellow.500", color: "yellow.500" },
    transition: "all 250ms",
    color: "gray.500",
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
