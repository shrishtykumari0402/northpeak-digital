function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">


        {/* LEFT CONTENT */}

        <div>

          <p className="
          text-blue-600
          font-semibold
          uppercase
          tracking-[0.25em]
          text-sm
          ">
            GET IN TOUCH
          </p>


          <h2 className="
          text-3xl
          md:text-4xl
          font-bold
          text-gray-900
          mt-4
          ">
            Let's build something useful together.
          </h2>


          <p className="
          text-gray-600
          mt-5
          leading-relaxed
          ">
            Have a website idea or need help improving your digital product?
            Share your requirements and let's discuss the right solution.
          </p>



          <div className="mt-8">

            <div className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-5
            ">

              <h3 className="font-semibold text-gray-900">
                Project Discussion
              </h3>


              <p className="text-gray-600 mt-2">
                Tell us about your idea, requirements, and goals.
              </p>

            </div>

          </div>


        </div>





        {/* FORM */}

        <form className="
        bg-white
        p-8
        rounded-2xl
        border
        border-gray-200
        space-y-5
        ">


          <input
            type="text"
            name="name"
            aria-label="Your Name"
            autoComplete="name"
            placeholder="Your Name"
            className="
            w-full
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            "
          />



          <input
            type="email"
            name="email"
            aria-label="Email Address"
            autoComplete="email"
            placeholder="Email Address"
            className="
            w-full
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            "
          />



          <input
            type="text"
            name="projectType"
            aria-label="Project Type"
            placeholder="Project Type"
            className="
            w-full
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            "
          />



          <textarea
            name="message"
            aria-label="Project Description"
            placeholder="Tell us about your project"
            rows="5"
            className="
            w-full
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            "
          />



          <button
            type="button"
            aria-label="Send project message"
            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            hover:bg-blue-700
            transition
            "
          >
            Send Message
          </button>


        </form>


      </div>

    </section>
  );
}

export default Contact;