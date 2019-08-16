import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const HomePresenter = ({
  nowPlaying,
  upcoming,
  poppular,
  loading,
  error}) => (
    <>
    </>
  )

  HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    upcoming:PropTypes.array,
    poppular:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
  }

export default HomePresenter;