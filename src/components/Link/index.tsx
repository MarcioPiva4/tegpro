"use client";

export default function LinkButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => {
        history.pushState(null, "", "#form");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }}
      className="text-black font-bold px-4 py-2 rounded-lg border border-[var(--primary)] uppercase sm:text-[14px] text-[12px] whitespace-nowrap cursor-pointer"
      style={{ background: "var(--gradient)" }}>
      {text}
    </button>
  );
}
