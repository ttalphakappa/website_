/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lily Pad Plunge",
  description: "We are aiming to design and build a physical arcade-style game that offers an engaging and interactive experience for players. Inspired by a claw machine, our game will feature a frog that users can maneuver left and right, aiming to drop it onto moving lily pads",
  og: {
    title: "Lily Pad Plunge",
    type: "website",
    url: "https://lilypadplunge.netlify.app/home",
  },
};

//Home Page
const greeting = {
  title: "The Alpha Kappas",
  logo_name: "AlphaKappas",
  nickname: "BY: THE ALPHA KAPPA PLEDGE CLASS",
  subTitle: "We are aiming to design and build a physical arcade-style game that offers an engaging and interactive experience for players. Featuring a frog that users can maneuver, aiming to drop it onto moving lily pads",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ttalphakappa/website_/tree/main",
  githubProfile: "https://github.com/ttalphakappa",
};

const socialMediaLinks = [
  {
    name: "Gmail",
    link: "mailto:ttalphakappa@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Mechanics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ gantry system",
        "⚡ servo motors",
        "⚡ pulley system",
      ],
      softwareSkills: [
        {
          skillName: "gears",
          fontAwesomeClassname: "fa:gears",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
      ],
   }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};


 // Timeline Page
 const experience = {
   title: "Timeline",
   subtitle: "the progress of our engineering project",
   description:
     "10/20 - 11/13",
   header_image_path: "wireboard.png",
   sections: [
     {
       title: "Week 1: 10/20 - 10/27",
       work: true,
       experiences: [
         {
           title: "10/20 - 10/23",
           //company: "lots of cading, figuring out",
           //company_url: "https://www.tiktok.com/en/",
           logo_path: "Unknown.png",
           //duration: "June 2023 - Present",
           //location: "San Jose, CA, USA",
           description:
             "Brainstormed potential ideas. Bought materials from Amazon and Home Depot. Created CAD designs for all parts",
           color: "#000000",
         },
         {
           title: "10/24 - 10/27",
           //company: "Legato Health Technology",
           //company_url: "https://legatohealthtech.com/",
           logo_path: "legato_logo.png",
           //duration: "June 2020 - Aug 2021",
           //location: "Hyderabad, Telangana",
           description:"Laser cut the wood and printed on our name",
           color: "#0879bf",
         },
       ],
     },
     {
       title: "Week 2: 10/28 - 11/02",
       experiences: [
         {
           title: "10/28",
           //company: "TikTok Inc.",
           //company_url: "https://www.tiktok.com/en/",
           logo_path: "tiktok_logo.png",
           //duration: "May 2022 - Aug 2022",
           //location: "San Francisco, USA",
           description:
             "Built the skeleton for the machine by super glueing the pieces together. Cut dividers and slits. Made pseudo code for game logic and moving.",
           color: "#000000",
         },
         {
           title: "10/29 - 10/31",
           //company: "Delhivery Pvt. Ltd.",
           //company_url: "https://www.delhivery.com/",
           logo_path: "delhivery_logo.png",
           //duration: "May 2019 - Sept 2019",
           //location: "Gurgaon, Haryana",
           description:
             "Tested DC motors and was able to make it turn properly. Implemented buttons to Arduino. Started the conveyer belt.",
           color: "#ee3c26",
         },
         {
           title: "11/01 - 11/02",
           //company: "Intel Indexer LLC",
           //company_url: "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
           logo_path: "intel_logo.jpg",
           //duration: "Nov 2018 - Dec 2018",
           //location: "Work From Home",
           description:
             "Mapped out website. Started learning how to use HTML, CSS, Javascript and Git.",
           color: "#0071C5",
         },
       ],
     },
     {
       title: "Week 3: 11/03 - 11/07",
       experiences: [
         {
           title: "11/03 - 11/04",
          //company: "Google",
           //company_url: "https://about.google/",
           logo_path: "google_logo.png",
          //duration: "June 2019 - April 2020",
           //location: "Hyderabad, Telangana",
           description:
             "Programmed the Arduino. Tested the DC motor with the gantry system, but it was too weak + switched to servo motors.",
           color: "#4285F4",
         },
         {
           title: "11/05",
           //company: "Microsoft",
           //company_url: "https://www.microsoft.com/",
           logo_path: "microsoft_logo.png",
           //duration: "Aug 2019 - May 2020",
           //location: "Hyderabad, Telangana",
           description:
             "Began designing the website and distributed which parts every member can do.",
           color: "#D83B01",
         },
         {
           title: "11/06 - 11/07",
           //company: "Mozilla",
           //company_url: "https://www.mozilla.org/",
           logo_path: "mozilla_logo.png",
           //duration: "Oct 2019 - May 2020",
           //location: "Kurnool, Andhra Pradesh",
           description:
             "Finalized code for Arduino. Connected wheels to axel. ",
           color: "#000000",
         },
       ],
     },
     {
      title: "Week 4: 11/08 - 11/13",
      experiences: [
        {
          title: "11/08 - 11/09",
          //company: "Google",
         // company_url: "https://about.google/",
          logo_path: "google_logo.png",
          //duration: "June 2019 - April 2020",
          //location: "Hyderabad, Telangana",
          description:
            "Finished our prototype. Debugged all issues. Soldered all wires to ensure nothing would move.",
          color: "#4285F4",
        },
        {
          title: "11/10 - 11/11",
          //company: "Microsoft",
          //company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          //duration: "Aug 2019 - May 2020",
          //location: "Hyderabad, Telangana",
          description:
            "Finished painting wood. Added pictures of frogs and lily pads to match with the game.",
          color: "#D83B01",
        },
        {
          title: "11/12 - 11/13",
          //company: "Mozilla",
          //company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          //duration: "Oct 2019 - May 2020",
          //location: "Kurnool, Andhra Pradesh",
          description:
            "Added all pictures of parts. Finished the website.",
          color: "#000000",
        },
      ],
    },
   ],
 };

