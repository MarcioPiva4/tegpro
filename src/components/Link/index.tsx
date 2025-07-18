"use client";

export default function LinkButton({ text, shadow, full }: { text: string; shadow?: boolean; full?: boolean }) {
  return (
    <button
      onClick={() => {
        history.pushState(null, "", "#form");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }}
      aria-label="Link para abrir o formulario"
      className={`${full && 'sm:w-[350px] w-full'} text-black font-bold px-4 py-2 rounded-lg border border-[var(--primary)] uppercase sm:text-[14px] text-[12px] whitespace-nowrap cursor-pointer transition-all hover:text-white shadow-button-hover ${shadow && 'shadow-button'} z-[1] relative`}
      style={{ background: "var(--gradient)" }}>
      {text}
    </button>
  );
}
