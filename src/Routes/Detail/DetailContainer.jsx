import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default ({ match, history, location }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMovie, setIsMovie] = useState(null);

  const fetchResult = async () => {
    const { push } = history;
    const {
      params: { id }
    } = match;
    const parsedInt = parseInt(id);
    if (isNaN(parsedInt)) {
      return push("/");
    }
    const { pathname } = location;
    const isMovie = pathname.includes("/movie/");
    try {
      const { data } = isMovie
        ? await moviesApi.movieDetail(id)
        : await tvApi.tvDetail(id);
      setResult(data);
    } catch {
      setError("can't find movie or tvshow...");
    } finally {
      setLoading(false);
      setIsMovie(isMovie);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <DetailPresenter
      result={result}
      loading={loading}
      error={error}
      isMovie={isMovie}
    />
  );
};
