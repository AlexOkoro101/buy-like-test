import Navbar from './Navbar/Navbar';
import Meta from './Head/Meta';
import Footer from './Footer/Footer';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/reducers/userReducer';
import Login from '../../pages/auth/login/index';

const App = ({ children }) => {
  const user = useSelector(selectToken)

  if(!user.login && (children.type.WrappedComponent.name === 'Search' || 'CarDetails')) {
      return (
        <>
        <Meta />
        <Navbar />
          <Login></Login>
        <Footer />
        </>
      )
  } else {
    
    return (
      <>
        <Meta />
        <Navbar />
          {children}
        <Footer />
      </>
    );
  }

};

export default App;
