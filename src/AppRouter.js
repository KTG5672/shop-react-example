import React from "react";
import "./index.css";
import App from "./App"
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";


class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route exact path="/login" element={<Login/>} />
                            <Route exact path="/" element={<App/>} />
                            <Route exact path="/signup" element={<SignUp/>} />
                        </Routes>
                    </div>
                </Router>
            </div>
        )
    }
}

export default AppRouter;