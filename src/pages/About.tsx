import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Target, Clock, Star } from 'lucide-react';
import LaxmiImage from './Laxmi.png'; 
import Auto from './project.jpg'

export const About: React.FC = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Rathoure Automobiles was established with a vision to revolutionize the automotive industry.'
    },
    
    {
      year: '2025',
      title: 'Digital Innovation',
      description: 'Launched our comprehensive digital platform for seamless customer experience.'
    },
  ];

  const values = [
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service and product offerings.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Customer First',
      description: 'Every decision we make is centered around enhancing customer satisfaction.'
    },
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      title: 'Innovation',
      description: 'Continuously evolving to meet the changing needs of the automotive market.'
    }
  ];

  const team = [
    {
      name: 'Laxmi Rathour',
      role: 'Founder & CEO',
      image :LaxmiImage,
      description: 'Visionary leader with over 10 years in the automotive industry.'
    },
    {
      name: 'Sachin Rathour',
      role: 'Sales Director',
      description: 'Expert in luxury vehicle sales and customer relationship management.'
    },

    {
      name: 'Uncle Rathour',
      role: 'Finance Manager',
      description: 'Specialist in automotive financing and insurance solutions.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Rathour Automobiles</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Where Innovation Meets the Road - Your trusted partner for premium automobiles and exceptional service since 2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2023 by Laxmi Rathour, Rathour Automobiles began as a small family business with a big vision: to revolutionize the automotive buying experience by combining luxury, innovation, and customer-first service.
                </p>
  
                <p>
                  Today, we continue to push boundaries, embracing new technologies and sustainable practices while maintaining the personal touch that has made us a trusted name in the automotive industry.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src = {Auto}
                alt="Our showroom"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our success
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};