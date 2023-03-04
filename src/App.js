import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      hi
    </div>
  );
}

export default App;
