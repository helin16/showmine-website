"use client";
import Link from "next/link";
import { useState } from "react";
import AppLogo from "./AppLogo";
import Image from "next/image";
import { CONTACT_US_URL } from "./Urls";

type iPageFooter = {
  currentPageName?: string;
};

export default function PageFooter() {
  return (
    <div className={"app-footer bg-transparent"}>
      <div className="w-full container mx-auto flex gap-8 mb-24">
        <div className="xl:w-1/4">
          <AppLogo className="mb-6" width={240} />
          <p className="my-4 leading-8">
            Unleashing the power of eCommerce on social media. ShowMine allows
            businesses to sell on channels like WeChat, Facebook using
            WeChatPay, AliPay, PayPal, Bank Cards, Credit Cards, Square etc.
          </p>
        </div>
        <div className="xl:w-1/4">
          <div className="text-2xl mt-2 mb-6">Contact Info</div>
          <div className="flex pb-3 items-start">
            <div className="w-1/12"></div>
            <div>
              Unit 108/45 Gilby Rd <br />
              Mount Waverley VIC 3149
            </div>
          </div>
          <div className="flex pb-3">
            <div className="w-1/12"></div>
            <div>WeChat Official: showmine6</div>
          </div>
          <div className="flex pb-3">
            <div className="w-1/12"></div>
            <div>Customer Service: showmine688</div>
          </div>
        </div>
        <div className="xl:w-1/4">
          <div className="text-2xl mt-2 mb-3">Support & Services</div>
          <p className="my-4 leading-8">
            If you have any enquiries for supports and services, please feel
            free to drop us an email here.
          </p>
          <Link
            href={CONTACT_US_URL}
            className="my-4 py-4 px-8 uppercase text-sm inline-block bg-yellow-400 rounded-full text-blue-950 hover:brightness-95"
          >
            Contact Us
          </Link>
        </div>
        <div className="xl:w-1/4">
          <div className="text-2xl mt-2 mb-3">Certificates & Lisences</div>
          <p className="my-4 text-sm">沪ICP备18008548号-1</p>
          <div className="flex gap-6 items-start">
            <a
              href={
                "https://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020170808175639000001983325-SAIC_SHOW_310000-4028e4cb67e418400168c7d51cd27ecb441&signData=MEYCIQCpnfk7ozxrZA08EGWN56es92IvKO5r8qxocrlsOcSs3QIhAMk4DVXoErap6Ytlua5+esiWYbA1Ni8VrEipIdmOHUDl"
              }
            >
              <Image
                src={"/images/new_icon_cert.jpg"}
                alt="电子执照"
                width={80}
                height={80}
              />
            </a>
            <Image
              src={"/images/qrcode-new.jpg"}
              alt="qrcode"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>
      <div className="w-full py-6 bg-blue-100">
        <div className="container mx-auto text-center">
          Copyrights © ShowMine Pty Ltd, Since 2017
        </div>
      </div>
    </div>
  );
}
