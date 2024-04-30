import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Header from "./components/header/header.component";
import Booking from "./routes/booking/booking.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index={true} element={<Home />} />
        <Route path="checkout" element={<Booking />} />
      </Route>
    </Routes>
  );
};

export default App;
