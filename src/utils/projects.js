import supportTeachers from "../assets/support_teachers.png";
import getOut from "../assets/get_out.png";

export const PROJECTS = [
  {
    id: 100,
    name: "Support Teachers",
    codeUrl: "https://github.com/SorinGabriel02/teachers-spa",
    liveUrl: "",
    imageSrc: supportTeachers,
    details: `This app was created to help parents who have children with special needs and are looking for information on how to include their child into a general school. 
    There is also a news section where new articles can be posted by the admin. 
    You can sign up and post comments and questions if you want. 
    It was build with ReactJS, ExpressJS, NodeJS and MongoDB.`,
  },
  {
    id: 101,
    name: "Get Out",
    imageSrc: getOut,
    codeUrl: "https://github.com/SorinGabriel02/raven",
    liveUrl: "https://soringabriel02.github.io/raven/",
    details:
      "I built this app using ReactJS and the Yelp API and it allows users look for any type of business in a certain area. Results can be sorted by rating, number of reviews and the best match. Clicking on any picture of a business will take you the Yelp page where you can see business details.",
  },
];
