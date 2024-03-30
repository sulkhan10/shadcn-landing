"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl  px-4 mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}  >
        <Link href="/">
          <Image
            alt="logo"
            src="/logo.jpeg"
            width={50}
            height={50}
            className="w-12 h-auto"
          />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About</HoveredLink>
            <HoveredLink href="/service">Service</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Toko Online">
          <div className="w-[70vw] max-w-[90vw]  text-sm md:grid lg:grid-cols-2 gap-10 p-4 ">
            <ProductItem
              title="Tiktok Shop"
              href="https://www.tiktok.com/@arowgan_?_t=8l61JCbXhDk&_r=1"
              src="/tiktokPage.png"
              description="Tiktok Shop Arrowgan Arwana. Nikmati promo menarik setiap bulan di Tiktok Shop kami"
            />
            <ProductItem
              title="Shopee"
              href="https://shopee.co.id/arowgan_?uls_trackid=4vde990b00lc&utm_content=FnWRtFthgA4qwwfgiagxjdeFYaj"
              src="/shopeePage.jpeg"
              description="Shopee Arrowgan Arwana. Nikmati Gratis Ongkir di Shopee kami"
            />
            <ProductItem
              title="Tokopedia"
              href="https://shopee.co.id/arowgan_?uls_trackid=4vde990b00lc&utm_content=FnWRtFthgA4qwwfgiagxjdeFYaj"
              src="/logo.jpeg"
              description="Tokopedia Arrowgan Arwana. Nikmati berbagai promo menarik di Tokopedia kami"
            />
            {/* <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              /> */}
          </div>
        </MenuItem>
        <Link className="text-xs md:text-lg" href="/contact">Kontak</Link>
      </Menu>
    </div>
  );
}
