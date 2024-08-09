import { Eye } from "@/app/assets/icons/Eye";
import { Button } from "./ui/button";
import { Webflow } from "@/app/assets/icons/Webflow";
import { Figma } from "@/app/assets/icons/Figma";
import { Separator } from "./ui/separator";
import { ComponentCard } from "./ComponentCard";

export const Components = () => {
  const components = [
    {
      id: 1,
      name: "Hero",
      date: "Added 28th of Feb 2024",
      bookmarked: true,
    },
    {
      id: 2,
      name: "hero",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
    {
      id: 3,
      name: "Hero",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
    {
      id: 4,
      name: "button",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
    {
      id: 5,
      name: "accordion",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
    {
      id: 6,
      name: "dropdown",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
    {
      id: 7,
      name: "avatar",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
    {
      id: 8,
      name: "hero",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
    {
      id: 9,
      name: "hero",
      date: "Added 28th of Feb 2024",
      bookmarked: false,
    },
  ];
  return (
    <div className="flex flex-col h-full flex-1 overflow-auto bg-[#121212] border-t border-[#1D1D1D]  w-full gap-6 px-8 pt-8">
      <div className="flex flex-col gap-10">
        <div className="flex gap-20">
          <div className="flex gap-10 flex-col">
            <div className="gap-8 flex flex-col items-start justify-between">
              <div className="flex gap-4 items-center">
                <h1 className="text-2xl font-medium text-white">
                  Hero Section
                </h1>
                <span className="font-medium text-[16px] text-transparent bg-clip-text bg-gradient-to-b from-[#FF7A00] to-[#FF2900]">
                  Pro
                </span>
              </div>
              <span className="text-[#7E7F81] text-sm">
                Detailed header section with heading and graphic/image centred
                and feature cards on either side.
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center w-full justify-between">
                <Button className="w-full bg-[#1B1B1B] border border-[#292929] flex items-center px-2 py-1 gap-2">
                  <Webflow />
                  <span>Copy to Webflow</span>
                </Button>
                <Button className="w-full bg-[#1B1B1B] border border-[#292929] flex items-center px-2 gap-2">
                  <Figma />
                  <span>Copy to Figma</span>
                </Button>
              </div>
              <Button className="bg-[#1B1B1B] border border-[#292929] flex items-center px-2 py-1 gap-[10px]">
                <span>
                  <Eye />
                </span>
                <span>Live Preview</span>
              </Button>
            </div>
          </div>
          <div className="bg-[#1B1B1B] rounded-[12px] w-full h-[380px]"></div>
        </div>
        <Separator orientation="horizontal" className="h-[1px] bg-[#1D1D1D]" />
        <div className="flex gap-6 items-center">
          <h3 className="leading-[-2%] text-white text-[26px]">
            Other sections you might like
          </h3>
          <Button className="px-2 py-1 flex gap-[10px] bg-[#1B1B1B] text-[#7E7F81] border border-[#292929] items-center text-[12.49px] leading-6">
            Browse All
          </Button>
        </div>
        <div className="w-full flex flex-col gap-10 items-center h-72 overflow-auto">
          {components.map(
            (component, index) =>
              index % 3 === 0 && (
                <div
                  key={component.id}
                  className="w-full flex gap-6 items-center justify-between"
                >
                  {components
                    .slice(index, index + 3)
                    .map((component, index) => (
                      <ComponentCard
                        key={component.id + index}
                        component={component}
                      />
                    ))}
                </div>
              )
          )}
          <div className="flex items-center gap-6"></div>
        </div>
      </div>
    </div>
  );
};
