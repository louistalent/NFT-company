import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import AnimatedPage from "../components/AnimatedPage";
import { motion as m } from "framer-motion";
import { Howl } from "howler";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [paragon, setParagon] = useState("display-none");
  const [vanguard, setVanguard] = useState("display-none");
  const [echoes, setEchoes] = useState("display-none");

  const paragonHoverCard = (isVisible) => {
    hover.play();
    isVisible ? setParagon("display-show") : setParagon("display-none");
  };

  const paragonLeaveCard = (isVisible) => {
    isVisible ? setParagon("display-none") : setParagon("display-show");
    hover.play();
  };

  const vanguardHoverCard = (isVisible) => {
    hover.play();
    isVisible ? setVanguard("display-show") : setVanguard("display-none");
  };

  const vanguardLeaveCard = (isVisible) => {
    isVisible ? setVanguard("display-none") : setVanguard("display-show");
    hover.play();
  };

  const echoesHoverCard = (isVisible) => {
    hover.play();
    isVisible ? setEchoes("display-show") : setEchoes("display-none");
  };

  const echoesLeaveCard = (isVisible) => {
    isVisible ? setEchoes("display-none") : setEchoes("display-show");
    hover.play();
  };

  const transition = new Howl({
    src: "./sound/transition.mp3",
  });

  useEffect(() => {
    transition.play();
  }, []);
  const hover = new Howl({
    src: "./sound/hover_button.ogg",
  });

  return (
    <AnimatedPage>
      <div className="">
        <Head>
          <title>Prime Nine - Faction</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="faction-page"
        >
          <div className="header faction-header">
            <h1>Pick your faction</h1>
            <img src="/image/div.svg" className="divider" />
            <h3>Select your side</h3>
          </div>
          <Grid container spacing={2} style={{margin: '0px'}}>
            <Grid xs={12} md={4}>
              <div
                onMouseEnter={paragonHoverCard}
                onMouseLeave={paragonLeaveCard}
              >
                <div className="faction-card">
                  <Link href="/questionaire">
                    <img src="/image/paragons.png" />
                  </Link>
                  <h2>Paragons</h2>
                  <p className={paragon}>
                    Few leave the corporate world with their lives - fewer still
                    with their souls intact. You&apos;ve been there -
                    you&apos;ve bent the rules, exploited secrets and weaponized
                    information. There&apos;s no such thing as a fair game, only
                    winners and losers.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid xs={12} md={4}>
              <div
                onMouseEnter={vanguardHoverCard}
                onMouseLeave={vanguardLeaveCard}
              >
                <div className="faction-card">
                  <Link href="/questionaire">
                    <img src="/image/vanguards.png" />
                  </Link>
                  <h2>Vanguards</h2>
                  <p className={vanguard}>
                    Few leave the corporate world with their lives - fewer still
                    with their souls intact. You&apos;ve been there -
                    you&apos;ve bent the rules, exploited secrets and weaponized
                    information. There&apos;s no such thing as a fair game, only
                    winners and losers.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid xs={12} md={4}>
              <div
                onMouseEnter={echoesHoverCard}
                onMouseLeave={echoesLeaveCard}
              >
                <div className="faction-card">
                  <Link href="/questionaire">
                    <img src="/image/echoes.png" />
                  </Link>
                  <h2>Echoes</h2>
                  <p className={echoes}>
                    Few leave the corporate world with their lives - fewer still
                    with their souls intact. You&apos;ve been there -
                    you&apos;ve bent the rules, exploited secrets and weaponized
                    information. There&apos;s no such thing as a fair game, only
                    winners and losers.
                  </p>
                </div>
              </div>
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
