import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const TVPresenter = ({
  airingToday,
  topRated,
  popular,
  loading,
  error}) => (
    <>
    </>
  )

  TVPresenter.propTypes = {
    airingToday:PropTypes.array,
    topRated:PropTypes.array,
    popular:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
  }

export default TVPresenter;