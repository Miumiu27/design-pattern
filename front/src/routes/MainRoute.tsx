import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import Test from "../Test";
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
import { UserContext } from "../context/UserContext";
import PrivateRoute from "./PrivateRoute";

export default function MainRoute() {
  const userContext = useContext(UserContext);
  const isAuthenticated = !!userContext?.token;

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
          path="/"
          element={
            isAuthenticated ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Test />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/activity"
          element={
            isAuthenticated ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Activity />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/other-content"
          element={
            isAuthenticated ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <OtherContent />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/shared-docs"
          element={
            isAuthenticated ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <SharedDocument />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/create-document"
          element={
            isAuthenticated ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CreateNewDocument />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/my-docs"
          element={
            isAuthenticated ? (
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <MyDocs />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}
