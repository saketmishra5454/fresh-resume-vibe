
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Advanced Machine Learning and Statistical Techniques",
      description: "Mastery of complex algorithms and models such as deep learning networks (e.g., CNNs, RNNs) and ensemble methods.",
      period: "2022 - Present",
      location: "GLA University",
      skills: ["Deep Learning", "Neural Networks", "Ensemble Methods", "Statistical Modeling"]
    },
    {
      title: "Data Engineering and Big Data Technologies",
      description: "Expertise in handling large-scale data using big data technologies like Hadoop and Spark. Skills in designing and managing data pipelines, including ETL processes.",
      period: "2021 - 2022",
      location: "Academic Projects",
      skills: ["Hadoop", "Apache Spark", "ETL Processes", "Data Pipeline Design"]
    },
    {
      title: "Programming and Software Development",
      description: "Advanced programming skills in Python or R, including the use of libraries for data manipulation, statistical analysis, and machine learning (e.g., Pandas, NumPy, Scikit-learn).",
      period: "2020 - Present",
      location: "Continuous Learning",
      skills: ["Python", "R", "Pandas", "NumPy", "Scikit-learn", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey in data science and machine learning
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
                  <Briefcase className="text-white" size={24} />
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
