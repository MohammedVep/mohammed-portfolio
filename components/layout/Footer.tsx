import { profileData } from "@/content/profile";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              GitHub
            </a>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profileData.email}`} className="text-gray-600 hover:text-gray-800">
              Email
            </a>
            <a
              href={profileData.netPulseLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              NetPulse Live
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
