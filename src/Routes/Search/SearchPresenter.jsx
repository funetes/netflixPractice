import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  searchTerm,
  tvResults,
  loading,
  error,
  onSubmit,
  onChange
}) => (
  <Container>
    <Helmet>
      <title> result | nomflix</title>
    </Helmet>
    <Form onSubmit={onSubmit}>
      <Input
        placeholder='Search movie or tv show...'
        value={searchTerm}
        onChange={onChange}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title={"movie Results"}>
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imgUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={
                  movie.first_air_date && movie.first_air_date.substring(0, 4)
                }
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title={"tv Results"}>
            {tvResults.map(tv => (
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
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text='Nothing found' color='#95a5a6' />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

export default SearchPresenter;
