import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";
import Leaderboard from "../components/leaderboard";

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
        <Head>
          <title>Prime Nine - Leaderboard</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="leaderboard-page"
        >
          <Grid container spacing={2}>
            <Grid className="leaderboard-all" xs={12}>
              <div className="header">
                <h1>Leaderboard</h1>
                <img src="/image/div.svg" className="divider" />
                <h3>
                  Your rank is <span>512</span> of <span>982</span>
                </h3>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="leaderboard-page"
        >
          <Grid container spacing={2}>
            <Grid className="leaderboard" xs={12}>
              <Leaderboard />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
