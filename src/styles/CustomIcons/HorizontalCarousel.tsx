import { Icon } from "@chakra-ui/icons"
// using `path`
export const HorizontalCarouselIcon = (props) => (
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  <Icon width="81" height="22" viewBox="0 0 81 22" {...props}>
    <rect x="11" width="13" height="22" rx="1" fill="currentColor" />
    <rect x="26" width="13" height="22" rx="1" fill="currentColor" />
    <rect x="42" width="13" height="22" rx="1" fill="currentColor" />
    <rect x="57" width="13" height="22" rx="1" fill="currentColor" />
    <path
      d="M79.5 10.634C80.1667 11.0189 80.1667 11.9811 79.5 12.366L75.75 14.5311C75.0833 14.916 74.25 14.4349 74.25 13.6651L74.25 9.33493C74.25 8.56513 75.0833 8.08401 75.75 8.46891L79.5 10.634Z"
      fill="currentColor"
    />
    <path
      d="M1.5 12.366C0.833332 11.9811 0.833333 11.0189 1.5 10.634L5.25 8.46891C5.91667 8.08401 6.75 8.56514 6.75 9.33494L6.75 13.6651C6.75 14.4349 5.91667 14.916 5.25 14.5311L1.5 12.366Z"
      fill="currentColor"
    />
  </Icon>
)
