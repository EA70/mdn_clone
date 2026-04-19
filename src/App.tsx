import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Introduction from "./Pages/Introduction";
import Home from "./Pages/Home";
import DocLayout from "./layouts/DocLayout";
import { ThemeProvider } from "./Context/ThemeContext";
import NotFound from "./Pages/NotFound";
import Installation from "./Pages/Installation";
import Configuration from "./Pages/Configuration";
import Composants from "./Pages/Composants";
import Routage from "./Pages/Routage";
 

export default function App() {
  return (
    <ThemeProvider>

      <Router>
        <Routes>
          <Route element={<DocLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/installation" element={<Installation  />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="/composants" element={<Composants />} />
            <Route path="/routage" element={<Routage />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}