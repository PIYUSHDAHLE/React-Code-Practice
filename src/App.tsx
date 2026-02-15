import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../src/layout/Home"
import Counter from "./pages/Counter"
import Toggle from "./pages/Toggle"
import SubmitForm from "./pages/SubmitForm"
import APIIntegration from "./pages/APIIntegration"
import NormalForm from "./pages/NormalForm"
import SearchFilter from "./pages/Search"

const App = () => {
  return (
      <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/submit-form" element={<SubmitForm />} />
        <Route path="/api-integration" element={<APIIntegration />} />
        <Route path="/normal-form" element={<NormalForm />} />
        <Route path="/search" element={<SearchFilter />} />
      </Routes>
    </Router>
    </>
  )
}

export default App