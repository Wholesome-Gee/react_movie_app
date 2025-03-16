import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './routes/home/Home'
import Detail from "./routes/detail/Detail";

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:id" element={<Detail/>} />
        </Routes>
      </Router>
  )
}

export default App