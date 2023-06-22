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

const API_KEY = "MY KEY";
const SUBGRAPH_URL = `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7`;
const SUBGRAPH_QUERY = `{
    tokens(first: 5, orderBy:lastPriceUSD, orderDirection:desc) {
      id
      name
      symbol
      lastPriceUSD
      decimals
    }
  }`;

axios.post(SUBGRAPH_URL, {
    query: SUBGRAPH_QUERY
}).then((result) => {
    console.log(result.data.data)
})