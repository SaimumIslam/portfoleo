"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface Props extends React.ComponentProps<"header"> {}

const HeaderClient: React.FC<Props> = (props) => {
  const { scrollY } = useScroll();
  const [affix, setAffix] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAffix(latest >= 8);
  });

  return <header data-affix={affix} {...props} />;
};

export default HeaderClient;
