import React from 'react';
import './App.css';
import Layout from './component/Layout';
import Homepage from './pages/homepage/homepage';

function App() {

  return (
    <div className="App">
      <Layout>
        <Homepage/>
        
      </Layout>
    </div>
  );
}

export default App;
