import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { personal } from '../data/personal';
import Button from '../components/Button';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4 md:mb-5 text-slate-100">
            CONTACT<span className="text-acid-lime">.</span>
          </h2>

          <p className="text-xs text-slate-400 mb-5 md:mb-6 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a conversation about machine learning and technology.
            Feel free to reach out!
          </p>

          <div className="mb-5 md:mb-6 space-y-1.5 md:space-y-2">
            <p className="text-xs text-slate-300">
              <span className="text-acid-lime">Location:</span> {personal.location}
            </p>
            <p className="text-xs text-slate-300">
              <span className="text-acid-lime">Email:</span>{' '}
              <a
                href={`mailto:${personal.email}`}
                className="text-slate-300 hover:text-white transition-colors duration-200 decoration-acid-lime underline underline-offset-4"
              >
                {personal.email}
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Button
              href={`mailto:${personal.email}`}
              variant="primary"
              external
              icon={FaEnvelope}
              className="w-full sm:w-auto"
            >
              Send Email
            </Button>
            <Button
              href={personal.linkedin}
              variant="secondary"
              external
              icon={FaLinkedin}
              className="w-full sm:w-auto"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <p className="text-slate-500 mt-6 md:mt-8 text-xs">
            I typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
