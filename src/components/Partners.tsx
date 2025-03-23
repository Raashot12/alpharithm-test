import localFont from "next/font/local";
import CatalogLogo from "./IconComponents/CatalogLogo";
import IconCircooles from "./IconComponents/IconCircooles";
import LayerLogo from "./IconComponents/LayerLogo";
import Quotient from "./IconComponents/Quotient";
import SisyphusLogo from "./IconComponents/SisyphusLogo";
import { InfiniteMovingCards } from "./ui/InfiniteMoving";

const plusJakartaSans = localFont({
  src: "../fonts/PlusJakartaSans-VariableFont_wght.ttf",
  weight: "400",
  style: "normal",
})
export default function CompanyLogos() {
  const companies = [
    {name: "Layers", logo: <LayerLogo />},
    {name: "Sisyphus", logo: <SisyphusLogo />},
    {name: "Circooles", logo: <IconCircooles />},
    {name: "Catalog", logo: <CatalogLogo />},
    {name: "Quotient", logo: <Quotient />},
  ]

  return (
    <section className="py-10 relative bg-white">
      <p
        className={`text-center ${plusJakartaSans.className} text-[#667085] text-[16px] mb-[32px]`}
      >
        Join 4,000+ companies already growing
      </p>
      <div className="container mx-auto">
        <InfiniteMovingCards items={companies} speed="fast" />
      </div>
    </section>
  )
}
