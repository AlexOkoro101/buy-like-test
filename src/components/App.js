import Navbar from './Navbar/Navbar';
import Meta from './Head/Meta';
import Footer from './Footer/Footer';

const App = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default App;
