// home.js
import React from 'react';
import ButtonLink from '../components/ButtonLink';
import { Reactlogo, Phplogo, AlgoritmosData, Mysqllogo } from '../components/Svgs';
import { CardContent, CardDescription, CardReact } from '../components/CardReact';
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-2 2xl:max-w-screen-xl'>
      <div className='w-full max-w-4xl bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 flex justify-center items-center flex-col p-6'>
        <h1 className='text-center text-2xl m-4'>Resumo de meus aprendizados</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <ButtonLink to='/php'>
            <CardReact>
              <CardContent>
              <Phplogo />
                <CardDescription>PHP</CardDescription>
              </CardContent>
            </CardReact>
          </ButtonLink>

          <ButtonLink to='/Algoritmos'>
            <CardReact>
              <CardContent>
          <AlgoritmosData />
                <CardDescription>Algoritmos</CardDescription>
              </CardContent>
            </CardReact>
          </ButtonLink>

          <ButtonLink to='/MySQL'>
            <CardReact>
              <CardContent>
          <Mysqllogo />
                <CardDescription>MySQL</CardDescription>
              </CardContent>
            </CardReact>
          </ButtonLink>

          <ButtonLink to='/React'>
          <CardReact>
            <CardContent>
          <Reactlogo />
              <CardDescription>React</CardDescription>
            </CardContent>
          </CardReact>
          </ButtonLink>

        </div>
      </div>
    </div>
  );
};

export default Home;
