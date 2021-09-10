// Skills Icons
import androidIcon from "./images/android.svg"
import springIcon from "./images/spring-boot.svg"
import awsIcon from "./images/aws.svg"
import dockerIcon from "./images/docker.svg"
import pythonIcon from "./images/python.svg"
import jiraIcon from "./images/jira.svg"
import postmanIcon from "./images/postman.svg"
import gitIcon from "./images/git.svg"
import javaIcon from "./images/java.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Yash",
  displayPicture: "https://i.ibb.co/ZdBdcSy/1630838996654.jpg",
  headerTagline: [
    //Line 1 For Header
    "An engineer who",
    //Line 2 For Header
    "codes, designs and leads",
    //Line 3 For Header
    "with Tech",
  ],
  //   Header Paragraph
  headerParagraph:
    "Drop an email with your queries",

  //Contact Email
  contactEmail: "ydeshmukh0093@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Company website", //Project Title - Add Your Project Title Here
      para:
        "Company profile and details", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/t4Xkcnq/undraw-Website-builder-re-ii6e.png",
      //Project URL - Add Your Project Url Here
      url: "https://svirtz.com",
    },
    {
      title: "Emotion Based music player", //Project Title - Add Your Project Title Here
      para:
        "A music player that recognises your emotions and plays accordingly", // Add Your description Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/yashsdeshmukh/Emotifyo.git",
    },
    {
      title: "Spam Filtering", //Project Title - Add Your Project Title Here
      para:
        "An application NLP to filter emails", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.ibb.co/Dpj5pvC/undraw-Filing-system-re-56h6.png",
      //Project URL - Add Your Project Url Here
      url: "https://share.streamlit.io/warrenferns/spam-filtering/main/main.py",
    },
    {
      title: "Food Khazana", //Project Title - Add Your Project Title Here
      para:
        "Food Khazana finds amazing recipes you can make, right now, with the ingredients you already have at home", // Add Your Service Type Here
      //Project Image - Add Your Description type here
      imageSrc:
        "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=1hAPeXlfvLc",
    },
    {
      title: "DiscLink", //Project Title - Add Your Project Title Here
      para:
        "A discussion forum", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      "https://i.ibb.co/pXXf21d/undraw-In-sync-re-jlqd.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/warrenferns/DiscLink",
    },
    {
      title: "Algorithms", //Project Title - Add Your Project Title Here
      para:
        "A repo with my Java programs", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/yashsdeshmukh/AOA_JavaPrograms.git",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a student of computer science who believes in using tech for the good",
  aboutParaTwo:
    "I am a curious and persistent person with a knack of interpersonal skills, I have experience in working on enterprise grade code and understand the process of development",
  aboutParaThree:
    "I have the capacity to manifest thoughts into reality",
  aboutImage:
    "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: javaIcon,
    },
    {
      img: androidIcon,
    },
    {
      img: springIcon,
    },
    {
      img: dockerIcon,
    },
    {
      img: gitIcon,
    },
    {
      img: awsIcon,
    },
    {
      img: pythonIcon,
    },
    {
      img: jiraIcon,
    },
    {
      img: postmanIcon,
    },
    
  ],

  // End Skills Section --------------------------

  //   Background Section --------------------------

  backgroundHeading: "Background",
  Designation:"Software Engineering Intern",
  Company:"Svirtz Technology solutions",
  backgroundPara1: "Designing and developing enterprise application for the Android platform. Adopting Agile methodology for managing the development of the project and leading the Android Team.",
  backgroundPara2: "Designing and developing the official website for the company from scratch single handed",
  backgroundPara3: "Responsible for overlooking the user experience and identifying issues with software under development",
  
  // End Background Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create our next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { 
      img: githubIcon, url: "https://github.com/yashsdeshmukh" 
    },
  ],

  // End Contact Section ---------------
}
