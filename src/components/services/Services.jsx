import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/meeting.jpeg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web designing</h2>
          <p>
          Web design is the art of creating visually appealing and
           user-friendly websites.From layout 
           to navigation, web design plays a crucial role in showcasing a
            brand's identity and ensuring a seamless user journey. Whether
             for business or personal use, effective web design captivates online
              audiences and enhances digital interactions.
          </p>
         
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          Web development is the process of building and maintaining websites,
           focusing on the technical aspects of functionality and performance
           .From crafting robust 
           back-end systems to designing intuitive user interfaces, web development
            brings digital ideas to life.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Content Writing</h2>
          <p>
          Content writing is the art of creating engaging and informative written
           material for various mediums, such as websites, blogs, and social media.A well-crafted
             content strategy contributes to a compelling online presence and establishes
              a strong connection with readers.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Copywriting</h2>
          <p>
           Copywriting is the specialized skill of crafting persuasive
            written content specifically for marketing and advertising purposes. Effective copywriting is
               essential for driving conversions and maximizing the impact of marketing
                campaigns.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;