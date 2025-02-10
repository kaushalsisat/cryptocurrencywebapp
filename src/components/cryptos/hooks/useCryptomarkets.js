import {useGetcryptoMarketsQuery} from "../services/Cryptomarkets"

const useCryptomarkets = () => {
    const {data,isloading,isError}=useGetcryptoMarketsQuery()
    // optional chaining
    let coins=data?.data?.coins || []
    let GlobalStats=data?.data?.stats || {}
 

  return {coins,GlobalStats,isloading,isError}
    

}

export default useCryptomarkets
