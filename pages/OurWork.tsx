import React from 'react';
import { Monitor, Leaf, Sprout, Utensils, ArrowRight } from 'lucide-react';
import RazorpayButton from '../components/RazorpayButton';
import { Link } from 'react-router-dom';

const OurWork: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-jcf-blue overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Community Work" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Initiatives</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Transforming the landscape of Haldwani and Nainital through technology, sustainability, and compassion.
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Holistic Development in Uttarakhand</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          At Jeevan Chetna Foundation, we believe that true development comes from addressing multiple facets of life simultaneously. 
          From the digital screens in our classrooms to the soil in our community gardens, we are working tirelessly 
          in the <strong>Haldwani and Nainital</strong> regions to bridge the gap between resources and need.
        </p>
      </section>

      {/* 1. Digital Learning & Computer Skills */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
                  <Monitor size={32} />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <span className="text-jcf-blue font-bold tracking-wider uppercase text-sm">Skill Development</span>
              <h2 className="text-4xl font-bold text-slate-900">Digital Literacy & Computer Skills</h2>
              <div className="w-20 h-1.5 bg-jcf-blue rounded-full"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                In an increasingly digital world, computer literacy is not just a skill—it's a necessity for survival and growth. 
                We have established learning centers in Haldwani to provide free and subsidized computer education to underprivileged youth and children.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]"><ArrowRight size={20} className="text-jcf-blue" /></div>
                  <p className="text-slate-700"><strong>Basic Computer Courses:</strong> Teaching MS Office, internet usage, and digital communication tools.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]"><ArrowRight size={20} className="text-jcf-blue" /></div>
                  <p className="text-slate-700"><strong>Coding for Kids:</strong> Introducing logic and programming concepts to spark innovation at a young age.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]"><ArrowRight size={20} className="text-jcf-blue" /></div>
                  <p className="text-slate-700"><strong>Job Readiness:</strong> Preparing youth for the modern workforce with resume building and digital freelancing skills.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Microgreens & Sustainable Agriculture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-jcf-green font-bold tracking-wider uppercase text-sm">Agriculture & Nutrition</span>
              <h2 className="text-4xl font-bold text-slate-900">Microgreens Revolution</h2>
              <div className="w-20 h-1.5 bg-jcf-green rounded-full"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                We are pioneering a "Micro Green" movement in Uttarakhand. Microgreens are nutrient-dense superfoods that can be grown in small spaces with minimal water. 
                Our project focuses on training women and local farmers to cultivate these high-value crops.
              </p>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Why Microgreens?</h4>
                <p className="text-green-700 text-sm">
                  They contain up to 40x more nutrients than mature plants. By promoting their cultivation, we tackle two problems at once: 
                  <strong>malnutrition</strong> and <strong>unemployment</strong>. Families can grow them for their own consumption and sell the surplus to high-end markets.
                </p>
              </div>
              <p className="text-slate-700">
                Our team provides seeds, trays, and technical know-how to setup vertical farms right inside homes in Haldwani.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1536631627993-3d07c87c4f48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Microgreens" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg">
                  <Sprout size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Plantation & Environment */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Planting Trees" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1588260697775-498c4f434a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Green Earth" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <span className="text-jcf-green font-bold tracking-wider uppercase text-sm">Environment</span>
              <h2 className="text-4xl font-bold text-slate-900">Green Haldwani, Green Earth</h2>
              <div className="w-20 h-1.5 bg-jcf-green rounded-full"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Nainital is known for its pristine beauty, but urbanization poses a threat. JCF organizes massive plantation drives engaging school children and community members. 
                Our goal isn't just to plant trees, but to ensure they survive and thrive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Leaf size={20} className="text-jcf-green mt-1" />
                  <p className="text-slate-700">Planting native species that support local biodiversity.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf size={20} className="text-jcf-green mt-1" />
                  <p className="text-slate-700">Creating "Green Zones" in schools and public parks.</p>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf size={20} className="text-jcf-green mt-1" />
                  <p className="text-slate-700">Conducting awareness workshops on waste management and climate change.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Food Distribution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-jcf-orange font-bold tracking-wider uppercase text-sm">Social Welfare</span>
              <h2 className="text-4xl font-bold text-slate-900">Food for All</h2>
              <div className="w-20 h-1.5 bg-jcf-orange rounded-full"></div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Hunger is the most immediate crisis a human can face. Jeevan Chetna Foundation runs regular food distribution drives in the slum areas of Haldwani and Ramari Choti.
              </p>
              <p className="text-slate-700 text-lg">
                We distribute:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-orange-50 p-4 rounded-lg flex items-center gap-3">
                  <Utensils className="text-jcf-orange" />
                  <span className="font-semibold text-slate-800">Cooked Meals</span>
                </li>
                <li className="bg-orange-50 p-4 rounded-lg flex items-center gap-3">
                  <Utensils className="text-jcf-orange" />
                  <span className="font-semibold text-slate-800">Dry Ration Kits</span>
                </li>
                <li className="bg-orange-50 p-4 rounded-lg flex items-center gap-3">
                  <Utensils className="text-jcf-orange" />
                  <span className="font-semibold text-slate-800">Nutritional Supplements</span>
                </li>
                <li className="bg-orange-50 p-4 rounded-lg flex items-center gap-3">
                  <Utensils className="text-jcf-orange" />
                  <span className="font-semibold text-slate-800">Baby Food</span>
                </li>
              </ul>
              <p className="text-slate-600 italic mt-4">
                "We ensure that no one sleeps on an empty stomach in our operational areas."
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Food Distribution" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-orange-600 text-white p-3 rounded-lg shadow-lg">
                  <Utensils size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-lg text-slate-300 mb-8">
            Whether it is buying a computer for a child, seeds for a farmer, or a meal for the hungry, your contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RazorpayButton 
              className="bg-jcf-green hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl"
              label="Donate Now"
            />
            <Link 
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;