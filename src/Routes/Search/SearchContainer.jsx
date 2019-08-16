import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchByTerm = async term => {
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(term);
      const {
        data: { results: tvResults }
      } = await tvApi.search(term);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("can't find result..");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (searchTerm !== "") {
      setLoading(true);
      searchByTerm(searchTerm);
    }
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setSearchTerm(value);
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      searchTerm={searchTerm}
      tvResults={tvResults}
      loading={loading}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};
