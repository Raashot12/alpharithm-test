import {useState} from "react"
import {categories} from "./constants"
import EmblaCarousel from "./shared/EmblaCarousel"
import localFont from "next/font/local"

const plusJakartaSans = localFont({
  src: "../fonts/PlusJakartaSans-VariableFont_wght.ttf",
  weight: "400",
  style: "normal",
})
export default function BusinessAISection() {
  const [activeTab, setActiveTab] = useState("Market Prediction")
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <section className="bg-white relative">
      <section className="flex flex-col items-center justify-center text-center px-6 py-12">
        <h2 className="text-4xl lg:text-[50px] max-w-[644px] w-[100%]  font-semibold text-[#22263F]">
          AI Models tailored for your business needs
        </h2>
        <p
          className={`mt-3 text-[#828282] ${plusJakartaSans.className} text-[18px] lg:text-[22px] max-w-[860px] w-[100%] lg:leading-[38px]`}
        >
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs.
        </p>

        <div className="mt-8 w-full max-w-[851px] md:flex justify-center mx-auto overflow-x-auto sm:scrollbar-hidden">
          <div className="flex w-fit gap-4 border border-[#E4E4E7] px-1 py-1 rounded-[12px] flex-nowrap">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => {
                  setSelectedTabIndex(index)
                  setActiveTab(category.name)
                }}
                className={`px-4 py-2 rounded-[8px] text-[16px] font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  activeTab === category.name
                    ? "bg-[#03217F] text-white shadow-md"
                    : "text-[#A7A7A7] hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-11">
          <EmblaCarousel selectedTabIndex={selectedTabIndex} />
        </div>
      </section>
    </section>
  )
}
