import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
import Home from "./pages/Home/Home";
import MyBookings from "./pages/MyBookings/MyBookings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<ShowDetails />}></Route>
        <Route path="/my-bookings" element={<MyBookings></MyBookings>}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
