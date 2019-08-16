import React,{useEffect,useState} from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default ({match,history,location}) => {

  const [result,setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //validate url
  useEffect(() => {
    const {params:{id}} = match;
    const {push} = history;
    const parsedInt = parseInt(id);
    if(isNaN(parsedInt)){
      return push("/");
    }
    const {pathname} = location;
    const isMovie = pathname.includes("/movie/");
    (async ()=> {
      try{
        const {data} = isMovie ? 
          await moviesApi.movieDetail(id) : 
          await tvApi.tvDetail(id);
        setResult(data);
      }catch{
        setError("can't find movie or tvshow...");
      }finally{
        setLoading(false);
      }
    })();
  },[]);
  console.log(result);
  return (
    <DetailPresenter 
      result = {result}
      loading = {loading}
      error = {error}
    />
  )
}