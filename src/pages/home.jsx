import React from 'react';
import ProjectCards from '../components/card';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import { Route, Routes } from 'react-router-dom';
import ReactNativeProjects from '../components/react-native-projects';
import ExpoProjects from '../components/expo-projects';
import SwiftProjects from '../components/swift-projects';
import WebProjects from '../components/web-projects';

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
          <Route path="/expo" element={<ExpoProjects />} />
          <Route path="/swift" element={<SwiftProjects />} />
          <Route path="/web" element={<WebProjects />} />
        </Route>
      </Routes>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
