import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
