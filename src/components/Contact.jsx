import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import resumePDF from "../assets/ShantanuNewResume.pdf";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>

          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-[20px]'>
              Email
            </span>
            <p className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'>
              naithanishantanu4@gmail.com
            </p>
          </div>

          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-[20px]'>
              Phone
            </span>
            <p className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'>
              +91 7838065006
            </p>
          </div>

          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-[20px]'>
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/snaithani16/"
              target="_blank"
              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:text-blue-400'
            >
              Shantanu Naithani Linkedin
            </a>
          </div>

          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-[20px]'>
              GitHub
            </span>
            <a
              href="https://github.com/XultroN8130"
              target="_blank"
              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:text-purple-400'
            >
              Shantanu Naithani Github
            </a>
          </div>

          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-[20px]'>
              LeetCode Profile
            </span>
            <a
              href="https://leetcode.com/u/shantanu1607/"
              target="_blank"
              className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:text-yellow-400'
            >
              Shantanu Naithani Leetcode
            </a>
          </div>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = resumePDF;
              link.download = "Shantanu-Resume.pdf";
              link.click();
            }}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Download Resume
          </button>

        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
