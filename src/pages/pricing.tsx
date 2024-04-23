import ContactUsForm from "@/components/ContactUsForm";
import Page from "@/components/Page";
import { PAGE_NAME_PRICING } from "@/components/PageHeader";
import PageSection from "@/components/PageSection";

const PricingPage = () => {
  return (
    <Page
      title="Pricing"
      currentPageName={PAGE_NAME_PRICING}
      pageTitle="Pricing"
      description="Discover unbeatable prices without sacrificing quality. Experience top-tier service at competitive rates."
    >
      <PageSection extraClassName="mb-24 py-10">
        <div className="lg:w-1/2 mx-auto text-center">
          <h3>Prices and plans</h3>
          <p>
            Discover unbeatable prices without sacrificing quality. Experience
            top-tier service at competitive rates.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-14 items-start lg:items-stretch mt-12">
          {[
            {
              price: 0,
              title: "Free",
              frequency: "monthly",
              users: "1",
              articles: "unlimited",
              storage: "2G",
              channels: "unlimited",
            },
            {
              price: 49,
              title: "Starter",
              frequency: "monthly",
              users: "10",
              articles: "unlimited",
              storage: "50G",
              channels: "unlimited",
            },
            {
              price: 129,
              title: "Unlimited",
              frequency: "monthly",
              users: "unlimited",
              articles: "unlimited",
              storage: "50G",
              channels: "unlimited",
            },
          ].map((pricing) => {
            return (
              <div
                key={pricing.title}
                className="flex w-full lg:w-4/12 bg-white rounded-lg p-10 gap-8 shadow-xl"
              >
                <div className="text-center">
                  <h1 className="mb-2">${pricing.price}</h1>
                  <p className="uppercase text-xs">{pricing.frequency}</p>
                </div>
                <div>
                  <h5 className="pt-12 font-semibold mb-4">{pricing.title}</h5>
                  <div className="mb-4">- {pricing.users} user</div>
                  <div className="mb-4">
                    - {pricing.articles} articles{" "}
                    <small>(countless articles)</small>
                  </div>
                  <div className="mb-4">
                    - {pricing.storage} storage{" "}
                    <small>for all your images and videos</small>
                  </div>
                  <div className="mb-4">
                    - {pricing.channels} channel{" "}
                    <small>WeChat included by default</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection extraClassName="mb-24 py-10">
        <ContactUsForm className="mx-auto lg:w-1/2" />
      </PageSection>
    </Page>
  );
};

export default PricingPage;
