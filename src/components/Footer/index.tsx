import LinkButton from "../Link";

export default function Footer(){
    return(
        <footer className="bg-[#060606]">
            <div className="flex items-center justify-center py-[64px] px-5 gap-7 text-[#F0F0F0] flex-wrap">
                <div className="max-w-[600px] sm:text-start text-center">
                    <h2 className="text-gradient sm:text-[32px] text-[24px] font-bold mb-3">Chega de tentar sozinho</h2>
                    <p className="sm:text-[16px] text-[14px] text-center sm:text-start max-w-[500px]">Com o TegPro, você tem método, apoio e resultado real. <strong>Essa é sua chance de vender de verdade.</strong></p>
                </div>
                <div>
                    <LinkButton text="Quero transformar meu negócio" shadow></LinkButton>
                </div>
            </div>
        </footer>
    )
}