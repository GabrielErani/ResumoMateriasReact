import React from 'react';
import ButtonLink from '../components/ButtonLink';
import { Reactlogo, Phplogo, AlgoritmosData, Mysqllogo } from '../components/Svgs';
const Home = () => {
  return (
    <div className='flex-col flex h-full w-screen justify-center items-center p-2'>
      <div className='h-fit w-fit bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 flex justify-center items-center flex-col '>
      <h1 className='text-center text-2xl m-4' >Resumo de meus aprendizados</h1>
      {/* <div className='bg-blue-300 w-12 h-4 rounded-full' /> */}
      <div className='grid grid-cols-1 grid-flow-row sm:grid-flow-row sm:grid-cols-2 lg:grid-flow-row lg:grid-cols-3'>
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