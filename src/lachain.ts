import axios from 'axios';

const URL = 'https://explorer.lachain.network/graphiql';
const query = `{  
  transaction(hash: "0x9c131d80ad7ccd8d1e41ed4b4e458f14f133631b6519f33be073b7ac6a67dfbc") 
  { 
    hash, 
    blockNumber, 
    value, 
    gasUsed 
  }
}`;

axios.post(URL, {
  query: query
}).then((result) => {
  console.log(result.data.data)
}).catch((error) => {
  console.log(error)
})
