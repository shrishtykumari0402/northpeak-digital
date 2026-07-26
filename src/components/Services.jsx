import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and modern websites using clean and reusable frontend technologies.",
    icon: "01",
  },
  {
    title: "React Applications",
    description:
      "Developing interactive React applications with reusable components and smooth user experiences.",
    icon: "02",
  },
  {
    title: "UI/UX Engineering",
    description:
      "Creating simple and accessible interfaces focused on usability and clean design.",
    icon: "03",
  },
  {
    title: "API Integration",
    description:
      "Connecting frontend applications with reliable APIs and backend services.",
    icon: "04",
  },
  {
    title: "Website Optimization",
    description:
      "Improving website speed, responsiveness, and overall performance.",
    icon: "05",
  },
];


function Services() {
  return (
    <section id="services" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
            OUR SERVICES
          </p>


          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Services We Offer
          </h2>


          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Creating modern websites and applications with clean design,
            performance, and usability.
          </p>

        </div>




        <div className="grid md:grid-cols-3 gap-6">


          {services.map((service, index) => (

            <motion.div

              key={index}

              role="article"

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}


              className="
              group
              p-7
              rounded-2xl
              border
              border-gray-200
              bg-white
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
              w-12 h-12
              flex items-center justify-center
              rounded-xl
              bg-blue-50
              text-blue-600
              font-semibold
              mb-5
              group-hover:bg-blue-600
              group-hover:text-white
              transition
              ">
                {service.icon}
              </div>





              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>





              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}


export default Services;