// export default () => "home";

import React from 'react';



export default ({nowPlaying}) => (
  <>{nowPlaying === null ? "loading..." : nowPlaying.map((movie) => movie.original_title)}
  </>
);