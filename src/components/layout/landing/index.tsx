import type React from "react";

import Header from "./header";

function LandingAnimation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="h-dvh max-w-full overflow-x-hidden sm:overflow-x-visible relative w-full mx-auto md:max-w-3xl pt-12 px-4 md:px-0">
        <div className="w-full cd-content-in">{children}</div>
      </main>
    </>
  );
}

export default LandingAnimation;
