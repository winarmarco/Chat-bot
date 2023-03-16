import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Private from "./util/Private";
import ChatPage from "./pages/ChatPage";

function ChatPageWithPrivate() {
  return <ChatPage />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
    //   errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/login",
    element: <AuthPage mode="login" />,
  },
  {
    path: "/signup",
    element: <AuthPage mode="signup" />,
  },
  {
    path: "/chat",
    element: (
      <Private 
        component={<ChatPage />}
      />
    ),
  },
  {
    path: "/chat/:chatId",
    element: (
      <Private 
        component={<ChatPageWithPrivate />}
      />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
