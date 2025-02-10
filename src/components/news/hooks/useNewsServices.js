import {useGetGeneralNewsQuery} from "../../news/services/NewsServices"


const useNewsService = (category="general") => {
   const {data,isloading,isError}=useGetGeneralNewsQuery({category})
    

  let news=data?.articles || []


  return {news ,isloading,isError}
}

export default useNewsService