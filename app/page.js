import {
  ArrowRightCircle,
  Briefcase,
  House,
  PersonStanding,
} from "lucide-react";
import Image from "next/image";
import { Cairo } from "next/font/google";

import CarsouelComponents from "./components/CarsouelComponents";
import Help from "./components/Help";

const cairo = Cairo({ subsets: ["latin"] });
``;

export default function Home() {
  return (
    <main>
      <section className="w-screen lg:h-[90vh] h-auto flex flex-col lg:flex-row items-center justify-center lg:px-20 px-4 gap-4 relative ">
        <div className="flex flex-col items-center md:items-start justify-center lg:gap-4 gap-8 md:w-[50vw] text-center lg:text-left relative w-full md:h-auto  pt-10">
          <h1 className="md:text-7xl text-6xl  font-bold ">
            Let it Bring <span>Hope</span>
            <br /> Let it Be a Tale.
          </h1>
          <p className="w-[80%] text-lg">
            Join us in our mission to provide a stable future for Gazans.
          </p>
          <div className="flex flex-col items-start gap-4">
            <div className="flex justify-center items-center gap-4">
              <Briefcase className="text-white w-12  h-12 bg-primary rounded-full p-2" />
              <p className="text-lg font-bold text-left">
                80% of Gazans
                <br />{" "}
                <span className="text-muted-foreground font-normal">
                  are currently unemployed
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <House className="text-white w-12  h-12 bg-primary rounded-full p-2" />
              <p className="text-lg font-bold text-left">
                65% of Buildings
                <br />{" "}
                <span className="text-muted-foreground font-normal">
                  in Gaza have been destroyed{" "}
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <PersonStanding className="text-white w-12  h-12 bg-primary rounded-full p-2" />
              <p className="text-lg font-bold text-left">
                1.7 million people
                <br />{" "}
                <span className="text-muted-foreground font-normal">
                  in Gaza are currently displaced{" "}
                </span>
              </p>
            </div>
          </div>

          <a
            className="bg-primary text-white text-2xl font-bold py-4 pr-20 pl-8 rounded-full   flex justify-between items-center gap-4 mt-14 relative hover:bg-green-800"
            href="#help"
          >
            Learn how you can help
            <ArrowRightCircle className="w-12 h-12 text-primary-foreground absolute right-2" />
          </a>
        </div>

        <CarsouelComponents />
        {/* <Image
          src="/images/rubble1.avif"
          width={1000}
          height={1000}
          className="w-full md:w-[48vw] md:h-[70vh] h-[50vh] object-cover rounded-2xl relative"
        /> */}
      </section>
      <section className="w-screen flex-col-reverse lg:flex-row md:h-[90vh] mt-[15vh] lg:pt-[35vh] flex items-start justify-between px-20  gap-10 relative  md:-translate-y-[14vh] bg-green-100 lg:bg-transparent ">
        <Image
          src={"/images/section2bg.png"}
          width={1000}
          height={1000}
          className="w-screen absolute left-0   lg:top-0 -top-[15vh] -z-10"
        />
        <div className="md:w-[40vw] flex flex-col gap-4">
          <h2 className={`text-3xl font-bold   ${cairo.className}`}>
            Who are we?{" "}
          </h2>
          <p className={`text-2xl   ${cairo.className} lg:h-[40vh]`}>
            <br />
            &quot;Voices of Gaza&quot; is a non-profit volunteer group that
            seeks to help our people in Gaza find suitable job opportunities and
            empower them professionally, in line with their skills. Priority is
            given to citizens of the Gaza Strip residing there, with a focus on
            Gazan women to find job opportunities for them in the Strip, or
            remotely. Voice of Gaza works with job seekers to prepare CVs in
            Arabic, English and French and train them for job interviews
          </p>
          <p className={`text-2xl   ${cairo.className}`}>
            Kindly send your CVs to
            <br />
            <span className="font-bold">CV@SoutGaza.com</span>
          </p>
        </div>
        <div className="md:w-[40vw] flex flex-col gap-4">
          <h2 className={`text-3xl font-bold text-right ${cairo.className}`}>
            مَنْ نحن؟
          </h2>
          <p className={`text-2xl text-right ${cairo.className} lg:h-[40vh]`}>
            <br />
            &quot;صوت غزة&quot; مجموعة تطوعية غير ربحية، تسعى لمساعدة أهلنا في
            غزة لإيجاد فرص عمل مناسبة، وتمكينهم مهنياً، بما يتوافق مع مهاراتهم.
            الأولوية لمواطني قطاع غزة المقيمين فيه، مع تركيز على الغزيات لإيجاد
            فرص عمل لهنّ في القطاع، أو عن بعد. &quot;صوت غزة&quot; تعمل مع طالبي
            الوظائف لإعداد سير ذاتية باللغات العربية والإنجليزية والفرنسية
            وتدريبهم على مقابلات العمل.
          </p>
          <p className={`text-2xl text-right ${cairo.className}`}>
            يرجى إرسال السير الذاتية إلى
            <br />
            <span className="font-bold">CV@SoutGaza.com</span>
          </p>
        </div>
      </section>
      <Help />
    </main>
  );
}
