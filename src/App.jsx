import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/About-us";
import { ContextLang } from "./context/ContexLang";
import ContactUsPage from "./pages/ContactUsPage";
function App() {
  const { lang, setLang } = useContext(ContextLang);
 const router = createBrowserRouter([
   {
     path: `/`,
     element: <HomePage />,
   },
   {
     path: "/about-us",
     element: <AboutUs />,
   },
   {
     path: "/contact-us",
     element: <ContactUsPage />,
   },
 ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
