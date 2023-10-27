import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

import AnimatedPage from "../components/AnimatedPage";
import { motion as m } from "framer-motion";
import { Howl } from "howler";

import React, { useState, useEffect } from "react";

export default function Home() {
  const transition = new Howl({
    src: "./sound/transition.mp3",
  });

  useEffect(() => {
    transition.play();
  }, []);

  return (
    <AnimatedPage>
      <div className="">
        <Head>
          <title>Prime Nine - Questionaire</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="question-page"
        >
          <Grid container spacing={2}>
            <Grid xs={12}>
              <div className="question-card">
                <div className="question-intro">
                  <div className="question-picture">
                    <Badge color="primary" badgeContent="!" className="badge">
                      <img
                        src="/image/echoes-picture.png"
                        className="faction-picture"
                      />
                    </Badge>
                  </div>
                  <img src="/image/div2.svg" className="question-divider" />
                  <h1>Find my faction</h1>
                  <p>A Paragon is a symbol of peace</p>
                </div>

                <div className="logo-intro">
                  <img src="/image/logo-brown.svg" width="200px" />
                </div>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  className="question-container"
                >
                  <Grid xs={4} className="question-answer-left">
                    <Link href="/signed">
                      <img src="/image/a.svg" />
                    </Link>
                    <span>Yes!</span>
                  </Grid>

                  <Grid xs={4} className="question-number">
                    <img src="/image/2.svg" />
                  </Grid>

                  <Grid xs={4} className="question-answer-right">
                    <img src="/image/b.svg" /> <span>Who cares!</span>
                  </Grid>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  className="question-container"
                >
                  <Grid xs={4} className="question-answer-left">
                    <img src="/image/c.svg" /> <span>No!</span>
                  </Grid>

                  <Grid xs={4} className="question-number"></Grid>

                  <Grid xs={4} className="question-answer-right">
                    <img src="/image/d.svg" /> <span>Yesn’t!</span>
                  </Grid>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="bullets"
        >
          <Grid container spacing={2}>
            <Grid xs={3}>
              <img src="/image/point.svg" width="30px" />
            </Grid>
            <Grid xs={3}>
              <img src="/image/point-active.svg" width="30px" />
            </Grid>
            <Grid xs={3}>
              <img src="/image/point.svg" width="30px" />
            </Grid>
            <Grid xs={3}>
              <img src="/image/point.svg" width="30px" />
            </Grid>
          </Grid>
        </Grid>

        <div className="skip">
          <h2>Skip</h2>
          <Link href="/home">
            <img src="/image/right_arrow.png" />
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}
