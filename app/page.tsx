import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Music, Gift } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <header className="py-6 px-4 md:px-6 lg:px-8">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">Julia d'Aulnis</h1>
          <div className="space-x-4">
            <a href="#services" className="text-purple-700 hover:text-purple-900">Services</a>
            <a href="#about" className="text-purple-700 hover:text-purple-900">About</a>
            <a href="#contact" className="text-purple-700 hover:text-purple-900">Contact</a>
          </div>
        </nav>
      </header>

      <div className="bg-purple-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 bg-purple-900">
          <section className="py-12 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Crafting Unforgettable Experiences</h2>
            <p className="text-xl text-purple-200 mb-8">Julia will get it done</p>
          </section>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        <section id="services" className="py-12 md:py-20">
          <h3 className="text-3xl font-semibold text-purple-900 mb-8 text-center">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Corporate Events", icon: Users, description: "Developing valuable and lasting experiences" },
              { title: "Wedding Planning", icon: Calendar, description: "From intimate gatherings to grand celebrations" },
              { title: "Team Building", icon: Music, description: "Creating connection and sustainable team engagement" },
              { title: "Company Celebrations", icon: Gift, description: "Tailored events for unique occasions" },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-6 h-6 mr-2 text-purple-600" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-purple-900 mb-4">About Julia</h3>
            <p className="text-lg text-purple-700 mb-6">
              Julia d'Aulnis has years of experience in developing creative events. With background in Hospitality Management she worked her way up to restaurant manager. During the Covid Pandemic, she switched to developing online experiences. Afterwards, she started her own company doing offline events: for teams, companies and private clients.
            </p>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20">
          <h3 className="text-3xl font-semibold text-purple-900 mb-8 text-center">Contact</h3>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Julia d'Aulnis Beheer</p>
        </div>
      </footer>
    </div>
  );
}