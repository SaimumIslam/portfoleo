import DownloadButton from "@/components/animation/download-btn";

import AnimatedLogo from "./logo";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto flex h-12 max-w-full items-center md:max-w-3xl">
      <div className="cd-bar-in absolute inset-0 full-line-top full-line-bottom z-100 border-x bg-background/70 backdrop-blur-md" />

      <div className="relative h-full w-full">
        <div className="cd-logo z-110">
          <AnimatedLogo size="sm" draw />
        </div>

        <div className="cd-action-in absolute right-3 top-[7.5px] z-110 flex items-center gap-x-4">
          <div className="flex items-center justify-center gap-3">
            <DownloadButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
