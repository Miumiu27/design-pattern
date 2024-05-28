import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Dashboard from "./pages/admin/Dashboard";
import UserList from "./pages/admin/UserList";
import AddUser from "./pages/admin/partials/AddUser";
import AllDocument from "./pages/admin/AllDocument";
import MetaData from "./pages/admin/MetaData";
import Settings from "./pages/admin/Settings";
import Workflows from "./pages/admin/Workflows";
import Activity from "./pages/user/Activity";
import MyDocs from "./pages/user/MyDocs";
import OtherContent from "./pages/user/OtherContent";
import SharedDocument from "./pages/user/SharedDocument";
import CreateNewDocument from "./pages/document/CreateNewDocument";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AddAdmin from "./pages/admin/partials/AddAdmin";

export default function App() {
  return (
    <>
  <Router>
    <Routes>
    <Route path="/c" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Test/>} />
    <Route path="/activity" element={<Activity/>} />
    <Route path="/my-docs" element={<MyDocs/>} />
    <Route path="/other-content" element={<OtherContent/>} />
    <Route path="/shared-docs" element={<SharedDocument/>} />
    <Route path="/create-document" element={<CreateNewDocument/>} />
    <Route path="/admin/dashboard" element={<Dashboard/>} />
    <Route path="/admin/all-user" element={<UserList/>} />
    <Route path="/admin/add-user" element={<AddUser/>} />
    <Route path="/admin/add-admin" element={<AddAdmin/>} />
    <Route path="/admin/all-document" element={<AllDocument/>} />
    <Route path="/admin/metadata" element={<MetaData/>} />
    <Route path="/admin/settings" element={<Settings/>} />
    <Route path="/admin/workflows" element={<Workflows/>} />
    </Routes>
  </Router>
    </>
  
  )
}