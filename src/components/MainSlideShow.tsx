import SignInBtn from "./SignInBtn";
import SignUpBtn from "./SignUpBtn";

const MainSlideShow = () => {
  return (
    <div
      className={
        "flex flex-col lg:flex-row items-center justify-stretch py-24 lg:px-18 px-10 container mx-auto gap-2 lg:mt-20 mt-0"
      }
    >
      <div className="bg-[url('/images/main-slide.png')] bg-contain bg-center bg-no-repeat min-h-96 lg:h-[600px] w-full">
        &nbsp;
      </div>
      <div className="lg:w-6/12 py-16">
        <h3 className="text-4xl lg:text-5xl text-center lg:text-left">
          Manage your <br />
          content at one place
        </h3>
        <p>
          Broadcast to all your content channels at the same time automatically.
        </p>
        <div className="flex gap-4 lg:justify-start justify-center">
          <SignUpBtn />
          <SignInBtn />
        </div>
        <div className="text-sm mt-4 mb-14 text-center lg:text-left">
          Start to use ShowMine for free. No credit card required.
        </div>
      </div>
    </div>
  );
};

export default MainSlideShow;
