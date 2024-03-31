import ContactForm from "../../components/ui/contact-form"
import HeadingText from "../../components/ui/heading-text"

export const metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <main className=" flex flex-col items-center pt-40 pb-8 bg-[#202124] px-6 h-[85vh]">
      <div className="flex flex-col items-center space-y-2 text-center text-[#EAE9EA] ">
        <HeadingText subtext="Arrowgan Arwana">
          Hubungi Kami
        </HeadingText>
      </div>
      <ContactForm />
    </main>
  )
}