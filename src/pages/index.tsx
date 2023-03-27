import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "bwad-react-designsystem/dist/Navbar";
import Button from "bwad-react-designsystem/dist/Button";
import FeaturedSection from "bwad-react-designsystem/dist/FeaturedSection";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>LARACAMP</title>
        <meta name="description" content="laracamp landing page replica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-y-20">
        <Navbar
          className={{
            active: "text-purple",
            idle: "text-navy",
          }}
          cta={
            <>
              <Button className="relative px-8" state="secondary">
                <Link href="/sign-in">
                  <a>Sign In</a>
                </Link>
              </Button>
              <Button className="relative px-8" state="primary">
                <Link href="/sign-up">
                  <a>Sign Up</a>
                </Link>
              </Button>
            </>
          }
          pathname={pathname}
        >
          <Link href="/">
            <a>Program</a>
          </Link>
          <Link href="/mentor">
            <a>Mentor</a>
          </Link>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
          <Link href="/business">
            <a>Business</a>
          </Link>
        </Navbar>
        <Hero />
        <Partnership />
        <Features />

        <FeaturedSection
          badge={{
            content: "Before taking any programit is good to choose the path",
            title: "Interview",
          }}
          button={
            <Button state="secondary">
              <a href="">Learn More</a>
            </Button>
          }
          content={{
            heading: "Prepare The Journey",
            paragraph:
              "We do really care to our students’ future careerso it would be good if you are taking a quick interview",
            preheading: "BETTER CAREER",
          }}
          image="/images/image-2.jpg"
          number={{
            className: "bg-yellow",
            text: "1.",
          }}
        />

        <FeaturedSection
          badge={{
            content:
              "Study and follow the journey\
            based on your career path",
            title: "Focus",
          }}
          button={
            <Button state="secondary">
              <a href="">View Demo</a>
            </Button>
          }
          content={{
            heading: "Finish The Project",
            paragraph:
              "Each of you will be joining the private group and also\
              working together with team members on project",
            preheading: "STUDY HARDER",
          }}
          image="/images/image-3.jpg"
          number={{
            className: "bg-purple",
            text: "2.",
          }}
        />

        <FeaturedSection
          badge={{
            content:
              "Demonstration for your final\
            project to the judges",
            title: "Final Gate",
          }}
          button={
            <Button state="secondary">
              <a href="">Showcase</a>
            </Button>
          }
          content={{
            heading: "Big Demo Day",
            paragraph:
              "Learn how to speaking in public to demonstrate your\
              final project and receive the important feedbacks",
            preheading: "END GAME",
          }}
          image="/images/image-4.jpg"
          number={{
            className: "bg-green",
            text: "3.",
          }}
        />

        <Pricing />

        <Partnership />

        <Footer />
      </main>
    </>
  );
}
