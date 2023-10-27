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
          <title>Prime Nine - Content</title>
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
                <h3>Start Playing</h3>
                <img src="/image/div.svg" className="divider" />
                <h1>Earn Rewards</h1>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="showcase-items"
        >
          <Grid container spacing={2}>
            <div className="big-circle"></div>
            <Grid xs={4}>
              <div className="item">
                <img src="/image/items/sickle.png" width="120px" />
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="item">
                <img src="/image/items/45.png" width="107px" />
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="item">
                <img src="/image/items/111.png" width="120px" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="showcase-item-names"
        >
          <Grid container spacing={2}>
            <Grid xs={4}>
              <h2>Weapons</h2>
            </Grid>
            <Grid xs={4}>
              <h2>Armour</h2>
            </Grid>
            <Grid xs={4}>
              <h2>Charms</h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="showcase-items"
        >
          <Grid container spacing={2}>
            <Grid className="item-info" xs={12}>
              <p className="content-info">
                Your choice of a <span>Weapon</span>, <span>Armour</span> or{" "}
                <span>Charm</span> A 3-day XP boost + Loot Box
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <img src="/image/vanguard.png" className="vanguard-page" />
    </>
  );
}
