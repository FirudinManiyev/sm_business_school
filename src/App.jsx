import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <div className="min-h-screen grid place-items-center text-gray-500">
          Loading application...
        </div>
      }
    />
  );
}

export default App;
