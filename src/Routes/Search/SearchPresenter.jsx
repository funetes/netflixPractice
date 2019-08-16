import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';

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
  onChange}) => (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Search movie or tv show..." value={searchTerm} onChange={onChange}/>
      </Form>
      {loading? <Loader/> :
        <> 
          {movieResults && movieResults.length > 0 && 
            <Section title={"movie Results"}>
              {movieResults.map(movie=>
                <span key={movie.id}>{movie.title}</span>)}
            </Section>
          } 
          {tvResults && tvResults.length > 0 && 
            <Section title={"tv Results"}>
              {tvResults.map(tv=>
                <span key={tv.id}>{tv.original_name}</span>)}
            </Section>
          }     
        </>
      }
    </Container>
  )

  SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    searchTerm: PropTypes.string,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    onSubmit:PropTypes.func,
    onChange:PropTypes.func.isRequired
  }

export default SearchPresenter;