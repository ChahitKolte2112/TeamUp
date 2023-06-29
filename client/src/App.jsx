import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/log-in" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
