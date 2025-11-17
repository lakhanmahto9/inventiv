import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <Header />
            <div>
              {children}
            </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
