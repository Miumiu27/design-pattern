import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/backoffice/Dashboard";
import UserList from "../pages/backoffice/UserList";
import AllDocument from "../pages/backoffice/AllDocument";
import MetaData from "../pages/backoffice/MetaData";
import Settings from "../pages/backoffice/Settings";
import Workflows from "../pages/backoffice/Workflows";
import Activity from "../pages/frontoffice/Activity";
import MyDocs from "../pages/frontoffice/MyDocs";
import OtherContent from "../pages/frontoffice/OtherContent";
import SharedDocument from "../pages/frontoffice/SharedDocument";
import CreateNewDocument from "../pages/document/CreateNewDocument";
import Login from "../pages/auth/Login";
import AddAdmin from "../pages/backoffice/partials/AddAdmin";
import ProtectedRoute from "./ProtectedRoutes";
import PrivateRoute from "./PrivateRoute";

const MainRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route
          path="/admin/all-user"
          element={<PrivateRoute element={<UserList />} />}
        />
        <Route
          path="/admin/add-user"
          element={<PrivateRoute element={<AddAdmin />} />}
        />
        <Route
          path="/admin/all-document"
          element={<PrivateRoute element={<AllDocument />} />}
        />
        <Route
          path="/admin/settings"
          element={<PrivateRoute element={<Settings />} />}
        />
        <Route
          path="/admin/workflows"
          element={<PrivateRoute element={<Workflows />} />}
        />
        <Route
          path="/admin/metadata"
          element={<PrivateRoute element={<MetaData />} />}
        />

        <Route
          path="/activity"
          element={
            <ProtectedRoute>
              <Activity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-docs"
          element={
            <ProtectedRoute>
              <MyDocs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/other-content"
          element={
            <ProtectedRoute>
              <OtherContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shared-docs"
          element={
            <ProtectedRoute>
              <SharedDocument />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-document"
          element={
            <ProtectedRoute>
              <CreateNewDocument />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default MainRoute;
