// import "./components/hero.css";
// import { useState, useEffect, useRef } from "react";
// import ImageSection from "./components/image";
// import OtherSections from "./components/avatar-sec-dark";
// import FixedTitle from "./components/title";
// import Tour from "./components/tour-sec-dark";
// import Test from "./components/test-dark";
// import Steps from "./components/steps";
// import VR from './components/VR';
import IslamicMuseum from './components/IslamicMuseum';
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="https://egyverse-temp.netlify.app/islamic-museum" element={<IslamicMuseum />} />
      </Routes>
    </BrowserRouter>
  );
}
// import Steps from './components/steps';
// import OtherSections from "./components/avatar-sec";
// import Tour from "./components/tour-sec";
// import Test from "./components/test";
// const { Card, ContainerScroll, Header } = Steps;

// // Now you can use the components
// const App = () => {
//   return (
//     <div className="app-container">
//     <Test/>
//       <OtherSections />
//             <Tour />
            
//     <ContainerScroll titleComponent="My Title">
//       <Card>
//         <p>Content goes here</p>
//       </Card>
//     </ContainerScroll>
//     </div>
//   );
// };

// export default App;


