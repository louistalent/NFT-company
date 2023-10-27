import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";
import Invite from "../components/invite";

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
        <Head>
          <title>Prime Nine - Invite</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="invite-page"
        >
          <Grid container spacing={2}>
            <Grid className="invite-all" xs={12}>
              <div className="header">
                <h1>Invite</h1>
                <img src="/image/div.svg" className="divider" />
                <h3>
                  Applications (<span>32</span>)
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
          className="invite-page"
        >
          <Grid container spacing={2}>
            <Grid className="invite" xs={12}>
              <Invite />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
