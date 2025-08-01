import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
