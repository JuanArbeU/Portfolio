import React from "react";
import { About } from "../Components/About.jsx";
import { Skills } from "../Components/Skills.jsx";
import { Projects } from "../Components/Projects.jsx";
import { Contact } from "../Components/Contact.jsx";
import { Sidebar } from "../Components/Sidebar.jsx";

export const Landing = () => {
  return (
    <>
  {/*     <h1>Juan Manuel Arbeláez</h1>
      <h3>Full Stack Developer</h3> */}
      <Sidebar/>
      {/* <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </>
  );
};
