import ContactForm from "../../components/ui/contact-form"
import HeadingText from "../../components/ui/heading-text"

export const metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <main className=" flex flex-col items-center pt-40 pb-8 bg-black px-6 h-[85vh]">
      <div className="flex flex-col items-center space-y-2 text-center  ">
        <HeadingText subtext="Send a message through email">
          Contact
        </HeadingText>
      </div>
      <ContactForm />
    </main>
  )
}