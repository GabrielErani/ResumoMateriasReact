import React from 'react';
import ButtonLink from '../components/ButtonLink';
import { Reactlogo, Phplogo, AlgoritmosData, Mysqllogo } from '../components/Svgs';
const Home = () => {
  return (
    <div className='h-screen md:w-screen-md w-screen-sm p-2 flex md:items-center flex-col sm:justify-center md:justify-start'>
      <h1 className='text-center text-2xl' >Resumo de meus aprendizados</h1>
      <span className="w-12 h-4 bg-blue-300 m-10 rounded-full "/>
      <div className='grid md:grid-cols-3 grid-cols-1 md:grid-flow-col grid-flow-row gap-2'>
<ButtonLink to='/php'><Phplogo /></ButtonLink>
<ButtonLink to='/Algoritmos'><AlgoritmosData /></ButtonLink>
<ButtonLink to='/MySQL'><Mysqllogo /></ButtonLink>
<ButtonLink to='/React'><Reactlogo /></ButtonLink>
      </div>
</div>
  );
};

export default Home;