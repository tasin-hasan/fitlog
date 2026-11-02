import React from "react";

const Loading = () => {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-5">
      <span className="loading loading-spinner loading-lg text-[#c2f700]"></span>

      <p className="text-[#c2f700] text-sm font-semibold tracking-widest">
        LOADING ...
      </p>
    </main>
  );
};

export default Loading;
