import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import StarRatingComponent from "react-star-rating-component";
import Message from "../../Components/Message";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 15px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
`;

const Item = styled.span``;

const Divider = styled.span`
  font-weight: 600;
  padding: 0px 10px;
`;

const OverView = styled.p`
  font-size: 15px;
  opacity: 0.7;
  width: 70%;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const ImDb = styled.a`
  font-size: 10px;
  text-decoration: none;
  padding: 3px;
  border: 1px solid white;
  border-radius: 3px;
`;
const Youtube = styled.iframe`
  width: 70%;
  height: 200px;
  margin-right: 10px;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const InfoContainer = styled.div`
  /* display: flex; */
  /* align-items: center; */
`;

const Production = styled.span`
  padding: 5px 0px;
  margin-bottom: 10px;
`;
const Seasons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;
const SeasonPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
  font-weight: 600;
  margin: 5px;
  height: 130px;
  width: 100px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.2s linear;
  border-radius: 4px;
  background-image: url(${props => props.bgImage});
`;
const SeasonName = styled.h3`
  font-size: 10px;
  padding: 3px;
`;
const Wrapper = styled.div`
  opacity: 0.7;
  margin-bottom: 15px;
  background-color: black;
  border-radius: 3px;
`;
const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      {console.log(result)}
      <Helmet>
        <title>Loading | nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noImage.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider> · </Divider>
            <Item>
              {result.runtime
                ? result.runtime
                : result.runtime === null
                ? "no info"
                : result.episode_run_time[0]}{" "}
              min
            </Item>
            <Divider> · </Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider> · </Divider>
            <StarRatingComponent
              editing={false}
              starCount={5}
              name='star'
              value={result.vote_average / 2}
            />
            <Divider> · </Divider>
            <ImDb href={`https://www.imdb.com/title/${result.imdb_id}`}>
              imdb
            </ImDb>
          </ItemContainer>
          {result.production_companies.map((companie, index) => (
            <Production key={companie.id}>
              {index === result.production_companies.length - 1
                ? companie.name
                : `${companie.name} / `}
            </Production>
          ))}
          <Divider> · </Divider>
          {result.production_countries
            ? result.production_countries.map((country, index) => (
                <Production key={index}>
                  {index === result.production_countries.length - 1
                    ? country.name
                    : `${country.name} / `}
                </Production>
              ))
            : result.origin_country.map((country, index) => (
                <Production key={index}>
                  {index === result.origin_country.length - 1
                    ? country
                    : `${country} / `}
                </Production>
              ))}
          <OverView>{result.overview}</OverView>
          <InfoContainer>
            <Youtube
              src={
                result.videos.results.length > 0
                  ? `https://www.youtube.com/embed/${result.videos.results[0].key}`
                  : null
              }
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
          </InfoContainer>
        </Data>
      </Content>
      <Seasons>
        {result &&
          result.seasons &&
          result.seasons.map(season => (
            <>
              <SeasonPoster
                key={season.id}
                bgImage={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                    : require("../../assets/noImage.png")
                }>
                <Wrapper>
                  <SeasonName key={season.id}>{season.name}</SeasonName>
                </Wrapper>
              </SeasonPoster>
            </>
          ))}
      </Seasons>
      {error && <Message color='e74c3c' text={error} />}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
