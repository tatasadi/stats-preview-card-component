import Image from "next/image"
import Stat from "./Stat"

export default function StatsPreviewCard() {
  return (
    <div className="bg-dark-desaturated-blue w-[20.4375rem] rounded-lg grid grid-cols-1 lg:grid-cols-2 lg:w-[65rem]">
      <div className="bg-[url('/images/image-header-mobile.jpg')] lg:bg-[url('/images/image-header-desktop.jpg')] bg-no-repeat bg-contain h-60 bg-soft-violet bg-blend-multiply opacity-[0.7511] rounded-t-lg lg:h-full lg:bg-cover lg:rounded-t-none lg:!rounded-r-lg lg:col-start-2"></div>
      <div className="p-8 text-center lg:p-16 lg:col-start-1 lg:row-start-1 lg:text-left">
        <h1 className="font-bold text-[1.75rem] leading-8 lg:text-4xl lg:leading-[2.75rem]">
          Get <span className="text-soft-violet">insights</span> that help your
          business grow.
        </h1>
        <p className="mt-4 mb-10 text-[0.9375rem] leading-[1.5625rem] text-transparent-white-75">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="flex flex-col lg:flex-row">
          <Stat digit="10k+" text="companies" />
          <Stat digit="314" text="templates" />
          <Stat digit="12M+" text="queries" />
        </div>
      </div>
    </div>
  )
}
