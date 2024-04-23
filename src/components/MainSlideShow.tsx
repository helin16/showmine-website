import SignInBtn from "./SignInBtn";
import SignUpBtn from "./SignUpBtn";

const MainSlideShow = () => {
  return (
    <div
      className={
        "flex flex-col lg:flex-row items-stretch justify-stretch py-32 lg:px-32 px-10 container mx-auto"
      }
    >
      <div className="lg:w-7/12 bg-[url('/images/main-slide.png')] bg-contain bg-center bg-no-repeat min-h-96"></div>
      <div className="lg:w-5/12 py-16">
        <h3 className="text-4xl lg:text-5xl">
          Manage your <br />
          content at one place
        </h3>
        <p>
          Broadcast to all your content channels at the same time automatically.
        </p>
        <div className="flex gap-4">
          <SignUpBtn />
          <SignInBtn />
        </div>
        <div className="text-sm mt-4 mb-14">
          Start to use ShowMine for free. No credit card required.
        </div>
      </div>
    </div>
  );
};

export default MainSlideShow;
