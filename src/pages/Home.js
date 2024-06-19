import React from 'react';
import ButtonLink from '../components/ButtonLink';
import { Reactlogo, Phplogo, AlgoritmosData, Mysqllogo } from '../components/Svgs';
const Home = () => {
  return (
    <div className=' items-center md:w-screen-md w-screen-sm md:h-screen-md h-fit w-fit p-2 flex md:items-center flex-col sm:justify-center md:justify-start'>
      <div className='h-full w-fit bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 flex justify-center items-center flex-col '>
      <h1 className='text-center text-2xl m-4' >Resumo de meus aprendizados</h1>
      {/* <div className='bg-blue-300 w-12 h-4 rounded-full' /> */}
      <div className='grid md:grid-cols-3 grid-cols-1 md:grid-flow-col grid-flow-row gap-2 m-4 '>
        <ButtonLink to='/php' ><Phplogo /></ButtonLink>
<ButtonLink to='/Algoritmos'><AlgoritmosData /></ButtonLink>
<ButtonLink to='/MySQL'><Mysqllogo /></ButtonLink>
<ButtonLink to='/React'><Reactlogo /></ButtonLink>
      </div>
      </div>
</div>
  );
};

export default Home;