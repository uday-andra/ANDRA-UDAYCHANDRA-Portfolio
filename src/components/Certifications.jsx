'use client';
import React from "react";

/* import every certificate asset from /src/components/certifications */
import fsdIntern from "./certifications/FSD-Intern.png";
import ethicalHacker from "./certifications/Ethical_Hacker_certificate.pdf";
import cyberAicte from "./certifications/Cybersecurity-AICTE.pdf";
import androidAicte from "./certifications/Android-Developer-AICTE.pdf";
import awsCloudAicte from "./certifications/AWS-Cloud-AICTE.pdf";
import cyberPrivacy from "./certifications/Cybersecurity-and-Privacy.pdf";
import iotIntro from "./certifications/Introduction-to-IOT.pdf";
import powerBI from "./certifications/PowerBI.pdf";
import introJava from "./certifications/Introduction-to-java-programming.pdf";
import pythonCisco from "./certifications/Python_certificate-CISCO.pdf";
import pythonDjango from "./certifications/Python-Django.pdf";
import responsiveWeb from "./certifications/Responsive-Web-Development.pdf";

const certificates = [
  {
    id: 1,
    title: "Full Stack Java Developer Intern - AI Variant",
    link: fsdIntern,
  },
  {
    id: 2,
    title: "Certified Ethical Hacker - CISCO",
    link: ethicalHacker,
  },
  {
    id: 3,
    title: "Cyber Security Virtual Internship - AICTE",
    link: cyberAicte,
  },
  {
    id: 4,
    title: "Android Developer Virtual Internship - AICTE",
    link: androidAicte,
  },
  {
    id: 5,
    title: "AWS Cloud Virtual Internship - AICTE",
    link: awsCloudAicte,
  },
  {
    id: 6,
    title: "Cybersecurity and Privacy - NPTEL",
    link: cyberPrivacy,
  },
  {
    id: 7,
    title: "Introduction to Internet of Things - NPTEL",
    link: iotIntro,
  },
  {
    id: 8,
    title: "Analyzing and Visualizing Data with PowerBI - Edx",
    link: powerBI,
  },
  {
    id: 9,
    title: "Introduction to Java Programming - Edx",
    link: introJava,
  },
  {
    id: 10,
    title: "Programming Essentials in Python - CISCO",
    link: pythonCisco,
  },
  {
    id: 11,
    title: "Python Django - Infosys Springboard",
    link: pythonDjango,
  },
  {
    id: 12,
    title: "Responsive Web Development - Infosys Springboard",
    link: responsiveWeb,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="cert-section">
      <div className="cert-card">
        <div className="cert-card-header">
          <h2 className="cert-title">Certifications</h2>
          <p className="cert-subtitle">
            All certifications I’ve completed — click to open.
          </p>
        </div>

        <div className="cert-grid-12">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-mini-card">
              <h3 className="cert-mini-title">{cert.title}</h3>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-open-btn"
              >
                Open
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
