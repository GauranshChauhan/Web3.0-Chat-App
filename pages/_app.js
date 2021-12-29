import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId='a0sg3GMs48IZoyqckZYI87JTaa8EDecTLz0GFxTx'
      serverUrl='https://c0pj0sbut07i.usemoralis.com:2053/server'
    >
      <Component {...pageProps} />
    </MoralisProvider> 
  );
}

export default MyApp
