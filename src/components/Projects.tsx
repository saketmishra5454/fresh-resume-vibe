
import { ExternalLink, Github, Database, Brain, BarChart3, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Data Preprocessing and Feature Engineering",
      description: "Advanced data preprocessing pipeline handling missing values and outliers detection. Implemented sophisticated feature engineering techniques including feature selection and model evaluation diagnostics.",
      icon: Database,
      technologies: ["Python", "Pandas", "Scikit-learn", "NumPy"],
      features: [
        "Missing value imputation strategies",
        "Outlier detection algorithms",
        "Feature selection optimization",
        "Model performance metrics"
      ]
    },
    {
      title: "Advanced Statistical Analysis",
      description: "Comprehensive statistical analysis toolkit with residual analysis capabilities for validating linear regression assumptions including homoscedasticity and normality testing.",
      icon: BarChart3,
      technologies: ["R", "Python", "Statistical Modeling", "Hypothesis Testing"],
      features: [
        "Residual pattern analysis",
        "Homoscedasticity validation",
        "Normality testing procedures",
        "Regression diagnostics"
      ]
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end machine learning pipeline with automated model selection, hyperparameter tuning, and ensemble methods for optimal performance across various datasets.",
      icon: Brain,
      technologies: ["Python", "TensorFlow", "PyTorch", "Ensemble Methods"],
      features: [
        "Automated model selection",
        "Hyperparameter optimization",
        "Ensemble method integration",
        "Cross-validation framework"
      ]
    },
    {
      title: "Big Data Analytics Platform",
      description: "Scalable big data processing platform using Hadoop and Spark for large-scale data analysis with real-time streaming capabilities and distributed computing.",
      icon: TrendingUp,
      technologies: ["Hadoop", "Apache Spark", "Scala", "Kafka"],
      features: [
        "Distributed data processing",
        "Real-time stream analytics",
        "Scalable architecture design",
        "Performance optimization"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of advanced data science and machine learning projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  <Github size={16} />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 border border-gray-400 hover:border-white text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
