import {
  BriefcaseBusiness,
  CodeXml,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import ABOUT from "@/config/about";

function BioSection() {
  const bioData = [
    {
      icon: CodeXml,
      title: ABOUT.currentRole,
      type: "text",
    },
    {
      icon: BriefcaseBusiness,
      title: ABOUT.currentCompany,
      type: "text",
    },
    { icon: MapPin, title: ABOUT.location, type: "text" },
    { icon: Phone, title: ABOUT.mobile, type: "link" },
    { icon: Mail, title: ABOUT.email, type: "link" },
  ];
  return (
    <section className="relative flex full-line-bottom h-auto border-x p-4 gap-2 flex-col items-center justify-center">
      {bioData.map((item, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-start gap-4 font-mono text-sm "
        >
          <div className="bg-muted shrink-0  text-muted-foreground size-6 flex items-center justify-center rounded-sm ">
            <item.icon className="size-4" />
          </div>
          {item.type === "link" ? (
            <a
              target="_blank"
              href={
                item.title.startsWith("+88")
                  ? `tel:${item.title}`
                  : `mailto:${item.title}`
              }
              className="text-balance  hover:underline"
            >
              {item.title}
            </a>
          ) : (
            <span className="text-balance">{item.title}</span>
          )}
        </div>
      ))}
    </section>
  );
}

export default BioSection;
