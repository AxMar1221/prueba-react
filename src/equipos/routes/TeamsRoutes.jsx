import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { GolesFavorPage, LigaExpansionPage, LigaMxPage } from '../pages';

export const TeamsRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path='ligamx' element={<LigaMxPage />} />
                <Route path='ligaexpansion' element={<LigaExpansionPage />} />
                <Route path='goles' element={<GolesFavorPage />} />
                <Route path='/' element={<Navigate to='/ligamx' />} />
            </Routes>
        </div>


    </>
  )
}
