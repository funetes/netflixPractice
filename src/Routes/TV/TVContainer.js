import React,{useState,useEffect} from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';


export default () => {
  const [popular, setPopular] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        const {data:{results:popular}} = await tvApi.popular(); 
        const {data:{results:topRated}} = await tvApi.topRated(); 
        const {data:{results:airingToday}} = await tvApi.airingToday(); 
        setPopular(popular);
        setTopRated(topRated);
        setAiringToday(airingToday);
      }catch{
        setError("can't get infomation... try again.");
      }finally{
        setLoading(false);
      }
    })()
  }, [])
  console.log(popular);
  return(
    <TVPresenter 
      airingToday={popular}
      topRated={topRated}
      popular={airingToday}
      loading={loading}
      error={error}
    />)
  };