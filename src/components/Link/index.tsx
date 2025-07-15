export default function LinkButton({ text }: {text: string}){
    return <a href="#" className="text-black font-bold px-4 py-2 rounded-lg border border-[var(--primary)] uppercase sm:text-[16px] text-[12px] whitespace-nowrap" style={{ background: 'var(--gradient)' }}>{text}</a>
}