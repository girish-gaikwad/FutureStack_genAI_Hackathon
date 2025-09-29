import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`w-full h-12 sm:h-14 md:h-16 lg:h-[84px] left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0 ${isSticky ? 'fixed transition-all' : 'absolute'
                }`}
        >
            {/* Navigation */}
            <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

            <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="flex justify-start items-center">
                        <div className="flex items-center justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                            <Image src="/logo.png" alt="Logo" width={30} height={30} className="mr-2" />
                            {process.env.NEXT_PUBLIC_Project || "Brillance"}
                        </div>
                    </div>

                    <div className="  pl-3 sm:pl-4 md:pl-5 lg:pl-5 justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                        <Link href="#syllabus" className="flex justify-start items-center">
                            <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                                Syllabus
                            </div>
                        </Link>
                        <Link href="#features" className="flex justify-start items-center">
                            <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                                Features
                            </div>
                        </Link>
                        <Link href="#pricing" className="flex justify-start items-center">
                            <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                                Pricing
                            </div>
                        </Link>
                        <Link href="#faqs" className="flex justify-start items-center">
                            <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                                Faqs
                            </div>
                        </Link>
                    </div>

                    <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                        <Link href="/login" className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
                            <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                                Log in
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
