import '../styles/globals.css';
import '../styles/font.css';
import App from '../src/components/App';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from  '../redux/store';

const MyApp = ({ Component, pageProps }) => {
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
