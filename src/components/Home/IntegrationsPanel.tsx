import Image from "next/image";

export const integrationsIcons = [
  {
    title: "WeChat",
    description: "Official Accounts",
    imageSrc: "/images/wechat.png",
    url: "https://mp.weixin.qq.com/",
  },
  {
    title: "Facebook",
    description: "Facebook Pages",
    imageSrc: "/images/facebook.png",
    url: "https://www.facebook.com/business/tools/facebook-pages",
  },
  {
    title: "WordPress",
    description: "Website",
    imageSrc: "/images/WordPress_blue_logo.png",
    url: "https://wordpress.com/",
  },
  {
    title: "Mini App",
    description: "WeChat Mini App",
    imageSrc: "/images/Mini_Program.png",
    url: "https://mp.weixin.qq.com",
  },
  {
    title: "Twitter",
    description: "Social Media",
    imageSrc: "/images/x.png",
    url: "https://twitter.com/",
  },
  {
    title: "Magento",
    description: "Website (coming soon)",
    imageSrc: "/images/magento.png",
    url: "https://magento.com/",
  },
  {
    title: "Moments",
    description: "Social (coming soon)",
    imageSrc: "/images/moments.png",
    url: "https://en.wikipedia.org/wiki/Moments_(social_networking)",
  },
  {
    title: "Linkedin",
    description: "Page(coming soon)",
    imageSrc: "/images/linkedin.png",
    url: "https://business.linkedin.com/marketing-solutions/linkedin-pages",
  },
];

const IntegrationsPanel = () => {
  return (
    <div className="flex flex-col items-center">
      <h3>Perfect Integration</h3>
      <p className="lg:w-1/2 text-center text-lg leading-8">
        With your data holding in one place, you can auto sync to many other
        places with just a click of a button.
      </p>
      <div className="lg:flex gap-x-10 py-5 flex-wrap justify-center items-start">
        {integrationsIcons.map((method) => {
          return (
            <a
              className="flex gap-6 bg-white p-8 max-w-full lg:w-80 rounded-lg shadow-2xl shadow-slate-400/50 my-10 transition-all hover:mt-6"
              key={method.title}
              href={method.url}
              target="__BLANK"
            >
              <Image
                src={method.imageSrc}
                width={50}
                height={50}
                alt={method.title}
              />
              <div className="text-left">
                <div className="font-[500] text-xl">{method.title}</div>
                <div>{method.description}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationsPanel;
