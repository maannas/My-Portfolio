import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Iphone 15 Website"
          description="My portfolio proudly features an innovative iPhone 15 website, meticulously crafted using Three.js and GSAP. Leveraging the power of Three.js, I brought the iconic device to life with stunning 3D visuals and seamless animations. GSAP further enhanced interactivity, enabling fluid transitions and captivating micro-interactions. Through a relentless focus on performance optimization and continuous iteration, this project showcases my commitment to pushing the boundaries of web development, delivering an immersive and memorable user experience."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Featured in my portfolio is the Manas Cypher AI website, a groundbreaking fusion of TensorFlow.js and React, redefining AI-driven web experiences. With TensorFlow.js, I've seamlessly integrated cutting-edge machine learning models into the browser, enabling real-time AI analysis and decision-making. Coupled with React's dynamic interface, users navigate effortlessly through intuitive AI-powered features, all while maintaining optimal performance and scalability. This project stands as a testament to my commitment to innovation, delivering an immersive and transformative user experience at the forefront of AI technology."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description=" mesmerizing space-themed website, crafted with the dynamic duo of Three.js and Framer Motion Animation, offering an immersive journey through the cosmos. With Three.js, I've conjured breathtaking 3D visuals, from swirling galaxies to majestic celestial bodies, transporting visitors to the outer reaches of the universe. Framer Motion Animation adds another layer of magic, infusing the experience with seamless transitions and captivating motion effects, ensuring a fluid and engaging exploration of the cosmos. This project epitomizes my passion for pushing the boundaries of web design, creating an unforgettable voyage through the wonders of space."
        />
      </div>
    </div>
  );
};

export default Projects;
