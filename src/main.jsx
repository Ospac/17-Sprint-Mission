import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MainLayout } from '@/components/layout/MainLayout';
import AddItem from '@/pages/AddItem';
import Community from '@/pages/Community';
import Faq from '@/pages/Faq.jsx';
import Home from '@/pages/Home.jsx';
import Items from '@/pages/Items';
import Login from '@/pages/Login.jsx';
import NotFound from '@/pages/NotFound.jsx';
import Privacy from '@/pages/Privacy.jsx';
import Signup from '@/pages/Signup.jsx';
import { GlobalStyle } from '@/styles/global';
import theme from '@/styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='items' element={<Items />} />
            <Route path='additem' element={<AddItem />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='community' element={<Community />} />
            <Route path='faq' element={<Faq />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
