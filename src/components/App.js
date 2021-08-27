import Navbar from './Navbar/Navbar';
import Meta from './Head/Meta';
import Footer from './Footer/Footer';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/reducers/userReducer';
import { useRouter } from 'next/router';

const App = ({ children }) => {
  const user = useSelector(selectToken)
  const router = useRouter();

  // if(!user.login) {
  //     router.push('/auth/login')
  // } 
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
