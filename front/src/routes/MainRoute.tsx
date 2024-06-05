import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../Test";
import Dashboard from "../pages/backoffice/Dashboard";
import UserList from "../pages/backoffice/UserList";
import AddUser from "../pages/backoffice/partials/AddUser";
import AllDocument from "../pages/backoffice/AllDocument";
import MetaData from "../pages/backoffice/MetaData";
import Settings from "../pages/backoffice/Settings";
import Workflows from "../pages/backoffice/Workflows";
import Activity from "../pages/frontoffice/Activity";
import MyDocs from "../pages/frontoffice/MyDocs";
import OtherContent from "../pages/frontoffice/OtherContent";
import SharedDocument from "../pages/frontoffice/SharedDocument";
import CreateNewDocument from "../pages/document/CreateNewDocument";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import AddAdmin from "../pages/backoffice/partials/AddAdmin";

export default function MainRoute() {
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
    <Route path="/admin/add-backoffice" element={<AddAdmin/>} />
    <Route path="/admin/all-document" element={<AllDocument/>} />
    <Route path="/admin/metadata" element={<MetaData/>} />
    <Route path="/admin/settings" element={<Settings/>} />
    <Route path="/admin/workflows" element={<Workflows/>} />
    </Routes>
  </Router>
    </>
  
  )
}