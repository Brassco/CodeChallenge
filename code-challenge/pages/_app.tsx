import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { store } from '../app/redux/store'
import { Provider } from 'react-redux'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Component {...pageProps} />
    </LocalizationProvider>
    </Provider>
  );
}

export default MyApp
