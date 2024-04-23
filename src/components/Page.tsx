import PageHeader from "./PageHeader";
import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import PageFooter from "./PageFooter";

type iPage = {
  children: React.ReactNode;
  title?: string;
  pageTitle?: string;
  description?: string;
  currentPageName?: string;
};

const inter = Inter({ subsets: ["latin"] });
const Page = ({
  children,
  currentPageName,
  pageTitle,
  title = "",
  description,
}: iPage) => {
  const getPageTitle = () => {
    if (`${pageTitle || ""}`.trim() === "") {
      return null;
    }
    return (
      <div className="bg-[url('/images/pricing-bg.png')] bg-no-repeat lg:bg-bottom bg-left-bottom bg-cover py-48 mt-[-90px] mb-24 w-full px-10">
        <h1 className="text-center">{pageTitle}</h1>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>
          {`${title}`.trim() === "" ? "" : `${title || ""} | `}
          {process.env.NEXT_PUBLIC_APP_NAME} - Unleash The Power Of Social Media
        </title>
        <meta
          name="description"
          content={`${
            description ||
            "At a click of a button, ShowMine will help you to broadcast to many social media channels automatically."
          }`.trim()}
        />
      </Head>

      <div className={`app-page ${inter.className}`}>
        <PageHeader currentPageName={currentPageName} />
        {getPageTitle()}
        {children}
        <PageFooter />
      </div>
    </>
  );
};

export default Page;
