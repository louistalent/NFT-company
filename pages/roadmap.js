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
          <title>Prime Nine - Roadmap</title>
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
                <h3>Roadmap</h3>
                <img src="/image/div.svg" className="divider" />
                <h1>Our Future</h1>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="roadmap-items-1"
        >
          <Grid container spacing={2}>
            <Grid xs={6}>
              <div className="roadmap-item">
                <img
                  src="/image/page/roadmap-1.png"
                  width="80px"
                  className="roadmap-image"
                />

                <div className="roadmap-info">
                  <h2 className="roadmap-header">Community Launch</h2>
                  <ul className="roadmap-list">
                    <li>Website Launch</li>
                    <li>Social Media Launch</li>
                    <li>Game Prototype Demo</li>
                    <li>Game Art & Graphics Release</li>
                  </ul>
                </div>
                <img
                  src="/image/page/roadmap-status.svg"
                  className="roadmap-status"
                />
              </div>
            </Grid>
            <Grid xs={6}>
              <div className="roadmap-item">
                <img
                  src="/image/page/roadmap-2.png"
                  width="80px"
                  className="roadmap-image"
                />

                <div className="roadmap-info">
                  <h2 className="roadmap-header">Community Launch</h2>
                  <ul className="roadmap-list">
                    <li>Website Launch</li>
                    <li>Social Media Launch</li>
                    <li>Game Prototype Demo</li>
                    <li>Game Art & Graphics Release</li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="roadmap-items-1"
        >
          <Grid container spacing={2}>
            <Grid xs={6}>
              <div className="roadmap-item">
                <img
                  src="/image/page/roadmap-3.png"
                  width="80px"
                  className="roadmap-image"
                />

                <div className="roadmap-info">
                  <h2 className="roadmap-header">Community Launch</h2>
                  <ul className="roadmap-list">
                    <li>Website Launch</li>
                    <li>Social Media Launch</li>
                    <li>Game Prototype Demo</li>
                    <li>Game Art & Graphics Release</li>
                  </ul>
                </div>
                <img
                  src="/image/page/roadmap-status.svg"
                  className="roadmap-status-2"
                />
              </div>
            </Grid>
            <Grid xs={6}>
              <div className="roadmap-item">
                <img
                  src="/image/page/roadmap-4.png"
                  width="80px"
                  className="roadmap-image"
                />

                <div className="roadmap-info">
                  <h2 className="roadmap-header">Community Launch</h2>
                  <ul className="roadmap-list">
                    <li>Website Launch</li>
                    <li>Social Media Launch</li>
                    <li>Game Prototype Demo</li>
                    <li>Game Art & Graphics Release</li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <img src="/image/paragon.png" className="paragon-page" />
    </>
  );
}
