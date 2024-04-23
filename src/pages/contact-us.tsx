import ContactUsForm from "@/components/ContactUsForm";
import Page from "@/components/Page";
import { PAGE_NAME_CONTACT_US } from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import {
  EXTERNAL_URL_ALI_PAY,
  EXTERNAL_URL_FACEBOOK_PAGE,
  EXTERNAL_URL_MAGENTO,
  EXTERNAL_URL_MERP,
  EXTERNAL_URL_PAYPAL,
  EXTERNAL_URL_SQUARE_UP,
  EXTERNAL_URL_WECHAT_OFFICIAL_ACC,
  EXTERNAL_URL_WECHAT_PAY,
  EXTERNAL_URL_WORDPRESS,
  EXTERNAL_URL_X,
} from "@/components/Urls";
import Image from "next/image";
import Link from "next/link";

const ContactUsPage = () => {
  return (
    <Page title="Contact Us" currentPageName={PAGE_NAME_CONTACT_US}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12593.716526048842!2d145.1345372!3d-37.8970311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66aad9a8cc1f5%3A0xb39cfb4e1989c1cf!2sShowMine%20-%20unleash%20the%20power%20of%20social%20media!5e0!3m2!1sen!2sau!4v1713848656496!5m2!1sen!2sau"
        loading="lazy"
        className="w-full h-96"
      ></iframe>
      <PageSection extraClassName="mb-24 py-24 lg:px-32">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-1/2 w-12/12">
            <h3>ShowMine</h3>
            <p className="text-xl leading-9">
              Unleashing the power of eCommerce on social media. ShowMine allows
              businesses to sell on channels like WeChat, Facebook using
              WeChatPay, AliPay, PayPal, Bank Cards, Credit Cards, Square etc.
            </p>
            <div className="flex flex-row flex-wrap items-start gap-6 mt-10">
              {[
                {
                  title: "Websites",
                  icons: [
                    {
                      name: "WordPress",
                      img: "/images/WordPress_blue_logo.png",
                      link: EXTERNAL_URL_WORDPRESS,
                    },
                    {
                      name: "Magento",
                      img: "/images/magento.png",
                      link: EXTERNAL_URL_MAGENTO,
                    },
                  ],
                },
                {
                  title: "Social",
                  icons: [
                    {
                      name: "WeChat",
                      img: "/images/wechat.png",
                      link: EXTERNAL_URL_WECHAT_OFFICIAL_ACC,
                    },
                    {
                      name: "Facebook",
                      img: "/images/facebook.png",
                      link: EXTERNAL_URL_FACEBOOK_PAGE,
                    },
                    {
                      name: "X",
                      img: "/images/x.png",
                      link: EXTERNAL_URL_X,
                    },
                  ],
                },
                {
                  title: "Payments",
                  icons: [
                    {
                      name: "WeChat Pay",
                      img: "/images/wechat_pay.png",
                      link: EXTERNAL_URL_WECHAT_PAY,
                    },
                    {
                      name: "Alipay",
                      img: "/images/Alipay_logo.png",
                      link: EXTERNAL_URL_ALI_PAY,
                    },
                    {
                      name: "Paypal",
                      img: "/images/paypal.png",
                      link: EXTERNAL_URL_PAYPAL,
                    },
                    {
                      name: "Bankcards",
                      img: "/images/bankcards.png",
                      link: "",
                    },
                  ],
                },
                {
                  title: "Management",
                  icons: [
                    {
                      name: "Square Up",
                      img: "/images/square-logo.png",
                      link: EXTERNAL_URL_SQUARE_UP,
                    },
                    {
                      name: "MERP",
                      img: "/images/merp-logo.png",
                      link: EXTERNAL_URL_MERP,
                    },
                  ],
                },
              ].map((section) => {
                return (
                  <div key={section.title} className="w-5/12">
                    <h4 className="font-[400] text-2xl mb-4">
                      {section.title}
                    </h4>
                    <div className="flex gap-4">
                      {section.icons.map((icon) => {
                        return (
                          <Link href={icon.link} key={icon.name}>
                            <Image
                              src={icon.img}
                              height={32}
                              width={32}
                              alt={icon.name}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ContactUsForm
            className="lg:w-1/2 w-12/12"
            title={<h3>Drop us a note</h3>}
          />
        </div>
      </PageSection>
    </Page>
  );
};

export default ContactUsPage;
