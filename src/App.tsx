import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Star, ChevronDown, Award, Users, Clock } from 'lucide-react';

function App() {
  const [selectedWood, setSelectedWood] = useState('albasia');
  const [selectedColor, setSelectedColor] = useState('maroon');
  const [selectedAccessory, setSelectedAccessory] = useState('crown');

  const getPrice = () => {
    let basePrice = 500000;
    if (selectedWood === 'lame') basePrice += 150000;
    if (selectedAccessory === 'iket') basePrice += 50000;
    return basePrice.toLocaleString('id-ID');
  };

  const products = [
    { name: 'Arjuna', price: 'IDR 450,000', image: 'https://images.pexels.com/photos/8926515/pexels-photo-8926515.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Noble knight character' },
    { name: 'Srikandi', price: 'IDR 520,000', image: 'https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Warrior princess' },
    { name: 'Bima', price: 'IDR 480,000', image: 'https://images.pexels.com/photos/8926515/pexels-photo-8926515.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Strongest Pandawa' },
    { name: 'Gatotkaca', price: 'IDR 550,000', image: 'https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Flying warrior' },
    { name: 'Semar', price: 'IDR 380,000', image: 'https://images.pexels.com/photos/8926515/pexels-photo-8926515.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Wise clown servant' },
    { name: 'Petruk', price: 'IDR 400,000', image: 'https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Clever companion' }
  ];

  const stats = [
    { icon: Award, number: '45+', label: 'Years of Experience' },
    { icon: Users, number: '500+', label: 'Happy Customers' },
    { icon: Clock, number: '1000+', label: 'Puppets Crafted' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/8926515/pexels-photo-8926515.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-6 bg-gradient-to-b from-black/20 to-transparent">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-2xl tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sanggar Kayu Ukir
            </div>
            <div className="hidden md:flex space-x-8 text-white font-medium">
              <a href="#home" className="hover:text-amber-300 transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#story" className="hover:text-amber-300 transition-all duration-300 relative group">
                Story
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#customize" className="hover:text-amber-300 transition-all duration-300 relative group">
                Customize
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#gallery" className="hover:text-amber-300 transition-all duration-300 relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="hover:text-amber-300 transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
          <h1 className="font-serif text-white mb-8 leading-none">
            <span 
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 animate-fade-in-up"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              Sanggar
            </span>
            <span 
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-200 animate-fade-in-up animation-delay-300"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              Kayu Ukir
            </span>
          </h1>

          <p 
            className="text-white text-2xl sm:text-3xl md:text-4xl mb-12 font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-600"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            A Legacy of Culture in Your Hands
          </p>

          <div className="animate-fade-in-up animation-delay-900">
            <button 
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-5 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-amber-500 hover:border-amber-400 backdrop-blur-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the Collection
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white opacity-80" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-20 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-40 animate-float"></div>
          <div className="absolute top-1/3 right-10 w-2 h-16 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-40 animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-20 w-1 h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-30 animate-float animation-delay-500"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </div>
                <div className="text-lg text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6">
                <span className="text-amber-800 text-sm font-bold tracking-wide uppercase">
                  From Generation to Generation
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                The Story of Master Craftsman
                <span className="block text-amber-700">Pak Asep</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-800 font-medium">
                  In the heart of Tasikmalaya, West Java, where morning mist dances through bamboo groves, 
                  lives Pak Asep—a master craftsman whose weathered hands hold centuries of artistry.
                </p>
                
                <p>
                  At 67, he continues the sacred legacy passed down from his father, and his father before him. 
                  Each Wayang Golek puppet that emerges from his workshop is more than carved wood and painted cloth—
                  it's a vessel of stories, a keeper of Sundanese wisdom.
                </p>
                
                <p>
                  For decades, Pak Asep's masterpieces were known only to his village, sold at local markets 
                  to those who understood their true value. Today, through this digital gateway, 
                  his art transcends borders, carrying the soul of Indonesian culture to the world.
                </p>
              </div>

              <div className="flex items-center space-x-6 mt-8">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="font-bold text-gray-900">Master Craftsman</span>
                  <span className="block text-sm">Since 1978</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src="https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Master craftsman Pak Asep working on a Wayang Golek puppet"
                  className="relative w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"
                />
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <p className="font-bold text-gray-900">Pak Asep</p>
                  <p className="text-sm text-gray-600">Tasikmalaya, West Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customize Section */}
      <section id="customize" className="py-24 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6">
              <span className="text-amber-800 text-sm font-bold tracking-wide uppercase">
                Personalize Your Art
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Design Your Dream
              <span className="block text-amber-700">Wayang Golek</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Create a personalized masterpiece that reflects your vision. Choose from authentic materials 
              and traditional designs, each crafted with ancestral care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-amber-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Customize Your Masterpiece
              </h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-4">
                    Choose Wood Type
                  </label>
                  <select 
                    value={selectedWood}
                    onChange={(e) => setSelectedWood(e.target.value)}
                    className="w-full p-5 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all bg-white shadow-sm"
                  >
                    <option value="albasia">Albasia Wood - Traditional Choice</option>
                    <option value="lame">Lame Wood - Premium Quality (+IDR 150,000)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-4">
                    Choose Clothing Color
                  </label>
                  <select 
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full p-5 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all bg-white shadow-sm"
                  >
                    <option value="maroon">Maroon Red - Royal Elegance</option>
                    <option value="green">Bottle Green - Natural Harmony</option>
                    <option value="navy">Navy Blue - Timeless Classic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-4">
                    Choose Head Accessory
                  </label>
                  <select 
                    value={selectedAccessory}
                    onChange={(e) => setSelectedAccessory(e.target.value)}
                    className="w-full p-5 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all bg-white shadow-sm"
                  >
                    <option value="crown">Golden Crown - Majestic Authority</option>
                    <option value="iket">Sundanese Iket - Cultural Authenticity (+IDR 50,000)</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-gray-800">Estimated Price:</span>
                    <span className="text-3xl font-bold text-amber-700">IDR {getPrice()}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    *Final price may vary based on specific customizations and craftsmanship details
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-5 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Order Custom Wayang Golek
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Your Custom Design Preview</h4>
                <div className="relative group">
                  <img 
                    src="https://images.pexels.com/photos/8926515/pexels-photo-8926515.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Custom Wayang Golek Preview"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
                  <h5 className="font-bold text-gray-800 mb-4 text-lg">Your Selections:</h5>
                  <div className="text-gray-700 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Wood:</span>
                      <span className="text-amber-700 font-bold">
                        {selectedWood === 'albasia' ? 'Albasia Wood' : 'Lame Wood'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Color:</span>
                      <span className="text-amber-700 font-bold">
                        {selectedColor === 'maroon' ? 'Maroon Red' : selectedColor === 'green' ? 'Bottle Green' : 'Navy Blue'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Accessory:</span>
                      <span className="text-amber-700 font-bold">
                        {selectedAccessory === 'crown' ? 'Golden Crown' : 'Sundanese Iket'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6">
              <span className="text-amber-800 text-sm font-bold tracking-wide uppercase">
                Handcrafted Excellence
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Masterpiece
              <span className="block text-amber-700">Collection</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Each puppet represents hours of meticulous craftsmanship, carrying the essence 
              of Sundanese culture and the spirit of ancient stories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-amber-50 hover:text-amber-800 transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-amber-700">{product.price}</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Handcrafted</span>
                    <span className="text-sm text-green-600 font-medium">In Stock</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              View Complete Collection
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sanggar Kayu Ukir
              </h3>
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300 leading-relaxed">
                  <p className="font-medium text-white">Workshop Address:</p>
                  <p>Jl. Raya Sukaraja No. 123</p>
                  <p>Tasikmalaya, West Java 46196</p>
                  <p>Indonesia</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Preserving the art of traditional Wayang Golek craftsmanship for future generations, 
                one masterpiece at a time.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="bg-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-red-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400">
                Watch our craftsmen at work and discover the stories behind each creation.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-300">+62 265 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300">info@sanggarkayuukir.com</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-white mb-3">Workshop Hours</h5>
                <div className="text-gray-300 space-y-1">
                  <p>Monday - Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">IT'S</span>
                </div>
                <a href="#" className="text-amber-400 hover:text-amber-300 font-bold text-lg transition-colors">
                  IT's Day 2025 Official Website
                </a>
              </div>
              <p className="text-gray-400 text-center">
                © 2025 Sanggar Kayu Ukir. Created for the IT's Day Competition.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;