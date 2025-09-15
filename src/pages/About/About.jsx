import HeroImg from "@/assets/images/hero3.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-x2 text-6xl font-bold lg:text-6xl text-white gradient-text">
            Senior Full Stack Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">

              <div className="pt-8">
                <blockquote className="border-l-4 border-gray-500 pl-3">
                  <p className="text-white font-midium text-2xl gradient-text">
                  Wei Ling is a skilled software developer with experience in building web, and AI-powered applications. Proficient in technologies like C#, ASP.NET, Laravel, Java, iOS, Swift, and Kotlin, specializing in creating scalable and user-friendly solutions. With expertise in Machine Learning, Deep Learning, and tools like TensorFlow, as well as working with APIs like Stripe and PayPal, and frameworks such as React and Angular, they turn complex challenges into innovative, intelligent applications.<br></br><br></br>Wei Ling Tan
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block gradient-text">
                      <br></br><a>core.dev.100@gmail.com</a>   +1 (315) 547-6302

                    </cite>

                  </div>
                  <p className="gradient-text">764 Pensacola Ave Pontiac, MI 48340, USA</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
