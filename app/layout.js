import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { FaMobile, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Emdadul Haque | Portfolio",
  description: "Generated by Emdadul Haque",
};



export default function RootLayout({ children }) {

  // navbar options 
  const options = <>
    <li className="hover:text-blue-700 "><Link href="#skills">Skills</Link></li>
    <li className="hover:text-blue-700 "><Link href="#recent-works">Recent Works</Link></li>
    <li className="hover:text-blue-700 "><Link href="#experience">Experience</Link></li>
    <li className="hover:text-blue-700 "><Link href="#education">Education</Link></li>
  </>

  return (
    <html lang="en">
      {/* I have used gredient on background */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-r from-black via-blue-900 via-50% to-black overflow-x-hidden`}
      >

        <div className="text-white">
          {/* ***navbar*** */}
          <div className="fixed top-0 left-0 z-50 bg-gradient-to-r from-black via-blue-900 via-50% to-black w-full animate-fade-down animate-once animate-ease-out navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2">
                  {options}
                </ul>
              </div>
              <a href="#intro" className="text-xl font-extrabold hover:text-blue-700">EMDADUL HAQUE</a>
            </div>
            <div className="hidden navbar-center lg:flex">
              <ul className="px-1 menu menu-horizontal">
                {options}
              </ul>
            </div>
            <div className="navbar-end">
              <Link href="#contact" className="mt-5 text-white border-white borderwala btn btn-outline hover:bg-blue-700">Contact Me</Link>
            </div>
          </div>

          {/* ***main part*** */}
          <div className="px-5 pt-10 md:px-20">
            {children}
          </div>

          {/* ***footer & contact me*** */}
          <footer id="contact" style={{position: 'relative', isolation: 'isolate', }} className="w-full p-10 text-white bg-blue-700 footer footer-center">
          <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'transparent',
            zIndex: 10,
            pointerEvents: 'auto', // Allow footer interactions
            mixBlendMode: 'normal', // Mask snowfall
          }}
        />
            <aside className="font-bold">
              CONTACT ME
              <p className="font-bold">
                EMDADUL HAQUE
              </p>
              <p className="flex"><FaMobile className="mt-0.5 w-5 me-0.5" />+8801746653632
              </p>
              <p className="flex"><MdEmail className="mt-0.5 w-5 me-0.5" />emdad118661@gmail.com</p>
            </aside>
            <nav>
              <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/emdad118661" target="_blank"
                  rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 14 14" className="fill-current">
                    <path d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/emdadul-haque-700691180/" target="_blank"
                  rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24" className="fill-current">
                    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/imdadulhaq.speaking/" target="_blank"
                  rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
