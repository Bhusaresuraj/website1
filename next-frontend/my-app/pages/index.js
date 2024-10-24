import Image from "next/image";
import localFont from "next/font/local";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Head from "next/head";
import Script from "next/script";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Home({ blogs = [] }) {
  console.log(blogs[0]);

  const builder=imageConfigDefault
  const profile={
    name:'Zidio',
    title:'Zidio',
    Instagram:'https://www.instagram.com/zidiodev/?hl=en',
    facebookSquare :'https://www.facebook.com/p/Zidio-Development-61556709391417/?_rdr',
    twitter :'https://x.com/zidiodev',
    linkedin :'https://www.linkedin.com/company/zidio-development/posts/?feedView=all',
    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WPtrE8n4mK132VwhhIBAvxvDRyxYwkoufA&s',
  }

  return (
    <>
      <Head>
      <Script src="/assets/js/main.js"></Script>
        <meta charset="utf-8" />
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <title>{profile.title}</title>
        <meta property="og:title" content="Homepage | Atom Template" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="//" />
        <meta property="og:url" content="//" />
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
        <meta name="theme-color" content="#5540af" />
        <meta property="og:site_name" content="Atom Template" />
        <meta property="og:image" content="//assets/img/social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindmade" />
        <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
        <link as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap" rel="preload" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
        <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
      </Head>
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              <div className="text-white font-bold text-xl">
                <h4 className="typing-animation">Zidio </h4>
                <h4 className="typing-animation">Business Innovation </h4> {/* Add more lines as needed */}
                <h4 className="typing-animation"> Through technology


</h4>
              </div>
            </a>
          </div>
          <div className="hidden lg:block">
        <ul className="flex items-center">
            {[
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Clients", href: "#clients" },
                { name: "Work", href: "#work" },
                { name: "Statistics", href: "#statistics" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" }
            ].map(({ name, href }) => (
                <li className="group pl-6" key={name}>
                    <a href={href} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                        {name}
                    </a>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
            ))}
        </ul>
    </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
          </button>
          <ul className="mt-8 flex flex-col">
            {["About ", "Services", "Portfolio", "Clients", "Work", "Statistics", "Blog", "Contact"].map((item) => (
              <li className="py-2" key={item}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img src={profile.image} className="h-48 rounded-full sm:h-56" alt="author" />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello welcome to {profile.name}
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">Let's connect</p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  {[
                    { name: "Instagram", href: profile.Instagram, icon: "instagram" },
                    { name: "Facebook", href: profile.facebookSquare, icon: "facebook-square" },
                    { name: "Twitter", href:  profile.twitter, icon: "twitter" },
                    { name: "Dribbble", href: "https://dribbble.com/yourprofile", icon: "dribbble" },
                    { name: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
                  ].map(({ name, href, icon }) => (
                    <a href={href} className="pl-4" key={name}>
                      <i className={`bx bxl-${icon} text-2xl text-white hover:text-yellow`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            About US!
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Software Development & Consultancy
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
            Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise. Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology. 
            At Zidio, we believe in the power of collaboration,
             continuous learning, and adapting to the ever-evolving digital landscape. We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally. Stay connected with us for insights into our groundbreaking projects, tech trends, career opportunities, and our journey in shaping the future of technology.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                {[
                  { icon: "facebook-square", url: "https://www.facebook.com/zidiodev" },
                  { icon: "twitter", url: "https://x.com/zidiodev" },
                  { icon: "dribbble", url: "https://x.com/zidiodev" },
                  { icon: "linkedin", url: "https://www.linkedin.com/company/zidio-development/posts/?feedView=all" },
                  { icon: "instagram", url: "https://www.instagram.com/zidiodev/?hl=en" }
                ].map(({ icon, url }) => (
                  <a href={url} className="pl-4" key={icon} target="_blank" rel="noopener noreferrer">
                    <i className={`bx bxl-${icon} text-2xl text-primary hover:text-yellow`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            {[
              { skill: "IT Management", percentage: 85 },
              { skill: "App Development", percentage: 90 },
              { skill: "Javascript", percentage: 98 },
              { skill: "Software Renew", percentage: 91 },
            ].map(({ skill, percentage }) => (
              <div className="pt-6" key={skill}>
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">{skill}</h4>
                  <h3 className="font-body text-3xl font-bold text-primary">{percentage}%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what we are good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services We  offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          {[
            { title: "WEB DEVELOPMENT", icon: "icon-development", description: "Design and build responsive, high-performance websites using the latest web technologies." },
            { title: "Cloud Services", icon: "icon-content", description: "Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency." },
            { title: "Data Analytic", icon: "icon-mobile", description: "Transform raw data into valuable insights, enabling informed and strategic business decisions.." },
            { title: "Digital Marketing", icon: "icon-email", description: "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.." },
            { title: "Machine Learning", icon: "icon-design", description: "Develop and implement machine learning models to automate processes and drive intelligent decision-making.." },
            { title: "Cyber Security", icon: "icon-graphics", description: "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats." },
          ].map(({ title, icon, description }) => (
            <div className="group rounded px-8 py-12 shadow hover:bg-primary" key={title}>
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img src={`/assets/img/${icon}-white.svg`} alt={`${title} icon`} />
                </div>
                <div className="block group-hover:hidden">
                  <img src={`/assets/img/${icon}-black.svg`} alt={`${title} icon`} />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  {title}
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  {description} {/* Updated to show specific description for each service */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out our Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Project Sample For Our Clients 
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          {["portfolio-apple.jpeg", "portfolio-stripe.jpeg", "portfolio-fedex.jpeg", "portfolio-microsoft.jpeg"].map((img) => (
            <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0" key={img}>
              <img src={`/assets/img/${img}`} className="w-full shadow" alt="portfolio image" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Our  latest clients
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              {["logo-coca-cola.svg", "logo-apple.svg", "logo-netflix.svg", "logo-amazon.svg", "logo-stripe.svg"].map((logo) => (
                <span className="m-8 block" key={logo}>
                  <img src={`/assets/img/${logo}`} alt="client logo" className="mx-auto block h-12 w-auto" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

     

      <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24" style={{ backgroundImage: "url(/assets/img/experience-figure.png)" }} id="statistics">
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              {[
                { icon: "icon-project", count: 2000, label: "Finished Projects" },
                { icon: "icon-award", count: 100, label: "Awards Won" },
                { icon: "icon-happy", count: 1000  , label: "Happy Clients" },
                { icon: "icon-puzzle", count: 10000, label: "Bugs Fixed" },
              ].map(({ icon, count, label }) => (
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left" key={label}>
                  <div>
                    <img src={`/assets/img/${icon}.svg`} className="mx-auto h-12 w-auto md:h-20" alt={`icon ${label}`} />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">{count}</h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">{label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
         
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {blogs.map((blog) => (
              <a href={`/post/${blog.slug}`} className="shadow" key={blog.slug}> {/* Use blog.slug for the link */}
                <div style={{ backgroundImage: `url(/assets/img/${blog.image})` }} className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read More</span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">{blog.title}</span>
                  <span className="block pt-2 font-body text-grey-20">{blog.excerpt}</span> {/* Assuming you have an excerpt field */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
          At Zidio Development, we specialize in innovative software solutions. Our team is dedicated to 
          delivering high-quality projects, fostering professional growth, and driving technological advancement.


          </p>
        </div>
        <form className="mx-auto w-full pt-10 sm:w-3/4">
          <div className="flex flex-col md:flex-row">
            <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5" placeholder="Name" type="text" id="name" />
            <input className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5" placeholder="Email" type="text" id="email" />
          </div>
          <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8" placeholder="Message" id="message" cols="30" rows="10"></textarea>
          <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
            Send
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form>
        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Phone</p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">+91-8455807965</p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Email</p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">support@zidio.in</p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Address</p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">Bengaluru,Karnataka,India</p>
          </div>
        </div>
      </div>

      <div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96" style={{ backgroundImage: "url(/assets/img/map.png)" }}></div>

      <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24" style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}>
        <div className="container relative z-30">
          <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Join <span className="font-bold">to</span> <br />
            Work with Us 
          </h3>
          <form className="mt-6 flex flex-col justify-center sm:flex-row">
            <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text" id="email" placeholder="Give me your Email" />
            <button className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
              Join the club
            </button>
          </form>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2024. All right reserved, {profile.title}.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            {[
              { icon: "facebook-square", url: "https://www.facebook.com/zidiodev" },
              { icon: "twitter", url: "https://x.com/zidiodev" },
              { icon: "dribbble", url: "https://dribbble.com/yourprofile" },
              { icon: "linkedin", url: "https://www.linkedin.com/company/zidio-development/posts/?feedView=all" },
              { icon: "instagram", url: "https://www.instagram.com/zidiodev/?hl=en" }
            ].map(({ icon, url }) => (
              <a href={url} className="pl-4" key={icon} target="_blank" rel="noopener noreferrer">
                <i className={`bx bxl-${icon} text-2xl text-white hover:text-yellow`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    // Create a client for Sanity
    const client = createClient({
      projectId: 'rp1gsa2e', // Replace with your actual project ID
      dataset: 'production', // Replace with your actual dataset name
      useCdn: false, // Use CDN for faster response
      apiVersion: '2023-10-22', // Use a specific API version for stability
    });

    // Define your query, adjust as per your schema
    const query = `*[_type == "blog"]{
      title,
      content
    }`;

    // Fetch data from Sanity
    const blogs = await client.fetch(query);
    console.log("Fetched blogs:", blogs);

    return {
      props: {
        blogs: blogs || [], // Ensure blogs is an array
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogs: [], // Return an empty array on error
      },
    };
  }
}

