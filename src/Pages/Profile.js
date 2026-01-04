import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import { FaUserCircle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="text-white p-4 rounded-xl space-y-6">
      {/* Avatar and Name */}
      <div className="flex flex-col items-center space-y-2">
        <FaUserCircle className="text-yellow-400 w-20 h-20" />
        <div className="flex flex-col text-center">
          <p className="text-lg font-semibold tracking-wide text-yellow-400 uppercase">
            Furqan Ahmad
          </p>
          <p className="text-sm text-gray-400">Full Stack Developer</p>{" "}
          {/* Optional subtitle */}
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Contact Info */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="w-6 h-6 text-yellow-400" />
          <p>Email:</p>
          <p className="text-sm text-gray-300">furqan.ahmad.ze@gmail.com</p>
        </div>

        <div className="flex items-center space-x-2">
          <Phone className="w-6 h-6 text-yellow-400" />
          <p>Phone no:</p>
          <p className="text-sm text-gray-300">+92 3159685392</p>
        </div>

        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-yellow-400" />
          <p>Birth Day:</p>
          <p className="text-sm text-gray-300">23 January 2001</p>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-yellow-400" />
          <p>Location:</p>
          <p className="text-sm text-gray-300">Lahore, Pakistan</p>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Social Links */}
      <div className="flex justify-center space-x-6 py-2">
        <FaFacebook className="w-6 h-6 text-yellow-400 cursor-pointer" />

        <a
          href="https://github.com/FurqanAhmd755181"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 text-yellow-400 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/furqan-ahmad-903278271"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 text-yellow-400 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Profile;
