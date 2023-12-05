import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import Works from "./pages/Works";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ClientPage from "./pages/ClientPage";
import LoggedRoute from "./pages/LoggedRoute";
import NotFound from "./pages/NotFound";
import ClientWorks from "./pages/ClientWorks";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/client/:id" element={<ClientPage />} />
              <Route path="/client/works/:id" element={<ClientWorks />} />
            </Route>
            <Route element={<LoggedRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />{" "}
            {/* Esta es la ruta 404 */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
