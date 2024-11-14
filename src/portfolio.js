/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lily Pad Plunge",
  description:
    "We are aiming to design and build a physical arcade-style game that offers an engaging and interactive experience for players. Inspired by a claw machine, our game will feature a frog that users can maneuver left and right, aiming to drop it onto moving lily pads.",
  og: {
    title: "Lily Pad Plunge",
    type: "website",
    url: "https://lilypadplunge.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Lily Pad Plunge",
  logo_name: "AlphaKappas",
  nickname: "THE ALPHA KAPPA CLASS",
  subTitle:
    "We are aiming to design and build a physical arcade-style game that offers an engaging and interactive experience for players. This features a frog that users can maneuver and aimi to drop it onto moving lily pads.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ttalphakappa/website_/tree/main",
  githubProfile: "https://github.com/ttalphakappa",
};

const socialMediaLinks = [
  {
    name: "Gmail",
    link: "mailto:ttalphakappa@gmail.com",
    //fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    // backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Leaderboard:",
      fileName: "game",
      skills: ["⚡⚡⚡ first place", "⚡⚡ second place", "⚡ third place"],
      softwareSkills: [
        {
          skillName: "leaderboard",
          fontAwesomeClassname:
            "fa:material-symbols:social-leaderboard-outline",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /**{
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
    },**/
  ],
};

const degrees = {
  degrees: [
    {
      title: "The Arduino",
      //subtitle: "Kevin, Jeannine, Porter, Megan, Tayler, Tyler and Riley",
      //logo_path: "iiitk_logo.png",
      //alt_name: "IIITDM Kurnool",
      //duration: "Phase 1",
      descriptions: [
        "⚡ We utilized Arduino's useful components that made our ideas come to life. Breadboards, LCD, servomotors, Arduino Mega, and much more were use to make this machine possible. Everything ran through our Arduino Mega (code, wiring, power) and voltage is provided to the motors through external 9V batteries. ",
      ],

      //website_link: "http://iiitk.ac.in",
    },
    {
      title: "The Input Buttons",
      //subtitle: "fhjfjf fjef",
      //logo_path: "iu_logo.png",
      //alt_name: "Indiana University Bloomington",
      //duration: "2021 - 2023",
      descriptions: [
        "⚡There are 5 bottom, two to move the gantry forward and back, another two to move it left and right, and the last button is to start the game and drop the frog. We code with the Arduino IDE program to make the motors rotate to our specific standard. We had to adjust the voltage to rotate quicker and its sensitivity to move instantly whenever the buttons are pressed (preventing any delays). The last button, used to drop the frog, is assigned to wind the frog down and rewind back up.",
      ],
      //website_link: "https://www.indiana.edu/",
    },
    {
      title: "The Code",
      //subtitle: "fhjfjf fjef",
      //logo_path: "iu_logo.png",
      //alt_name: "Indiana University Bloomington",
      //duration: "2021 - 2023",
      descriptions: [
        "⚡The setup function initializes the game’s hardware components by attaching four servos (xServo, yServo, dropServo, and lilyPadServo) to specific pins to control physical movement, and it sets up the LCD to display game information. It also configures button pins as inputs, meaning each button—directional, drop button, and scoring buttons —stays HIGH until pressed, which allows it to detect button presses as LOW signals. The loop function handles the game’s ongoing logic, continuously checking if the game has started and reading button inputs to move the servos and display updated information on the LCD. For movement, the directional buttons adjust the X and Y servos to control horizontal and vertical angles, while pressing the drop button activates dropServo for a dropping action. When all drops are used, the game stops, displays GAME OVER! on the LCD, and resets if the drop button is pressed again.",
      ],
      //website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
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
    },*/
  ],
};

// Timeline Page
const experience = {
  title: "Timeline",
  subtitle: "the progress of our engineering project",
  description: "10/20 - 11/13",
  header_image_path: "wireeboard.png",
  sections: [
    {
      title: "Week 1: 10/20 - 10/27",
      work: true,
      experiences: [
        {
          title: "10/20 - 10/23",
          logo_path: "wdd.png",
          description:
            "Brainstormed potential ideas. Bought materials from Amazon and Home Depot. Created CAD designs for all parts",
          color: "#000000",
        },
        {
          title: "10/24 - 10/27",
          logo_path: "laser.png",
          description: "Laser cut the wood and printed on our name",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Week 2: 10/28 - 11/02",
      experiences: [
        {
          title: "10/28",
          logo_path: "fix.png",
          description:
            "Built the skeleton for the machine by super glueing the pieces together. Cut dividers and slits. Made pseudo code for game logic and moving.",
          color: "#000000",
        },
        {
          title: "10/29 - 10/31",
          logo_path: "motors.png",
          description:
            "Tested DC motors and was able to make it turn properly. Implemented buttons to Arduino. Started the conveyer belt.",
          color: "#ee3c26",
        },
        {
          title: "11/01 - 11/02",
          logo_path: "kevinco.jpeg",
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
          logo_path: "gantrymech.png",
          description:
            "Programmed the Arduino. Tested the DC motor with the gantry system, but it was too weak + switched to servo motors.",
          color: "#4285F4",
        },
        {
          title: "11/05",
          logo_path: "froogy.png",
          description:
            "Began designing the website and distributed which parts every member can do.",
          color: "#D83B01",
        },
        {
          title: "11/06 - 11/07",
          logo_path: "codeardui.png",
          description: "Finalized code for Arduino. Connected wheels to axel.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Week 4: 11/08 - 11/13",
      experiences: [
        {
          title: "11/08 - 11/09",
          logo_path: "built.png",
          description:
            "Finished our prototype. Debugged all issues. Soldered all wires to ensure nothing would move.",
          color: "#4285F4",
        },
        {
          title: "11/10 - 11/11",
          logo_path: "paint.png",
          description:
            "Finished painting wood. Added pictures of frogs and lily pads to match with the game.",
          color: "#D83B01",
        },
        {
          title: "11/12 - 11/13",
          logo_path: "computer.png",
          description: "Added all pictures of parts. Finished the website.",
          color: "#000000",
        },
      ],
    },
  ],
};

// about the team page
const projectsHeader = {
  title: "About The Team",
  description: "Meet the team behind Lily Pad Plunge!",
  avatar_image_path: "images/group.png",
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
    profile_image_path: "gantry.png",
    profile_image_path2: "gantry.png",
    description:
      "The gantry system is made using a wheel and belt system. A 3D printed pin is placed within two rails which acts as a housing unit for the motor and pulley. Each rail is attached to its own belt allowing for movement along the x and y axis. Through this mechanism users are able to move the frog to their desired location and lower the frog to hopefully hit a moving lilypad.  ",
  },
  blogSection: {
    title: "Servo Motors",
    subtitle:
      "The servo motors act as the main functional assistant for our project, being the strength behind moving our gantry system and our lily-pads. Each axis of the gantry system is connected to a belt, which is in turn attached to a servo motor that makes it move. The lili-pads are attached to the same type of belt, which we revamped into a track, allowing the lily-pads to move along the x-axis.",
    avatar_image_path: "servo.png",
  },
  addressSection: {
    title: "Pulley System",
    subtitle:
      "The pulley system functions using a servo motor. It is programmed to a separate button on the control console, which drops the frog once pressed. The frog drops and once it lands on the ground, the pulley pulls it back up.",
    avatar_image_path: "gantrymech.png",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

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
