import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"  
import { ChevronRight, Menu } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Section } from "./Sidebar";
import { Webflow } from "@/app/assets/icons/Webflow";
import { Figma } from "@/app/assets/icons/Figma";
import Link from "next/link";

export const MobileSidebar = () => {
    const sections: Section[] = [
        {
          title: "Platform",
          href: "#",
          icon: (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 6.44444H8.25V6.94444H8.75V6.44444ZM8.75 1H9.25C9.25 0.787034 9.1151 0.597441 8.91391 0.527629C8.71271 0.457816 8.48937 0.523107 8.35746 0.690302L8.75 1ZM2 9.55556L1.60746 9.24586C1.48879 9.39627 1.4665 9.60127 1.55008 9.77367C1.63366 9.94607 1.80841 10.0556 2 10.0556V9.55556ZM7.25 9.55556H7.75V9.05556H7.25V9.55556ZM7.25 15H6.75C6.75 15.213 6.8849 15.4026 7.08609 15.4724C7.28729 15.5422 7.51063 15.4769 7.64254 15.3097L7.25 15ZM14 6.44444L14.3925 6.75414C14.5112 6.60373 14.5335 6.39873 14.4499 6.22633C14.3663 6.05393 14.1916 5.94444 14 5.94444V6.44444ZM9.25 6.44444V1H8.25V6.44444H9.25ZM8.35746 0.690302L1.60746 9.24586L2.39254 9.86525L9.14254 1.3097L8.35746 0.690302ZM2 10.0556H7.25V9.05556H2V10.0556ZM6.75 9.55556V15H7.75V9.55556H6.75ZM7.64254 15.3097L14.3925 6.75414L13.6075 6.13475L6.85746 14.6903L7.64254 15.3097ZM14 5.94444H8.75V6.94444H14V5.94444Z"
                fill="white"
              />
            </svg>
          ),
          items: [
            { title: "Webflow", href: "#", icon: <Webflow /> },
            { title: "Figma", href: "#", icon: <Figma /> },
          ],
        },
        {
          title: "Sections",
          href: "#",
          icon: (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_0_159)">
                <path
                  d="M1 2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H4.4C4.96005 1 5.24008 1 5.45399 1.10899C5.64215 1.20487 5.79513 1.35785 5.89101 1.54601C6 1.75992 6 2.03995 6 2.6V4.4C6 4.96005 6 5.24008 5.89101 5.45399C5.79513 5.64215 5.64215 5.79513 5.45399 5.89101C5.24008 6 4.96005 6 4.4 6H2.6C2.03995 6 1.75992 6 1.54601 5.89101C1.35785 5.79513 1.20487 5.64215 1.10899 5.45399C1 5.24008 1 4.96005 1 4.4V2.6Z"
                  stroke="white"
                />
                <path
                  d="M1 11.6C1 11.0399 1 10.7599 1.10899 10.546C1.20487 10.3578 1.35785 10.2049 1.54601 10.109C1.75992 10 2.03995 10 2.6 10H4.4C4.96005 10 5.24008 10 5.45399 10.109C5.64215 10.2049 5.79513 10.3578 5.89101 10.546C6 10.7599 6 11.0399 6 11.6V13.4C6 13.9601 6 14.2401 5.89101 14.454C5.79513 14.6422 5.64215 14.7951 5.45399 14.891C5.24008 15 4.96005 15 4.4 15H2.6C2.03995 15 1.75992 15 1.54601 14.891C1.35785 14.7951 1.20487 14.6422 1.10899 14.454C1 14.2401 1 13.9601 1 13.4V11.6Z"
                  stroke="white"
                />
                <path
                  d="M10 2.6C10 2.03995 10 1.75992 10.109 1.54601C10.2049 1.35785 10.3578 1.20487 10.546 1.10899C10.7599 1 11.0399 1 11.6 1H13.4C13.9601 1 14.2401 1 14.454 1.10899C14.6422 1.20487 14.7951 1.35785 14.891 1.54601C15 1.75992 15 2.03995 15 2.6V4.4C15 4.96005 15 5.24008 14.891 5.45399C14.7951 5.64215 14.6422 5.79513 14.454 5.89101C14.2401 6 13.9601 6 13.4 6H11.6C11.0399 6 10.7599 6 10.546 5.89101C10.3578 5.79513 10.2049 5.64215 10.109 5.45399C10 5.24008 10 4.96005 10 4.4V2.6Z"
                  stroke="white"
                />
                <path
                  d="M10 11.6C10 11.0399 10 10.7599 10.109 10.546C10.2049 10.3578 10.3578 10.2049 10.546 10.109C10.7599 10 11.0399 10 11.6 10H13.4C13.9601 10 14.2401 10 14.454 10.109C14.6422 10.2049 14.7951 10.3578 14.891 10.546C15 10.7599 15 11.0399 15 11.6V13.4C15 13.9601 15 14.2401 14.891 14.454C14.7951 14.6422 14.6422 14.7951 14.454 14.891C14.2401 15 13.9601 15 13.4 15H11.6C11.0399 15 10.7599 15 10.546 14.891C10.3578 14.7951 10.2049 14.6422 10.109 14.454C10 14.2401 10 13.9601 10 13.4V11.6Z"
                  stroke="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_159">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ),
          items: [
            { title: "Hero", href: "#" },
            { title: "How it works", href: "#" },
            { title: "Services", href: "#" },
            { title: "Testimonials", href: "#" },
            { title: "Pricing", href: "#" },
            { title: "FAQ", href: "#" },
            { title: "Footer", href: "#" },
          ],
          showmore: true,
        },
        {
          title: "Style",
          href: "#",
          icon: (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1V4M1.5 2.5L4.5 2.5M3 12V13.5M3 13.5V15M3 13.5H1.5M3 13.5H4.5M9 2L9.62285 3.55713C10.3198 5.29955 11.7005 6.68018 13.4429 7.37715L15 8L12.9147 9.04266C11.4921 9.75393 10.3611 10.9376 9.71514 12.3909L9 14L8.28486 12.3909C7.63892 10.9376 6.50786 9.75393 5.08533 9.04266L3 8L4.55713 7.37715C6.29955 6.68018 7.68018 5.29955 8.37715 3.55713L9 2Z"
                stroke="#7E7F81"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
          items: [
            { title: "Colors", href: "#" },
            { title: "Typography", href: "#" },
            { title: "Icons", href: "#" },
            { title: "Components", href: "#" },
          ],
        },
        {
          title: "Saved",
          href: "#",
          icon: (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L12.8143 15.4642C12.9684 15.5259 13.1429 15.507 13.2803 15.414C13.4177 15.321 13.5 15.1659 13.5 15H13ZM3 15H2.5C2.5 15.1659 2.5823 15.321 2.71969 15.414C2.85707 15.507 3.03165 15.5259 3.1857 15.4642L3 15ZM8 13L8.1857 12.5358C8.06649 12.4881 7.93351 12.4881 7.8143 12.5358L8 13ZM11.908 1.21799L11.681 1.66349L11.908 1.21799ZM12.782 2.09202L12.3365 2.31901L12.782 2.09202ZM4.09202 1.21799L4.31901 1.66349L4.09202 1.21799ZM3.21799 2.09202L3.66349 2.31901L3.21799 2.09202ZM6.2 1.5H9.8V0.5H6.2V1.5ZM12.5 4.2V15H13.5V4.2H12.5ZM3.5 15V4.2H2.5V15H3.5ZM13.1857 14.5358L8.1857 12.5358L7.8143 13.4642L12.8143 15.4642L13.1857 14.5358ZM7.8143 12.5358L2.8143 14.5358L3.1857 15.4642L8.1857 13.4642L7.8143 12.5358ZM9.8 1.5C10.3683 1.5 10.7645 1.50039 11.0729 1.52559C11.3755 1.55031 11.5493 1.5964 11.681 1.66349L12.135 0.772484C11.8388 0.62159 11.5187 0.558684 11.1543 0.528909C10.7957 0.499611 10.3518 0.5 9.8 0.5V1.5ZM13.5 4.2C13.5 3.6482 13.5004 3.20428 13.4711 2.84569C13.4413 2.48126 13.3784 2.16117 13.2275 1.86502L12.3365 2.31901C12.4036 2.45069 12.4497 2.62454 12.4744 2.92712C12.4996 3.23554 12.5 3.6317 12.5 4.2H13.5ZM11.681 1.66349C11.9632 1.8073 12.1927 2.03677 12.3365 2.31901L13.2275 1.86502C12.9878 1.39462 12.6054 1.01217 12.135 0.772484L11.681 1.66349ZM6.2 0.5C5.6482 0.5 5.20428 0.499611 4.84569 0.528909C4.48126 0.558684 4.16117 0.62159 3.86502 0.772484L4.31901 1.66349C4.45069 1.5964 4.62454 1.55031 4.92712 1.52559C5.23554 1.50039 5.6317 1.5 6.2 1.5V0.5ZM3.5 4.2C3.5 3.6317 3.50039 3.23554 3.52559 2.92712C3.55031 2.62454 3.5964 2.45069 3.66349 2.31901L2.77248 1.86502C2.62159 2.16117 2.55868 2.48126 2.52891 2.84569C2.49961 3.20428 2.5 3.6482 2.5 4.2H3.5ZM3.86502 0.772484C3.39462 1.01217 3.01217 1.39462 2.77248 1.86502L3.66349 2.31901C3.8073 2.03677 4.03677 1.8073 4.31901 1.66349L3.86502 0.772484Z"
                fill="#7E7F81"
              />
            </svg>
          ),
          items: [
            { title: "Recents", href: "#" },
            { title: "Starred", href: "#" },
            { title: "Shared", href: "#" },
          ],
        },
        {
          title: "Plan",
          icon: (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2L10.1631 6.27934L15 6.96556L11.5 10.2966L12.3262 15L8 12.7793L3.67376 15L4.5 10.2966L1 6.96556L5.83688 6.27934L8 2Z"
                stroke="#7E7F81"
                strokeLinejoin="round"
              />
            </svg>
          ),
          href: "#",
          items: [
            { title: "Free", href: "#" },
            { title: "Pro", href: "#" },
            { title: "Enterprise", href: "#" },
          ],
        },
      ];
    return (
<Sheet>
        <SheetTrigger className="lg:hidden flex"><ChevronRight className="h-6 w-6 stroke-white" /></SheetTrigger>
  <SheetContent side="left" className="h-[85%] mt-[15%] border-y-2 border-r-2 border-[#1D1D1D]">
  <nav className="w-64 h-full overflow-auto flex flex-col p-8 gap-6 border-[#1D1D1D]">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="flex items-center justify-between">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={section.title}>
                <AccordionTrigger>
                  <div className="flex font-medium uppercase items-center text-white gap-2">
                    <span>{section.icon}</span>
                    <span>{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="border-l border-[#1D1D1D] border-[#] px-6 gap-6 flex flex-col items-start justify-between">
                    {section.items.map((item, index) => (
                      <Link
                        href="#"
                        key={index}
                        className="flex gap-[10px] items-center"
                      >
                        {item.title === "Hero" && (
                          <span>
                            <svg
                              width="6"
                              height="6"
                              viewBox="0 0 6 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="3"
                                cy="3"
                                r="3"
                                fill="url(#paint0_linear_0_164)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_0_164"
                                  x1="3"
                                  y1="0"
                                  x2="3"
                                  y2="6"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#FF7A00" />
                                  <stop offset="1" stop-color="#FF2900" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                        )}
                        <span>{item.icon}</span>
                        <p className="text-sm font-medium text-[#7E7F81]">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                  {section.showmore && (
                    <Link
                      href="#"
                      className="py-4 flex gap-[10px] items-center"
                    >
                      <p className="text-sm font-medium text-[#7E7F81]">
                        Show more +
                      </p>
                    </Link>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
    </nav>
  </SheetContent>
</Sheet>

    )
}