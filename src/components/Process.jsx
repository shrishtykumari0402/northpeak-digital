import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand goals, users, and requirements before starting development.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create clean and user-focused designs with simplicity in mind.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build responsive websites and applications using modern technologies.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We test, optimize, and refine the experience for better performance.",
  },
];


function Process() {

  return (

    <section id="process" className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-12">

          <p className="
          text-blue-600
          font-semibold
          uppercase
          tracking-[0.25em]
          text-sm
          ">
            OUR WORKFLOW
          </p>


          <h2 className="
          text-3xl
          md:text-4xl
          font-bold
          text-gray-900
          mt-4
          ">
            Our Development Process
          </h2>


          <p className="
          mt-4
          text-gray-600
          max-w-2xl
          mx-auto
          ">
            A simple approach that helps us create reliable and
            user-focused digital experiences.
          </p>

        </div>





        <div className="grid md:grid-cols-4 gap-6">


          {steps.map((step,index)=>(

            <motion.div

              key={index}

              role="article"

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
              relative
              bg-white
              p-7
              rounded-2xl
              border
              border-gray-200
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-lg
              focus-within:ring-2
              focus-within:ring-blue-500
              "

            >


              <div
              aria-hidden="true"
              className="
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
                {step.number}
              </div>




              <h3 className="
              text-xl
              font-semibold
              text-gray-900
              mt-5
              ">
                {step.title}
              </h3>




              <p className="
              text-gray-600
              mt-3
              leading-relaxed
              ">
                {step.description}
              </p>




              {index !== steps.length - 1 && (

                <div
                aria-hidden="true"
                className="
                hidden
                md:block
                absolute
                top-13
                -right-4
                w-8
                h-[2px]
                bg-blue-100
                ">
                </div>

              )}


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Process;