// import "./components/hero.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import ImageSection from "./components/image";
import OtherSections from "./components/avatar-sec-dark";
import FixedTitle from "./components/title";
import Tour from "./components/tour-sec-dark";
import Test from "./components/test-dark";
import Steps from "./components/steps";
import VR from './components/VR';

export default function App() {

  return (
    // <div className="app-container">
     
      <div>
        <Test/>
        <OtherSections />
        <Tour />
        {/* <VR /> */}
        <Steps />
        
      </div>
    // </div>
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


