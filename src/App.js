import React from 'react';
import Footer from './Footer';
import Map from './Map';
import background from './net.png';
import Form1 from "./Form";
import Header from "./Header";

function App() {
  return (
      <div style={{backgroundImage: `url('${background}')`, backgroundSize: '100%', backgroundAttachment: 'fixed'}}>
          <React.Fragment>
              <Header/>
              <Form1/>
              <Map/>
              <Footer/>
          </React.Fragment>
      </div>
  );
}
export default App;