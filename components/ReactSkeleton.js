import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const ReactSkeleton = () => {
  return (
    <Stack spacing={1} sx={{ paddingY: "10px" }}>
      {/* <Skeleton variant="circular" width={40} height={40} /> */}
      <Skeleton variant="text" width="40%" sx={{ fontSize: "3rem" }} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
      <Skeleton variant="rounded" height={50} />
    </Stack>
  );
};
