import PageHeader from "./PageHeader";
import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import PageFooter from "./PageFooter";

type iPage = {
  children: React.ReactNode;
  title?: string;
};

const inter = Inter({ subsets: ["latin"] });
const Page = ({
  children,
  title = `${process.env.NEXT_PUBLIC_APP_NAME} - Unleash The Power Of Social Media`,
}: iPage) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`app-page ${inter.className}`}>
        <PageHeader />
        {children}
        <PageFooter />
      </div>
    </>
  );
};

export default Page;
