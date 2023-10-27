import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Prime Nine - Signed</title>
        <meta name="description" content="Prime Nine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="signed-page"
      >
        <Grid container spacing={2}>
          <Grid xs={12}>
            <div className="signed-card">
              <div className="signed-intro">
                <h1>I swear alliegience to the bastion as a paragon</h1>
                <p>
                  Though trouble may follow me, i overcome it with dignity.
                  wolf, my spirit guide, teaches that there&apos;s a time for
                  vilence and a time for peace.
                </p>
                <p>
                  I rely on cunning to prtext myself and my allies. And yet, I
                  know faulure. I challenged my lifelong rival to fight at a
                  moot, and in my overconfidence, I lost. I look forward to the
                  day when I can even the score.
                </p>

                <p>
                  A necromanger&apos;s closest companion is death. In
                  acknowledgement of this I mark my face with the symbol of a
                  skull.
                </p>

                <p>This is my story.</p>

                <div className="signed">
                  <img src="/image/x.svg" width="35px" />
                  <div className="signed-section">
                    <h3>Signed:</h3>
                    <input type="text" name="name" className="signed-input" />
                  </div>
                </div>

                <div className="logo-signed">
                  <img src="/image/logo-brown.svg" width="200px" />
                </div>
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
  );
}
