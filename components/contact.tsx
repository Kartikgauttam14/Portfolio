"use client"


import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react"
import Link from "next/link"


export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }

      const response = await fetch("/Portfolio/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()

      setSubmitMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      })

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      export function Contact() {
        return (
          <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 border border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-white mb-2 flex items-center gap-2">
                    <Send className="text-purple-400" /> Contact
                  </CardTitle>
                  <p className="text-gray-300 text-lg">Feel free to reach out for collaborations or just a friendly hello 👋</p>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-6"
                    action="https://formspree.io/f/xwkgyyqg"  
                    method="POST"
                    target="_blank"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input name="firstName" placeholder="First Name" required />
                      <Input name="lastName" placeholder="Last Name" required />
                    </div>
                    <Input name="email" type="email" placeholder="Email" required />
                    <Input name="subject" placeholder="Subject" required />
                    <Textarea name="message" placeholder="Your message..." required />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                  <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5" /> kartikgauttam6@gmail.com
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      <Link href="https://github.com/Kartikgauttam14" target="_blank" rel="noopener noreferrer">
                        github.com/Kartikgauttam14
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-5 h-5" />
                      <Link href="https://linkedin.com/in/kartikgauttam14" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/kartikgauttam14
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )
      }
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
