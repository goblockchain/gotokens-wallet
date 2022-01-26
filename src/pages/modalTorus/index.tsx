import React, { useState } from 'react'
import Torus from '@toruslabs/torus-embed'
import Web3 from 'web3'

import {
  Box,
  Button,
  Text
} from '@chakra-ui/react'

import NoNavNoFooterLayout from '../../layouts/noNavNoFooterLayout'

export default function torus () {
  const [account, setAccount] = useState({})

  const onClickLogin = async (e) => {
    e.preventDefault()

    const torus = new Torus({})
    await torus.init({
      enableLogging: false
    })
    await torus.login()

    const web3 = new Web3((torus.provider as any))
    const address = (await web3.eth.getAccounts())[0]
    const balance = await web3.eth.getBalance(address)
    setAccount({ address, balance });
  }

  return (
    <Box>
      <Text >

        {account ? (
          <Box className="App-info">
            <Text>
              <Text>Address</Text>: {'address'}
            </Text>
          </Box>
        ) : (
          <>
            <Text>You didn`t login yet. Login to see your account details.</Text>
            <Button onClick={onClickLogin}>
              Login
            </Button>
          </>
        )}
      </Text>
    </Box>
  )
}

torus.getLayout = function getLayout (page: SVGAElement) {
  return <NoNavNoFooterLayout>{page}</NoNavNoFooterLayout>
}
