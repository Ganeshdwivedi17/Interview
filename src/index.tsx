import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import linkedinAuth from './pages/linkedinAuth';
import LinkedinAuth from './pages/linkedinAuth';
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import LoadingComponent from './components/LoadingComponent';
import BeginForm from './components/Start/beginForm';

const LazyApp = lazy(() => import('./App'));
const LazyLinkedInCallback = lazy(() => import('./pages/linkedinAuth'));


const router = createBrowserRouter([
  {
    path: "/linkedIn-Auth",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <LazyLinkedInCallback />
      </Suspense>
    )
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <LazyApp />
      </Suspense>
    ),
  },
  {
    path: '/:job_id',
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <LazyApp />
      </Suspense>
    ),
  },
  {
    path: '/session_id',
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <LazyApp />
      </Suspense>
    )

  },
   {
    path: '/preview/:id',
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <LazyApp />
      </Suspense>
    )
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
