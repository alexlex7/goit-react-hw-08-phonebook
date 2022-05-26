import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import authOperations from 'redux/auth/auth-operation';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from './Loader/Loader';

const HomePage = lazy(() =>
  import('../views/HomePage.jsx' /* webpackChunkName: "home-page" */)
);

const ContactsPage = lazy(() =>
  import('../views/ContactsPage.jsx' /* webpackChunkName: "contacts-page" */)
);

const LoginPage = lazy(() =>
  import('../views/LoginPage.jsx' /* webpackChunkName: "login-page" */)
);

const RegisterPage = lazy(() =>
  import('../views/RegisterPage.jsx' /* webpackChunkName: "register-page" */)
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  console.log(isRefreshing);
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute redirectPath="/contacts" restricted>
                <Suspense fallback={<Loader />}>
                  <LoginPage />
                </Suspense>
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute redirectPath="/contacts" restricted>
                <Suspense fallback={<Loader />}>
                  <RegisterPage />
                </Suspense>
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectPath="/login">
                <Suspense fallback={<Loader />}>
                  <ContactsPage />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Routes>
      </>
    )
  );
};
