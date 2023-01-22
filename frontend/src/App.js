import ListUser from "./component/ListUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
