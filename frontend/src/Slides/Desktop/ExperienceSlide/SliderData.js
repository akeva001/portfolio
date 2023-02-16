import NotflixLink from "../../../Assets/Images/Sites/ExternalLink.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
import RMateImage1 from "../../../Assets/Images/RMate/iPhone1.png";
import RMateImage2 from "../../../Assets/Images/RMate/iPhone2.png";
import RMateImage3 from "../../../Assets/Images/RMate/iPhone3.png";
import NotflixImage1 from "../../../Assets/Images/Notflix/Mac1.png";
import TopTier from "../../../Assets/Images/TopTier/TopTier.png";
import TopTier2 from "../../../Assets/Images/TopTier/TopTier2.png";
import FoodImage from "../../../Assets/Images/FoodRecipeEngine/Food.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import GithubImg from "../../../Assets/Images/Sites/Git.png";

export const SliderData = [
  {
    projectName: "Automotive Social Platform",
    projectDesc:
      "This is a social media platform for iOS/Android, specially made for automotive enthusiasts",
    projectType: "iOS/Android App",
    roles: ["Full Stack"],
    year: "  •  current project",
    image: null,
    image2: null,
    deviceImages: [TopTier2, TopTier],
    link2: [""],
    link: "",
    frontend: ["React Native", "Javascript", "CSS", "HTML"],
    backend: [
      "Firebase",
      "- Authentication",
      "- Database",
      "- Storage",
      "- Cloud Functions",
    ],
    imgStart: true,
  },
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
      "Given a dataset, we created a food recipe analysis engine. Users can find recipes for inspiration, search with different modes, find what ingredients go well with the given ingredients, and much more!",
    projectType: "Web App",
    roles: ["Front-end Developer"],
    year: "  •  2020",
    image: GithubImg,
    image2: null,
    deviceImages: [FoodImage],
    link2: "",
    link: "",
    frontend: ["ReactJS", "Javascript", "CSS", "HTML"],
    backend: ["Python", "Flask"],
    imgStart: true,
  },
];
export default SliderData;
