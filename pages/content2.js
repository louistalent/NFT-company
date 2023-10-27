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
        <title>Prime Nine - Content 2</title>
        <meta name="description" content="Prime Nine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="content-page"
      >
        <Grid container spacing={2}>
          <Grid className="content-all" xs={12}>
            <div className="header content-header">
              <h3>Welcome to Prime Nine</h3>
              <img src="/image/div.svg" className="divider" />
              <h1>Learn the basics</h1>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="showcase-items2"
      >
        <Grid container spacing={2}>
          <Grid xs={4}>
            <div className="item-2">
              <img src="/image/page/armour.png" width="120px" />
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="item-2">
              <img src="/image/page/burn.png" width="120px" />
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="item-2">
              <img src="/image/page/trade.png" width="120px" />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="showcase-item-names2"
      >
        <Grid container spacing={2}>
          <Grid xs={4}>
            <h2>Armour</h2>
            <p>Create unique items</p>
          </Grid>
          <Grid xs={4}>
            <h2>Burn</h2>
            <p>Earn additional benefits</p>
          </Grid>
          <Grid xs={4}>
            <h2>Trade</h2>
            <p>Use a trustless trading platform</p>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="content-box"
      >
        <Grid container spacing={2}>
          <Grid className="box" xs={12}>
            <img src="/image/page/page-content-1.png" width="320px" />

            <div className="box-image">
              <img src="/image/page/charms.png" width="100px" />
            </div>

            <div className="box-info">
              <h2>Charms</h2>
              <p>
                You can use it to make various game elements, such as weapons,
                food, etc.
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
