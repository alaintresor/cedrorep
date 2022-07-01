
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import TodoList from "./Pages/TodoList";
 import Search from "./search";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
       < Route path="/" element={<Home />} exact={true} />
       < Route path="/Login" element={<LoginPage />}/> 
        < Route path="/todo" element={<TodoList />}/>
       < Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
