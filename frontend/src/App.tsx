import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// PÃ¡ginas pÃºblicas
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Cadastro from "./pages/public/Cadastro";

// PÃ¡ginas do aluno
import DashboardAluno from "./pages/aluno/DashboardAluno";
import Treino from "./pages/aluno/Treino";
import Exercicios from "./pages/aluno/Exercicios";
import Videos from "./pages/aluno/Videos";
import Dieta from "./pages/aluno/Dieta";
import Progresso from "./pages/aluno/Progresso";
import Perfil from "./pages/aluno/Perfil";

// PÃ¡ginas do admin
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import AlunosAdmin from "./pages/admin/AlunosAdmin";
import VideosAdmin from "./pages/admin/VideosAdmin";
import TreinosAdmin from "./pages/admin/TreinosAdmin";
import ExerciciosAdmin from "./pages/admin/ExerciciosAdmin";
import DietasAdmin from "./pages/admin/DietasAdmin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* ==================== */}
          {/* PÃGINAS PÃšBLICAS */}
          {/* ==================== */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/cadastro"
            element={<Cadastro />}
          />


          {/* ==================== */}
          {/* ÃREA DO ALUNO */}
          {/* ==================== */}

          <Route
            path="/aluno"
            element={
              <ProtectedRoute tipo="aluno">
                <DashboardAluno />
              </ProtectedRoute>
            }
          />

          <Route
            path="/aluno/treino"
            element={
              <ProtectedRoute tipo="aluno">
                <Treino />
              </ProtectedRoute>
            }
          />

          <Route
            path="/aluno/exercicios"
            element={
              <ProtectedRoute tipo="aluno">
                <Exercicios />
              </ProtectedRoute>
            }
          />

          <Route
            path="/aluno/videos"
            element={
              <ProtectedRoute tipo="aluno">
                <Videos />
              </ProtectedRoute>
            }
          />

          <Route
            path="/aluno/dieta"
            element={
              <ProtectedRoute tipo="aluno">
                <Dieta />
              </ProtectedRoute>
            }
          />

          <Route
            path="/aluno/progresso"
            element={
              <ProtectedRoute tipo="aluno">
                <Progresso />
              </ProtectedRoute>
            }
          />

          <Route
            path="/aluno/perfil"
            element={
              <ProtectedRoute tipo="aluno">
                <Perfil />
              </ProtectedRoute>
            }
          />


          {/* ==================== */}
          {/* ÃREA DO ADMIN */}
          {/* ==================== */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute tipo="administrador">
                <DashboardAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/alunos"
            element={
              <ProtectedRoute tipo="administrador">
                <AlunosAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/videos"
            element={
              <ProtectedRoute tipo="administrador">
                <VideosAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/treinos"
            element={
              <ProtectedRoute tipo="administrador">
                <TreinosAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/exercicios"
            element={
              <ProtectedRoute tipo="administrador">
                <ExerciciosAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dietas"
            element={
              <ProtectedRoute tipo="administrador">
                <DietasAdmin />
              </ProtectedRoute>
            }
          />


          {/* ==================== */}
          {/* ROTA NÃƒO ENCONTRADA */}
          {/* ==================== */}

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
