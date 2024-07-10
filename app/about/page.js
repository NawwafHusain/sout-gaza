import React from "react";
import Image from "next/image";
import { cairo } from "../layout";

export default function page() {
  return (
    <main className="w-screen h-screen relative text-white">
      <Image
        src="/images/rubble1.avif"
        fill
        className="lg:w-[11vw] object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0" />
      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4 px-20 ">
        <div className="md:w-[40vw] flex flex-col gap-4 text-left">
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
      </div>
    </main>
  );
}
