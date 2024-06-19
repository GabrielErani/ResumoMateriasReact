// home.js
import React from 'react';
import ButtonLink from '../components/ButtonLink';
import { Reactlogo, Phplogo, AlgoritmosData, Mysqllogo } from '../components/Svgs';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-2'>
      <div className='w-full max-w-4xl bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 flex justify-center items-center flex-col p-6'>
        <h1 className='text-center text-2xl m-4'>Resumo de meus aprendizados</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <ButtonLink to='/php'><Phplogo /></ButtonLink>
          <ButtonLink to='/Algoritmos'><AlgoritmosData /></ButtonLink>
          <ButtonLink to='/MySQL'><Mysqllogo /></ButtonLink>
          <ButtonLink to='/React'><Reactlogo /></ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
