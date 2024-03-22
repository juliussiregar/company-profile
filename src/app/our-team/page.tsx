"use client"
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getOurTeam, Person } from '@/components/person';

const OurTeam = () => {
  const [team, setTeam] = useState<Person[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = await getOurTeam(); 
        setTeam(teamData.results);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-white flex flex-col items-center"
    >
      <h1 className="text-3xl font-semibold mb-6">OUR TEAM</h1>
      <p className='text-lg italic mb-8 text-center'>"Alone we can do so little, together we can do so much." - <b>Helen Keller</b></p>
      <div className="grid grid-cols-3 gap-4">
        {team.map((person, index) => (
          <TeamMember key={index} person={person} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const jobTitles = ['Developer', 'Designer', 'Marketing Specialist', 'Project Manager', 'Content Creator'];

const TeamMember = ({ person, index }: { person: Person, index: number }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center relative"
    >
      <div className="relative">
        <motion.img
          src={person.picture.medium}
          alt={`${person.name.first} ${person.name.last}`}
          className="w-40 h-40 rounded-full mb-6 profile-image"
          whileHover={{ filter: 'brightness(0.7)' }}
        />
        {inView && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.5 }}>
                <FaGithub className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.5 }}>
                <FaInstagram className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.5 }}>
                <FaFacebookF className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
      <motion.h2
        className="text-lg font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {person.name.first} {person.name.last}
      </motion.h2>
      <p className="text-gray-600 mb-1">{jobTitles[index % jobTitles.length]}</p>
    </motion.div>
  );
};

export default OurTeam;
