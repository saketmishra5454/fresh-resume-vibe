
import { Briefcase, Calendar, MapPin, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Computer Science Student - Data Science Track",
      description: "Currently pursuing B.Tech in Computer Science with specialization in data science fundamentals, learning advanced algorithms, statistical methods, and modern programming practices.",
      period: "2022 - Present",
      location: "GLA University",
      skills: ["Python Programming", "Data Structures", "Algorithms", "Database Management", "Statistics"]
    },
    {
      title: "Academic Projects & Learning",
      description: "Working on various academic projects involving data analysis, basic machine learning implementations, and software development using modern frameworks and tools.",
      period: "2023 - Present",
      location: "University Projects",
      skills: ["Project Management", "Research Skills", "Problem Solving", "Team Collaboration"]
    },
    {
      title: "Self-Learning & Skill Development",
      description: "Actively learning through online courses, tutorials, and hands-on practice with data science tools and technologies to build a strong foundation for future career opportunities.",
      period: "2022 - Present",
      location: "Self-Directed Learning",
      skills: ["Continuous Learning", "Self-Motivation", "Technology Adaptation", "Research Abilities"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My learning path in computer science and data science fundamentals
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <BookOpen className="text-white" size={24} />
                </div>

                {/* Content */}
                <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
