
import { User, MapPin, Phone, Mail, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fresh Computer Science graduate passionate about data science, machine learning, and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <User className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Profile</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a fresh Computer Science graduate with a strong foundation in programming and 
                a keen interest in data science and machine learning. Though new to the professional world, 
                I'm enthusiastic about learning advanced algorithms, statistical models, and big data technologies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="text-blue-400" size={18} />
                  <span>Sahaswaan, U.P. (India)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="text-blue-400" size={18} />
                  <span>+91639831045</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 md:col-span-2">
                  <Mail className="text-blue-400" size={18} />
                  <span>saket.mishra_cs22@gla.ac.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Learning Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Machine Learning Fundamentals</h4>
                    <p className="text-gray-400 text-sm">Learning algorithms like linear regression, decision trees, and neural networks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Statistical Analysis</h4>
                    <p className="text-gray-400 text-sm">Building foundation in statistics, probability, and data analysis techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Programming Skills</h4>
                    <p className="text-gray-400 text-sm">Developing expertise in Python, R, and data manipulation libraries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Academic Excellence</h4>
                    <p className="text-gray-400 text-sm">Strong academic background with focus on continuous learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
