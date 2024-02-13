import React from "react";

const About = () => {

    const SkillBar = ({ skill, progress }) => {
      return (
        <div>
          <p className="text-gray-800 font-semibold">{skill}</p>
          <div className="h-3 bg-gray-300 rounded-full">
            <div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      );
    };
    
  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white p-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm Abebe, a passionate Web development with 1 years
              of experience. I enjoy building responsive web applications and
              solving complex problems with code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="space-y-2">
                <SkillBar skill="React" progress={80} />
                <SkillBar skill="JavaScript" progress={90} />
                <SkillBar skill="HTML/CSS" progress={85} />
                <SkillBar skill="Tailwind CSS" progress={75} />
                {/* Add more skills as needed */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <a
                  href="mailto:your.email@example.com"
                  className="text-lg font-semibold text-gray-700 hover:text-indigo-600 transition duration-300"
                >
                  your.email@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
