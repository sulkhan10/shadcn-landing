import Link from "next/link"
export const navLinks = [
    {
      route: "Home",
      path: "/",
    },
    {
      route: "Features",
      path: "/#features",
    },
    {
      route: "Contact",
      path: "/contact",
    },
    // {
    //   route: "Github",
    //   path: "https://github.com/redpangilinan/next-shadcn-landing",
    // },
  ]
export default function Footer() {
  return (
    <footer className="mt-auto bg-black text-white min-h-[15vh]">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8 bg-black">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className="mb-2 text-2xl font-bold sm:mb-0">
              Arrowgan Arwana Magelang
            </h1>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-primary opacity-60 sm:mb-0">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.path} className="mr-4 hover:underline md:mr-6 text-white">
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8 " />
        <span className="block text-sm text-muted-foreground sm:text-center ">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://redpangilinan.live/"
            className="hover:underline mr-4"
          >
            ukmgodigital.com . All Rights Reserved.
          </a>
          <a
            target="_blank"
            href="https://ukmgodigital.com/"
            className="hover:underline"
          >
            Bikin Usahamu Go-Digital di ukmgodigital.com
          </a>
        </span>
      </div>
    </footer>
  )
}