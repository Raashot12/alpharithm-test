import "@/styles/globals.css"
import type { AppProps } from "next/app"
// Supports weights 300-900
import "@fontsource-variable/figtree"
import {ReactElement, ReactNode, useState} from "react"
import {NextPage} from "next"
import SplashScreen from "@/components/ui/SplashScreen"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function Main({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  const renderComponent = <>{getLayout(<Component {...pageProps} />)}</>

  return <div>{renderComponent}</div>
}
export default function App({Component, pageProps}: AppProps) {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        <Main Component={Component} {...pageProps} />
      )}
    </>
  )
}
