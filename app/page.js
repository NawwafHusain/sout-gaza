import {
  ArrowRightCircle,
  Bone,
  Briefcase,
  DollarSign,
  House,
  PersonStanding,
  Wheat,
} from "lucide-react";
import Image from "next/image";

import { oswald, cairo } from "./layout";
import CarsouelComponent from "./components/CarsouelComponent";
import Help from "./components/Help";

export default function Home() {
  return (
    <main>
      <section className="w-screen lg:h-[90vh] h-auto flex flex-col lg:flex-row items-center justify-items-start justify-center lg:px-20 px-4 gap-4 relative ">
        <div className="z-10 flex flex-col items-center md:items-center justify-center lg:gap-4 gap-8 md:w-screen text-center  relative w-full md:h-auto  pt-10 text-white">
          <h1
            className={`${oswald.className} md:text-7xl text-6xl  font-semibold `}
          >
            Let it Bring <span>Hope</span>
            <br /> Let it Be a Tale.
          </h1>
          {/* <p className="w-[80%] text-lg">
            Join us in our mission to provide a stable future for Gazans.
          </p> */}
          <div className="flex md:flex-row flex-col gap-2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center items-center gap-4">
                <Briefcase className="text-white w-12  h-12 bg-primary rounded-full p-2" />
                <p className="text-lg font-bold text-left">
                  80% of Gazans
                  <br />{" "}
                  <span className="text-white font-normal">
                    are currently unemployed
                  </span>
                </p>
              </div>

              {/* <div className="flex justify-center items-center gap-4">
                <Wheat className="text-white w-12  h-12 bg-primary rounded-full p-2" />
                <p className="text-lg font-bold text-left">
                  90% of Agricultural
                  <br />{" "}
                  <span className="text-white font-normal">
                    yield has been disrupted{" "}
                  </span>
                </p>
              </div> */}
              <div className="flex justify-center items-center gap-4">
                <DollarSign className="text-white w-12  h-12 bg-primary rounded-full p-2" />
                <p className="text-lg font-bold text-left">
                  84%
                  <br />{" "}
                  <span className="text-white font-normal">
                    Economic Recession{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex justify-center items-center gap-4">
                <PersonStanding className="text-white w-12  h-12 bg-primary rounded-full p-2" />
                <p className="text-lg font-bold text-left">
                  90% of Gazans
                  <br />{" "}
                  <span className="text-white font-normal">
                    are currently in poverty
                  </span>
                </p>
              </div>

              <div className="flex justify-center items-center gap-4">
                <Briefcase className="text-white w-12  h-12 bg-primary rounded-full p-2" />
                <p className="text-lg font-bold text-left">
                  200,000 Gazas
                  <br />{" "}
                  <span className="text-white font-normal">
                    lost thier jobs{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <a
            className="bg-primary text-white text-2xl font-bold py-4 pr-20 pl-8 rounded-full   flex justify-between items-center gap-4 lg:mt-10 relative hover:bg-green-800"
            href="#help"
          >
            Learn how you can help
            <ArrowRightCircle className="w-12 h-12 text-primary-foreground absolute right-2" />
          </a>
          <h2
            className={`lg:hidden  bottom-2 text-center z-10 text-[8vw] font-bold text-white w-full text-border  `}
          >
            GAZA NOW
          </h2>
        </div>

        <CarsouelComponent />
        {/* <Image
          src="/images/rubble1.avif"
          width={1000}
          height={1000}
          className="w-full md:w-[48vw] md:h-[70vh] h-[50vh] object-cover rounded-2xl relative"
        /> */}
      </section>
      <section
        id="help"
        className="w-screen flex-col-reverse lg:flex-row h-max  mt-[15vh] lg:pt-32 pt-24 pb-16 flex items-start justify-between px-4 lg:px-20  gap-10 relative  md:pb-[10vh] bg-black text-white "
      >
        {/* <Image
          src={"/images/section2bg.png"}
          width={1000}
          height={1000}
          className="w-screen absolute left-0   lg:top-0 -top-[15vh] -z-10"
        /> */}
        <div className="md:w-[40vw] h-max flex flex-col gap-4">
          <h2 className={`text-3xl font-bold   ${cairo.className}`}>
            How you can help?{" "}
          </h2>
          <p className={`text-xl   ${cairo.className} `}>
            <br />
            To Reach &apos;Voice of Gaza&apos; This initiative is open to all
            individuals, institutions, and companies. It aims to help the people
            of Gaza cope with the aftermath of the war and its harsh and
            difficult impact on their lives. The people of Gaza need work now
            more than ever, after hundreds of thousands have lost their jobs and
            poverty and unemployment rates have doubled alarmingly, especially
            among women and youth. <br />
            <br />
            We understand that many jobs in the labor market have become
            available remotely, whether full-time or part-time, which suits the
            reality of Gazans: <br />
            <br />
            <span className="font-bold">
              To reach &apos;Voice of Gaza&apos;:
            </span>{" "}
          </p>
          <ul className=" list-disc list-outside gap-1 flex flex-col">
            <li>
              Follow the content published on this website and on social media
              platforms.
            </li>
            <li>
              If you have a private business or work for a company, you can
              choose Gaza talents and offer them available jobs.
            </li>
            <li>
              Share information or CVs of available talents with your family,
              relatives, and friends.
            </li>
            <li>
              {" "}
              Donate your time to help prepare and qualify Gazans for the job
              market.
            </li>
          </ul>

          <p className={`text-2xl mt-10  ${cairo.className}`}>
            Kindly send your CVs to
            <br />
            <span className="font-bold">CV@SoutGaza.com</span>
          </p>
        </div>
        <div className="md:w-[40vw] flex flex-col gap-4">
          <h2 className={`text-3xl font-bold text-right ${cairo.className}`}>
            لكي يصل صوت غزة
          </h2>
          <p className={`text-xl leading-8 text-right ${cairo.className} `}>
            <br />
            هذه مبادرة مفتوحة لكل الأفراد والمؤسسات والشركات. تسعى إلى مساعدة
            الغزيين على احتواء تداعيات الحرب، وما تركته من نتائج صعبة وقاسية على
            حياتهم. يحتاج الغزيون والغزّيات إلى العمل الآن، أكثر من أي وقت مضى،
            بعدما فقد مئات الآلاف وظائفهم، وتضاعفت أرقام الفقر والبطالة على نحو
            مرعب، خصوصاً في صفوف النساء والشباب.
            <br />
            <br /> نُدرك أنّ كثيراً من الوظائف في سوق العمل أصبحت متاحةً عن بعد،
            سواء بالدوام الكامل، أو الجزئي، ما يتلاءم مع واقع الغزيين:
            <br />
            <br /> لكي يصل صوت غزة:
          </p>

          <ul
            className=" list-disc list-inside  gap-1 flex flex-col text-right "
            dir="rtl"
          >
            <li className="text-right list-inside">
              تابع المحتوى المنشور على هذا الموقع، وفي المنصات الاجتماعية.
            </li>
            <li className="text-right list-inside">
              إذا كان لديك عمل خاص أو تعمل في شركة، يمكنك اختيار مواهب غزية،
              وتقديمها للوظائف المتوفرة.
            </li>
            <li className="text-right list-inside">
              شارك عائلتك وأقاربك وأصدقاءك معلومات أو سِيَراً ذاتية للمواهب
              الموجودة.
            </li>
            <li className="text-right list-inside">
              {" "}
              تبرّع بوقتك للمساعدة في إعداد وتأهيل الغزيين لسوق العمل.
            </li>
          </ul>
          <p className={`text-2xl text-right mt-10 ${cairo.className}`}>
            يرجى إرسال السير الذاتية إلى
            <br />
            <span className="font-bold">CV@SoutGaza.com</span>
          </p>
        </div>
      </section>
    </main>
  );
}
