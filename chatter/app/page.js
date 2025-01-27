import Image from "next/image"; 
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to Chatter</h1>
          <p className="text-md mb-6">Your AI-powered chatbot for seamless conversations.</p>
          <Link href="/chat" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Start Chatting</Link>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl text-black font-bold mb-2">Basic</h3>
            <p className="text-gray-600 mb-4">Free forever</p>
            <p className="text-4xl text-black font-bold mb-4">$0/month</p>
            <ul className="text-gray-600 mb-6">
              <li>✔️ Limited conversations</li>
              <li>✔️ Basic AI responses</li>
            </ul>
            <Link href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700">Get Started</Link>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-blue-600">
            <h3 className="text-2xl text-black font-bold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">For individuals</p>
            <p className="text-4xl text-black font-bold mb-4">$9.99/month</p>
            <ul className="text-gray-600 mb-6">
              <li>✔️ Unlimited conversations</li>
              <li>✔️ Advanced AI responses</li>
              <li>✔️ Priority support</li>
            </ul>
            <Link href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700">Upgrade</Link>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl text-black font-bold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-4">For businesses</p>
            <p className="text-4xl text-black font-bold mb-4">$29.99/month</p>
            <ul className="text-gray-600 mb-6">
              <li>✔️ Custom AI models</li>
              <li>✔️ API access</li>
              <li>✔️ Dedicated support</li>
            </ul>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

 
export const metadata = {
  title: 'Home - chatter',
  description: 'chatter is a Next.js app with Clerk authentication.',
}