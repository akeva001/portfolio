import NotflixLink from "../../../Assets/Images/Sites/ExternalLink.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
import RMateImage1 from "../../../Assets/Images/RMate/iPhone1.png";
import RMateImage2 from "../../../Assets/Images/RMate/iPhone2.png";
import RMateImage3 from "../../../Assets/Images/RMate/iPhone3.png";
import NotflixImage1 from "../../../Assets/Images/Notflix/Mac1.png";
import FoodImage from "../../../Assets/Images/FoodRecipeEngine/Food.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";

export const SliderData = [
  {
    projectName: "Notflix",
    projectDesc:
      "Netflix/Youtube hybrid web app. IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
    projectType: "Web App",
    roles: ["Front-end Developer"],
    image: NotflixLink,
    deviceImages: [NotflixImage1],
    link2: ["https://github.com/kadey001/Notflix"],
    link: "https://notflix.tech",
    imgStart: true,
  },
  {
    projectName: "Food Recipe",
    projectDesc:
      "Search food recipies. IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
    projectType: "Web App",
    roles: ["Front-end Developer"],
    deviceImages: [FoodImage],
    imgStart: true,
  },
];
export default SliderData;
