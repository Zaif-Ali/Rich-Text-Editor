import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Wrapper from "@/components/layout/Wrapper";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
      <Head>
        <title>Rich Text Editor</title>
      </Head>
      <Wrapper>
        <div className="container mx-auto text-center">
          <div className="pb-4">
            <div
              className="text-purple-800
          font-semibold text-2xl py-10 text-center"
            >
              Jodit-React
            </div>
            <p className="container mx-auto text-center md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              aperiam necessitatibus harum quae officiis voluptates pariatur cum
              nesciunt numquam in expedita quam sapiente culpa alias odio, vel
              illo quos quis ratione eveniet laboriosam! Architecto!
            </p>
          </div>
          <div>
            <Link href={'/create'}>
            <button className="bg-purple-800/[0.7] px-2 py-2 rounded-lg text-white font-medium">
              Check out
            </button></Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
