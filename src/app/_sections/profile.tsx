import Image from "next/image";

import { BadgeCheck } from "lucide-react";

import FlipSentences from "@/components/animation/flip-sentence";
import DownloadButton from "@/components/animation/download-btn";

import ABOUT from "@/config/about";
import SITE from "@/config/site";

import { getDayDifference } from "@/lib/day";

function ProfileSection() {
  const diffDays = getDayDifference(SITE.lastUpdatedAt);
  return (
    <section className="relative flex full-line-bottom h-auto border-x  ">
      <div className="shrink-0 border-r p-1">
        <Image
          className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none"
          src="/profile.webp"
          alt="profile"
          loading="eager"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between grow items-end pb-1 px-4">
          <span className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800 tracking-wider">
            Last updated {diffDays} day{diffDays !== 1 ? "s" : ""} ago
          </span>
        </div>
        <div className="border-t">
          <h1 className="pl-4 py-0.5 font-semibold  select-none text-2xl flex items-center font-mono">
            {ABOUT.name}&nbsp;
            <BadgeCheck color="#2db6f0" />
          </h1>
        </div>
        <div className="h-9 border-t flex items-center justify-start  py-1 pl-4  md:h-auto">
          <FlipSentences sentences={ABOUT.sentences} />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
