import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <header>
      <h1>Application Tracker</h1>
      <hr></hr>
      <div className="headerText">
        {path === "/" && (
          <p>
            Browse current internship listings and easily track your application
            status.
          </p>
        )}
        {path === "/statistics" && <p>View application statistics and data.</p>}
        {path === "/statistics/sankey" && <p>Visualize application data.</p>}
        {path === "/login" && (
          <p>Login to save application data to your profile.</p>
        )}
        {path === "/login/new-account" && (
          <p>Create a new account to keep track of your applications.</p>
        )}
      </div>
    </header>
  );
};

export default Header;
