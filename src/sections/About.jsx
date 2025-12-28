import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-5 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            🧠 About Me
          </h2>
          
          <div className="space-y-2.5 md:space-y-3 text-sm text-slate-400 leading-relaxed">
            <p>
              I'm an MCA student with a passion for machine learning and artificial intelligence. 
              Currently working as a Machine Learning Engineer Intern at SkillPark, where I'm 
              applying my knowledge to real-world projects and continuously learning from 
              industry experts.
            </p>
            
            <p>
              I have hands-on experience with traditional machine learning algorithms including 
              Support Vector Machines (SVM), Logistic Regression, and K-Nearest Neighbors (KNN). 
              These foundational techniques have helped me understand the core principles of 
              pattern recognition and classification problems.
            </p>
            
            <p>
              Currently, I'm expanding my expertise into deep learning, focusing on Convolutional 
              Neural Networks (CNN) and Recurrent Neural Networks (RNN). I'm fascinated by how 
              these architectures can learn complex patterns from data and solve problems that 
              were previously challenging for traditional ML approaches.
            </p>
            
            <p className="text-cyan-400/90 font-medium">
              Based in Idukki, Kerala, I'm building a strong foundation in both theoretical 
              concepts and practical implementation, preparing myself for a career in AI and 
              machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
