export type Nft = {
  name: string
  owner: string
  availability?: "available" | "unavailable"
  nftCover: string
  avatar?: string
  options?: [{ title: string; icon: string }]
  type: "marketplace" | "editable" | "readOnly"
  quantity: "single" | "multiple"
  marketplace?: {
    type: "fixedPrice" | "indeterminatedAuction" | "timedAuction"
    fixedPrice?: string
    stock?: number
    currentBid?: number
    starsAt?: number
    finishesAt?: number
  }
}

type userData = {
  email: string
  id: string
  name: string
  username: string
  fullName: string
  avatar?: string
  bio?: string
}

export type User = {
  token: string
  user: userData
}
