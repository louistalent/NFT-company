import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";
import LootboxCarousel from "../components/lootboxcarousel";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Mint</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          className="mint-page"
        >
          <Grid container spacing={2}>
            <Grid className="mint-all" xs={12}>
              <div className="header">
                <h1>Mint</h1>
                <img src="/image/div.svg" className="divider" />
                <h3>Currencies (7)</h3>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          className="mint-items"
        >
          <Grid container spacing={2}>
            <Grid xs={3}>
              <div className="mint-item">
                <img src="/image/mint/ethereum.png" width="120px" />
              </div>
            </Grid>
            <Grid xs={3}>
              <div className="mint-item">
                <img src="/image/mint/polygon.png" width="120px" />
              </div>
            </Grid>
            <Grid xs={3}>
              <div className="mint-item">
                <img src="/image/mint/binance.png" width="120px" />
              </div>
            </Grid>
            <Grid xs={3}>
              <div className="mint-item">
                <img src="/image/mint/avalance.png" width="120px" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          className="mint-item-names"
        >
          <Grid container spacing={2}>
            <Grid xs={3}>
              <h2>Ethereum</h2>
              <p className="mint-info">12%</p>
            </Grid>
            <Grid xs={3}>
              <h2>Polygon</h2>
              <p className="mint-info">46%</p>
            </Grid>
            <Grid xs={3}>
              <h2>Binance</h2>
              <p className="mint-info">58%</p>
            </Grid>
            <Grid xs={3}>
              <h2>Avalance</h2>
              <p className="mint-info">83%</p>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          className="mint-items"
        >
          <Grid container spacing={2}>
            <Grid xs={4}>
              <div className="mint-item">
                <img src="/image/mint/arbitmrum.png" width="120px" />
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="mint-item">
                <img src="/image/mint/optimisim.png" width="120px" />
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="mint-item">
                <img src="/image/mint/milkomeda.png" width="120px" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          className="mint-item-names"
        >
          <Grid container spacing={2}>
            <Grid xs={4}>
              <h2>Arbitmrum</h2>
              <p className="mint-info">91%</p>
            </Grid>
            <Grid xs={4}>
              <h2>Optimisim</h2>
              <p className="mint-info">15%</p>
            </Grid>
            <Grid xs={4}>
              <h2>Milkomeda</h2>
              <p className="mint-info">63%</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
