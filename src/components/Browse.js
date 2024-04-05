import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecoundaryContainer from './SecoundaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      {
        showGptSearch ? ( 
        <GPTSearch />
        ) : (
        <>
          <MainContainer /> 
          <SecoundaryContainer />
        </>
        )}
    </div>
  );
};

export default Browse