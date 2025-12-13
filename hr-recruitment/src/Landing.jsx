import { CheckCircle, MapPin, Mail, Phone, Clock, DollarSign, Briefcase, Users, RefreshCw, Star, BarChart, HardHat, FileText, Search, Zap } from 'lucide-react';
import React, { useState } from 'react';

// Icons for use in the Services/Why Choose sections
const iconMap = {
  'Recruitment Services': Users,
  'Payroll Management': DollarSign,
  'Institute Tie-Ups': HardHat,
  'Placement Services': Briefcase,
  'Placement Assurance': Star,
  // Why Choose Icons
  'Expert Guidance & Support': BarChart,
  'Strong Industry Connections': Users,
  'Proven Track Record': RefreshCw,
  'Personalized Approach': Phone, 
};

// Placeholder for image assets
const assets = {
  hero: './hero.png', 
  user: FileText,
  document: FileText, 
  search: Search,
  chat: Zap, 
  bag: Briefcase, 
};

// Helper component for Service/Why Choose cards
const Card = ({ title, description, icon: Icon, stats = null }) => (
  <div className="
    bg-white rounded-2xl shadow-lg p-8
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:shadow-2xl
    hover:scale-[1.02]
  ">
    {Icon && (
      <div className="
        bg-blue-100 text-blue-600 p-3 w-fit rounded-xl mb-4
        transition-transform duration-300
        group-hover:scale-110
      ">
        <Icon size={28} />
      </div>
    )}
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-slate-600 text-sm">{description}</p>
    {stats && (
      <div className="mt-4 font-bold text-lg text-blue-600">
        {stats}
      </div>
    )}
  </div>
);
export default function Landing() {
const [success, setSuccess] = useState(false);

      const [formData, setFormData] = useState({
        
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    location: "",
    industry: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://get-hired-services.onrender.com//api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

    if (res.ok) {
  setSuccess(true);

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    location: "",
    industry: "",
  });

  // optional: 5 sec नंतर message hide
  setTimeout(() => setSuccess(false), 5000);
}
 else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  const officeAddress = "Office No 305, 3rd Floor, Excella Plazzo, Katraj-Navalle Bridge Road, Pune, Maharashtra";
  const email = "info@gethiredservices.com";
  const phone = "+91 XXXXX XXXXX"; 

  const services = [
    { title: "Recruitment Services", description: "We specialize in identifying and recruiting top talent across various industries, ensuring the perfect match between candidates and organizations." },
    { title: "Payroll Management", description: "Our expert team ensures seamless payroll processing, compliance, and administration, taking the burden off your shoulders." },
    { title: "Institute Tie-Ups", description: "We collaborate with leading institutes to provide industry-ready candidates who are prepared to excel from day one." },
    { title: "Placement Services", description: "Our dedicated team works closely with candidates to identify career goals, develop job search strategies, and connect with top employers." },
    { title: "Placement Assurance", description: "Our proven track record and expert guidance ensure placement opportunities for our candidates with minimum 3 interviews guaranteed." },
  ];

  const processSteps = [
    { num: 1, title: "Registration", description: "Submit your profile and career goals with a simple online registration process", icon: assets.user },
    { num: 2, title: "Profile Enhancement", description: "Our experts review and enhance your resume and online profiles to stand out", icon: assets.document },
    { num: 3, title: "Job Matching", description: "We match your skills and aspirations with suitable job openings from top companies", icon: assets.search },
    { num: 4, title: "Interview Preparation", description: "Mock interviews and personalized guidance to boost your confidence", icon: assets.chat },
    { num: 5, title: "Job Placement", description: "Our team works with you to secure job offers from reputed organizations", icon: assets.bag },
  ];

  const whyChoose = [
    { title: "Expert Guidance & Support", description: "Our experienced team provides personalized career counseling and expert advice at every step of your journey.", stats: "15+ Years Experience" },
    { title: "Strong Industry Connections", description: "Partnerships with top companies and leading institutes ensure access to the best opportunities.", stats: "500+ Partner Companies" },
    { title: "Proven Track Record", description: "Thousands of successful placements across diverse industries with high satisfaction rates.", stats: "10,000+ Placements" },
    { title: "Personalized Approach", description: "We understand your unique needs and tailor our services to match your career aspirations perfectly.", stats: "24/7 Support Available" },
  ];

  const registrationBenefits = [
    "Guaranteed Interviews: Minimum 3 interview opportunities within 3 months",
    "Resume Enhancement: Professional resume review and optimization",
    "Interview Preparation: Mock interviews and expert guidance",
    "Career Counseling: One-on-one sessions with career experts",
    "Job Matching: Access to exclusive job opportunities",
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">

      {/* ================= Navbar ================= */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-extrabold text-2xl flex items-center gap-2">
             <Briefcase className="text-blue-600" size={30} />
            Get Hired Services<br/> <span className='text-sm font-normal text-slate-500 hidden sm:inline'>Pune</span>
          </div>
    <nav className="hidden lg:flex gap-8 text-lg">
  {['Home','Services','Process','Why Us','Contact'].map(i => (
 <a
  key={i}
  href={`#${i.toLowerCase().replace(' ', '-')}`}
  className="
    relative text-black no-underline
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-blue-600
    after:transition-all after:duration-300
    hover:text-blue-600 hover:after:w-full
  "
>
  {i}
</a>

  ))}
</nav>

<a href="#register">
  <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
    Register Now
  </button>
</a>
        </div>
      </header>

      {/* ================= Hero ================= */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Your Partner in Career Success</span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-4">
              Transform Your <span className="text-blue-600">Career Journey</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg">
              Connect with top organizations and unlock your career potential. We're dedicated to matching talented individuals with the right opportunities.
            </p>
            <ul className="mt-6 space-y-3 text-lg font-medium">
              {["Minimum 3 interviews guaranteed within 3 months","Registration fee: Just ₹499","Expert career guidance and placement assurance"].map(i => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20}/> {i}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4">
<a href="#register">
  <button className="
    bg-blue-600 text-white px-7 py-3 rounded-xl text-lg font-semibold
    shadow-lg transition-all duration-300
    hover:bg-blue-700 hover:shadow-2xl
    hover:-translate-y-0.5 active:scale-95
  ">
    Get Started Today →
  </button>
</a>

              <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl text-lg font-semibold hover:bg-blue-50 transition duration-200">Learn More</button>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-4 relative">
<img
  src={assets.hero}
  alt="A team celebrating success"
  className="
    rounded-2xl w-full h-auto
    transition-transform duration-500
    hover:scale-105
  "
/>
            <div className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-lg flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle className="text-white" size={12}/>
                </div>
                <span className="text-green-600 font-bold">98% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Services ================= */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Our Comprehensive Services</h2>
          <p className="text-center text-slate-600 mt-4 text-lg">We offer end-to-end recruitment solutions designed to empower individuals and organizations</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map(s => (
              <Card 
                key={s.title} 
                title={s.title} 
                description={s.description} 
                icon={iconMap[s.title]}
              />
            ))}
          </div>
        </div>
      </section>

            {/* ================= CTA - Secondary ================= */}
      <section className="max-w-7xl mx-auto my-20 px-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold">Ready to Take the Next Step?</h2>
          <p className="mt-4 text-xl">Join thousands of successful candidates who found their dream jobs through our services</p>
          <button className="mt-8 bg-white text-blue-600 px-10 py-3 rounded-xl text-lg font-semibold hover:bg-slate-50 transition duration-200">Register for Just ₹499</button>
        </div>
      </section>
            <section id="process" className="bg-white py-24">
  <h2 className="text-4xl font-bold text-center">Our Placement Process</h2>
  <p className="text-center text-slate-600 mt-4 text-lg">
    A streamlined, proven process to help you land your dream job
  </p>

  <div className="max-w-6xl mx-auto mt-16 px-6">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {processSteps.map((step) => (
        <div
          key={step.title}
          className="
            relative bg-white rounded-3xl shadow-xl p-8 text-center
            border-t-8 border-blue-600/70
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
          "
        >
          {/* Step Number */}
          <div className="
            w-12 h-12 flex items-center justify-center
            rounded-full bg-blue-600 text-white font-bold text-xl
            absolute -top-6 left-1/2 -translate-x-1/2 shadow-lg
          ">
            {step.num}
          </div>

          {/* Icon */}
          {React.createElement(step.icon, {
            size: 42,
            className:
              "text-blue-600 mx-auto mt-6 mb-4 transition-transform duration-300 hover:scale-110",
          })}

          {/* Content */}
          <h3 className="text-xl font-extrabold">{step.title}</h3>
          <p className="text-slate-600 text-sm mt-2">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>


  {/* Registration Summary */}
  <div className="max-w-4xl mx-auto mt-20 grid sm:grid-cols-3 gap-8 text-center px-6">
    <div className="p-6 rounded-xl bg-blue-600/10">
      <div className="text-4xl font-extrabold text-blue-600">3+</div>
      <div className="text-lg font-semibold mt-2">Interview Guarantee</div>
      <p className="text-sm text-slate-600">
        Minimum interviews within 3 months
      </p>
    </div>

    <div className="p-6 rounded-xl bg-blue-600/10">
      <div className="text-4xl font-extrabold text-blue-600">₹499</div>
      <div className="text-lg font-semibold mt-2">Registration Fee</div>
      <p className="text-sm text-slate-600">
        One-time affordable investment
      </p>
    </div>

    <div className="p-6 rounded-xl bg-green-600/10">
      <div className="text-4xl font-extrabold text-green-600">100%</div>
      <div className="text-lg font-semibold mt-2">Dedicated Support</div>
      <p className="text-sm text-slate-600">
        Personalized guidance throughout
      </p>
    </div>
  </div>
</section>

      
      {/* ================= Why Us ================= */}
      <section id="why-us" className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">Why Choose Get Hired Services?</h2>
            <p className="text-center text-slate-600 mt-4 text-lg">We're committed to your success with unmatched expertise and dedication</p>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
            {whyChoose.map(item => (
                <div key={item.title} className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white p-3 w-fit rounded-xl">
                            {React.createElement(iconMap[item.title], { size: 30 })}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-base">{item.description}</p>
                            <div className="mt-3 font-extrabold text-blue-600 text-lg">{item.stats}</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* ================= Mission & Metrics ================= */}
      <section className="bg-white py-24">
        <div className="bg-slate-900 text-white p-12 lg:p-20 rounded-3xl max-w-7xl mx-auto shadow-2xl px-6">
            <h2 className="text-3xl font-bold text-center">Our Mission</h2>
            <p className="text-center max-w-3xl mx-auto mt-6 text-lg text-slate-300">
                To empower individuals and organizations through effective recruitment solutions, ensuring a perfect match between talent and opportunity. We believe in building long-term relationships and creating success stories that inspire.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 mt-16 text-center">
            {[['98%','Client Satisfaction'],['90%','Placement Success'],['85%','Return Clients']].map(i => (
                <div key={i[1]} className='border-r border-slate-700 last:border-r-0'>
                <div className="text-5xl font-extrabold text-blue-400">{i[0]}</div>
                <div className="text-lg mt-2 text-slate-300">{i[1]}</div>
                </div>
            ))}
            </div>
        </div>
      </section>


      {/* ================= Registration CTA / Form ================= */}
<section id="register" className="py-24 bg-blue-50">
        <h2 className="text-4xl font-bold text-center">Start Your Career Journey</h2>
        <p className="text-center text-slate-600 mt-4 text-lg">Register now for just ₹499 and get guaranteed interviews</p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-16 px-6">
            {/* Benefits Column */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-3xl font-extrabold mb-6">What You Get</h3>
                <ul className="space-y-4">
                    {registrationBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle className="text-white flex-shrink-0 mt-1" size={20}/>
                            <span className='font-medium text-base'>
                                {benefit.split(': ')[0]}
                                <br/>
                                <span className='text-sm font-normal'>{benefit.split(': ')[1]}</span>
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/30">
                    <div className="text-4xl font-extrabold">Registration Fee: <span className="text-yellow-300">₹499</span></div>
                    <p className="text-sm mt-1">One-time payment. No hidden charges.</p>
                </div>
            </div>

            {/* Registration Form Column */}
<form
  onSubmit={handleSubmit}
  className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-5"
>
  <div className="space-y-2">
    <label className="font-semibold text-sm">Full Name *</label>
    <input
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className="w-full border border-slate-300 p-3 rounded-lg"
      required
    />
  </div>

  <div className="space-y-2">
    <label className="font-semibold text-sm">Email Address *</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full border border-slate-300 p-3 rounded-lg"
      required
    />
  </div>

  <div className="space-y-2">
    <label className="font-semibold text-sm">Phone Number *</label>
    <input
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full border border-slate-300 p-3 rounded-lg"
      required
    />
  </div>

  <div className="space-y-2">
    <label className="font-semibold text-sm">Highest Qualification *</label>
    <select
      name="qualification"
      value={formData.qualification}
      onChange={handleChange}
      className="w-full border border-slate-300 p-3 rounded-lg"
      required
    >
      <option value="">Select qualification</option>
      <option>High School</option>
      <option>Diploma</option>
      <option>Bachelor's Degree</option>
      <option>Master's Degree</option>
      <option>PhD</option>
    </select>
  </div>

  <div className="space-y-2">
    <label className="font-semibold text-sm">Experience *</label>
    <select
      name="experience"
      value={formData.experience}
      onChange={handleChange}
      className="w-full border border-slate-300 p-3 rounded-lg"
      required
    >
      <option value="">Select experience</option>
      <option>Fresher</option>
      <option>0-1 Years</option>
      <option>1-3 Years</option>
      <option>3-5 Years</option>
      <option>5+ Years</option>

    </select>
  </div>

  <div className="space-y-2">
    <label className="font-semibold text-sm">Location *</label>
    <input
      name="location"
      value={formData.location}
      onChange={handleChange}
      className="w-full border border-slate-300 p-3 rounded-lg"
      required
    />
  </div>

  <div className="space-y-2">
    <label className="font-semibold text-sm">Preferred Industry *</label>
    <input
      name="industry"
      value={formData.industry}
      onChange={handleChange}
      className="w-full border border-slate-300 p-3 rounded-lg"
      required
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
  >
    <Briefcase size={20} />
    {loading ? "Submitting..." : "Submit Registration"}
  </button>
  {success && (
  <div className="mt-4 p-4 rounded-xl bg-green-100 border border-green-300 text-green-800 text-center font-semibold">
    ✅ Registration successful!  
    <div className="text-sm font-normal mt-1">
      Our team will contact you soon with further details.
    </div>
  </div>
)}


  <p className="text-center text-sm text-slate-500 mt-3">
    After submission, you'll receive payment instructions via email
  </p>
</form>

        </div>
      </section>



      {/* ================= Contact ================= */}
      <section id="contact" className="py-24 bg-white">
        <h2 className="text-4xl font-bold text-center">Get In Touch</h2>
        <p className="text-center text-slate-600 mt-4 text-lg">Have questions? We're here to help you succeed</p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-16 px-6 items-start">
            <div className='space-y-6'>
                {/* Office */}
                <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl flex-shrink-0">
                        <MapPin size={24}/>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-1">Our Office</h3>
                        <p className="text-slate-600">{officeAddress}</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl flex-shrink-0">
                        <Phone size={24}/>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-1">Phone</h3>
                        <p className="text-slate-600 font-mono text-lg">{phone}</p>
                        <p className="text-sm text-slate-500">Call us for immediate assistance</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl flex-shrink-0">
                        <Mail size={24}/>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-1">Email</h3>
                        <p className="text-slate-600 font-mono text-lg">{email}</p>
                        <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                    <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl flex-shrink-0">
                        <Clock size={24}/>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-1">Business Hours</h3>
                        <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-slate-600">Sunday: Closed</p>
                    </div>
                </div>
            </div>

            {/* Map/Visit Us */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow-inner">
                <h3 className='text-2xl font-bold mb-4'>Visit Us</h3>
                {/* Map Image Placeholder */}
                <div className="w-full h-72 bg-slate-300 rounded-xl flex items-center justify-center text-slate-600 font-bold mb-4">
                    [Google Map Image Placeholder]
                </div>
                <p className="text-slate-600">
                    Our office is conveniently located near Katraj-Navalle Bridge, easily accessible by public transport and with ample parking facilities available.
                </p>
            </div>
        </div>
      </section>

{/* ================= Footer ================= */}
<footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-300">
  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

    {/* Brand & About */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-orange-500 p-3 rounded-xl">
          <Briefcase className="text-white" size={26} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Get Hired Services LLP</h3>
          <p className="text-sm text-slate-400">Pune</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
        Your trusted partner in career success. We connect talented individuals
        with top organizations and provide comprehensive recruitment solutions.
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        {['facebook', 'twitter', 'linkedin'].map((i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center cursor-pointer transition"
          >
            <span className="text-white font-bold">
              {i[0].toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
      <ul className="space-y-3 text-sm">
        {['Home', 'Services', 'Process', 'Why Us', 'Register'].map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="hover:text-white transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-white font-semibold text-lg mb-5">Contact Info</h4>

      <div className="space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <MapPin className="text-orange-400 mt-1" size={18} />
          <p>
            Office No 305, 3rd Floor, Excella Plazzo,
            Katraj-Navalle Bridge Road, Pune
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-orange-400" size={18} />
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-orange-400" size={18} />
          <p>info@gethiredservices.com</p>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-slate-700">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
      <p>© 2025 Get Hired Services LLP. All rights reserved.</p>

     <div className="flex gap-6">
  <button className="hover:text-white transition">Privacy Policy</button>
  <button className="hover:text-white transition">Terms of Service</button>
  <button className="hover:text-white transition">Refund Policy</button>
</div>

    </div>
  </div>
</footer>


    </div>
  )
}