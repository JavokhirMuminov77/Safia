import React from "react";

import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
          <img className="static-num" src="/img/cookie.png"  width={140} height={150}/>
          </Stack>
          <Divider height="64" width="2" bg="#FF69B4" />
          <Stack className="static-box">
          <img className="static-num" src="/img/cacke.png"  width={140} height={150}/>
          </Stack>
          <Divider height="64" width="2" bg="#FF69B4" />

          <Stack className="static-box">
          <img className="static-num" src="/img/iasecream.jpeg"  width={140} height={150}/>
          </Stack>
          <Divider height="64" width="2" bg="#FF69B4" />

          <Stack className="static-box">
          <img className="static-num" src="/img/round-cake.png"  width={140} height={150}/>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}