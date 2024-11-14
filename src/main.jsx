import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./index.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Users from "./components/Users/Users";
import Usedetails from "./components/UseDetails/Usedetails";
import Posts from "./components/Posts/Posts";
import Postd from "./components/PostDetails/Postd";
import Comments from "./components/Comments/Comments";
import Comment from "./components/Comments/Comment/Comment";
import ComDetails from "./components/ComDetails/ComDetails";
import Errorpage from "./components/Errorpage/Errorpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Usedetails></Usedetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Postd></Postd>,
      },
      {
        path: "/comments",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        element: <Comments></Comments>,
      },
      {
        path: "/comment/:cmId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/comments/${params.cmId}`),
        element: <ComDetails></ComDetails>,
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
