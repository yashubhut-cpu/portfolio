import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import { SPACING } from "./theme";

function GlowOrbs() {
  const theme = useTheme();
  const isLight = theme.isLight;

  const orb1Style = {
    content: '""',
    position: "fixed",
    width: "28rem",
    height: "28rem",
    borderRadius: "50%",
    filter: "blur(90px)",
    opacity: 0.28,
    zIndex: -1,
    pointerEvents: "none",
    top: "-9rem",
    left: "-7rem",
    background: isLight
      ? "rgba(26, 54, 219, 0.5)"
      : `rgba(${theme.colorPrimaryRgb}, 0.6)`,
  };

  const orb2Style = {
    content: '""',
    position: "fixed",
    width: "28rem",
    height: "28rem",
    borderRadius: "50%",
    filter: "blur(90px)",
    opacity: 0.28,
    zIndex: -1,
    pointerEvents: "none",
    right: "-7rem",
    bottom: "-9rem",
    background: "rgba(84, 201, 255, 0.35)",
  };

  return (
    <>
      <div style={orb1Style} />
      <div style={orb2Style} />
    </>
  );
}

function App() {
  const styles = {
    appShell: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      isolation: "isolate",
    },
    appMain: {
      flex: 1,
      paddingBottom: SPACING.xxl,
    },
  };

  return (
    <Router>
      <div style={styles.appShell}>
        <GlowOrbs />
        <Navbar />
        <main style={styles.appMain}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
