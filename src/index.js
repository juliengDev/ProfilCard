import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const data = {
  id: 1,
  name: "Julien Gilbert",
  skills: [
    "HTML5",
    "CSS3",
    "SCSS",
    "JavaScript",
    "React",
    "Git and GitHub",
    "Jest",
    "Web Design",
  ],
  picture: "/profil.jpeg",
  description:
    "Front-End Junior web developer. When not coding, I like to hitting the gym, playing AAA video games and having deep meaningful conversation with my fiancée",
};
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#CB80B2",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#008F5C",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Node.js",
    level: "beginner",
    color: "#E42222",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="card">
      <Avatar img={data.picture} />
      <Name name={data.name} />
      <Description description={data.description} />
      {/* <Skill skills={data.skills} /> */}
      <SkillList />
    </div>
  );
}

function Avatar({ img }) {
  const alt = "Avatar picture";
  return <img className="avatar" src={img} alt={alt}></img>;
}
function Name({ name }) {
  return <h1>{name}</h1>;
}

function Description({ description }) {
  return (
    <section className="data">
      <p>{description}</p>
    </section>
  );
}

// #Coding #Challenge 2
function SkillList() {
  return (
    <ul className="skill-list" style={{ marginBottom: "24px" }}>
      {skills.map((skill, id) => (
        <Skill
          key={id}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </ul>
  );
}
function Skill({ skill, level, color }) {
  return (
    <li style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {" "}
        {level === "beginner" && "🌱"}
        {level === "intermediate" && "👾"}
        {level === "advanced" && "🚀"}
      </span>
    </li>
  );
}

// #Coding Challenge 1
// function Skill({ skills }) {
//   const randomBgColor = () => {
//     const predefinedColors = ["#ff0000", "#00a4e4", "#ffdd00", "#c1d82f"];
//     const randomIndex = Math.floor(Math.random() * predefinedColors.length);
//     return predefinedColors[randomIndex];
//   };

//   const randomEmoji = () => {
//     const emojiList = ["💪", "👍", "🔥", "🚀", "🐎"];
//     const randomIndex = Math.floor(Math.random() * emojiList.length);

//     return emojiList[randomIndex];
//   };

//   return (
//     <ul style={{ margin: "24px" }} className="skill-list ">
//       {skills.map((e, id) => {
//         return (
//           <li
//             style={{ backgroundColor: randomBgColor() }}
//             key={id}
//             className="skill"
//           >
//             {`${e} ` + randomEmoji()}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
