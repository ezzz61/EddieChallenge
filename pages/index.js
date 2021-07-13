import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import CardDesign from "../components/CardDesign";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header className="container mx-auto text-gray-normal">
        <Navbar />
        <Hero />
      </header>
      {/* services */}
      <main className="container mx-auto text-gray-normal mt-52 font-poppins">
        <div className="w-10/12 mx-auto">
          <h1 className="lg:text-5xl md:text-4xl font-medium lg:leading-normal md:leading-normal mt-4">
            We offer high
            <br />
            demand services
          </h1>
        </div>
        <div className="w-10/12 mx-auto flex justify-center gap-x-10 mt-10">
          <Card image="create.svg" color="bg-blue-light" title="UI/UX Design" />
          <Card image="code.svg" color="bg-green-light" title="Front End" />
          <Card image="storage.svg" color="bg-red-light" title="Back End" />
        </div>
        {/* end services */}

        {/* Design */}
        <div className="w-10/12 mx-auto mt-52">
          <div className="">
            <h1 className="lg:text-5xl md:text-4xl font-medium lg:leading-normal md:leading-normal">
              Good design means
              <br />
              good business
            </h1>
          </div>
          <div className="lg:grid grid-rows lg:grid-cols-2 lg:gap-y-0 xxl:gap-y-12 lg:gap-6 md:flex md:flex-col md:gap-16 md:mt-20 lg:mt-0">
            <CardDesign
              position="row-start-2 row-end-5 col-start-1 col-end-2"
              image="smarthome.jpg"
              subtitle="Smart home dashboard"
              title="Full stack application"
            />
            <CardDesign
              position="col-start-2 row-start-1 col-end-3 row-end-row-5 "
              image="onboard.png"
              subtitle="Onboard application"
              title="UX/UI design"
            />
            <CardDesign
              position="col-start-1 row-start-7 col-end-2 row-end-row-9 -mt-6 lg:row-start-6 lg:row-end-row-8"
              image="booking.png"
              subtitle="Bookinf system"
              title="Mobile application"
            />
            <CardDesign
              position="col-start-2 row-start-6 col-end-3 row-end-row-9 lg:row-start-5 lg:row-end-row-5"
              image="juice-product.png"
              subtitle="Juice product homepage"
              title="Front End application"
            />
            <div className="see-more self-start text-blue-light text-lg font-semibold">
              <Link href="/">
                <a className="flex justify-end hover:text-blue-normal">
                  <p>See more</p>
                  <img
                    className="mt-1"
                    src="/assets/images/arrow.svg"
                    alt="arrow"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* end Design */}
        {/* team */}
        <div className="container mx-auto w-10/12 md:mt-32 lg:-mt-56 lg:-mt-80 xl:-mt-56">
          <div className="flex lg:flex-row md:flex-col justify-between">
            <div className="w-7/12 flex flex-col justify-center">
              <p className="text-red-light font-semibold text-medium">
                Meet the team
              </p>
              <h1 className="lg:w-10/12 xl:w-8/12 lg:text-5xl md:text-5xl font-medium text-gray-normal mt-2 mb-4 lg:leading-normal md:leading-normal">
                We are chilled and a lidback team
              </h1>
              <p className="text-gray-light md:text-xl lg:text-base">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="lg:w-7/12 grid grid-cols-2 grid-rows-team gap-4 md:mt-14 xl:mt-0">
              <div className="col-start-2 col-end-3 row-start-1 row-end-5 self-end rounded-xl overflow-hidden h-60 w-60">
                <img
                  src="/assets/images/person1.png"
                  alt="person1"
                  className="transition-all hover:scale-110"
                />
              </div>
              <div className="col-start-2 col-end-3 row-start-5 row-end-8 rounded-xl overflow-hidden">
                <img
                  className="w-full transition-all hover:scale-110"
                  src="/assets/images/person2.png"
                  alt="person2"
                />
              </div>
              <div className="row-start-2 row-end-6 lg:mt-6 xl:mt-16 col-span-1 col-end-2 justify-self-end rounded-xl overflow-hidden h-72">
                <img
                  src="/assets/images/person3.png"
                  alt="person3"
                  className="transition-all hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end team */}
        <div className="container w-10/12 mx-auto mt-52">
          <div className="lg:w-9/12 md:w-12/12">
            <div className="">
              <q className="text-gray-normal lg:text-4xl md:text-3xl font-medium lg:leading-normal md:leading-normal">
                Fast and outstanding resutls. Edie understands their customer’s
                needs. They have a young and talented team.
              </q>
            </div>
            <div className="flex mt-12">
              <div className="w-1/12 rounded-xl overflow-hidden">
                <img
                  src="/assets/images/person4.png"
                  alt="person4"
                  className="transition-all hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center ml-5">
                <h3 className="font-semibold text-gray-normal text-2xl">
                  Carlos Tran
                </h3>
                <p className="mt-2 font-normal text-gray-lighter">
                  The Decorate Gatsby
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
