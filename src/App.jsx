import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <h1 className="text-red-950">
        Crossfire Game Day • CSSC University of Ruhuna
      </h1>
      <h2>
        Register team from here
        <Register />
      </h2>
      <h2>
        Login from here
        <Login />
      </h2>
    </>
  );
}

export default App;
