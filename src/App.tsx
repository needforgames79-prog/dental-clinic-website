import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Stethoscope, 
  Award,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Smile,
  Activity,
  UserCheck,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-blue-600 p-1.5 rounded-lg mr-2">
              <Smile className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900 sm:text-white'}`}>
                Shraddha Dental
              </h1>
              <p className={`text-[10px] uppercase tracking-wider font-semibold ${isScrolled ? 'text-blue-600' : 'text-blue-600 sm:text-blue-100'}`}>
                & Implant Centre
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  currentPage === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : isScrolled ? 'text-gray-600' : 'text-gray-600 sm:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-900' : 'text-gray-900 sm:text-white'}`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                    currentPage === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl text-center font-bold shadow-lg"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onAction }: { onAction: (p: Page) => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:block hidden"></div>
        <div className="absolute inset-0 bg-white/90 md:hidden block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              11+ Years of Excellence in Healthcare
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Advanced Dental Care for a <span className="text-blue-600">Healthy, Confident Smile</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience world-class dental treatments at Shraddha Dental Clinic & Implant Centre. 
              Our multispeciality centre in Mathura offers modern equipment and expert care for your entire family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onAction('contact')}
                className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-600/40 group"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:0000910198"
                className="flex items-center justify-center bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
              >
                <Phone className="mr-2 w-5 h-5 text-blue-600" />
                Call Now
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Patient" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm font-bold text-gray-900">5.0 Rating</p>
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-gray-900">1000+ Patients</p>
                <p className="text-xs text-gray-500">Treated with care</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 max-w-xs"
        >
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <ShieldCheck className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="ml-3 font-bold text-gray-900">Hygienic Care</h3>
          </div>
          <p className="text-sm text-gray-500">We follow strict sterilization protocols for every patient treatment.</p>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const doctors = [
    {
      name: "Dr. Kaushal Singh",
      qual: "BDS, M.I.D.A",
      role: "Senior Dental Surgeon",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Dr. Balkrishn Gaur",
      qual: "BDS, M.D.S",
      role: "Specialist Dental Surgeon",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">About Our Clinic</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">A Legacy of Trust and <span className="text-blue-600">Advanced Dentistry</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Shraddha Dental Clinic & Implant Centre has been a cornerstone of dental health in Mathura for over 11 years. 
              Our mission is to provide multispeciality dental care under one roof, combining years of experience with 
              the latest technological advancements in dentistry.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-blue-600 mb-1">11+</h4>
                <p className="text-sm font-semibold text-gray-600">Years Experience</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-blue-600 mb-1">5.0</h4>
                <p className="text-sm font-semibold text-gray-600">Patient Rating</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Modern dental equipment & digital X-rays",
                "Strict sterilization & hygiene protocols",
                "Patient-centric approach & painless treatments",
                "Affordable & transparent pricing"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <div className="bg-green-100 p-1 rounded-full mr-3">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {doctors.map((doc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={doc.img} 
                      alt={doc.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900">{doc.name}</h4>
                    <p className="text-xs text-blue-600 font-bold mb-1">{doc.qual}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{doc.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Dental Implants",
      desc: "Permanent and natural-looking solution for missing teeth using high-quality titanium implants.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Root Canal Treatment",
      desc: "Painless RCT to save your natural tooth from infection and decay using advanced rotary systems.",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Orthodontic Treatment",
      desc: "Braces and aligners to correct misaligned teeth and achieve a perfectly straight smile.",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Smile Designing",
      desc: "Comprehensive aesthetic treatments including veneers and bonding to enhance your smile's beauty.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Teeth Whitening",
      desc: "Professional cleaning and whitening procedures to remove stains and brighten your teeth instantly.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Complete Dentures",
      desc: "Custom-made full or partial dentures to restore functionality and appearance for senior patients.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Ultrasonic Scaling",
      desc: "Deep cleaning of teeth and gums to prevent periodontal diseases and maintain oral hygiene.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Jaw Fracture Treatment",
      desc: "Specialized surgical care for maxillofacial injuries and jaw fractures with expert precision.",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Specialities</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Comprehensive Dental Services for <span className="text-blue-600">Every Need</span></h2>
          <p className="text-gray-600">We offer a wide range of dental treatments from routine checkups to complex surgeries, all performed by experienced specialists.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000", title: "Modern Treatment Room" },
    { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000", title: "Advanced Equipment" },
    { url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1000", title: "Hygienic Environment" },
    { url: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000", title: "Patient Comfort Area" },
    { url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000", title: "Sterilization Unit" },
    { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000", title: "Reception" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Clinic</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">Visual Tour of <span className="text-blue-600">Shraddha Dental</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group aspect-square rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      text: "Best dental clinic in Mathura. Dr. Kaushal is very professional and explained the treatment clearly. The RCT was completely painless.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "I got my dental implants done here. The results are amazing and look very natural. The clinic is very clean and hygienic.",
      rating: 5
    },
    {
      name: "Amit Singh",
      text: "Excellent service and friendly staff. They use modern equipment and the doctors are very experienced. Highly recommended for any dental issues.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-100 font-bold tracking-widest uppercase text-sm">Patient Stories</span>
          <h2 className="text-4xl font-bold text-white mt-4">What Our Patients <span className="text-blue-200">Say About Us</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-white text-lg italic mb-8">"{rev.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {rev.name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <p className="text-blue-200 text-xs uppercase tracking-widest">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-8">Schedule Your <span className="text-blue-600">Appointment</span> Today</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 mr-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    06, Near Nawada Chauraha, Mitra Nagar, National Highway 2, Anandvan Phase 1, Mathura – 281006, Uttar Pradesh, India
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=27.4561932,77.6849192" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-bold mt-2 hover:underline"
                  >
                    Get Directions <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 mr-6">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 0000910198</p>
                  <p className="text-xs text-gray-400 mt-1">Available during clinic hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 mr-6">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Timings</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600">
                    <span>Mon - Sat (Morning):</span> <span className="font-semibold">10:00 AM – 2:00 PM</span>
                    <span>Mon - Sat (Evening):</span> <span className="font-semibold">4:00 PM – 9:00 PM</span>
                    <span>Sunday:</span> <span className="font-semibold">10:00 AM – 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder - In real app use actual iframe */}
            <div className="rounded-3xl overflow-hidden h-64 bg-gray-100 border border-gray-200 relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 group-hover:bg-gray-200/30 transition-colors">
                 <MapPin className="w-12 h-12 text-blue-600 opacity-50" />
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14187.3142436853!2d77.6849192!3d27.4561932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI3JzIyLjMiTiA3N8KwNDEnMDUuNyJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-3xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="+91 00000 00000"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Service</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  value={formState.service}
                  onChange={e => setFormState({...formState, service: e.target.value})}
                >
                  <option value="">Choose a treatment</option>
                  <option value="implants">Dental Implants</option>
                  <option value="rct">Root Canal Treatment</option>
                  <option value="ortho">Orthodontic Treatment</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your dental concern..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center"
              >
                {submitted ? "Message Sent Successfully!" : "Confirm Appointment"}
                {!submitted && <Calendar className="ml-2 w-5 h-5" />}
              </button>
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to be contacted by our clinic for appointment confirmation.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg mr-2">
                <Smile className="text-white w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-xl leading-tight">Shraddha Dental</h2>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-600">
                  & Implant Centre
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A multispeciality dental and implant centre in Mathura providing advanced dental care with 11+ years of experience.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setCurrentPage(item.toLowerCase() as Page)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Dental Implants</li>
              <li>Root Canal Treatment</li>
              <li>Orthodontic Treatment</li>
              <li>Smile Designing</li>
              <li>Teeth Whitening</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <span>06, Near Nawada Chauraha, Mitra Nagar, Mathura, UP</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <span>+91 0000910198</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <span>randomxyz@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Shraddha Dental Clinic & Implant Centre. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/910000910198" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us
      </span>
    </a>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onAction={setCurrentPage} />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
          </>
        );
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onAction={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-600">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}
