import MainSlideShow from "@/components/MainSlideShow";
import Page from "../components/Page";
import PageSection from "@/components/PageSection";
import IntegrationsPanel, {
  integrationsIcons,
} from "@/components/Home/IntegrationsPanel";
import SignUpBtn from "@/components/SignUpBtn";
import SignInBtn from "@/components/SignInBtn";
import Image from "next/image";

const HomePage = () => {
  return (
    <Page>
      <MainSlideShow />
      <PageSection>
        <IntegrationsPanel />
      </PageSection>

      <PageSection extraClassName="my-24 py-10">
        <div className={`flex lg:flex-row justify-start items-center flex-col`}>
          <div className="lg:w-4/12 w-full xl:pl-16">
            <h3>Unleash The Power Of Social Media</h3>
            <p className="my-6 text-xl leading-9">
              At a click of a button, ShowMine will help you to broadcast to
              many social media channels automatically. It will save you time,
              and keep your business up to date with its customers.
            </p>
            <div className="flex gap-4">
              <SignUpBtn />
              <SignInBtn />
            </div>
            <div className="text-sm mt-4 mb-14">
              Start to use ShowMine for free. <br /> No credit card required.
            </div>
          </div>
          <div className="lg:w-8/12 w-full">
            <Image
              src={"/images/home-bg.png"}
              width={1000}
              height={1000}
              alt="social"
            />
          </div>
        </div>
      </PageSection>

      <PageSection extraClassName="mb-24 py-10">
        <div
          className={`xl:flex-row-reverse flex justify-start items-center flex-col gap-10`}
        >
          <div className="xl:w-4/12 w-full">
            <h3>Reaching more mobile users</h3>
            <p className="my-6 text-xl leading-9">
              Fully compatible with all the mobile devices. Helping business to
              reach more mobile users.
            </p>
            <div className="flex gap-4">
              <SignUpBtn />
              <SignInBtn />
            </div>
            <div className="text-sm mt-4">
              Start to use ShowMine for free. <br /> No credit card required.
            </div>
          </div>

          <div className="xl:w-8/12  w-full xl:pl-16 flex gap-4">
            {[
              "/images/furniture_app.png",
              "/images/app_mock.png",
              "/images/app31.png",
            ].map((imageUrl) => {
              return (
                <Image
                  key={imageUrl}
                  src={imageUrl}
                  width={280}
                  height={600}
                  priority
                  alt="app mock"
                />
              );
            })}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col items-center">
          <div className="lg:flex gap-x-10 py-5 flex-wrap justify-center items-start">
            {[
              {
                title: "Social Media Integrated",
                description:
                  "Auto spread over many channels at the same time. Generates more leads with less efforts.",
              },
              {
                title: "Cloud Solution",
                description:
                  "Get connected anywhere any time. Much closer to your customer with more prompt relationship.",
              },
              {
                title: "China Enabled",
                description:
                  "Via WeChat, it enables you to sell your hight quality products direct to your Overseas' customer.",
              },
              {
                title: "Market Analysis",
                description:
                  "Tracks analytic data automatically, helping business understand their customers more.",
              },
              {
                title: "SEO Benefits",
                description:
                  "With all the back link to your websites from social media channels, it will help your site's SEO results.",
              },
              {
                title: "More Optunities",
                description:
                  "Continuing integrating more and more big platforms and sync'd at the same time.",
              },
            ].map((tile) => {
              return (
                <div
                  key={tile.title}
                  className="max-w-full lg:w-96 p-7 hover:bg-white hover:rounded-md mb-7 transition-all duration-75 ease-linear hover:mt-[-10px]"
                >
                  <div className="text-2xl mb-4 text-[#58468B]">
                    {tile.title}
                  </div>
                  <div className="text-sm">{tile.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </PageSection>

      <PageSection extraClassName="mb-24 py-10">
        <div
          className={`flex lg:flex-row lg:justify-between items-center flex-col`}
        >
          <div className="lg:w-5/12 w-full xl:pl-16">
            <h3>
              A Multitude Of <br /> Options Add Feats
            </h3>
            <p className="my-6 text-xl leading-9">
              Managing your contents at a single point with multitude of options
              and add-ons, which allows you to do normal social like posts and
              marketing materials.
            </p>
          </div>
          <div className="lg:w-5/12 w-full">
            <Image
              src={"/images/Screen-Shot.png"}
              width={1000}
              height={1000}
              alt="social"
            />
          </div>
        </div>
      </PageSection>

      <PageSection extraClassName="mb-24 py-10">
        <div
          className={`flex lg:flex-row lg:justify-between items-center flex-col`}
        >
          <div className="lg:w-6/12 w-full">
            <Image
              src={"/images/channels.png"}
              width={1000}
              height={1000}
              alt="social"
            />
          </div>
          <div className="lg:w-6/12 w-full xl:pl-16">
            <h3>Get ShowMine Now!</h3>
            <p className="my-6 text-xl leading-9">
              Unleash the power of social media now, at a click on a button
              below.
            </p>
            <div className="flex gap-3">
              {integrationsIcons.map((icon) => {
                return (
                  <Image
                    src={icon.imageSrc}
                    width={40}
                    height={40}
                    alt={icon.title}
                    key={icon.title}
                  />
                );
              })}
            </div>
            <div className="flex gap-4 my-4">
              <SignUpBtn />
              <SignInBtn />
            </div>
            <div className="text-sm">
              Start to use ShowMine for free. <br /> No credit card required.
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection extraClassName="mb-24 py-10">
        <div className="flex flex-col items-center">
          <div className="lg:flex gap-x-10 py-5 flex-wrap justify-center items-start">
            {[
              {
                title: "Websites",
                description:
                  "Connected to various websites and manage the content at one point.",
              },
              {
                title: "Social Media",
                description:
                  "Broadcast to many social media channels at the same time, with just a click of a button.",
              },
              {
                title: "Payments",
                description:
                  "Integrated with several major payment gateways, less hassle more payments.",
              },
            ].map((tile) => {
              return (
                <div
                  key={tile.title}
                  className="text-center max-w-full lg:w-96 p-10 hover:bg-white hover:rounded-md mb-7 transition-all duration-75 ease-linear hover:mt-[-10px]"
                >
                  <div className="text-2xl mb-4 text-[#58468B]">
                    {tile.title}
                  </div>
                  <div className="text-sm">{tile.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </PageSection>

      <PageSection extraClassName="my-24 py-10">
        <div className="text-center lg:w-1/2 mx-auto">
          <h3>Signup Today & Experience Endless Possibilities.</h3>
          <div className="flex gap-4 justify-center">
            <SignUpBtn />
            <SignInBtn />
          </div>
          <div className="text-sm mt-4 mb-14">
            Start to use ShowMine for free. <br /> No credit card required.
          </div>
        </div>
        <div className="bg-[url('/images/slider-shm.png')] bg-contain bg-center bg-no-repeat min-h-[760px] mt-[-200px]">
          <Image
            src={"/images/product-presentation-gif-1.gif"}
            className="mx-auto pt-[620px]"
            width={100}
            height={100}
            alt="showmine"
          />
        </div>
      </PageSection>
    </Page>
  );
};

export default HomePage;
