import { motion } from "framer-motion";

const highlights = [
  {
    title: "Responsive Websites",
    category: "Frontend Development",
    description:
      "Building clean and responsive interfaces that work smoothly across different devices.",
    number: "01",
  },
  {
    title: "React Applications",
    category: "Modern Web Development",
    description:
      "Creating interactive applications using reusable components and scalable solutions.",
    number: "02",
  },
  {
    title: "User Focused Design",
    category: "UI Engineering",
    description:
      "Designing simple and accessible experiences with focus on usability.",
    number: "03",
  },
];


function Testimonials() {

  return (

    <section id="results" className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-14">


          <p className="
          text-blue-600
          font-semibold
          uppercase
          tracking-[0.25em]
          text-sm
          ">
            OUR APPROACH
          </p>



          <h2 className="
          mt-4
          text-3xl
          md:text-4xl
          font-bold
          text-gray-900
          ">
            Building Better Digital Experiences
          </h2>



          <p className="
          mt-4
          text-gray-600
          max-w-2xl
          mx-auto
          ">
            Combining modern technology, clean design, and performance
            to create effective web solutions.
          </p>


        </div>





        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-6">


          {highlights.map((item,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              viewport={{
                once:true
              }}


              className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              p-8
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-lg
              "

            >



              <div className="
              w-12
              h-12
              rounded-xl
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
              font-bold
              ">
                {item.number}
              </div>




              <h3 className="
              mt-6
              text-xl
              font-semibold
              text-gray-900
              ">
                {item.title}
              </h3>




              <p className="
              mt-2
              text-blue-600
              text-sm
              font-medium
              ">
                {item.category}
              </p>




              <p className="
              mt-4
              text-gray-600
              leading-relaxed
              ">
                {item.description}
              </p>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Testimonials;