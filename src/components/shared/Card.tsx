import localFont from "next/font/local"
import Image, {StaticImageData} from "next/image"
import React from "react"

const inter = localFont({
  src: "../../fonts/Inter-VariableFont_opsz,wght.ttf",
  weight: "400",
  style: "normal",
})
const Card = ({
  title,
  content,
  image,
}: {
  title: string
  content: string
  image: StaticImageData
}) => {
  return (
    <div className="bg-[#F6FAF3] flex items-center pt-6 flex-wrap lg:flex-nowrap gap-[30px]  justify-between sm:justify-start relative rounded-[11.7px] lg:w-[1042.17px] md:h-[523.52px]">
      <div className="text-left pl-6 sm:pl-[40px]">
        <p
          className={`text-[19.5px] text-[#828282] font-semibold ${inter.className}`}
        >
          {title}
        </p>
        <div className="text-[25.9px] lg:text-[42.9px] my-3 font-[400px] leading-[auto] w-[100%] md:max-w-[450.11px]">
          {content}
        </div>
        <button
          className={`px-6 py-2 cursor-pointer rounded-[8px] text-[16px] font-semibold whitespace-nowrap transition-all flex-shrink-0 bg-[#03217F] text-white shadow-md`}
        >
          Learn More
        </button>
      </div>
      <Image
        src={image?.src}
        width={520.6}
        height={503.77}
        alt=""
        className="lg:absolute right-0 bottom-0 h-auto md:h-[503.77px] w-full md:w-[520.6px]"
        style={{borderBottomRightRadius: "11.7px"}}
      />
    </div>
  )
}

export default Card
