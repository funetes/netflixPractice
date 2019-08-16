import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchPresenter = ({
  movieResults,
  searchTerm,
  tvResults,
  loading,
  error,
  onSubmit}) => (
    <>
    </>
  )

  SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    searchTerm: PropTypes.string,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    onSubmit:PropTypes.func
  }

export default SearchPresenter;