import { motion } from "framer-motion";

function Footer() {

  return (

    <footer 
    className="bg-gray-900 text-white py-10"
    aria-label="Website footer"
    >


      <motion.div

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.6
        }}

        viewport={{
          once:true
        }}

        className="max-w-7xl mx-auto px-6"

      >



        <div className="grid md:grid-cols-3 gap-8">



          {/* BRAND */}

          <div aria-label="NorthPeak information">

            <h2 className="text-2xl font-bold">
              NorthPeak
            </h2>


            <p className="text-gray-300 mt-3 leading-relaxed">
              Building modern websites and digital experiences
              with clean design and scalable solutions.
            </p>


          </div>






          {/* SERVICES */}

          <div aria-label="Services offered">


            <h3 className="font-bold mb-3">
              Services
            </h3>


            <ul className="text-gray-200 space-y-2">


              <li className="hover:text-white transition">
                Frontend Development
              </li>


              <li className="hover:text-white transition">
                React Applications
              </li>


              <li className="hover:text-white transition">
                UI Engineering
              </li>


              <li className="hover:text-white transition">
                Website Optimization
              </li>


            </ul>


          </div>







          {/* CONTACT */}

          <div aria-label="Contact information">


            <h3 className="font-bold mb-3">
              Contact
            </h3>


            <p className="text-gray-300">
              Let's discuss your next project.
            </p>


            <p className="text-gray-300 mt-2">
              Get in touch through the contact form.
            </p>

            <p className="text-sm text-gray-500 mt-4">
  Built for{" "}
  <a
    href="https://digitalheroesco.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Digital Heroes Training Task
  </a>
</p>
          </div>




        </div>







        <div className="
        border-t
        border-gray-700
        mt-8
        pt-6
        text-center
        text-gray-300
        ">

          <span aria-hidden="true">©</span> 2026 NorthPeak. All rights reserved.

        </div>



      </motion.div>


    </footer>

  );
}


export default Footer;