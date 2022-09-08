import { NavLink, useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <div className='navbar-collapse'>
                    <div className='navbar-nav'>
                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                            to='ligamx'>
                            Liga MX
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                            to='ligaexpansion'>
                            Liga Expansión
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                            to='goles'>
                            Goles favor
                        </NavLink>
                    </div>
                </div>
                <ul className='navbar-nav ml-auto'>
                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}