import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Activateacc from "./pages/auth/Activateacc";
import Resetpassword from "./pages/auth/Resetpassword";
import Forgotpassword from "./pages/auth/Forgotpassword";
import Landing from "./components/Landing";
import Home from "./pages/dashboard/home";
import Weather from "./pages/user/Weather";
import HealthSafetyResource from "./pages/user/HealthSafetyResource";
import MapPage from "./pages/user/MapPage";
import Scams from "./pages/user/Scams";
import Booking from "./pages/user/Booking";
import AIBot from "./pages/user/AIBot";
import Explore from "./pages/user/Explore";
import ExploreDetail from "./pages/user/ExploreDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="activateacc" element={<Activateacc />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/forgotpassword" element={<Forgotpassword />}/>
        <Route path="/weather" element ={<Weather />} />

        <Route path="/health" element = {<HealthSafetyResource />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/scams" element={<Scams />} />
        <Route path="booking" element={<Booking />} />
        <Route path="aichat" element={<AIBot />} />
        <Route path="/explore" element={<Explore />} />
<Route path="/explore/:id" element={<ExploreDetail />} />



<Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
