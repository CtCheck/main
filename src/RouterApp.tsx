import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/User/Homepage";

type Props = {}

const RouterApp = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterApp