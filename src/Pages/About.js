import upwork from "../Assests/Upwork.png";
import fi from "../Assests/fi.png";
import firnas from "../Assests/firnas.png";

const About = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "The most modern and high-quality design made at a professional level.",
      icon: "🖌️",
    },
    {
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
      icon: "💻",
    },
    {
      title: "Mobile Apps",
      description:
        "Professional development of applications for iOS and Android.",
      icon: "📱",
    },
    {
      title: "Photography",
      description:
        "I make high-quality photos of any category at a professional level.",
      icon: "📷",
    },
  ];

  const testimonials = [
    {
      name: "Andre Peterson",
      avatar: "🧑🏽‍💻",
      feedback:
        "Working with Furqan was an absolute pleasure. He understood our brand identity from the start and delivered a clean, responsive website ahead of schedule. Highly recommend!",
    },
    {
      name: "Ramisa Khan",
      avatar: "👩🏼‍💼",
      feedback:
        "Furqan transformed our outdated app into a modern, user-friendly platform. Communication was smooth throughout the project, and his attention to detail was outstanding.",
    },
    {
      name: "Liam Chen",
      avatar: "👨🏻‍🔧",
      feedback:
        "We hired Furqan for a complex dashboard project, and the results exceeded expectations. He not only built exactly what we envisioned but also improved the UX with his suggestions.",
    },
    {
      name: "Natalie Garcia",
      avatar: "👩🏽‍💻",
      feedback:
        "Furqan was professional, creative, and super easy to work with. Our mobile app now looks polished and functions perfectly. Definitely working with him again!",
    },
  ];

  return (
    <div className="#121212 text-white px-6 py-16 font-sans text-left">
      <div className="max-w-5xl mx-auto">
        {/* Intro Text */}
        <p className="text-lg mb-6">
          I'm Creative UI/UX Designer and a full stack web developer from
          Pakistan, working in web development and Mobile Development. I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-lg mb-10">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that it is eye-catching
          and easy to use. My aim is to bring across your message and identity
          in the most creative way.
        </p>

        {/* What I'm Doing */}
        <h2 className="text-2xl font-bold mb-8">What I’m Doing</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 hover:bg-zinc-800 transition-colors p-6 rounded-xl shadow-md flex gap-4 items-start"
            >
              <div className="text-yellow-400 text-3xl">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-zinc-900 hover:bg-zinc-800 transition-colors p-6 rounded-xl shadow-md flex gap-4 items-start"
            >
              <div className="text-4xl">{t.avatar}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
                <p className="text-sm text-gray-300">{t.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Yellow Divider Line */}
        <div className="w-full h-1 bg-yellow-400 mb-12" />

        {/* Clients */}
        <h2 className="text-2xl font-bold mb-8">Clients</h2>
        <div className="flex flex-wrap items-center gap-10 justify-center mb-12">
          <img
            src={fi}
            alt="Fiverr"
            className="h-20 object-contain transition duration-300"
          />
          <img
            src={upwork}
            alt="Upwork"
            className="h-20 object-contain transition duration-300"
          />
          <img
            src={firnas}
            alt="Firnas.tech"
            className="h-20 object-contain transition duration-300"
          />
        </div>

        {/* Bottom Yellow Line */}
        <div className="w-full h-1 bg-yellow-400" />
      </div>
    </div>
  );
};

export default About;
