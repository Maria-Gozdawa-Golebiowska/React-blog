import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Add from "./components/pages/Add/Add.js";
import About from "./components/pages/About/About";
import Edit from "./components/pages/Edit/Edit";
import SinglePages from "./components/pages/SinglePages/SinglePages.js";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <main>
        <Container>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/post/add" element={<Add/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/post/edit/:id" element={<Edit/>} />
                <Route path="/post/:id" element={<SinglePages/>} />
                <Route path="*" element = {<NotFound/>} />
            </Routes>
        </Container>
    </main>
  );
}

export default App;
