import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Contact from "./pages/Contact";

import { Routes , Route, BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
