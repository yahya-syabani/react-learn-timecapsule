import "./App.css";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "../src/pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ThemeProvider from "./utils/ThemeProvider";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  transition: 0.3s all ease;
`;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Body>
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
        </Body>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
