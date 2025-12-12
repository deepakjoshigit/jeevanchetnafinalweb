import React from 'react';
import { ArrowRight, Users, BookOpen, HeartPulse } from 'lucide-react';
import RazorpayButton from '../components/RazorpayButton';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Children smiling" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-jcf-orange/20 text-jcf-orange text-sm font-semibold border border-jcf-orange mb-6">
            Registered Non-Profit Organization
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Lives, <br/>
            <span className="text-jcf-green">Igniting Hope.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join Jeevan Chetna Foundation in our mission to provide education, healthcare, and nourishment to those in need across Uttarakhand and India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RazorpayButton 
              className="bg-jcf-green hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl transform hover:-translate-y-1"
              label="Donate Now"
            />
            <Link 
              to="/about"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-jcf-blue">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">15,000+</h3>
              <p className="text-slate-600 font-medium">Lives Impacted</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-jcf-green">
                <BookOpen size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">50+</h3>
              <p className="text-slate-600 font-medium">Schools Supported</p>
            </div>
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-jcf-orange">
                <HeartPulse size={32} />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">100+</h3>
              <p className="text-slate-600 font-medium">Medical Camps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns / Work */}
      <section id="work" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Key Initiatives</h2>
            <div className="w-24 h-1 bg-jcf-green mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We focus on sustainable development goals to create lasting change in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Education" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-jcf-blue uppercase tracking-wider">Education</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Shiksha: Education for All</h3>
                <p className="text-slate-600 mb-4 text-sm line-clamp-3">
                  Providing scholarships, books, and digital learning tools to underprivileged children in rural Uttarakhand.
                </p>
                <Link to="/donate" className="inline-flex items-center text-jcf-green font-semibold hover:underline">
                  Support this Cause <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Health" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-jcf-orange uppercase tracking-wider">Health</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Mobile Health Camps</h3>
                <p className="text-slate-600 mb-4 text-sm line-clamp-3">
                  Organizing free medical checkups, eye screenings, and medicine distribution in remote villages.
                </p>
                <Link to="/donate" className="inline-flex items-center text-jcf-green font-semibold hover:underline">
                  Support this Cause <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605218427368-35b809796e78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hunger" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Nutrition</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Zero Hunger Initiative</h3>
                <p className="text-slate-600 mb-4 text-sm line-clamp-3">
                  Implementing mid-day meal support and food drives for homeless and needy families.
                </p>
                <Link to="/donate" className="inline-flex items-center text-jcf-green font-semibold hover:underline">
                  Support this Cause <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Updates / Gallery Slider Placeholder */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Latest Updates</h2>
              <div className="w-16 h-1 bg-jcf-blue mt-2 rounded-full"></div>
            </div>
            <a href="#" className="hidden md:block text-jcf-blue font-medium hover:underline">View All Updates</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="relative group overflow-hidden rounded-xl h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  alt="Event" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="text-xs text-white bg-jcf-green px-2 py-1 rounded mb-2 inline-block">March 12, 2025</span>
                  <h3 className="text-white font-bold text-xl">Women's Day Celebration in Haldwani</h3>
                </div>
             </div>
             <div className="relative group overflow-hidden rounded-xl h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  alt="Event" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="text-xs text-white bg-jcf-blue px-2 py-1 rounded mb-2 inline-block">Feb 28, 2025</span>
                  <h3 className="text-white font-bold text-xl">Winter Cloth Distribution Drive</h3>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-jcf-blue text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Be the Change You Want to See</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Your contribution can help a child go to school, feed a hungry family, or save a life.
          All donations are eligible for tax exemption under 80G.
        </p>
        <RazorpayButton 
           className="bg-white text-jcf-blue hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg"
           label="Donate Now"
        />
      </section>
    </div>
  );
};

export default Home;