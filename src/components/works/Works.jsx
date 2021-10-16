import { useState } from "react";
import arrow from "../../assets/arrow.png";
import "./works.scss";




export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "fas fa-school",
      title: "High School",
      course: "General Studies",
      year: "2014",
      name:
        "The Frank Anthony Public School",
      location:
        "Lajpat Nagar, New Delhi",
      board:
          "ICSE BOARD",
    },
    {
      id: "2",
      icon: "fas fa-school",
      title: "Senior Secondary School",
      course: "Science Stream",
      year: "2016",
      name:
        "Apeejay School",
      location:
        "Sheikh Sarai, New Delhi",
      board:
          "CBSE BOARD",
    },
    {
      id: "3",
      icon: "fas fa-graduation-cap",
      title: "Graduation",
      year:"2017-2021",
      course: "B.Tech in Computer Science",
      name:
        "Jamia Millia Islamia",
      location:
        "Jamia Nagar, New Delhi",
      board:
          "CENTRAL UNIVERSITY",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="education">
      <h1>Academics</h1>     
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
              <div class="item">
                        <i class={d.icon} id="icon"></i>
                        <h2>{d.title}</h2>
                        <h4>{d.course}</h4>
                        <h5>{d.year}</h5>
                        <h2>{d.name}</h2>
                        <div class="location">
                          <i class="fas fa-map-marker-alt"></i>
                            <span>{d.location}</span>
                        </div>
                        <span>{d.board}</span>
              </div>
            {/* <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div> */}
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}