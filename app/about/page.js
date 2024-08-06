import React from "react";
import Image from "next/image";
import { cairo } from "../layout";

export default function page() {
  return (
    <main className="w-screen h-max relative text-white">
      <Image
        src="/images/rubble1.avif"
        fill
        className="lg:w-[11vw] object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0" />
      <div className="relative w-full min-h-max flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:px-20 px-4 py-24">
        <div className="md:w-[40vw] flex flex-col gap-4 text-left">
          <h2 className={`text-3xl font-bold   ${cairo.className}`}>
            Who are we?{" "}
          </h2>
          <p className={`text-2xl mb-20  ${cairo.className} `}>
            <br />
            {`"Voice of Gaza" is a non-profit volunteer group aiming to assist the people of Gaza in finding suitable job opportunities and empowering them professionally in line with their skills and living conditions. Our primary focus is on the residents of the Gaza Strip, with a special emphasis on women, given the rising unemployment rates among them.
`}{" "}
            <br />
            <br />
            {`"Voice of Gaza" collaborates with job seekers to prepare CVs in Arabic, English, and French, and to train them for job interviews. The volunteers in this group understand that our goals can only be achieved through sincere and dedicated partnerships with companies, sectors, and individuals to combat poverty, unemployment, and the rising costs of living, which are direct consequences of the blockade and war on Gaza.
`}
            <br />
            <br />
            {`Anyone who reads this content or learns about this initiative can be a part of the volunteer effort and ambition, and contribute to it. Everyone can help the people of Gaza by providing them with decent job opportunities. The challenge is immense, but with your enthusiasm, we can overcome it.`}
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
          <p
            className={`text-2xl leading-9 mb-24 text-right ${cairo.className} `}
          >
            <br />
            {`صوت غزة مجموعة تطوعية غير ربحية، تسعى لمساعدة أهلنا في قطاع غزة لإيجاد فرص عمل مناسبة، وتمكينهم مهنياً، بما يتوافق مع مهاراتهم، وظروفهم المعيشية.
الأولوية في سعينا ستكون لمواطني القطاع المقيمين فيه، مع تركيز على الغزيات، لارتفاع نسب البطالة في صفوفهن أكثر فأكثر.
`}
            <br />
            <br />
            {`صوت غزة تعمل مع طالبي الوظائف لإعداد سير ذاتية باللغات العربية والإنجليزية والفرنسية وتدريبهم على مقابلات العمل.  
`}
            <br />
            <br />
            {`يدرك المتطوعون والمتطوعات في هذه المجموعة أنها لن تحقق غايتها وأهدافها إلا بشراكة جادة ومخلصة مع كل الشركات والقطاعات والأفراد، لمواجهة الفقر والبطالة وارتفاع تكاليف الحياة، كنتائج مباشرة للحصار والحرب على غزة.
`}
            <br />
            <br />
            {`كل من يقرأ هذا المحتوى، أو يطّلع على هذه المبادرة، يستطيع أن يكون جزءاً من التطوع والطموح، ويساهم فيه. يمكن للجميع مساعدة أهل غزة، بتوفير فرص العمل الكريمة لهم، فالتحدي كبير جداً، ولكنّ الهمة بكم أكبر.
`}
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
