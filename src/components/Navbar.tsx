import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

interface NavbarProps {
  tipo: "aluno" | "admin";
}

function Navbar({ tipo }: NavbarProps) {

  const navigate = useNavigate();

  const { usuario, logout } = useAuth();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (

    <header className="navbar">

      <div className="navbar-container">

        <Link
          to={tipo === "admin" ? "/admin" : "/aluno"}
          className="navbar-brand"
        >
          ??? Academia
        </Link>

        <nav className="navbar-links">

          {tipo === "aluno" ? (
            <>
              <Link to="/aluno">
                Início
              </Link>

              <Link to="/aluno/treino">
                Treino
              </Link>

              <Link to="/aluno/exercicios">
                Exercícios
              </Link>

              <Link to="/aluno/dieta">
                Dieta
              </Link>

              <Link to="/aluno/progresso">
                Progresso
              </Link>

              <Link to="/aluno/perfil">
                Perfil
              </Link>
            </>
          ) : (
            <>
              <Link to="/admin">
                Dashboard
              </Link>

              <Link to="/admin/alunos">
                Alunos
              </Link>

              <Link to="/admin/videos">
                Vídeos
              </Link>

              <Link to="/admin/treinos">
                Treinos
              </Link>

              <Link to="/admin/exercicios">
                Exercícios
              </Link>

              <Link to="/admin/dietas">
                Dietas
              </Link>
            </>
          )}

          {usuario && (
            <span className="navbar-user">
              {usuario.nome}
            </span>
          )}

          <button
            type="button"
            className="navbar-logout"
            onClick={handleLogout}
          >
            Sair
          </button>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
