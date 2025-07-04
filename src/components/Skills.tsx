
import { Brain, Database, Code, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Deep Learning", level: 92 },
        { name: "CNNs & RNNs", level: 90 },
        { name: "Ensemble Methods", level: 88 },
        { name: "Statistical Models", level: 85 },
        { name: "Model Optimization", level: 87 }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Database,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 95 },
        { name: "Pandas & NumPy", level: 98 },
        { name: "Hadoop & Spark", level: 82 }
      ]
    },
    {
      title: "Analytics & Platforms",
      icon: BarChart,
      skills: [
        { name: "Tableau", level: 88 },
        { name: "Power BI", level: 85 },
        { name: "Jupyter", level: 95 },
        { name: "Git & Version Control", level: 90 },
        { name: "Docker", level: 75 }
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
            Comprehensive expertise across the data science and machine learning technology stack
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
