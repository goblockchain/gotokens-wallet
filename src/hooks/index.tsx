import { NotificationProvider } from "./NotificationContext"

export function Context({ children }) {
  return <NotificationProvider>{children}</NotificationProvider>
}
