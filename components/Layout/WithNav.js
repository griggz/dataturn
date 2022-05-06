import AppAppBar from "../Layout/views/AppAppBar";
import Footer from "../Layout/Footer";

export default function WithNav(Component) {
  function WithNav(props) {
    return (
      <>
        <AppAppBar />
        <Component {...props} />
        <Footer />
      </>
    );
  }

  return WithNav;
}
