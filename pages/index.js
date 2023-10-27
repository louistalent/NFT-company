import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";

import AnimatedPage from "../components/AnimatedPage";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Prime Nine</title>
        <meta name="description" content="Prime Nine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        className="preloader"
      >
        <Link href="/faction">
          <img src="/image/prime-nine_logo.svg" />
        </Link>

        {/* <div className="loader">
            63<sup>%</sup>
          </div> */}

        <CircularProgress color="inherit" />
        <Link href="/faction">
          <div className="preloader-button">Enter</div>
        </Link>
      </Grid>
    </div>
  );
}
