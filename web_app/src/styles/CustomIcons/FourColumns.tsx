import { Icon } from "@chakra-ui/icons"
// using `path`
export const FourColumnsIcon = (props) => (
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  <Icon viewBox="0 0 65 47" {...props}>
    <rect width="14" height="22" rx="1" fill="currentColor" />
    <rect y="25" width="14" height="22" rx="1" fill="currentColor" />
    <rect x="17" width="14" height="22" rx="1" fill="currentColor" />
    <rect x="17" y="25" width="14" height="22" rx="1" fill="currentColor" />
    <rect x="34" width="14" height="22" rx="1" fill="currentColor" />
    <rect x="34" y="25" width="14" height="22" rx="1" fill="currentColor" />
    <rect x="51" width="14" height="22" rx="1" fill="currentColor" />
    <rect x="51" y="25" width="14" height="22" rx="1" fill="currentColor" />
  </Icon>
)
