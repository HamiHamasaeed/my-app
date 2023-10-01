import React from "react";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Success from "./pages/Success";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/api/signUp" element={<SignUp />} />
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/success" element={<Success />} />
      </Routes>
    </Layout>
  );

  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/home")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  // return (
  //   <div>
  //     {typeof backendData.users === "undefined" ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <ul>
  //         {backendData.users.map((user, i) => (
  //           <li key={i}>{user}</li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
};

export default App;
