import Navbar from "components/navbar";
import React from "react";
import routes from "routes.js";
const Home = (props) => {
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const { ...rest } = props;
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  return (
    <div>
      <Navbar
        onOpenSidenav={() => setOpen(true)}
        logoText={"Horizon UI Tailwind React"}
        brandText={currentRoute}
        secondary={getActiveNavbar(routes)}
        {...rest}
      />

      <h1 className="mt-24 dark:text-white">Umidjon</h1>
    </div>
  );
};

export default Home;
