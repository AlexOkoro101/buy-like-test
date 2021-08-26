// import '../styles/globals.css';
import '../styles/index.css';
import '../styles/font.css';
import '../styles/onboarding.css';
import '../styles/user-profile.css';
import '../styles/search-results.css';
import '../styles/ft-status-page.css';
import '../styles/telInput.css';
import App from '../src/components/App';

import { Provider, useDispatch, useSelector } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from  '../redux/store';
import { useEffect } from 'react';
import { login, selectUser } from '../redux/features/userSlice';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
    // var Spinner = require('react-spinkit');
    const dispatch = useDispatch();
    const router = useRouter()

    // useEffect(() => {
    //     const storage = () => {
    //       const getToken = localStorage.getItem('userToken');
    //       if (!getToken) {
    //           return null
    //       }
    //       const item = JSON.parse(getToken)
    //       const now = new Date()
    //         if (now.getTime() > item.expiry) {
    //             // If the item is expired, delete the item from storage
    //             // and return null
    //             window.localStorage.clear();
    //             return null
    //         }
    //         // return item.value
    //         dispatch(
    //             login({
    //               token: item.userToken,
    //             })
    //         )

    //       }
    //       return storage;
    // }, [])

    // const user = useSelector(selectUser);
    // console.log(user)

    // // if(!user?.token) {
    // //     router.push('/auth/login')
    // // }
  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
