"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import { HeroParallax } from "../components/ui/hero-parallax";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
// import {Footer} from "../components/ui/footer"; 
import Image from "next/image";
import Link from "next/link";

export default function HeroParallaxDemo() {
  return( 
  <>
  {/* <NavbarDemo /> */}
  <HeroParallax  products={products} />
  <InfiniteMovingCardsDemo />
  {/* <Footer /> */}
  </>
  );
}
 const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://images.unsplash.com/photo-1637806486870-308bbc1471b6?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://images.unsplash.com/photo-1659242549433-d7c825aa9fe2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://images.unsplash.com/photo-1674575201777-fc83796d91b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://images.unsplash.com/photo-1684127946837-9bca0bcf138e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://images.unsplash.com/photo-1660749396166-75025432eab5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://images.unsplash.com/photo-1637806701562-3b67d4c9fa28?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://images.pexels.com/photos/8985043/pexels-photo-8985043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://images.pexels.com/photos/8807482/pexels-photo-8807482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
   {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://images.unsplash.com/photo-1660749396166-75025432eab5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://images.unsplash.com/photo-1637806701562-3b67d4c9fa28?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://images.pexels.com/photos/8985043/pexels-photo-8985043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://images.pexels.com/photos/8807482/pexels-photo-8807482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
 
];



 



 function InfiniteMovingCardsDemo() {
  return (
    <div className=" py-8 md:py-14 flex flex-col antialiased bg-[#202124] dark:bg-[#202124] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Saya terpesona dengan kualitas Arowana yang saya dapatkan dari Arrowgan Arowana. Ikan-ikan mereka benar-benar menakjubkan, dan mereka telah mengubah akuarium saya menjadi sebuah karya masterpiece!",
    name: "Koko Bernard",
    // title: "A Tale of Two Cities",
  },
  {
    quote:
      "Terima kasih, Arrowgan Arowana, atas menyediakan saya dengan Arowana yang begitu indah. Ini bukan hanya seekor ikan; ini adalah simbol prestise di rumah saya.",
    name: "Sakti S.",
    // title: "Hamlet",
  },
  {
    quote: "Arrowgan Arowana melebihi ekspektasi saya. Layanan pelanggan mereka luar biasa, dan mereka membantu saya menemukan Arowana yang sempurna untuk setup saya.",
    name: "Wirawan",
    // title: "A Dream Within a Dream",
  },
  {
    quote:
      "Saya telah mencari penjual Arowana yang terpercaya selama berbulan-bulan, dan saya sangat senang menemukan Arrowgan Arowana. Ikan-ikan mereka luar biasa, dan harga-harganya masuk akal.",
    name: "Bapak Zul",
    // title: "Pride and Prejudice",
  },
  {
    quote:
      "Saya sangat merekomendasikan Arrowgan Arowana kepada siapa pun yang mencari Arowana. Kualitas ikan mereka tidak tertandingi, dan layanan pelanggan mereka luar biasa.",
    name: "Mas Fajar",
    // title: "Moby-Dick",
  },
  {
    quote:
      "Saya sangat berterima kasih kepada Arrowgan Arowana karena telah membantu saya menemukan Arowana yang sempurna untuk rumah saya. Keahlian dan profesionalisme mereka sungguh patut diacungi jempol.",
    name: "Pak Michael",
    // title: "Moby-Dick",
  },
];
