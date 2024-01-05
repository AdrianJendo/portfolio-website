import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [nextPage, setNextPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);

  const mapping: { [key: string]: number } = {
    "/": 0,
    "/experience": 1,
    "/projects": 2,
    "/resume": 3,
  };

  const handleSetPrevPage = () => {
    setPrevPage(mapping[router.pathname]);
  };

  return (
    <Layout setNextPage={setNextPage} setPrevPage={handleSetPrevPage}>
      <AnimatePresence mode="wait" initial={false}>
        <Component
          {...pageProps}
          key={router.pathname}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
