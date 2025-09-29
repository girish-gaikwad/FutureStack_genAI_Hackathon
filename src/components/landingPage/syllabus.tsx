import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { Book } from 'lucide-react'

function SyllabusSection() {

    const supportedBoards = [
        { name: "ICSE", logo: "/boards/ise.png" },
        { name: "CBSE", logo: "/boards/cbse.png" },
        { name: "Cambridge", logo: "/boards/cambrige.png" },
        { name: "TN SB", logo: "/boards/tnsb.png" },
    ]
    return (
        <>
            {/* Social Proof Section */}
            <section id='syllabus' className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                    <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                        <Badge className="px-2 py-1 sm:px-3 sm:py-1.5 bg-[rgba(112,108,105,0.12)] text-[rgba(49,45,43,0.80)] text-xs sm:text-sm font-medium leading-4 sm:leading-5 font-sans rounded-full flex justify-center items-center gap-2">
                            <Book className="w-3 h-3 sm:w-4 sm:h-4 text-[rgba(49,45,43,0.80)]" />
                            Syllabus Aligned
                        </Badge>
                        <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                            Supported Boards
                        </div>
                        <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                            we Support various boards and educational institution&anops;s syllabus. <br className="hidden sm:block" />
                            Here are some of the boards we support:
                        </div>
                    </div>
                </div>

                {/* Logo Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                    <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                        {/* Left decorative pattern */}
                        <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                        {/* Logo Grid - Responsive grid */}
                        {supportedBoards.map((board, index) => {
                            const isMobileFirstColumn = index % 2 === 0
                            const isMobileLastColumn = index % 2 === 1
                            const isDesktopFirstColumn = index % 4 === 0
                            const isDesktopLastColumn = index % 4 === 3
                            const isMobileBottomRow = index >= 6
                            const isDesktopTopRow = index < 4
                            const isDesktopBottomRow = index >= 4

                            return (
                                <div
                                    key={index}
                                    className={`
                            h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex justify-center items-center gap-1 xs:gap-2 sm:gap-3
                            border-b border-[rgba(227,226,225,0.5)]
                            ${index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= 6 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
                            sm:border-r-[0.5px] sm:border-l-0
                            ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}
                            border-[#E3E2E1]
                          `}
                                >
                                    <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-20 lg:h-20 relative shadow-[0px_-4px_8px_rgba(255,255,255,0.64)_inset] overflow-hidden rounded-full">
                                        <Image src={board.logo} alt={board.name} className="w-full h-full object-contain" width={960} height={695.55} />
                                    </div>
                                    <div className="text-center flex justify-center flex-col text-[#37322F] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight md:leading-9 font-sans">
                                        {board.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                        {/* Right decorative pattern */}
                        <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SyllabusSection
