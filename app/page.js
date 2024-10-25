
import Image from "next/image";
import Link from "next/link";
import DP from "@/public/images/Emdadul-Haque.png"
import codingBoy from "@/public/images/coding-boy.png"
import css from "@/public/style/style.css";
import getAllSkills from "@/lib/getAllSkills";
import getAllProjects from "@/lib/getAllProjects";




export default async function Home() {

  const skills = await getAllSkills();
  const projects = await getAllProjects();






  return (
    <main>


      {/* ***Intro*** */}
      <h1 id="intro" className="mt-20 text-6xl font-extrabold text-center ms-50 animate-jump-in animate-once animate-ease-out hover:text-white">Welcome</h1>
      <div className="justify-between mx-auto mt-10 lg:flex">
        <div className="relative flex items-center justify-center w-1/3">
          <div className="absolute bg-blue-700 rounded-full lg:w-64 lg:h-64"></div>
          <div className="avatar">
            <div className="rounded-full hover:w-72 hover:duration-1000 ring-primary ring-offset-blue-700 ring ring-offset-2">
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
        <div className="w-2/3">
          <p className="mt-10 animate-once animate-ease-out animate-fade-down hover:text-white">An enthusiastic recent graduate with a strong foundation in web development and a passion for creating captivating user experiences. <br /> Leveraging proficiency in JavaScript, HTML, CSS, React JS, Bootstrap, Tailwind, responsive design, and Git, I aspire to contribute my skills <br /> to a dynamic team. Through my internship experience as a sales team member at a lead generation company, I gained <br /> valuable insights into the latest technologies,<br /> software, and corporate culture. Eager to apply my technical expertise, I am dedicated to collaborating on innovative <br /> projects that make a meaningful impact.</p>
          {/* <p className="mt-5 hover:text-white">Want to know more??</p> */}
          {/* <div className="down-arrow"></div> */}
          {/* <Link href="#" className="mt-5 text-blue-700 border-blue-700 btn btn-outline hover:bg-blue-700">Click Here</Link> */}
        </div>
      </div>

      {/* ***Skills*** */}
      <div id="skills">
        <h1 className="mt-20 text-6xl font-extrabold text-center hover:text-white animate-jump-in animate-once animate-ease-out">Skills</h1>
        <div className="mt-10 lg:flex lg:flex-grow animate-fade-down animate-once animate-ease-out">
          <div className="w-1/3">
            <p className="pt-20 mt-5 text-3xl text-center hover:text-white">How I can add value to a company</p>
            <Image src={codingBoy} alt="coding boy"></Image>
          </div>
          <div className="w-2/3 gap-3 md:grid md:grid-cols-4">
            {
              skills.map(skill => <div key={skill.id}>
                <div className="p-10 w-50 h-50 rounded-xl">
                  <h1 className="mb-2 text-2xl hover:text-white">{skill.title}</h1>
                  <p className="hover:text-white">{skill.description}</p>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>


      {/* ***Recent Works*** */}
      <div id="recent-works">
        <h1 className="mt-20 text-6xl font-extrabold text-center hover:text-white animate-jump-in animate-once animate-ease-out">
          Recent Works
        </h1>
        <div className="justify-center mt-10 animate-fade-down animate-once animate-ease-out">
          {projects.map((project) => (
            <div
              key={project.id}
              tabIndex={project.id}
              className="mb-5 border border-blue-700 rounded-xl"
            >
              <div className="text-xl font-extrabold collapse-title hover:text-white">
                {project.title}
              </div>
              <div className="ms-4">
                <div>
                  <p className="mb-2 hover:text-white">
                    <b>Description:</b> {project.description}
                  </p>
                  <p className="hover:text-white">
                    <b>Technology Used:</b> {project.technologies}
                  </p>
                  <div className="flex mt-5">
                    <p className="mt-3 hover:text-white me-2">
                      Do you want to see Code?
                    </p>
                    <Link
                      className="text-blue-700 border-blue-700 btn btn-outline hover:bg-blue-700"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      Click Here
                    </Link>
                  </div>
                  <div className="flex mt-5">
                    <p className="mt-3 hover:text-white me-2">
                      Do you want to go to the live link?
                    </p>
                    <Link
                      className="mb-5 text-blue-700 border-blue-700 btn btn-outline hover:bg-blue-700"
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
        <h1 className="mt-20 text-6xl font-extrabold text-center hover:text-white animate-jump-in animate-once animate-ease-out">Experience</h1>

        <p className="mt-10 mb-5 text-center animate-fade-down animate-once animate-ease-out hover:text-white">Inspite of having passion to be a programmer, I had to work in a couple of differnent positions for different companies</p>
        <div tabIndex={0} className="border border-b-0 border-blue-700 animate-fade-down animate-once animate-ease-out collapse collapse-plus">
          <div className="text-xl font-medium collapse-title hover:text-white">Daraz Bangladesh  (7 November, 2023 - 2 February, 2024)</div>
          <div className="collapse-content">
            <h1 className="mb-3 text-xl hover:text-white">IT - Support & Services</h1>
            <h2 className="text-lg hover:text-white">Key Responsibilities:</h2>
            <br />
            <ul className="list-disc ms-3">
              <li className="hover:text-white">Identifying and troubleshooting issues with office Laptops/desktops, LAN Cables, IT server and CCTV rack etc.</li>
              <li className="hover:text-white">Maintenance the server of a specific zone.</li>
              <li className="hover:text-white">Supporting network team for ensuring consistent connectivity of Internet in office.</li>
              <li className="hover:text-white">Setting up and solving common issues of common software used by employees.</li>
              <li className="hover:text-white">Helping system team in maintaining valuable Databases.</li>
              <li className="hover:text-white">Keeping  up-to-date with trends in IT industry.</li>
            </ul>
          </div>
        </div>

        <div tabIndex={0} className="border border-blue-700 collapse collapse-plus bg-base animate-fade-down animate-once animate-ease-out">
          <div className="text-xl font-medium collapse-title hover:text-white">Aggressive ROI Sdn. Bhd.  (9 March 2023 - 26 July 2023)</div>
          <div className="collapse-content">
            <h1 className="mb-3 text-xl hover:text-white">Digital Sales Solution Provider</h1>
            <h2 className="text-lg hover:text-white">Key Responsibilities:</h2>
            <br />
            <ul className="list-disc ms-3">
              <li className="hover:text-white">Created and maintained LinkedIn profiles to get outbound leads for Aggressive ROI Sdn. Bhd.</li>
              <li className="hover:text-white">Identified and reached out to potential clients through LinkedIn and other channels, such as email and phone.</li>
              <li className="hover:text-white">Assisted the sales team with administrative tasks, such as creating and updating client lists, scheduling meetings, and tracking client interactions</li>
              <li className="hover:text-white">Analyzed data from LinkedIn and other sources to measure the success of outreach efforts and made recommendations for improvement.</li>
              <li className="hover:text-white">Participated in training and professional development opportunities to improve sales skills and knowledge of LinkedIn and social media marketing.</li>
              <li className="hover:text-white">Keeping  up-to-date with trends in digital marketing.</li>
            </ul>
          </div>
        </div>
      </div>




      {/* ***Education*** */}
      <div id="education">
        <h1 className="mt-20 text-6xl font-extrabold text-center hover:text-white animate-jump-in animate-once animate-ease-out">Education</h1>

        {/* ***bsc*** */}
        <div className="justify-center gap-6 mt-10 mb-5 animate-fade-down animate-once animate-ease-out md:grid md:grid-flow-col">
          <div className="border border-blue-700 card w-96">
            <div className="card-body">
              <h2 className=" card-title hover:text-white">Bachelor In Science Certificate (BSC)</h2>
              <p className="text-xl hover:text-white">American International University - Bangladesh (AIUB)</p>
              <p className="text-lg hover:text-white">Computer Science & Engineering (CSE)</p>
              <div className="flex">
                <p className="hover:text-white">2019-2023</p>
                <p className="hover:text-white">CGPA: 3.57</p>
              </div>
            </div>
          </div>

          {/* ***hsc*** */}
          <div className="border border-blue-700 animate-fade-down animate-once animate-ease-out card w-96">
            <div className="card-body">
              <h2 className="card-title hover:text-white">Higher Secondary Certificate (HSC)</h2>
              <p className="text-xl hover:text-white">Safiuddin Sarker Academy & College</p>
              <p className="text-lg hover:text-white">Science</p>
              <div className="flex">
                <p className="hover:text-white">2018</p>
                <p className="hover:text-white">GPA: 3.58</p>
              </div>
            </div>
          </div>


          {/* ***ssc*** */}
          <div className="border border-blue-700 animate-fade-down animate-once animate-ease-out card w-96">
            <div className="card-body">
              <h2 className="card-title hover:text-white">Secondary School Certificate (SSC)</h2>
              <p className="text-xl hover:text-white">Safiuddin Sarker Academy & College</p>
              <p className="text-lg hover:text-white">Science</p>
              <div className="flex">
                <p className="hover:text-white">2015</p>
                <p className="hover:text-white">GPA: 5.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
