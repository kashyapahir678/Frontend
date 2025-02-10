import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';

const Login = lazy(() => import("../auth/Login"));
const Signup = lazy(() => import("../auth/Signup"));
// const NotFound = lazy(() => import("../pages/NotFound"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Transactions = lazy(() => import("../pages/Transactions"));
const Report = lazy(() => import("../pages/Report"));

const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
};

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/transactions' element={<Transactions />} />
                        <Route path='/report' element={<Report />} />
                    </Route>

                    {/* <Route path='*' element={<NotFound />} /> */}
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes