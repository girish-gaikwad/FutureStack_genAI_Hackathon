import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full border">
            {/* Left Side Image */}
            <div className="hidden md:flex md:w-1/2 h-64 md:h-auto p-16 relative">
                <Image
                    className="object-cover w-full h-full rounded-3xl"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
                    alt="leftSideImage"
                    width={800}
                    height={600}
                    priority
                />
                <div className="absolute bottom-8 left-8 bg-white/80 rounded-xl p-4 shadow-lg max-w-xs">
                    <p className="text-lg font-semibold text-gray-800">
                        &quot;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&quot;
                    </p>
                    <span className="block mt-2 text-sm text-gray-600"> - Malcolm X</span>
                </div>
            </div>

            {/* Right Side Form */}
            <div className="flex flex-1 items-center justify-center px-4 py-8 bg-white">
                <form className="w-full max-w-md flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl text-gray-900 font-medium">Sign in to
                        <span className="text-primary/60 ml-2">
                            {process.env.NEXT_PUBLIC_Project || "Brillance"}
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500/90 mt-3 text-center">
                        Welcome back! Please sign in to continue
                    </p>

                    <button
                        type="button"
                        className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full"
                    >
                        <Image
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                            alt="googleLogo"
                            width={96}
                            height={64}
                        />
                    </button>

                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="w-full h-px bg-gray-300/90"></div>
                        <p className="text-nowrap text-sm text-gray-500/90">or sign in with email</p>
                        <div className="w-full h-px bg-gray-300/90"></div>
                    </div>

                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mb-4">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                        </svg>
                        <input
                            type="email"
                            placeholder="Email id"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                            required
                        />
                    </div>

                    <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mb-4">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                        </svg>
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                            required
                        />
                    </div>

                    <div className="w-full flex items-center justify-between mt-2 text-gray-500/80">
                        <div className="flex items-center gap-2">
                            <input className="h-5" type="checkbox" id="checkbox" />
                            <label className="text-sm" htmlFor="checkbox">Remember me</label>
                        </div>
                        <a className="text-sm underline" href="#">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-b from-primary/60 to-primary/80 shadow-2xl hover:opacity-70 hover:cursor-pointer transition-opacity"
                        formAction="/app"
                    >
                        Login
                    </button>
                    <p className="text-gray-500/90 text-sm mt-4 text-center">
                        Don’t have an account? <a className="text-indigo-400 hover:underline" href="#">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}