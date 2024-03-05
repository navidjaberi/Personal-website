const { Fragment } = require("react");
const About = () => {
  return (

      <div className=" mx-auto h-screen text-white">
        <div>
        <div className="flex items-center justify-center">
          <div className="w-1/5 h-0.5 bg-white"></div>
          <h1 className="text-4xl px-4 py-2 "  style={{ fontFamily: "protest" }}> About Me</h1>
          <div className="w-1/5 h-0.5 bg-white"></div>
          </div>
          <div className="w-3/6 mx-auto text-lg leading-8 mt-5">
          <p>
            Welcome to my corner of the web! I'm Navid, a passionate 26-year-old
            software engineer hailing from the beautiful land of Iran. With
            nearly three years of experience under my belt, I specialize in
            crafting captivating digital experiences as a frontend developer.</p>
            
             <p>My journey in the realm of technology has been nothing short of
            exhilarating. I thrive on bringing visions to life, whether it's
            designing sleek websites or developing robust web applications.
            Armed with my expertise in JavaScript and proficiency in frameworks
            like Vue.js, Nuxt.js, React.js, and Next.js, I pride myself on
            creating responsive user interfaces that seamlessly adapt to any
            device.</p>
            <p> But my skills extend beyond coding. I have a keen eye for
            design, thanks to my background in UI/UX, Adobe Photoshop, and
            Figma. This enables me to not only build functional websites but
            also ensure they are aesthetically pleasing and user-friendly.
            Additionally, my stint as a WordPress designer has equipped me with
            the ability to tailor content management systems to suit diverse
            needs. When I'm not immersed in lines of code or refining design
            elements, you can find me exploring the latest tech trends, honing
            my skills, or simply soaking in the beauty of nature. My mission is
            to continue pushing boundaries, creating innovative solutions, and
            making a meaningful impact in the digital landscape.
          </p>
          </div>
        </div>
      </div>

  );
};
export default About;
