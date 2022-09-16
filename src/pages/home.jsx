import React from 'react';
import ProjectCards from '../components/card';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import { Route, Routes } from 'react-router-dom';
import ReactNativeProjects from '../components/react-native-projects';

function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* hero */}
      <Hero />
      {/* card */}
      <Routes>
        <Route element={<ProjectCards />}>
          <Route index element={<ReactNativeProjects />} />
          <Route path="/expo" element={<div>React Native2</div>} />
          <Route path="/web" element={<div>Web</div>} />
        </Route>
      </Routes>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
