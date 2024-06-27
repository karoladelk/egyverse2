import { useState, useEffect, useRef } from "react";
import './hero.css';
import OtherSections from "./avatar-sec-dark";
import Tour from "./tour-sec-dark";
import Test from "./test-dark";
import Steps from "./steps";

export default function LandingPage() {
  return (
    // <div className="app-container">
      <div>
        <Test/>
        <OtherSections />
        <Tour />
        <Steps />
        {/* <IslamicMuseum /> */}
      </div>
    // </div>
  );
}
