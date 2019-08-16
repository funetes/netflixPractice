import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ airingToday, topRated, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title={"topRated"}>
          {topRated.map(tv => (
            <span key={tv.id}> {tv.original_name} </span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title={"airingToday"}>
          {airingToday.map(tv => (
            <span key={tv.id}> {tv.original_name} </span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title={"popular"}>
          {popular.map(tv => (
            <span key={tv.id}> {tv.original_name} </span>
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
