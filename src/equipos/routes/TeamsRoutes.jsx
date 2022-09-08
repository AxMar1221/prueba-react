import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { LigaExpansionPage, LigaMxPage, PuntosPage } from '../pages';

export const TeamsRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path='ligamx' element={<LigaMxPage />} />
                <Route path='ligaexpansion' element={<LigaExpansionPage />} />
                <Route path='puntos' element={<PuntosPage />} />
                <Route path='/' element={<Navigate to='/ligamx' />} />
            </Routes>
        </div>


    </>
  )
}
