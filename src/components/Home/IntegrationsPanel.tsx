import Image from "next/image";
import {
  EXTERNAL_URL_FACEBOOK_PAGE,
  EXTERNAL_URL_LINKEDIN_PAGE,
  EXTERNAL_URL_MAGENTO,
  EXTERNAL_URL_WECHAT_MOMENTS,
  EXTERNAL_URL_WECHAT_OFFICIAL_ACC,
  EXTERNAL_URL_WORDPRESS,
  EXTERNAL_URL_X,
} from "../Urls";

export const integrationsIcons = [
  {
    title: "WeChat",
    description: "Official Accounts",
    imageSrc: "/images/wechat.png",
    url: EXTERNAL_URL_WECHAT_OFFICIAL_ACC,
  },
  {
    title: "Facebook",
    description: "Facebook Pages",
    imageSrc: "/images/facebook.png",
    url: EXTERNAL_URL_FACEBOOK_PAGE,
  },
  {
    title: "WordPress",
    description: "Website",
    imageSrc: "/images/WordPress_blue_logo.png",
    url: EXTERNAL_URL_WORDPRESS,
  },
  {
    title: "Mini App",
    description: "WeChat Mini App",
    imageSrc: "/images/Mini_Program.png",
    url: EXTERNAL_URL_WECHAT_OFFICIAL_ACC,
  },
  {
    title: "Twitter",
    description: "Social Media",
    imageSrc: "/images/x.png",
    url: EXTERNAL_URL_X,
  },
  {
    title: "Magento",
    description: "Website (coming soon)",
    imageSrc: "/images/magento.png",
    url: EXTERNAL_URL_MAGENTO,
  },
  {
    title: "Moments",
    description: "Social (coming soon)",
    imageSrc: "/images/moments.png",
    url: EXTERNAL_URL_WECHAT_MOMENTS,
  },
  {
    title: "Linkedin",
    description: "Page(coming soon)",
    imageSrc: "/images/linkedin.png",
    url: EXTERNAL_URL_LINKEDIN_PAGE,
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
