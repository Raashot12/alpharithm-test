import React, {useState, useEffect} from "react"
import Link from "next/link"
import {cn} from "@/lib/utils"
import IconLogo from "./IconComponents/IconLogo"
import {useIsMobile} from "./hooks/useMobile"
import {Sheet, SheetContent, SheetTrigger} from "./ui/Sheet"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])
  const renderMobileMenu = () => {
    if (isMobile) {
      return (
        <Sheet>
          <SheetTrigger onClick={() => setMenuOpen(true)}>
            <button
              className="lg:hidden relative z-10 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div
                className={cn(
                  "w-6 h-0.5 bg-[white] transition-all",
                  menuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                )}
              ></div>
              <div
                className={cn(
                  "w-6 h-0.5 bg-[white] transition-all",
                  menuOpen ? "opacity-0" : "mb-1.5"
                )}
              ></div>
              <div
                className={cn(
                  "w-6 h-0.5 bg-[white] transition-all",
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                )}
              ></div>
            </button>
          </SheetTrigger>
          <SheetContent
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            position="right"
          >
            <div className="flex flex-col items-center space-y-8 mt-12">
              <a href="#models" className="text-xl">
                Models
              </a>
              <a href="#pricing" className="text-xl">
                Pricing
              </a>
              <a href="#about" className="text-xl">
                About Us
              </a>
              <a href="#contact" className="text-xl">
                Contact Us
              </a>
              <a href="#model" className="text-xl">
                Custom Models
              </a>
              <div className="flex flex-col w-full space-y-[12px]">
                <a
                  href="#"
                  className="btn-outline w-full flex text-center items-center justify-center py-2 px-4 text-sm rounded-[4px] border border-[#FFFFFF] sm:block animate-fade-in animation-delay-500 transition-all duration-300 hover:bg-white hover:text-[#03061D] hover:shadow-lg hover:scale-105"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="btn-primary flex w-full text-center items-center justify-center bg-white text-[#03061D] rounded-[4px] text-[14px] py-2 px-4 text-sm animate-fade-in animation-delay-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )
    }

    return null
  }
  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-5",
        scrolled
          ? "bg-navy/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container text-white mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center animate-fade-in">
            <IconLogo />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {[
            {href: "#models", label: "Models", delay: "100"},
            {href: "#pricing", label: "Pricing", delay: "200"},
            {href: "#about", label: "About Us", delay: "300"},
            {href: "#contact", label: "Contact Us", delay: "400"},
            {href: "#custom", label: "Custom Models", delay: "500"},
          ].map(({href, label, delay}) => (
            <a
              key={href}
              href={href}
              className={`relative nav-link animate-fade-in animation-delay-${delay} 
        after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:rounded-2xl after:h-[3px] after:w-0 
        after:bg-white after:transition-all after:duration-300 
        hover:after:w-full active:after:w-full`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex space-x-[12px]">
          <a
            href="#"
            className="btn-outline py-2 px-4 text-sm rounded-[4px] border border-[#FFFFFF] sm:block animate-fade-in animation-delay-500 transition-all duration-300 hover:bg-white hover:text-[#03061D] hover:shadow-lg hover:scale-105"
          >
            Login
          </a>
          <a
            href="#"
            className="btn-primary bg-white text-[#03061D] rounded-[4px] text-[14px] py-2 px-4 text-sm animate-fade-in animation-delay-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started Now
          </a>
        </div>
        {/* Mobile Menu Button and Sheet */}
        {renderMobileMenu()}
      </div>
    </header>
  )
}

export default Navbar
