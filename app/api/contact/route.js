import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);

    const testResult = await transporter.verify();

    if (testResult) {
      const res = await transporter.sendMail({
        from: process.env.EMAIL,
        to: "nnawwafhusain@gmail.com",
        subject: "Sout Gaza Contact Request",
        html: `<h1> Contact Request </h1><br/>
        <p> ${body.fname} ${body.lname} says: ${
          body.message
        }</p><br/><p> Contact info: <br/> Email: ${body.email} <br/> ${
          body.code && body.number ? `Phone: ${body.code}${body.number}` : ``
        } </p>`,
      });

      if (res) {
        return NextResponse.json({
          message: "Success",
        });
      } else {
        throw new Error("Failed to send email");
      }
    }
    return NextResponse.json({
      message: "Error",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error",
    });
  }
}
