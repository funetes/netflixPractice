import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Img = styled.div`
  background-image: url(${props => props.imgUrl});
  height: 230px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.2s linear;
  border-radius: 4px;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 10px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const ImgContainer = styled.div`
  margin-bottom: 3px;
  position: relative;
  &:hover {
    ${Img} {
      opacity: 0.6;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  opacity: 0.5;
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImgContainer>
        <Img
          imgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : require("../assets/noImage.png")
          }
        />
        <Rating>
          <span role='img' aria-label='img'>
            ⭐️
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImgContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
