"use client";
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import { getOurTeam, Person } from '@/components/person';
import Link from 'next/link';
import Image from 'next/image';

const OurTeam = () => {
  const [team, setTeam] = useState<Person[]>([]);

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
    <div className="w-full h-auto bg-white flex flex-col items-center mt-14">
      <div data-aos="zoom-out-right">
        <h1 className="font-semibold mb-6 sm:text-2xl xl:text-6xl md:text-4xl">OUR TEAM</h1>
      </div>
      <div data-aos="zoom-out-left">
        <p className='text-lg italic mb-8 text-center'>&quot;Alone we can do so little, together we can do so much.&quot; - <b>Helen Keller</b></p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-32 mt-4 mb-20">
        {team.map((person, index) => (
          <TeamMember key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

const jobTitles = ['Content Creator', 'Project Manager', 'Marketing Specialist', 'Designer', 'Developer'];

const TeamMember = ({ person }: { person: Person }) => {
  return (
    <div data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">

      <div className="flex flex-col items-center relative">
        <div className="relative">
          <Image
            src={person.picture.medium}
            alt={`${person.name.first} ${person.name.last}`}
            width={200} 
            height={200}
            className="w-48 h-48 rounded-full mb-6"
            style={{ maxWidth: '100%' }}
          />
          <div className="absolute inset-0 flex items-center justify-center -mb-28">
            <div className="flex ">
              <Link href='https://www.facebook.com/lsp.td/' className='icon w-8 h-8 text-white cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'><FaFacebookF /></Link>
              <Link href='https://www.instagram.com/lsp.td/?hl=en' className='icon w-8 h-8 text-white cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'><FaInstagram /></Link>
              <Link href='https://www.youtube.com/@LSPPmbEnergi-lz9jy' className='icon w-8 h-8 text-white cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-500'><FaGithub /></Link>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-2">{person.name.first} {person.name.last}</h2>
        <p className="text-gray-600 mb-1">{jobTitles[Math.floor(Math.random() * jobTitles.length)]}</p>
      </div>
    </div>
  );
};

export default OurTeam;
