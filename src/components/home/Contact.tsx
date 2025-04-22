import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about the reunion? Want to help organize? Reach out to the reunion committee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-6">Send us a Message</h3>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Reunion Question"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info and FAQ */}
          <div>
            <div className="bg-indigo-900 text-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-amber-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="opacity-80">reunion2025@krongana.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-amber-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="opacity-80">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 mr-4 text-amber-400" />
                  <div>
                    <p className="font-medium">Social Media</p>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Facebook</a>
                      <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">How much does registration cost?</h4>
                  <p className="text-gray-600">The early bird registration fee is $75 until March 1st, 2025. After that, the regular registration fee is $95.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">Is there a dress code for the events?</h4>
                  <p className="text-gray-600">The welcome reception and campus tour are casual. The gala dinner is formal attire. The family picnic is casual/sporty.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">Can I bring my spouse/partner?</h4>
                  <p className="text-gray-600">Yes! Spouses and partners are welcome at all events. There is an additional fee of $50 for non-alumni guests.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-indigo-700 mb-2">How can I help with the reunion?</h4>
                  <p className="text-gray-600">We welcome volunteers! Please use the contact form to let us know you're interested in helping out.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;