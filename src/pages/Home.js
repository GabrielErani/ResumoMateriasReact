import React from 'react';
import ButtonLink from '../components/ButtonLink';

const Home = () => {
  return (
    <div className='h-screen md:w-screen-md w-screen-sm p-4 flex md:items-center flex-col sm:justify-center md:justify-start'>
      <h1 className='text-center text-2xl' >Galeria de Resumo</h1>
      <div className='grid md:grid-cols-3 grid-cols-1 md:grid-flow-col grid-flow-row gap-2'>
<ButtonLink to='/php'>Resumo PHP</ButtonLink>
<ButtonLink to='/Algoritmos'>Resumo Algoritmos</ButtonLink>
<ButtonLink to='/MySQL'>Resumo MySQL</ButtonLink>
      </div>
</div>
  );
};

export default Home;