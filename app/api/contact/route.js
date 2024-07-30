import { NextResponse } from "next/server";
import Mailgun from "mailgun-js";

export async function POST(req, res) {
  try {
    const data = await req.json();
    const mailgun = new Mailgun(data);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });
    const res = await mg.messages.create("sandbox-123.mailgun.org", {
      from: `Sout gaza Website <mailgun@sandbox5f23493fea0f425bb4a66d3bd916254a.mailgun.org>`,
      to: ["nnawwafhusain@gmail.com"],
      subject: "Contact Request",
      text:
        "you have a new contact request from soutgaza website. The details are as follows: \n\n" +
        "First Name: " +
        data.fname +
        "\nLast Name: " +
        data.lname +
        "\nPhone Number: " +
        data.code +
        data.number +
        "\nMessage: " +
        data.message,
      html: `<h1>you have a new contact request from soutgaza website. The details are as follows:</h1> <br> <p>First Name: ${data.fname} <br> Last Name: ${data.lname} <br> Phone Number: ${data.code} ${data.number} <br> Message: ${data.message}</p>`,
    });
    if (res) {
      console.log(res);
    }
    return NextResponse.json({
      status: 200,
      message: "success",
      data: res,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "error",
      data: error,
    });
  }
}
