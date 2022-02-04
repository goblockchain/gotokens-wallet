import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalProps as ChakraModalProps,
  Box,
} from "@chakra-ui/react"
import React, { createContext, useCallback, useContext, useState } from "react"

interface ModalProps {
  message: React.ElementType
  options?: Partial<ChakraModalProps>
}

interface ContextInterface {
  emitModal({ message }: ModalProps): void
}

const NotificationContext = createContext<ContextInterface>(null)

function NotificationProvider({ children }) {
  const [modalData, setModalData] = useState({} as ModalProps)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const emitModal = useCallback(
    ({ message, options }: ModalProps) => {
      setModalData({
        message,
        options,
      })

      onOpen()
    },
    [onOpen]
  )

  const { message: Message, options } = modalData

  return (
    <NotificationContext.Provider value={{ emitModal }}>
      {children}

      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        {...options}
      >
        <ModalOverlay />
        <ModalContent
          borderTop="6px solid"
          borderColor="blue.500"
          borderRadius="15px"
        >
          <ModalBody p="8">
            {!!Message && <Message onClose={() => onClose()} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </NotificationContext.Provider>
  )
}

function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(`useNotification must be used within a NotificationContext`)
  }
  return context
}

export { NotificationProvider, useNotification }
