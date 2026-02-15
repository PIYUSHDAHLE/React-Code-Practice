import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../src/layout/Home"
import Counter from "./pages/Counter"
import Toggle from "./pages/Toggle"

const App = () => {
  return (
      <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </Router>
    </>
  )
}

export default App