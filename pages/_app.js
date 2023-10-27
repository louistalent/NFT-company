import "../styles/globals.css";
import Layout from "../components/layout";

import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode={"wait"}>
      <Layout>
        <Component key={router.pathname} {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}
