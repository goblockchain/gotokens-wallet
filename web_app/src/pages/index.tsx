import { SimpleGrid } from '@chakra-ui/react'

import { NFTSellOffer } from '../components/NFTSellOffer';
import { NFTCardStore } from '../components/NFTCardFiltrStore';
import Head from 'next/head'
import React, { ReactElement, useState, useEffect } from 'react'
import { SpaceLayoutFiltr } from '../layouts/spaceLayoutFiltr'
import loadContract from '../contracts/Helpers';

export default function home() {
  const [loading, setLoading] = useState(false);
  const [owner, setOwner] = useState('');
  const [marketItens, setMarketItens] = useState<any[]>([]);
  const [contract, setContract] = useState({});
  const [accounts, setAccounts] = useState('');

  async function fetchEmployees() {
    const returned = await loadContract();
    setContract(returned.contract);
    setAccounts(returned.accounts);
    const data = await returned.contract.methods.owner().call(); 
    let  itens = await returned.contract.methods.fetchMarketItems().call();
    itens = itens.filter( ( elem ) => elem['price'] != '0');
    setOwner(data);
    setMarketItens(itens);
    setLoading(false);
    console.log(itens);
  }

  useEffect(() => {
    setLoading(true);
    fetchEmployees();
  }, []);

  return (
    <>
      <Head>
        <title>GoTokens | Home</title>
      </Head>
      {
        loading ? (
          <div>...Data Loading.....</div>
        ) : (
          <SimpleGrid
            mt="67px"
            p="0 50px"
            justifyItems="center"
            cursor="pointer"
            spacing="16px"
          >
            { marketItens ? marketItens.map((nft) => (
              <NFTSellOffer
                data={{
                  tokenId: nft.IDtoken,
                  amount: nft.amount,
                  createTime: nft.createTime,
                  itemId: nft.itemId,
                  price: nft.price,
                  seller: nft.seller,
                  contract: contract,
                  accounts: accounts
                }}
                key={nft.createTime}
              />
            )) : (
              <NFTCardStore data={{
                name: 'Teste NFT',
                nftCover: '/space/nft.png',
                options: [{ title: 'report', icon: 'report' }],
                type: 'marketplace' as const,
                quantity: 'single' as const,
                marketplace: {
                  type: 'fixedPrice' as const
                }
              }}/>
            )
          }
          </SimpleGrid>
        )
      }
    </>
  )
}

home.getLayout = function getLayout (page: ReactElement) {
  return <SpaceLayoutFiltr >{page}</SpaceLayoutFiltr>
}
