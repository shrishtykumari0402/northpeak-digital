import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter Website",
    price: "Simple Projects",
    description:
      "A modern website solution for individuals and small businesses.",
    features: [
      "Responsive design",
      "Modern UI development",
      "Mobile optimization",
    ],
  },

  {
    name: "Business Website",
    price: "Growing Businesses",
    description:
      "A complete website experience with scalable features and better flexibility.",
    features: [
      "Multiple page development",
      "React-based solutions",
      "API integration",
    ],
    featured: true,
  },

  {
    name: "Custom Web App",
    price: "Custom Solution",
    description:
      "Tailored web applications built around specific product requirements.",
    features: [
      "Custom frontend development",
      "Advanced functionality",
      "Scalable architecture",
    ],
  },
];


function Pricing() {

  return (

    <section id="pricing" className="py-20 bg-white">


      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-12">


          <p className="
          text-blue-600
          font-semibold
          uppercase
          tracking-[0.25em]
          text-sm
          ">
            SERVICES & PACKAGES
          </p>



          <h2 className="
          text-3xl
          md:text-4xl
          font-bold
          text-gray-900
          mt-4
          ">
            Plans Designed For Different Goals
          </h2>



          <p className="
          mt-4
          text-gray-600
          max-w-2xl
          mx-auto
          ">
            Flexible solutions for websites, applications, and digital products.
          </p>


        </div>





        <div className="grid md:grid-cols-3 gap-6">


          {plans.map((plan,index)=>(


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



              className={`
              relative
              p-8
              rounded-2xl
              border
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-lg

              ${
                plan.featured
                ? "border-blue-600 shadow-lg"
                : "border-gray-200"
              }
              `}

            >



              {plan.featured && (

                <div
                aria-label="Recommended plan"
                className="
                absolute
                -top-3
                left-1/2
                -translate-x-1/2
                bg-blue-600
                text-white
                text-sm
                px-4
                py-1
                rounded-full
                ">
                  Recommended
                </div>

              )}






              <h3 className="
              text-2xl
              font-semibold
              text-gray-900
              ">
                {plan.name}
              </h3>





              <p className="
              text-xl
              font-bold
              text-blue-600
              mt-4
              ">
                {plan.price}
              </p>





              <p className="
              text-gray-600
              mt-4
              leading-relaxed
              ">
                {plan.description}
              </p>





              <ul className="
              mt-6
              space-y-3
              text-gray-700
              ">

                {plan.features.map((feature,i)=>(

                  <li key={i}>
                    <span aria-hidden="true">✓</span> {feature}
                  </li>

                ))}

              </ul>






              <button
                type="button"
                aria-label={`Discuss ${plan.name} project`}
                className="
                mt-8
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "
              >
                Discuss Project
              </button>





            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Pricing;