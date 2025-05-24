import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      {/* Map Section */}
      <div className="w-full h-[300px] mb-8 rounded-md overflow-hidden border border-gray-700">
        <iframe
          title="Google Map showing Sacramento, California"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317714.40098750504!2d-121.57283730000001!3d38.56118665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad12b26c93d87%3A0x63d01db9925fa7e1!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Contact Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="bg-gray-800 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email address"
            className="bg-gray-800 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full bg-gray-800 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400"
        ></textarea>

        <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
          <FaPaperPlane /> Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
