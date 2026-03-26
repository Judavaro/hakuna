import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 border text-center">
        <h1 className="text-3xl font-bold text-primary mb-3">
          Bienvenido a Hakuna
        </h1>
        <p className="text-muted-foreground mb-6">
          {username ? `Sesión iniciada como ${username}` : "Sesión iniciada"}
        </p>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 text-white px-5 py-2.5 font-medium hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;