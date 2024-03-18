import Home from "./pages/home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import MainLayout from "./Layout/mainLayout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} path="/">
                    <Route element={<Home />} />
                    <Route element={<Login />} path="login" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
