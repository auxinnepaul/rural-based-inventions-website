import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constants";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import ScrollProgress from "@/components/magic-ui/scroll-progress";
import BackToTop from "@/components/back-to-top";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "green", "rose", "violet", "orange"]}
        >
          <ScrollProgress className="bottom-[65px]" />
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <BackToTop />
          <div className="block">
            <Footer />
          </div>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
