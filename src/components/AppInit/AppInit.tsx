import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Login from "../../app/feature/Login/Login";
import Dashboard from "../../app/feature/Dashboard/Dashboard";
import MarkSheet from "../../app/feature/MarkSheet/MarkSheet";

const AppInit = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/marksheet" element={<MarkSheet />} />
            </Routes>
        </Router>
    );
};

export default AppInit;