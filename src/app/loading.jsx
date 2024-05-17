import React from "react";

import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  console.log("loading page yuklendi");
  return  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }}
>
  
  <CircularProgress />
</div>;
}