// about the team page
const projectsHeader = {
title: "About The Team",
description:
"Meet the team behind Lily Pad Plunge.",
 avatar_image_path: "group-photo.jpg",
};

 const publicationsHeader = {
   title: "Publications",
   description: "Some of my published Articles, Blogs and Research.",
   avatar_image_path: "projects_image.svg",
 };

 const publications = {
   data: [
     {
       id: "neuro-symbolic-sudoku-solver",
       name: "Neuro-Symbolic Sudoku Solver",
       createdAt: "2023-07-02T00:00:00Z",
       description: "Paper published in KDD KiML 2023",
       url: "https://arxiv.org/abs/2307.00653",
     },
     {
       id: "mdp-diffusion",
       name: "MDP-Diffusion",
       createdAt: "2023-09-19T00:00:00Z",
       description: "Blog published in Paperspace",
       url: "https://blog.paperspace.com/mdp-diffusion/",
     },
     {
       id: "consistency-models",
       name: "Consistency Models",
       createdAt: "2023-10-12T00:00:00Z",
       description: "Blog published in Paperspace",
       url: "https://blog.paperspace.com/consistency-models/",
     },
   ],
 };
 // mechanics page
const contactPageData = {
  contactSection: {
    title: "The Gantry System",
    profile_image_path: "animated_ashutosh.png",
    description:
      "the gantry system..........",
  },
  blogSection: {
    title: "Servo Motors",
    subtitle:
      "servo motors.......",
    avatar_image_path: "blogs_image.svg"
  },
  addressSection: {
    title: "Pulley System",
    subtitle: "the pulley system........",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
}

 export {
 settings,
 seo,
 greeting,
 socialMediaLinks,
 skills,
 competitiveSites,
 degrees,
 certifications,
 experience,
 projectsHeader,
 publicationsHeader,
 publications,
 contactPageData,
};
