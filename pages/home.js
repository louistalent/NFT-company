import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Home</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className="home-page"
        >
          <Grid container spacing={2}>
            <Grid className="home-all" xs={12}>
              <div className="main-badge">Mint</div>
              <div className="main-subline">Extra XP with prime gaming</div>
              <div className="main-header">Free XP & more</div>
              <div className="main-info">Free XP Weekend with Prime Nine</div>
              <div className="main-buttons">
                <div className="button1">Learn More</div>
                <div className="button2">Learn More</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <img src="/image/dragon-woman.png" className="dragon-woman" />
      </div>
    </>
  );
}
