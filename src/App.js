import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Login from "./sections/login/Login";
import Dashboard from "./sections/dashboard/Dashboard";
import { Spinner } from "@chakra-ui/react";
import axios from "axios"
function App() {
  useEffect(() => {
    getUserDataApi();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const getUserDataApi = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getUserData");
      if (res.status == 200) {
        navigate("/");
        setIsLoading(false);
      }
    } catch (error) {
      navigate("/login");
      setIsLoading(false);
    }
  };



  return (
    <>

      {isLoading ? (
        "hello"
        // <Spinner />
      ) : (

        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
