import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Loader from "./components/Loader/Loader";
import axios from "axios";
import View from "./components/View/View";

function App() {
  useEffect(() => {
    const wakeUp = async () => {
      try {
        console.log("The server was nudged, and it's stirring awake🥱");
        await axios.get(
          "https://api.render.com/deploy/srv-cp2bvlen7f5s73fevqkg?key=m5V2kQTHKZA"
        );
      } catch (error) {
        console.log("The server just woke up✅");
      }
    };

    wakeUp();
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/events/:eventId" element={<View />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
