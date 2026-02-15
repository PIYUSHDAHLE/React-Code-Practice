import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../src/layout/Home"
import Counter from "./pages/Counter"

const App = () => {
  return (
      <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Counter />} />
      </Routes>
    </Router>
    </>
  )
}

export default App