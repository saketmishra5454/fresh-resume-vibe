
import { Brain, Database, Code, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "Python", level: 60 },
        { name: "HTML/CSS", level: 75 },
        { name: "SQL", level: 65 }
      ]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      skills: [
        { name: "Object-Oriented Programming", level: 85 },
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 75 },
        { name: "Problem Solving", level: 80 },
        { name: "Software Design", level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: Database,
      skills: [
        { name: "React.js", level: 65 },
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 55 },
        { name: "MongoDB", level: 50 },
        { name: "REST APIs", level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: BarChart,
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "MySQL", level: 65 },
        { name: "Postman", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building expertise in Java development, problem-solving, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <category.icon className="text-blue-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
