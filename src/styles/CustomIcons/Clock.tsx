import { Icon } from "@chakra-ui/icons"
// using `path`
export const Clock = (props) => {
  return (
    <Icon width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 4.99951V10.9995L15 12.9995"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}
