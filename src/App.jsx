import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Activateacc from "./pages/auth/Activateacc";
import Resetpassword from "./pages/auth/Resetpassword";
import Forgotpassword from "./pages/auth/Forgotpassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="activateacc" element={<Activateacc />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/forgotpassword" element={<Forgotpassword />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
