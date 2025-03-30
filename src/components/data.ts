export type GalleryDataType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const galleryData: GalleryDataType[] = [
  {
    id: 1,
    title: "Inauguration Ceremony",
    description: "A photograph capturing the opening ceremony with dignitaries lighting the traditional lamp and addressing the audience.",
    imageUrl: "/images/inauguration.jpg"
  },
  {
    id: 2,
    title: "Keynote Speech",
    description: "An image showcasing a prominent speaker delivering a keynote address to a packed auditorium.",
    imageUrl: "/images/keynote_speech.jpg"
  },
  {
    id: 3,
    title: "Workshops in Progress",
    description: "Snapshots of participants engaging in hands-on activities during various technical workshops.",
    imageUrl: "/images/workshops.jpg"
  },
  {
    id: 4,
    title: "Project Exhibitions",
    description: "Photos displaying innovative projects and models created by students, with attendees exploring and discussing the exhibits.",
    imageUrl: "/images/project_exhibition.jpg"
  },
  {
    id: 5,
    title: "Coding Competitions",
    description: "Images capturing intense moments from hackathons or coding challenges, with participants focused on their screens.",
    imageUrl: "/images/coding_competition.jpg"
  },
  {
    id: 6,
    title: "Robotics Demonstrations",
    description: "Pictures of robotic models designed by students performing tasks or competing in challenges.",
    imageUrl: "/images/robotics_demo.jpg"
  },
  {
    id: 7,
    title: "Panel Discussions",
    description: "Photographs of expert panels discussing emerging technologies, with audience members engaging in Q&A sessions.",
    imageUrl: "/images/panel_discussion.jpg"
  },
  {
    id: 8,
    title: "Cultural Performances",
    description: "Images highlighting cultural events such as dance or music performances that are part of the tech fest's entertainment segment.",
    imageUrl: "/images/cultural_performance.jpg"
  },
  {
    id: 9,
    title: "Award Ceremony",
    description: "Photos capturing the moment winners receive certificates and trophies for various competitions held during the fest.",
    imageUrl: "/images/award_ceremony.jpg"
  },
  {
    id: 10,
    title: "Networking Sessions",
    description: "Snapshots of students, faculty, and industry professionals interacting and exchanging ideas during informal networking breaks.",
    imageUrl: "/images/networking_session.jpg"
  }
];

export default galleryData;
