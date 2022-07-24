import "../styles/globals.css";

import { AuthProvider } from "../context/Auth";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
