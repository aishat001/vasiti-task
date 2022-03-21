import React from 'react';
import './App.css';
import Layout from './component/Layout';
import Navigation from './component/naviagtion';
// import Homepage from './pages/homepage/homepage';

function App() {

  return (
    <div className="App">
      <Layout>
        <Navigation/>
      </Layout>
       
    </div>
  );
}

export default App;
