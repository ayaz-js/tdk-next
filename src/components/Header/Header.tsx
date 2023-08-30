"use client";
import React, { useState, useEffect } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

const Header = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 576px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 576px)")
      .addEventListener("change", (event) => setMatches(event.matches));
  }, []);

  return <>{!matches ? <DesktopHeader /> : <MobileHeader />}</>;
};

export default Header;
