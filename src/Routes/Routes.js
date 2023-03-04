import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    // children: [
    //   {
    //     path: "/",
    //     element: <Home></Home>,
    //   },
    //   {
    //     path: "/signin",
    //     element: <SignIn></SignIn>,
    //   },
    //   {
    //     path: "/blogs",
    //     element: <Blog></Blog>,
    //   },
    //   {
    //     path: "/signup",
    //     element: <SignUP></SignUP>,
    //   },
    //   {
    //     path: "/myreview",
    //     element: (
    //       <Private>
    //         <MyReview></MyReview>
    //       </Private>
    //     ),
    //   },
    //   {
    //     path: "/addservicee",
    //     element: <SingleService></SingleService>,
    //   },
    //   {
    //     path: "/addservice",
    //     element: <AddService></AddService>,
    //   },
    //   {
    //     path: "/singleservice/:id",
    //     element: (
    //       <Private>
    //         <SingleService></SingleService>
    //       </Private>
    //     ),
    //     loader: ({ params }) =>
    //       fetch(
    //         `https://travel-site-backend.vercel.app/singleservice/${params.id}`
    //       ),
    //   },
    //   {
    //     path: "*",
    //     element: <Error></Error>,
    //   },
    // ],
  },
]);

export default router;
