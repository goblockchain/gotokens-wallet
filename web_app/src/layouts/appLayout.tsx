import { Footer, Navtop } from "../components";
import { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import Web3 from 'web3';
import GoBlockchain from '../contracts/GoBlockchain';
export default function NoNavNoFooterLayout({ children }) {
  const [account, setAccount] = useState('');

  useEffect(() => {
    async function load() {
      let ethereum = window['ethereum'];
      let accounts = await ethereum.request({ method: 'eth_accounts' });
      setAccount(accounts[0]);
      let newWeb3 = window['web3'];
      const web3 = new Web3(newWeb3.currentProvider);
      await GoBlockchain.setProvider(web3.currentProvider);
      let deployed = await GoBlockchain.deployed();
      const contract = await new web3.eth.Contract(deployed.abi, deployed.address);
      console.log(contract);
    }
    
    load();
   }, []);

  return (
    <>
      <Navtop />
      <Box height="100%">{children}</Box>
      <Footer></Footer>
    </>
  )
}
