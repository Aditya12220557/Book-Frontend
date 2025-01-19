
import PropTypes from 'prop-types';
import { ArrowUp } from 'lucide-react';

const StatCard = ({ value, label, prefix, suffix }) => (
  <div className="p-6">
    <div className="flex items-center space-x-1">
      {prefix && <ArrowUp className="text-orange-500 w-4 h-4" />}
      <span className="text-4xl font-bold text-gray-900">{value}</span>
      {suffix && <span className="text-4xl font-bold text-gray-900">{suffix}</span>}
    </div>
    <p className="mt-2 text-gray-600">{label}</p>
  </div>
);

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  prefix: PropTypes.bool,
  suffix: PropTypes.string
};

StatCard.defaultProps = {
  prefix: false,
  suffix: ''
};

const ProjectStats = () => {
  const stats = [
    {
      value: "70k",
      suffix: "+",
      label: "customers equipped — from DIY to major construction firms"
    },
    {
      value: "35",
      prefix: true,
      suffix: "%",
      label: "uptick in project efficiency with ScrewFast tools and services"
    },
    {
      value: "15.3",
      prefix: true,
      suffix: "%",
      label: "reduction in maintenance costs reported by long-term clients"
    },
    {
      value: "2",
      suffix: "x",
      label: "quicker assembly using innovative fastening solutions"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Testimonial */}
        <div className="space-y-6 p-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Fast-Track Your Projects
          </h2>
          <p className="text-gray-600">
            At ScrewFast, we ensure a swift start with instant account setup.
            Experience the speed of construction redefined.
          </p>
          
          <blockquote className="mt-8">
            <p className="text-xl italic text-gray-700">
              ScrewFast dramatically boosted our project efficiency.
              Setup was instant, and their rapid response times are
              phenomenal. Truly a game-changer in hardware and
              construction support!
            </p>
            
            <div className="mt-4 flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1668485968590-aff3717c1dbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww" 
                  alt="Profile" 
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Samantha Ruiz</p>
                <p className="text-gray-600 text-sm">
                  Chief Operating Officer | ConstructIt Inc.
                </p>
              </div>
            </div>
          </blockquote>
        </div>

        {/* Right side - Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;