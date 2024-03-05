
import classes from "../../styles/home.module.css";
import landingImg from "../../public/landingblack.jpg";
import Image from "next/image";

const Home = () => {
  return (
   
      <div className=" mx-auto  h-screen  flex items-center">
        <div className="w-3/12 ">
          <div
            className="text-white font-black text-9xl flex flex-col "
            style={{ fontFamily: "protest" }}
          >
            <span className="text-left ml-7 ">NA</span>
            <span className={classes.text_second_piece}>VID</span>
            <span className={classes.text_third_piece}>JA</span>
            <span className={classes.text_forth_piece}>BERI</span>
          </div>
          <div className="text-white  ml-7 mt-11">
            <p className="text-lg" style={{ fontFamily: "Poppins" }}>
           Hello my name is Navid,<br/>A 26 years old frontend Developer.<br/>
            I like to craft solid and scalable frontend products with great user experiences.
            </p>
            <button className="border px-4 py-1 mt-5 rounded-3xl d-flex items-center text-blue-300 border-blue-300 hover:scale-105">
              read more
            </button>
          </div>
        </div>
        <div className="w-9/12 ">
          <div className="px-12 ">
            <Image src={landingImg} alt="landing"></Image>
          </div>
        </div>
      </div>

  );
};
export default Home;
