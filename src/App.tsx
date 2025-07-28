import React, { useState, useEffect } from 'react';

// Icon components (simplified SVG icons)
const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Skill icons (simplified representations)
const SkillIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 animate-fade-in">
    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-2">
      {icon}
    </div>
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can integrate with email service here)
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const skills = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Jenkins', icon: '⚙️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Git', icon: '📝' },
    { name: 'Ansible', icon: '📋' },
    { name: 'Prometheus', icon: '📊' },
    { name: 'Grafana', icon: '📈' },
    { name: 'ELK Stack', icon: '🔍' }
  ];

  const projects = [
    {
      title: 'CI/CD Pipeline with Jenkins & Docker',
      description: 'Automated deployment pipeline for microservices architecture using Jenkins, Docker, and Kubernetes.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Python'],
      github: 'https://github.com/anurag/ci-cd-pipeline',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Infrastructure as Code with Terraform',
      description: 'Multi-environment AWS infrastructure provisioning with Terraform modules and automated deployment.',
      technologies: ['Terraform', 'AWS', 'CloudFormation', 'Ansible'],
      github: 'https://github.com/anurag/terraform-aws-infrastructure',
      demo: 'https://infrastructure.example.com'
    },
    {
      title: 'Monitoring & Observability Stack',
      description: 'Complete monitoring solution using Prometheus, Grafana, and ELK stack for containerized applications.',
      technologies: ['Prometheus', 'Grafana', 'ElasticSearch', 'Logstash', 'Kibana'],
      github: 'https://github.com/anurag/monitoring-stack',
      demo: 'https://monitoring.example.com'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: '☁️'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      icon: '⚓'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      icon: '🏗️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-400">Anurag Sharma</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Anurag</span>{' '}
            <span className="text-blue-400">Sharma</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            DevOps & Cloud Engineer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable infrastructure, automating deployments, 
            and optimizing cloud environments for high-performance applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slide-up">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate DevOps and Cloud Engineer with over 5 years of experience in designing, 
                implementing, and maintaining scalable cloud infrastructure. My expertise spans across 
                AWS, Kubernetes, Docker, and various automation tools.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I believe in the power of automation and infrastructure as code to create reliable, 
                efficient, and cost-effective solutions. My goal is to bridge the gap between 
                development and operations teams, enabling faster and more reliable software delivery.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not working on infrastructure, you can find me contributing to open-source 
                projects, learning about new cloud technologies, or sharing knowledge with the DevOps community.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Experience</span>
                    <span className="font-semibold">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cloud Deployments</span>
                    <span className="font-semibold">100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Certifications</span>
                    <span className="font-semibold">3+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slide-up">Skills & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <SkillIcon key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slide-up">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors animate-fade-in">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slide-up">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center animate-fade-in">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">{cert.name}</h3>
                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                <p className="text-gray-400">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-slide-up">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new opportunities, interesting projects, 
                or just having a chat about DevOps and cloud technologies.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:anurag.sharma@example.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <EmailIcon />
                  <span>anurag.sharma@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/anuragsharma"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/anuragsharma"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="/resume.pdf"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  download
                >
                  <DownloadIcon />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Anurag Sharma. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;