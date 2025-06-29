import { Trophy, Medal, Award, Calendar, MapPin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Xceed & Carnivals Coordinator",
      organization: "CTF - CEG",
      date: "2024",
      description: "Successfully coordinated technical events and carnivals, managing teams and ensuring smooth execution of cybersecurity competitions.",
      category: "Leadership",
      icon: Trophy
    },
    {
      title: "1st Place - Web Development Hackathon",
      organization: "TechFest 2024",
      date: "March 2024",
      description: "Won first place in a 24-hour hackathon for developing an innovative e-commerce solution with advanced features.",
      category: "Competition",
      icon: Medal
    },
    {
      title: "Cybersecurity Challenge Winner",
      organization: "CyberSec Competition",
      date: "February 2024",
      description: "Secured top position in a cybersecurity challenge involving penetration testing and ethical hacking scenarios.",
      category: "Competition",
      icon: Award
    },
    {
      title: "Best Technical Paper Award",
      organization: "IEEE Student Conference",
      date: "January 2024",
      description: "Received recognition for research paper on 'Machine Learning Applications in Cybersecurity'.",
      category: "Academic",
      icon: Award
    },
    {
      title: "Student Ambassador",
      organization: "Microsoft Student Partners",
      date: "2023-2024",
      description: "Represented Microsoft technologies on campus, organized workshops and mentored fellow students.",
      category: "Leadership",
      icon: Trophy
    },
    {
      title: "CodeChef 3-Star Rating",
      organization: "CodeChef",
      date: "December 2023",
      description: "Achieved 3-star rating on CodeChef platform through consistent problem-solving and algorithmic challenges.",
      category: "Programming",
      icon: Medal
    }
  ];

  const AchievementCard = ({ achievement }) => (
    <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
          <achievement.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {achievement.title}
            </h3>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900 px-3 py-1 rounded-full">
              {achievement.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {achievement.organization}
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span>{achievement.date}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="gradient-text">Achievements</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Recognition and accomplishments from hackathons, competitions, and leadership roles 
              that demonstrate my skills and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Achievement Statistics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">6</div>
                <p className="text-gray-600 dark:text-gray-400">Achievements</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <p className="text-gray-600 dark:text-gray-400">Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2</div>
                <p className="text-gray-600 dark:text-gray-400">Leadership Roles</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements; 