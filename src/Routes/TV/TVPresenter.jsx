import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ airingToday, topRated, popular, loading, error }) => (
  <>
    <Helmet>
      <title>tv show | nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title={"topRated"}>
            {topRated.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imgUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title={"airingToday"}>
            {airingToday.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imgUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title={"popular"}>
            {popular.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imgUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    )}
    ;
  </>
);

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
