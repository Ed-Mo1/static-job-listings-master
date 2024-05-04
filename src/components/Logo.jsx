import photosnap from "../assets/images/photosnap.svg";
import manage from "../assets/images/manage.svg";
import account from "../assets/images/account.svg";
import myhome from "../assets/images/myhome.svg";
import loop_studios from "../assets/images/loop-studios.svg";
import faceit from "../assets/images/faceit.svg";
import shortly from "../assets/images/shortly.svg";
import insure from "../assets/images/insure.svg";
import eyecam_co from "../assets/images/eyecam-co.svg";
import the_air_filter_company from "../assets/images/the-air-filter-company.svg";

const Logo = ({ logo }) => {
  const getPhoto = (logo) => {
    switch (logo) {
      case "photosnap":
        return photosnap;
      case "manage":
        return manage;
      case "account":
        return account;
      case "myhome":
        return myhome;
      case "loop-studios":
        return loop_studios;
      case "faceit":
        return faceit;
      case "shortly":
        return shortly;
      case "insure":
        return insure;
      case "eyecam-co":
        return eyecam_co;
      case "the-air-filter-company":
        return the_air_filter_company;
      default:
        return null;
    }
  };
  logo = getPhoto(logo);
  return <img src={logo} className="w-full" alt="logo" />;
};

export default Logo;
