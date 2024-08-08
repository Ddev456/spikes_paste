import { Eye } from "@/app/assets/icons/Eye";
import { Button } from "./ui/button";
import { Webflow } from "@/app/assets/icons/Webflow";
import { Figma } from "@/app/assets/icons/Figma";

export const Components = () => {
  return (
    <div className="w-full h-[100dvh] flex bg-[#121212] border-t border-[#1D1D1D] gap-6 px-8 pt-8">
      <div className="flex gap-10 flex-col">
        <div className="gap-8 flex flex-col items-start justify-between">
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl font-medium text-white">Hero Section</h1>
            <span className="font-medium text-[16px] text-transparent bg-clip-text bg-gradient-to-b from-[#FF7A00] to-[#FF2900]">
              Pro
            </span>
          </div>
          <span className="text-[#7E7F81] text-sm">
            Detailed header section with heading and graphic/image centred and
            feature cards on either side.
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
  );
};
