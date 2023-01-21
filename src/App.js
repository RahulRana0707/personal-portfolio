import "../src/Styles/All.scss"
import Header from "./Components/Header";
import {BrowserRouter as Router,Routes,Route} from"react-router-dom";
import Home from "../src/Components/Home"
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
