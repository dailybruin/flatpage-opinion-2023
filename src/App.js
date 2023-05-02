import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import background from './images/background.svg'

function App() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/flatpage-opinion-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  const Test = styled.div`
    height: 5000px;
  `

  return data && (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Header/>
      Hello Daily Bruin!
        <Test>
          this is a test
        </Test>
      <Footer/>
    </div>
  );
}

export default App;