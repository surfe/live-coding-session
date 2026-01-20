import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/Contact";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path=":contactId" element={<ContactPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
