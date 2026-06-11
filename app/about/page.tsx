import { Metadata } from "next";
import About from "@/components/sections/About/About";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me, my skills and experience.",
};

export default function AboutPage() {
  return <About />;
}