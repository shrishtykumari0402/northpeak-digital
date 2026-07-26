function About() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


        {/* LEFT CONTENT */}

        <div>

          <p className="
          text-blue-600
          font-semibold
          uppercase
          tracking-[0.25em]
          text-sm
          ">
            ABOUT ME
          </p>


          <h2 className="
          text-3xl
          md:text-4xl
          font-bold
          text-gray-900
          mt-4
          ">
            Frontend Developer building modern web experiences
          </h2>


          <p className="
          mt-5
          text-gray-600
          leading-relaxed
          ">
            I am a Computer Science student passionate about frontend
            development and creating responsive, user-friendly web
            applications using React, JavaScript, and modern technologies.
          </p>


          <p className="
          mt-4
          text-gray-600
          leading-relaxed
          ">
            I enjoy solving problems, learning new technologies, and
            building projects that improve my development skills.
          </p>



          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-4">


            <a
              href="/Shrishty_Resume.pdf"
              download
              className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-blue-700
              transition
              "
            >
              Download Resume
            </a>



          <a
  href="https://github.com/shrishtykumari0402"
  target="_blank"
  rel="noopener noreferrer"
  className="
  border
  border-gray-300
  px-6
  py-3
  rounded-xl
  hover:bg-gray-50
  transition
  "
>
  GitHub
</a>

          </div>


        </div>





        {/* SKILLS */}

        <div className="
        bg-blue-50
        rounded-2xl
        p-8
        ">

          <h3 className="text-xl font-bold text-gray-900">
            Skills
          </h3>


          <div className="flex flex-wrap gap-3 mt-5">

            {
              [
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "C++",
                "DSA",
                "Git"
              ].map((skill,index)=>(

                <span
                key={index}
                className="
                bg-white
                px-4
                py-2
                rounded-full
                text-blue-600
                shadow-sm
                ">
                  {skill}
                </span>

              ))
            }

          </div>

        </div>


      </div>

    </section>
  );
}

export default About;