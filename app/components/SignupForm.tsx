export default function SignupForm() {
  return (
    <div className="flex-1 flex items-center justify-start p-6 bg-[#f2e9e9]">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        {/* صورة اللوقو */}
        <div className="mb-2">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="images/logo.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-[38px] font-bold text-[#2A2A2A] mb-8 tracking-tight">
          sign up
        </h1>

        <div className="w-full space-y-4">
          <div className="space-y-1">
            <label className="text-[11px] text-gray-400 font-bold ml-4 ">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </span>
              <input
                readOnly
                placeholder="johnsmith"
                className="w-full bg-[#fcfcfc] py-[14px] pl-14 rounded-2xl border-none text-sm text-gray-600 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-gray-400 font-bold ml-4 ">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                readOnly
                placeholder="johnsmith@example.com"
                className="w-full bg-[#fcfcfc] py-[14px] pl-14 rounded-2xl border-none text-sm text-gray-600 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-gray-400 font-bold ml-4">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </span>
              <input
                readOnly
                type="password"
                placeholder="Password"
                className="w-full bg-[#fcfcfc] py-[14px] pl-14 pr-12 rounded-2xl border-none text-sm shadow-sm"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
                </svg>
              </span>
            </div>
          </div>

          <button
            className="w-full bg-[#5853D6] text-white font-bold rounded-[2rem] mt-4 shadow-lg shadow-indigo-200 active:scale-[0.98] transition-transform"
            style={{
              width: "100%",
              maxWidth: "394px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Continue
          </button>

          <div
            className="flex items-center justify-center my-[23px] w-full"
            style={{ maxWidth: "399px", height: "26px" }}
          >
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="px-4 text-400 text-sm">Or</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border border-[#F178B6] bg-white py-3 text-[10px] font-bold text-gray-600 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="G"
              />
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            <button className="flex items-center justify-center gap-2 border border-[#F178B6] bg-white py-3 text-[10px] font-bold text-gray-600 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="w-5 h-5"
                alt="F"
              />
              <span className="text-sm font-medium text-gray-700">
                Continue with Facebook
              </span>
            </button>
          </div>

          <p className="text-center text-[10px] text-gray-400 mt-6">
            Already have an account?{" "}
            <span className="text-blue-600 font-bold underline cursor-pointer">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
