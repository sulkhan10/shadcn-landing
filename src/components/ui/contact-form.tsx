"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// import { contactConfig } from "@/config/site"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  // subject: z.string().min(1, {
  //   message: "Subject is required",
  // }),
  msg: z.string().min(1, {
    message: "Silakan isi pesan anda",
  }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // subject: "",
      msg: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // window.location.href = `mailto:sulkhangalangsakti@getMaxListeners.com?subject=${values.subject}&body=${values.msg}`
    // window.location.href = `https://wa.me/${6285858999264}?text=${values.msg}`

     // Define the URL
     const url = `https://wa.me/${6285858999264}?text=${values.msg}`;
    
     // Open the URL in a new tab
     window.open(url, '_blank');
     
     // Reset the form
     form.reset();
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 py-8 sm:w-[24rem] text-[#eae9ea]"
      >
        {/* <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter the subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="msg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan</FormLabel>
              <FormControl>
                <Textarea placeholder="Silakan isi pertanyaan atau saran kepada kami" {...field} />
              </FormControl>
              <FormDescription>
                Pesan anda akan langsung terkirim ke WhatsApp kami
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div />
        <Button className="w-full" type="submit">
          Kirim
        </Button>
      </form>
    </Form>
  )
}