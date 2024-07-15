import { memo } from "react";

export const Samll = memo(({ value }) => {
  console.log("Se pinta");
  return <div>{value}</div>;
});
