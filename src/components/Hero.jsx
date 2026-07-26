import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="pt-24 md:pt-28 pb-12 bg-gradient-to-br from-blue-50 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 items-center">


        {/* LEFT CONTENT */}

        <div>

          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-[0.28em] text-sm">
            WEB DEVELOPMENT STUDIO
          </p>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15]">
            We build websites that are{" "}
            <span className="text-blue-600">
              fast, simple
            </span>
            , and made for users.
          </h1>


          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            From responsive websites to modern web applications, we create
            digital experiences that help businesses grow online.
          </p>



          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">

            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              Responsive Design
            </div>


            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              Modern React Apps
            </div>

          </div>



          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button
              type="button"
              className="
              bg-blue-600 text-white px-7 py-3 rounded-xl
              shadow-lg shadow-blue-600/20
              transition hover:-translate-y-1
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            >
              Start Your Project →
            </button>


            <button
              type="button"
              className="
              border border-gray-300 bg-white px-7 py-3 rounded-xl
              transition hover:border-blue-300
              hover:bg-blue-50
              hover:text-blue-700
              "
            >
              Explore Services
            </button>

          </div>

        </div>





        {/* RIGHT CARD */}

        <motion.div
          aria-label="NorthPeak website preview"
          className="relative w-full max-w-xl mx-auto"
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{
            duration:0.6,
            ease:"easeOut"
          }}
          viewport={{
            once:true
          }}
        >


          <div className="
          absolute -right-8 -top-8
          h-32 w-32
          rounded-full
          bg-blue-300/60
          blur-xl
          ">
          </div>



          <div className="
          relative
          bg-gradient-to-br from-blue-600 to-purple-600
          rounded-[2rem]
          p-3 md:p-4
          shadow-xl
          ">



            <div className="
            overflow-hidden
            rounded-[1.75rem]
            bg-white
            shadow-xl
            ">


              <div className="
              flex items-center gap-2
              px-5 py-4
              border-b border-slate-200
              ">

                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>

              </div>



              <div className="p-4 md:p-6">


                <div className="flex justify-between items-start">

                  <div>

                    <p className="
                    text-xs uppercase
                    tracking-[0.3em]
                    text-slate-600
                    ">
                      DIGITAL EXPERIENCE
                    </p>


                    <h2 className="
                    mt-3
                    text-3xl
                    font-bold
                    text-slate-900
                    ">
                      NorthPeak
                    </h2>

                  </div>


                  <span className="
                  text-xs
                  font-semibold
                  tracking-widest
                  bg-slate-100
                  px-4 py-2
                  rounded-full
                  text-slate-600
                  ">
                    ONLINE
                  </span>

                </div>




                <p className="mt-4 text-sm text-slate-600">
                  Modern websites & React applications
                </p>




                <div className="
                mt-5
                rounded-[1.5rem]
                bg-slate-50
                px-4 py-4
                border border-slate-200
                ">

                  <p className="text-sm font-semibold text-blue-600">
                    Frontend Development
                  </p>


                  <p className="mt-2 text-xs text-slate-500">
                    Responsive interfaces built with React.
                  </p>

                </div>



                <div className="mt-4 grid grid-cols-2 gap-3">


                  <div className="
                  rounded-2xl
                  bg-blue-50
                  p-4
                  border border-blue-100
                  ">

                    <p className="text-sm font-semibold text-blue-600">
                      React
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Modern Web Applications
                    </p>

                  </div>




                  <div className="
                  rounded-2xl
                  bg-purple-50
                  p-4
                  border border-purple-100
                  ">

                    <p className="text-sm font-semibold text-purple-600">
                      Performance
                    </p>

                    <p className="text-xs text-slate-600 mt-1">
                      Fast & Optimized
                    </p>

                  </div>


                </div>


              </div>


            </div>


          </div>


        </motion.div>


      </div>


    </section>
  );
}

export default Hero;