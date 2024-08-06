import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import fs from "fs";

export const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // Office 365 server
  port: 587, // secure SMTP
  // secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
  //service: "Godaddy",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  // tls: {
  //   ciphers: "SSLv3",
  // },
  // requireTLS: true,
});
