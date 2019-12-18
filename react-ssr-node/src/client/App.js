import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ route, initialData }) => {
  return (
    <div>
      <Header />
      <div className="container">
        {renderRoutes(route.routes, { initialData })}
      </div>
    </div>
  );
};

export default {
  component: App
};
