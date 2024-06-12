import {Link} from 'react-router-dom';

const ButtonLink = ({to, children}) => {
    return (
        <Link to={to} className='bg-blue-500 text-white p-4 rounded-lg flex justify-center items-center hover:bg-blue-700'>
        {children}
        </Link>
    );
    }

export default ButtonLink;