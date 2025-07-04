
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (Computer Science)",
      institution: "GLA University",
      location: "Mathura, India",
      period: "September 2022 – Present",
      description: "Currently pursuing B.Tech in Computer Science with focus on Data Science fundamentals, programming languages, and modern software development practices."
    },
    {
      degree: "Intermediate (P.C.M)",
      institution: "Anglo Vedic Convent School, Bahjoi",
      location: "India", 
      period: "August 2020 – July 2022",
      description: "Strong foundation in Physics, Chemistry, and Mathematics providing analytical and problem-solving skills essential for computer science and data analysis."
    }
  ];

  const certificates = [
    {
      title: "Introduction to Data Science",
      issuer: "Online Learning Platform",
      description: "Basic course covering fundamentals of data science, including data manipulation and basic statistical analysis."
    },
    {
      title: "Programming Fundamentals",
      issuer: "University Coursework",
      description: "Core programming concepts in Python and Java, including object-oriented programming and data structures."
    },
    {
      title: "Database Management Systems",
      issuer: "Academic Curriculum",
      description: "Understanding of relational databases, SQL queries, and database design principles."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and continuous learning in computer science and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <GraduationCap className="text-blue-400" size={28} />
              <span>Education</span>
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-blue-400" size={20} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <h5 className="text-lg text-blue-300 mb-3">{edu.institution}</h5>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 text-gray-400">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <Award className="text-purple-400" size={28} />
              <span>Coursework & Learning</span>
            </h3>

            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-white/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-purple-400" size={18} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-purple-300 text-sm mb-3">{cert.issuer}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Learning Technologies</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-blue-300 font-medium mb-2">Programming</div>
                  <div className="text-gray-400">Python, Java, JavaScript</div>
                </div>
                <div>
                  <div className="text-purple-300 font-medium mb-2">Tools</div>
                  <div className="text-gray-400">VS Code, Git, Jupyter</div>
                </div>
                <div>
                  <div className="text-green-300 font-medium mb-2">Database</div>
                  <div className="text-gray-400">MySQL, Basic MongoDB</div>
                </div>
                <div>
                  <div className="text-yellow-300 font-medium mb-2">Concepts</div>
                  <div className="text-gray-400">Data Structures, Algorithms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
