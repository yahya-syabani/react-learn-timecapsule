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
import { useState, useEffect } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  transition: 0.8s all ease;
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={toggleTheme} style={{ width: 50, height: 50 }} />
      <Router>
        <Body>
          <Navbar />
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                </>
              }
            />
            <Route
              path="/contacts"
              element={
                <>
                  <Contacts />
                </>
              }
            />
          </Routes>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
