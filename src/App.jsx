import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import Works from "./pages/Works";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ClientPage from "./pages/ClientPage";
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
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
