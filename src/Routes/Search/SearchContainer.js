import React, {useState} from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';

export default () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchByTerm = async (term) => {
    try{
      const {data:{results:{movieResults}}} = await moviesApi.search(term);
      const {data:{results:{tvResults}}} = await tvApi.search(term);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    }catch{
      setError("can't find result..");
    }finally{
      setLoading(false);
    }
  };

  const onSubmit = () => {
    if(searchTerm !== ""){
      searchByTerm();
    }
  };
  

  return (
    <SearchPresenter 
    movieResults = {movieResults}
    searchTerm = {tvResults}
    tvResults = {searchTerm}
    loading = {loading}
    error = {error}
    onSubmit = {onSubmit}
    />
  )
}