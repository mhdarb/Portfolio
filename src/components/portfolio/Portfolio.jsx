import { useEffect, useState } from "react";
import AboutMe from "../aboutMe/AboutMe";
import Family from "../family/Family";
import New from "../new/New";
import PersonalInfo from "../personalInfo/PersonalInfo";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";


export default function Portfolio() {
    const [selected, setSelected] = useState("PersonalInfo");
    //const [data, setData] = useState([]);
    const[component,setComponent]=useState([]);

    const list = [
        {
          id: "personalInfo",
          title: "Personal Info",
        },
        {
          id: "aboutMe",
          title: "About Me",
        },
        {
          id: "family",
          title: "Family",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];
    useEffect(() => {
        switch (selected) {
            case "PersonalInfo":
              setComponent("PersonalInfo");
              break;
            case "aboutMe":
              setComponent("AboutMe");
              break;
            case "family":
              setComponent("Family");
              break;
            // case "mobile":
            //   setComponent(mobilePortfolio);
            //   break;
            // case "design":
            //   setComponent(designPortfolio);
            //   break;
            // case "content":
            //   setComponent(contentPortfolio);
            //   break;
            default:
              setComponent("PersonalInfo");
          }
        }, [selected]);
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) =>(
                        <PortfolioList title={item.title} 
                        active={selected === item.id}//if selected == selected item
                        setSelected = {setSelected} 
                        id = {item.id}
                     />
                ))}
            </ul>
            <div className="container">
                {/* {data.map((d) =>(
                    <div className="item">
                     <img 
                        src={d.img}
                         alt="" 
                     />
                     <h3>{d.title}</h3>
                    </div>
                ))} */}
                
                {component==="PersonalInfo"?<PersonalInfo/>:<New/>}
                {component==="Family"?<Family/>:<New/>}
                {component==="AboutMe"?<AboutMe/>:<New/>}
            </div>
        </div>
    );
}
