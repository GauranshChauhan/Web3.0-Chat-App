import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    appId='put your own appId by going to moralis dashboard'
      serverUrl='put your own serverUrl by going to moralis dashboard'
    >
      <Component {...pageProps} />
    </MoralisProvider> 
  );
}

export default MyApp
