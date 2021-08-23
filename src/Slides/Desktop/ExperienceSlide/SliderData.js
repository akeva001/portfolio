import NotflixLink from "../../../Assets/Images/Sites/ExternalLink.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
import RMateImage1 from "../../../Assets/Images/RMate/iPhone1.png";
import RMateImage2 from "../../../Assets/Images/RMate/iPhone2.png";
import RMateImage3 from "../../../Assets/Images/RMate/iPhone3.png";
import NotflixImage1 from "../../../Assets/Images/Notflix/Mac1.png";
import FoodImage from "../../../Assets/Images/FoodRecipeEngine/Food.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import GithubImg from "../../../Assets/Images/Sites/Git.png";

export const SliderData = [
  {
    projectName: "Notflix",
    projectDesc:
      "For my Senior Design project, we built a Netflix/Youtube hybrid web app. Notflix is a Netflix clone with added features; allowing users to upload movies and shows, as well as comment on all content.",
    projectType: "Web App",
    roles: ["Front-end Developer"],
    year: "  •  2021",
    image: NotflixLink,
    image2: GithubImg,
    deviceImages: [NotflixImage1],
    link2: ["https://github.com/kadey001/Notflix"],
    link: "https://notflix.tech",
    frontend: ["ReactJS", "Javascript", "CSS", "HTML"],
    backend: ["Postgres", "ExpressJS/Node", "Typescript", "HDFS", "Pyspark"],
    imgStart: true,
  },
  {
    projectName: "Ramsay",
    projectDesc:
      "Search food recipies. IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
    projectType: "Web App",
    roles: ["Front-end Developer"],
    year: "  •  2020",
    image: GithubImg,
    image2: null,
    deviceImages: [FoodImage],
    link2: "",
    link: "https://github.com/ucr-cs180-fall20/cs180project-022-team-gordon-ramsay",
    frontend: ["ReactJS", "Javascript", "CSS", "HTML"],
    backend: ["Python", "Flask"],
    imgStart: true,
  },
];
export default SliderData;
