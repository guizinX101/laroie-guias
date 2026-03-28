// src/app/routes.tsx
import { createBrowserRouter } from 'react-router-dom';  // ✅ CORRETO!
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AllProducts } from './pages/AllProducts';
import { Search } from './pages/Search';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'produto/:id', element: <ProductDetail /> },
      { path: 'sobre', element: <About /> },
      { path: 'contato', element: <Contact /> },
      { path: 'produtos', element: <AllProducts /> },
      { path: 'busca', element: <Search /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
