import { Footer } from '../Components/Footer';
import MainTitle from '../Components/MainTitle';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MainTitle />
      <div className="bg-main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
