import React, { useEffect } from 'react';
// import {lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userCurrent } from 'redux/auth/auth-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
// const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
// const ContactPage = lazy(() => import("../../Pages/ContactPage/ContactPage"));
// const RegisterPage = lazy(() => import("../../Pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(() => import("../../Pages/LoginPage/LoginPage"));
import { HomePage } from 'Pages/HomePage/HomePage';
import { ContactPage } from 'Pages/ContactPage/ContactPage';
import { RegisterPage } from 'Pages/RegisterPage/RegisterPage';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { useSelector } from 'react-redux';
import { getToken, getIsLoading } from 'redux/auth/auth-selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken)
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    if (token !== "") {
      dispatch(userCurrent());
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return !isLoading ? (
    <Container>
    {/* // <Suspense fallback={<h1>Loading...</h1>}> */}
      <Routes>
      <Route path="/" element={<HomePage />}>
        <Route element={<PrivateRoute/>}>
          <Route path="contacts" element={<ContactPage />} />
        </Route>
        <Route element={<PublicRoute/>}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        </Route>
      </Routes>
      {/* // </Suspense> */}
      </Container>
  ) : <h1>WAIT A MINUTE...</h1>;
};
