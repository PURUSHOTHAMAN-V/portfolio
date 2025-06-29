import { Award, ExternalLink, Calendar, Download } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Programming",
      provider: "Coursera",
      date: "December 2024",
      description: "Comprehensive Python programming course covering data structures, algorithms, and web development.",
      image: "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_1",
      downloadUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_ID_1/view",
      category: "Programming"
    },
    {
      title: "Web Development Bootcamp",
      provider: "Udemy",
      date: "November 2024",
      description: "Full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js.",
      image: "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_2",
      downloadUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_ID_2/view",
      category: "Web Development"
    },
    {
      title: "Cybersecurity Fundamentals",
      provider: "Cisco Networking Academy",
      date: "October 2024",
      description: "Introduction to cybersecurity concepts, threats, and protection mechanisms.",
      image: "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_3",
      downloadUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_ID_3/view",
      category: "Cybersecurity"
    },
    {
      title: "React.js Advanced Concepts",
      provider: "freeCodeCamp",
      date: "September 2024",
      description: "Advanced React concepts including hooks, context, and performance optimization.",
      image: "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_4",
      downloadUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_ID_4/view",
      category: "Web Development"
    },
    {
      title: "Database Management",
      provider: "edX",
      date: "August 2024",
      description: "Database design, SQL, and management systems including MySQL and PostgreSQL.",
      image: "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID_5",
      downloadUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_ID_5/view",
      category: "Database"
    }
  ];

  const categories = ["All", "Programming", "Web Development", "Cybersecurity", "Database"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="gradient-text">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional certifications and courses that demonstrate my commitment to continuous learning 
              and skill development in various technology domains.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Certificate Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Certificate</p>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full mb-3">
                      {cert.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.provider}
                    </p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <a
                      href={cert.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                    <a
                      href={cert.downloadUrl}
                      download
                      className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certification Statistics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5</div>
                <p className="text-gray-600 dark:text-gray-400">Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <p className="text-gray-600 dark:text-gray-400">Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">200+</div>
                <p className="text-gray-600 dark:text-gray-400">Hours of Learning</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Completion Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Add Certificates */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              How to Add Your Certificates
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Google Drive Integration
                </h3>
                <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Upload your certificate to Google Drive
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Right-click and select "Get link"
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Copy the file ID from the URL
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Replace YOUR_GOOGLE_DRIVE_ID in the code
                  </li>
                </ol>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Manual Upload
                </h3>
                <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Place certificate images in public folder
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Update the image paths in the code
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Add certificate details to the array
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Deploy and test the functionality
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications; 