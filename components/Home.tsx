import { Logo } from "@/app/assets/icons/Logo"
import { Button } from "./ui/button"
import { MobileLogo } from "@/app/assets/icons/MobileLogo"

export const Home = () => {
    return (
        <div className="w-full flex flex-col h-full flex-1 overflow-auto bg-[#121212] border-t border-[#1D1D1D]  w-full gap-6 px-8 pt-8">
            <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Home</h1>
            <Button className="max-w-48 bg-[#1B1B1B] border-orange-500 border-4 text-white h-12 flex items-center gap-2 hover:bg-gradient-to-b from-[#FF7A00] to-[#FF2900]"> <span>Get Pro Access</span>
                <Logo />
                <MobileLogo />
            </Button>
            </div>
            <div className="bg-[#1B1B1B] rounded-[12px] w-full h-[500px]"></div>
        </div>
    )
}

