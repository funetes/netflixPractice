import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: "972a62077fbae5a4d9e292d8c640eced",
    language: "en-US"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}`, {
    params: {
      api_key: "972a62077fbae5a4d9e292d8c640eced",
      language: "en-US",
      append_to_response: "videos"
    }
  }),
  search: term => api.get("search/movie", {
    params: {
      query: encodeURIComponent(term)
    }
  })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: id => api.get(`tv/${id}`, {
    params: {
      api_key: "972a62077fbae5a4d9e292d8c640eced",
      language: "en-US",
      append_to_response: "videos"
    }
  }),
  search: term => api.get("search/tv", {
    params: {
      query: encodeURIComponent(term)
    }
  })
};

export default api;