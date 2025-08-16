import Link from "next/link";
import { Linkedin, Twitter, Instagram, PhoneCall } from "lucide-react";
import DefaultWubooWithHalo from "../assets/wuboos/haloDefault";
import LogoWhite from "../assets/icons/logoWhite";
import FloatingBubblesBG from "../common/floatingBubbles";
import Logo from "../assets/icons/logo";

export default function Footer() {
  return (
    <footer className="relative text-black py-10 px-20">
      <FloatingBubblesBG />
      <div className="flex flex-row justify-between items-center gap-10">
        {/* Left section */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex flex-col items-start">
            {/* Mascot */}
            <div className="w-28 h-28">
              <DefaultWubooWithHalo className="w-full h-full" />
            </div>
            {/* LogoWhite */}
            <Logo className="mt-2 w-40 h-fit" />
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin size={20} className="text-black" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={20} className="text-black" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram size={20} className="text-black" />
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col sm:flex-row gap-12">
          <div>
            <h2 className="text-base opacity-70 font-inter">Company</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="text-sm font-inter">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-inter">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-inter">
                  Blogs & News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base opacity-70 font-inter">Legal</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="text-sm font-inter">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-inter">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-inter">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-inter">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
