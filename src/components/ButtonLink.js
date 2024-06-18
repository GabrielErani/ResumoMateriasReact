import {Link} from 'react-router-dom';

const ButtonLink = ({to, children}) => {
    return (
        <Link to={to} className='shadow-lg text-white p-4 rounded-lg flex justify-center items-center hover:drop-shadow-2xl hover:shadow-none'>
        {children}
        </Link>
    );
    }

export default ButtonLink;

export const ButtonLinkBackHome = () => (
    <Link to={'/'} className='w-44 bg-blue-400  text-white p-4 rounded-lg flex justify-center items-center hover:drop-shadow-2xl hover:shadow-none'>
        Voltar pra Home
    </Link>
);