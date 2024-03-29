// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Huu Hoang",
  middleName: "",
  lastName: "Tran",
  message: " Passionate about solving challenging problems and building life-changing products. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/TranHuuHoang",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/huu-hoang-tran-felix-b00a56176/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/tranhuuhoang.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/tranhuuhoang.png"),
  imageSize: 375,
  message:
    "A Full-stack Software Engineer with 2.5 years of experience. Passionate about solving challenges and exploring new technologies.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Github Projects",
  gitHubUsername: "tranhuuhoang", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/tranhuuhoang.png"), 
      label: "First slide label", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/tranhuuhoang.png"), 
      label: "Second slide label", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  programmingLanguages: [
    { name: "Python", value: 90 },
    { name: "Java", value: 75 },
    { name: "JavaScript", value: 90 },
    { name: "SQL/NoSQL", value: 75 },
    { name: "C/C++", value: 50 },
    { name: "HTML/CSS", value: 70 },
    { name: "GO lang", value: 50 },
    { name: "Scala", value: 50 },
  ],
  tools: [
    { name: "React", value: 85 },
    { name: "Redux", value: 75 },
    { name: "Flask", value: 85 },
    { name: "Docker", value: 60 },
    { name: "AWS", value: 60 },
    { name: "Spring Boot", value: 65 },
    { name: "NodeJS", value: 75 },
    { name: "Jenkins", value: 60 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for an opportunity as a Full-stack/Backend Software Engineer in Singapore! If you have any position available, or if you have any question, please feel free to email me at ",
  email: "thhoang1111999@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Assistant Vice President - Software Engineer II',// Here Add Company Name
      companylogo: require('../assets/img/boa.jpeg'),
      date: 'July 2021 – Present',
    },
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/boa.jpeg'),
      date: 'June 2020 – August 2020',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/infineon.jpeg'),
      date: 'August 2019 – December 2019',
    },
    {
      role: 'Junior Data Scientist Intern',
      companylogo: require('../assets/img/glints.png'),
      date: 'May 2019 – August 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
