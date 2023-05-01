import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../Pages/Home/Category";
import News from "../Pages/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/register",
        element: <Register></Register>,
      },
      {
        path: "/login/terms",
        element: <TermsConditions></TermsConditions>,
      },
    ],
  },
]);
export default router;
