import "./App.css";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "../src/pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/Themes";
import Footer from "./components/Footer";
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contacts"
              element={
                <>
                  <Contacts />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
