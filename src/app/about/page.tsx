"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function About() {
  return (
    <TracingBeam className="px-6 pt-20">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative ">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-[#58595e] text-[#eae9ea] rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl text-[#EAE9EA] mb-4">{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert text-[#EAE9EA]">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover h-64 w-auto"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Berbagai Macam Ukuran",
    description: (
      <>
        <p>
        Kami menawarkan berbagai macam ukuran Arwana , mulai dari yang kecil hingga yang besar.
        </p>
        <p>
        Apakah Anda mencari ikan kecil yang lucu untuk memulai kolam Anda atau mencari Arwana  yang besar dan mengesankan, kami memiliki semuanya di sini.
        </p>
      </>
    ),
    badge: "Arwana Silver",
    image: "/arrowganImage8.jpeg",
  },
  {
    title: "Kunjungi toko kami",
    description: (
      <>
        <p>
        Jadi, jika Anda mencari Arwana  berkualitas dengan berbagai macam ukuran untuk melengkapi kolam Anda, tidak perlu mencari lebih jauh. Kunjungi toko kami sekarang dan temukan Arwana  impian Anda di sini!
        </p>
      </>
    ),
    badge: "Berkualitas",
    image: "/arrowganImage7.jpeg",
  },
  {
    title: "Jaminan Kepuasan Pelanggan",
    description: (
      <>
        <p>
        Kami mengutamakan kepuasan pelanggan di setiap langkahnya. Jika Anda tidak sepenuhnya puas dengan produk yang Anda terima, kami akan dengan senang hati mengembalikan uang Anda. Ini adalah komitmen kami untuk memastikan bahwa setiap pembelian di Arwana  merupakan pengalaman yang positif dan tanpa risiko bagi Anda.
        </p>
      </>
    ),
    badge: "Arwana Super Red",
    image: "/arrowganImage6.jpeg",
  },
  {
    title: "Pembelian Aman dan Terjamin",
    description: (
      <>
        <p>
        Dengan membeli melalui Tokopedia, TikTokShop, dan Shopee, Anda dapat yakin bahwa pembelian Anda aman dan terjamin. Platform-platform ini menyediakan sistem pembayaran yang aman dan proteksi pembeli, sehingga Anda dapat berbelanja dengan percaya diri.
        </p>
      </>
    ),
    badge: "Aman",
    image: "/arrowganImage5.jpeg",
  },
  {
    title: "Mendapatkan Garansi",
    description: (
      <>
        <p>
        tidak perlu ragu lagi untuk mempercayakan pembelian Anda kepada kami di Arwana . Dengan garansi uang kembali ini, Anda dapat berbelanja dengan keyakinan penuh bahwa kepuasan Anda adalah prioritas utama kami.        </p>
      </>
    ),
    badge: "Garansi",
    image: "/arrowganImage4.jpeg",
  },
  {
    title: "Tanpa Minimal Order",
    description: (
      <>
        <p>
        Melayani semua jenis pelanggan, mulai dari partai besar hingga partai kecil. Apapun kebutuhan Anda, kami siap membantu Anda menemukan Arwana  yang sempurna untuk melengkapi kolam Anda.
        </p>
      </>
    ),
    badge: "Tanpa Minimal Order",
    image: "/arrowganImage3.jpeg",
  },
  {
    title: "Kemudahan Berbelanja Online",
    description: (
      <>
        <p>
        Untuk kenyamanan Anda, kami melayani pembelian melalui berbagai platform online terkemuka seperti Tokopedia, TikTokShop, dan Shopee. Anda dapat dengan mudah menelusuri koleksi kami, memilih ukuran yang sesuai, dan melakukan pembelian dengan cepat dan aman dari kenyamanan rumah Anda.
        </p>
      </>
    ),
    badge: "Pembelian via Online",
    image: "/arrowganImage2.jpeg",
  },
  {
    title: "Pengiriman Fleksibel",
    description: (
      <>
        <p>
        Kami juga menawarkan berbagai opsi pengiriman, baik melalui ekspedisi maupun pengambilan langsung di toko kami. Apakah Anda membutuhkan pengiriman ke seluruh Indonesia atau ingin mengambil pesanan Anda secara langsung, kami siap membantu Anda menyesuaikan pengiriman sesuai dengan preferensi Anda.
        </p>
      </>
    ),
    badge: "Pengiriman",
    image: "/arrowganImage1.jpeg",
  },
];
