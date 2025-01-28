import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { APP_NAME, EMAIL, PHONE_NUMBER } from "@/lib/constants";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import ThemeToggleSlider from "./theme-toggle-slider";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyan-950 dark:bg-zinc-900 text-white relative border-t bg-background text-foreground transition-colors duration-300 mt-6 md:mt-16">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/"
                className="block transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block transition-colors hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/our-work"
                className="block transition-colors hover:text-primary"
              >
                Our Work
              </Link>
              <Link
                href="/projects"
                className="block transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="/get-involved"
                className="block transition-colors hover:text-primary"
              >
                Get Involved
              </Link>
              <Link
                href="/contact"
                className="block transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Busia County, Kenya</p>
              <p>Budalangi Road</p>
              <p>Phone: {PHONE_NUMBER}</p>
              <p>Email: {EMAIL}</p>
            </address>
            <div className="my-6">
              <Link
                href="/donate"
                className=" py-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg px-5 text-center mr-2 my-10"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="space-y-4">
              <SocialMediaLinks />
              <ThemeToggleSlider />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p>
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
