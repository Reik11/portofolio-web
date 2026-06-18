import styles from "./TechStack.module.css";

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", invert: false },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", invert: false },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", invert: false },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", invert: true },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", invert: false },
];

export default function TechStack() {
  return (
    <section id="techstack" className={`section ${styles.techSection}`}>
      <div className="container">
        <h2 className="section-title">Tech <span>Stack</span></h2>
        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <div key={index} className={`glass ${styles.card}`}>
              <div className={styles.iconPlaceholder}>
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} logo`} 
                  className={tech.invert ? styles.invertIcon : ""} 
                  width="40" 
                  height="40" 
                />
              </div>
              <h3 className={styles.techName}>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
