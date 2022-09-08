import { Route, Routes } from 'react-router-dom';


import { LoginPage } from '../auth';
import { TeamsRoutes } from '../equipos/routes/TeamsRoutes';



export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={ <TeamsRoutes />} />
        </Routes>
    </>
  )
}
