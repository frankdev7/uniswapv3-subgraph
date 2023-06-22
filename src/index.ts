import axios from 'axios';

const URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
const query = `{
    pools(first: 10, orderBy: volumeUSD, orderDirection: desc) {
      volumeUSD
      liquidity
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      id
    }
  }`;

axios.post(URL, {
    query: query
}).then((result) => {
    console.log(result.data.data)
})