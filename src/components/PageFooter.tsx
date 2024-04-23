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
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
                className="w-5 h-5 bi bi-list"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div>
              Unit 108/45 Gilby Rd <br />
              Mount Waverley VIC 3149
            </div>
          </div>
          <div className="flex pb-3 items-center">
            <div className="p-2">
              <svg
                className="w-5 h-5 bi bi-list"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>
            </div>
            <div>WeChat Official: showmine6</div>
          </div>
          <div className="flex pb-3 items-center">
            <div className="p-2">
              <svg
                className="bi bi-list h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
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
