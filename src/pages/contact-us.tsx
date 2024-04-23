import ContactUsForm from "@/components/ContactUsForm";
import Page from "@/components/Page";
import { PAGE_NAME_CONTACT_US } from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
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
                      link: "https://wordpress.com/",
                    },
                    {
                      name: "Magento",
                      img: "/images/magento.png",
                      link: "https://business.adobe.com/au/products/magento/magento-commerce.html",
                    },
                  ],
                },
                {
                  title: "Social",
                  icons: [
                    {
                      name: "WeChat",
                      img: "/images/wechat.png",
                      link: "https://open.weixin.qq.com/?lang=en",
                    },
                    {
                      name: "Facebook",
                      img: "/images/facebook.png",
                      link: "https://www.facebook.com/",
                    },
                  ],
                },
                {
                  title: "Payments",
                  icons: [
                    {
                      name: "WeChat Pay",
                      img: "/images/wechat_pay.png",
                      link: "https://pay.weixin.qq.com/index.php/public/wechatpay",
                    },
                    {
                      name: "Alipay",
                      img: "/images/Alipay_logo.png",
                      link: "https://intl.alipay.com/",
                    },
                    {
                      name: "Paypal",
                      img: "/images/paypal.png",
                      link: "https://www.paypal.com/au/home",
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
                      link: "https://squareup.com/au/en",
                    },
                    {
                      name: "MERP",
                      img: "/images/merp-logo.png",
                      link: "https://www.merp.com.au/",
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
