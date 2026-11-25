import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { PageWrapper } from './components/layout/PageWrapper';
import { AppRoutes } from './routes/AppRoutes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
