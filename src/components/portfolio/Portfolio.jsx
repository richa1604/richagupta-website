import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Front-end Website",
    img: "tindog.png",
    URL:"https://richa1604.github.io/TINDOG.github.io/",
    desc: "I built this website using HTML and CSS for the front end.It's a dog dating website that lets a user find perfect match for their dogs.",
  },
  {
    id: 2,
    title: "Nike Clone",
    img:"nike.png",
    URL:"https://nikedemo-4j8e.vercel.app/",
    desc: "I built this website using React for the landing page of nike website.It's a cloned landing page to demonstrate how a e-commerce landing page is made.",

  },
  {
    id: 3,
    title: "Plant Pulse",
    img:"plantpulse.png",
    desc: "I built this website using HTML and CSS for the front end.It's a website for an NGO that lets a user donate a certain type of plant and help in the plantation mission.",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="port-sec">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;