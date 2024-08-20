import React from "react";
import { useLocation, Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

// Define the breadcrumb routes
const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/about", breadcrumb: "About Us" },
  // Add more routes as needed
];

const Bannermain = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routes);

  // Get the current breadcrumb to set the title
  const currentBreadcrumb = breadcrumbs[breadcrumbs.length - 1]?.breadcrumb;

  return (
    <div className="relative flex items-center justify-center py-6 md:py-8 lg:py-9 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('\IMG5 (2).jpg')" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
        <h1 className="text-md md:text-3xl lg:text-5xl font-roboto text-primaryColor font-bold mb-4 text-white text-center">
          {currentBreadcrumb || "Default Title"}
        </h1>

        <nav className="breadcrumbs text-sm text-center text-white">
          <hr className="w-full mb-4"></hr>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <span key={match.pathname} className="inline-block">
              <Link
                to={match.pathname}
                className="text-primaryColor hover:text-primaryColor text-white transition duration-300 ease-in-out"
              >
                {breadcrumb}
              </Link>
              {match.pathname !== location.pathname && (
                <span className="px-2 text-white"> &gt; </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Bannermain;
