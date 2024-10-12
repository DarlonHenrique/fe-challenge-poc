import type { Metadata } from "next"
import localFont from "next/font/local"
import "../globals.css"
import { Icons } from "@/components/icons"
import { Providers } from "@/providers"
import { Languages } from "@/components/languages"

const nexaText = localFont({
  src: [
    {
      path: "../fonts/NexaTextThin.woff2",
      weight: "50",
      style: "normal"
    },
    {
      path: "../fonts/NexaTextExtraLight.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path: "../fonts/NexaTextLight.woff2",
      weight: "200",
      style: "normal"
    },
    {
      path: "../fonts/NexaTextBook.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../fonts/NexaTextRegular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/NexaTextExtraBold.woff2",
      weight: "800",
      style: "normal"
    },
    {
      path: "../fonts/NexaTextHeavy.woff2",
      weight: "900",
      style: "normal"
    },
    {
      path: "../fonts/NexaTextBlack.woff2",
      weight: "950",
      style: "normal"
    }
  ],
  variable: "--font-nexa-text"
})

export const metadata: Metadata = {
  title: {
    template: "%s | TRACTIAN",
    default:
      "AI-Assisted Condition Monitoring and Asset Performance Management | TRACTIAN"
  },
  description:
    "Meet the most comprehensive system on the market and avoid failures, reduce costs, and increase your industry's productivity! Condition monitoring sensors, predictive maintenance software, and asset management."
}

type LayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const Layout = ({ children, params: { locale } }: LayoutProps) => (
  <html lang={locale}>
    <body
      className={`${nexaText.variable} font-sans h-[100dvh] flex flex-grow flex-col w-full`}
    >
      <Providers locale={locale}>
        <header className="w-full bg-accent py-4 flex items-center justify-between px-6">
          <Icons.Logo className="text-background" />
          <Languages />
        </header>
        {children}
      </Providers>
    </body>
  </html>
)

export const generateStaticParams = () => {
  return ["en", "br"]
}

export default Layout
