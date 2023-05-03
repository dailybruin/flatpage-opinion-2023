import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/landing";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/flatpage-opinion-2023"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    data && (
      <div className="App">
        <Header />
        Hello Daily Bruin!
        <Landing
          landing_image={data.landing_image}
          landing_image_static={data.landing_image_static}
          landing_credits={data.landing_credits}
        />
        <Footer />
      </div>
    )
  );
}

export default App;
