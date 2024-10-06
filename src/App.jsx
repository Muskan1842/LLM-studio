import "@xyflow/react/dist/style.css";
import { createBrowserRouter } from "react-router-dom";
import ChatPage from "./components/ChatPage.jsx";
import { Outlet, RouterProvider } from "react-router";
import LandingPage from "./components/LandingPage.jsx";

export default function App() {
  const appRouter = createBrowserRouter([
    { path: "/chat", element: <ChatPage /> },
    { path: "/", element: <LandingPage /> },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Outlet></Outlet>
    </RouterProvider>
  );
}
