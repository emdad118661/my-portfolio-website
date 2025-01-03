"use client"
import Image from "next/image";
import Link from "next/link";
import DP from "@/public/images/Emdadul-Haque.png"
import codingBoy from "@/public/images/coding-boy.png"
import css from "@/public/style/style.css";
import { Typewriter } from 'react-simple-typewriter';
import skills from "@/public/API/skills.json";
import projects from "@/public/API/projects.json";
import facebook from "@/public/images/facebook.png";
import github from "@/public/images/github.png";
import LinkedIn from "@/public/images/linkedin.png";
import CV from "@/public/images/cv.png";
import { use, useEffect } from "react";
import { gsap } from "gsap";



export default function Home() {

  useEffect(() => {
    gsap.to(".borderwala", {
      borderColor: "blue",
      duration: 2,
      delay: 1,
      repeat: -1,
      yoyo: true, // Reverse animation to switch back to the original color
      ease: "power1.inOut", // Smooth transition
    })
  }, []);



  return (
    <main>

      {/* ***Intro*** */}
      <h1 id="intro" className="mt-20 text-4xl font-extrabold text-center ms-50 animate-jump-in animate-once animate-ease-out hover:text-blue-700"> Hi,
        <Typewriter
          words={[' I am Emdadul Haque']}
          loop={0} // 0 for infinite loop
          typeSpeed={100} // Typing speed (ms per character)
          deleteSpeed={50} // Deleting speed (ms per character)
          delaySpeed={1000} // Pause before deleting/looping
        />
      </h1>
      <div className="justify-between mx-auto mt-10 lg:flex">
        <div className="relative flex items-center justify-center w-1/4">
          <div className="absolute bg-blue-700 rounded-full lg:w-64 lg:h-64"></div>
          <div className="avatar">
            <div className="rounded-full ring-primary ring-offset-blue-700 ring ring-offset-2">
              <Image
                className="relative px-2 mt-5 rounded-full animate-once animate-ease-out animate-fade-down bottom-2"
                src={DP}
                alt="DP"
                quality={100}
                height={250}
                width={250}
              />
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <p className="mt-10 animate-once animate-ease-out animate-fade-down hover:text-blue-700">An enthusiastic recent graduate with a strong foundation in web development and a passion for creating captivating user experiences. Leveraging proficiency in JavaScript, HTML, CSS, React JS, Next JS, Bootstrap, Tailwind, responsive design, and Git, I aspire to contribute my skills to a dynamic team. Through my internship experience as an Application Support at a online shopping platform, I gained valuable insights into the latest technologies, software, and corporate culture. Eager to apply my technical expertise, I am dedicated to collaborating on innovative projects that make a meaningful impact.</p>
          <div className="mt-10 md:flex md:gap-4">
            <Link href="./EMDADUL HAQUE-CV.pdf" target="_blank">
              <div className="flex items-center justify-center border borderwala border-white md:w-[200px] md:h-[60px] rounded-xl mb-5 md:mb-0">
                <Image className="ms-2" src={CV} alt="" width={40} height={40}></Image>
                <h1 className="mx-auto mt-5 mb-5 text-center hover:text-blue-700 whitespace-nowrap ">Download My CV</h1>
              </div>
            </Link>
            <Link href="https://github.com/emdad118661" target="_blank">
              <div className="flex items-center justify-center border borderwala border-white md:w-[180px] md:h-[60px] rounded-xl mb-5 md:mb-0">
                <Image className="ms-2" src={github} alt="" width={40} height={40}></Image>
                <h1 className="mx-auto mt-5 mb-5 text-center hover:text-blue-700 whitespace-nowrap ">My Github</h1>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/emdadul-haque-700691180/" target="_blank">
              <div className="flex items-center justify-center border borderwala border-white md:w-[180px] md:h-[60px] rounded-xl mb-5 md:mb-0">
                <Image className="ms-2" src={LinkedIn} alt="" width={40} height={40}></Image>
                <h1 className="mx-auto mt-5 mb-5 text-center hover:text-blue-700 whitespace-nowrap ">My LinkedIn</h1>
              </div>
            </Link>
            <Link href="https://www.facebook.com/imdadulhaq.speaking/" target="_blank">
              <div className="flex items-center justify-center border borderwala border-white md:w-[180px] md:h-[60px] rounded-xl mb-5 md:mb-0">
                <Image className="ms-2" src={facebook} alt="" width={40} height={40}></Image>
                <h1 className="mx-auto mt-5 mb-5 text-center hover:text-blue-700 whitespace-nowrap ">My Facebook</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ***Skills*** */}
      <div id="skills">
        <h1 className="mt-20 text-4xl font-extrabold text-center hover:text-blue-700 animate-jump-in animate-once animate-ease-out">S
          <Typewriter
            words={['kills']}
            loop={0} // 0 for infinite loop
            typeSpeed={100} // Typing speed (ms per character)
            deleteSpeed={50} // Deleting speed (ms per character)
            delaySpeed={1000} // Pause before deleting/looping
          />
        </h1>
        <div className="mt-10 lg:flex lg:flex-grow animate-fade-down animate-once animate-ease-out">
          <div className="gap-8 md:ms-24 md:grid md:grid-cols-4">
            {
              skills.map(skill => <div className="mb-5 md:mb-0" key={skill.id}>
                <div className="flex items-center justify-center border borderwala border-white md:w-[250px] md:h-[70px] rounded-xl">
                  <Image className="ms-2" src={skill.image} alt="" width={40} height={40}></Image>
                  <h1 className="mx-auto mt-5 mb-4 text-center hover:text-blue-700 whitespace-nowrap ">{skill.title}</h1>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>


      {/* ***Recent Works*** */}
      <div id="recent-works">
        <h1 className="mt-20 text-4xl font-extrabold text-center hover:text-blue-700 animate-jump-in animate-once animate-ease-out">
          R
          <Typewriter
            words={['ecent Works']}
            loop={0} // 0 for infinite loop
            typeSpeed={100} // Typing speed (ms per character)
            deleteSpeed={50} // Deleting speed (ms per character)
            delaySpeed={1000} // Pause before deleting/looping
          />
        </h1>
        <div className="justify-center mt-10 animate-fade-down animate-once animate-ease-out">
          {projects.map((project) => (
            <div
              key={project.id}
              tabIndex={project.id}
              className="mb-5 border border-white borderwala rounded-xl"
            >
              <div className="text-xl font-extrabold collapse-title hover:text-blue-700 ">
                {project.title}
              </div>
              <div className="ms-4">
                <div>
                  <p className="mb-2 hover:text-blue-700">
                    <b>Description:</b> {project.description}
                  </p>
                  <p className="hover:text-blue-700">
                    <b>Technology Used:</b> {project.technologies}
                  </p>
                  <div className="flex mt-5">
                    <p className="mt-3 hover:text-blue-700 me-2">
                      Do you want to see Code?
                    </p>
                    <Link
                      className="text-white borderwala border-white-700 btn btn-outline hover:bg-blue-700"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      Click Here
                    </Link>
                  </div>
                  <div className="flex mt-5">
                    <p className="mt-3 hover:text-blue-700 me-2">
                      Do you want to go to the live link?
                    </p>
                    <Link
                      className="mb-5 text-white border-white-700 btn btn-outline borderwala hover:bg-blue-700"
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      Click Here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* ***Experience*** */}
      <div id="experience">
        <h1 className="mt-20 text-4xl font-extrabold text-center hover:text-blue-700 animate-jump-in animate-once animate-ease-out">E
          <Typewriter
            words={['xperience']}
            loop={0} // 0 for infinite loop
            typeSpeed={100} // Typing speed (ms per character)
            deleteSpeed={50} // Deleting speed (ms per character)
            delaySpeed={1000} // Pause before deleting/looping
          />
        </h1>
        <div tabIndex={0} className="mt-10 border border-b-0 borderwala border-white-700 animate-fade-down animate-once animate-ease-out collapse collapse-plus">
          <div className="text-xl font-medium collapse-title hover:text-blue-700 ">Daraz Bangladesh  (7 November, 2023 - 2 February, 2024)</div>
          <div className="collapse-content">
            <h1 className="mb-3 text-xl hover:text-blue-700">Application - Support</h1>
            <h2 className="text-lg hover:text-blue-700">Key Responsibilities:</h2>
            <br />
            <ul className="list-disc ms-3">
              <li className="hover:text-blue-700">Identifying and troubleshooting error and bugs of the application.</li>
              <li className="hover:text-blue-700">Understanding requirements from QA team.</li>
              <li className="hover:text-blue-700">Supporting application developer team to implement new features</li>
              <li className="hover:text-blue-700">Developing UI from figma file made by UI/UX designer team.</li>
              <li className="hover:text-blue-700">API integration</li>
              <li className="hover:text-blue-700">Keeping  up-to-date with trends in Software industry.</li>
            </ul>
          </div>
        </div>

        <div tabIndex={0} className="border border-white borderwala collapse collapse-plus bg-base animate-fade-down animate-once animate-ease-out">
          <div className="text-xl font-medium collapse-title hover:text-blue-700 ">Aggressive ROI Sdn. Bhd.  (9 March 2023 - 26 July 2023)</div>
          <div className="collapse-content">
            <h1 className="mb-3 text-xl hover:text-blue-700">Digital Sales Solution Provider</h1>
            <h2 className="text-lg hover:text-blue-700">Key Responsibilities:</h2>
            <br />
            <ul className="list-disc ms-3">
              <li className="hover:text-blue-700">Created and maintained LinkedIn profiles to get outbound leads for Aggressive ROI Sdn. Bhd.</li>
              <li className="hover:text-blue-700">Identified and reached out to potential clients through LinkedIn and other channels, such as email and phone.</li>
              <li className="hover:text-blue-700">Assisted the sales team with administrative tasks, such as creating and updating client lists, scheduling meetings, and tracking client interactions</li>
              <li className="hover:text-blue-700">Analyzed data from LinkedIn and other sources to measure the success of outreach efforts and made recommendations for improvement.</li>
              <li className="hover:text-blue-700">Participated in training and professional development opportunities to improve sales skills and knowledge of LinkedIn and social media marketing.</li>
              <li className="hover:text-blue-700">Keeping  up-to-date with trends in digital marketing.</li>
            </ul>
          </div>
        </div>
      </div>




      {/* ***Education*** */}
      <div id="education">
        <h1 className="mt-20 text-4xl font-extrabold text-center hover:text-blue-700 animate-jump-in animate-once animate-ease-out">E
          <Typewriter
            words={['ducation']}
            loop={0} // 0 for infinite loop
            typeSpeed={100} // Typing speed (ms per character)
            deleteSpeed={50} // Deleting speed (ms per character)
            delaySpeed={1000} // Pause before deleting/looping
          />
        </h1>

        {/* ***bsc*** */}
        <div className="mt-10 mb-5 md:gap-6 me-3 animate-fade-down animate-once animate-ease-out md:grid md:grid-flow-col">
          <div className="border border-white borderwala card">
            <div className="card-body">
              <h2 className=" card-title hover:text-blue-700">Bachelor In Science Certificate (BSC)</h2>
              <p className="text-xl hover:text-blue-700">American International University - Bangladesh (AIUB)</p>
              <p className="text-lg hover:text-blue-700">Computer Science & Engineering (CSE)</p>
              <div className="flex">
                <p className="hover:text-blue-700">2019-2023</p>
                <p className="hover:text-blue-700">CGPA: 3.57</p>
              </div>
            </div>
          </div>

          {/* ***hsc*** */}
          <div className="mt-5 border border-white borderwala md:mt-0 animate-fade-down animate-once animate-ease-out card">
            <div className="card-body">
              <h2 className="card-title hover:text-blue-700 ">Higher Secondary Certificate (HSC)</h2>
              <p className="text-xl hover:text-blue-700">Safiuddin Sarker Academy & College</p>
              <p className="text-lg hover:text-blue-700">Science</p>
              <div className="flex">
                <p className="hover:text-blue-700">2018</p>
                <p className="hover:text-blue-700">GPA: 3.58</p>
              </div>
            </div>
          </div>


          {/* ***ssc*** */}
          <div className="mt-5 border border-white borderwala md:mt-0 animate-fade-down animate-once animate-ease-out card">
            <div className="card-body">
              <h2 className="card-title hover:text-blue-700 ">Secondary School Certificate (SSC)</h2>
              <p className="text-xl hover:text-blue-700">Safiuddin Sarker Academy & College</p>
              <p className="text-lg hover:text-blue-700">Science</p>
              <div className="flex">
                <p className="hover:text-blue-700">2015</p>
                <p className="hover:text-blue-700">GPA: 5.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
