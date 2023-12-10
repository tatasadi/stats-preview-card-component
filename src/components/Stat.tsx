import { Lexend_Deca } from "next/font/google"

const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: "400" })

export default function Stat({ digit, text }: { digit: string; text: string }) {
  return (
    <div className="mb-6 lg:mr-16">
      <div className="text-2xl leading-normal font-bold">{digit}</div>
      <div
        className={`text-xs leading-[1.5625rem] uppercase text-transparent-white-60 tracking-[0.0625rem] ${lexendDeca.className}`}
      >
        {text}
      </div>
    </div>
  )
}
