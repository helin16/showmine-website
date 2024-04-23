"use client";
import Page from "@/components/Page";
import PageSection from "@/components/PageSection";
import Spinner from "@/components/Spinner";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type iAsset = {
  comments: string;
  companyId: string;
  createdAt: Date | string;
  createdById: string;
  externalAssetId: string | null;
  externalObj: any | null;
  fileName: string;
  fileSize: number;
  fileType: string;
  id: string;
  isActive: boolean;
  type: string;
  updatedAt: Date | string;
  updatedById: string;
  url: string;
};

type iNewsItem = {
  authorId: string;
  companyId: string;
  content: string;
  coverAssetId: string;
  createdAt: Date | string;
  createdById: string;
  enableGTranslateFlag: boolean;
  excerpt: string;
  id: string;
  isActive: boolean;
  isPublished: boolean;
  noOfVisits: number;
  oldId: string;
  publishedAt: Date | string | null;
  publishedById: string | null;
  slug: string;
  title: string;
  updatedAt: Date | string;
  updatedById: string;
  CoverAsset?: iAsset;
};

type iList<T> = {
  data: T[];
  currentPage: number;
  from: number;
  to: number;
  perPage: number;
  total: number;
  pages: number;
};

type iBlogPage = {
  noOfItems?: number;
};
const BlogPage = ({ noOfItems = 10 }: iBlogPage) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<iList<iNewsItem> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<iList<iNewsItem>>("https://i.showmine66.com/item", {
        params: {
          perPage: noOfItems,
          currentPage,
          sort: "publishedAt:DESC",
          where: JSON.stringify({
            isActive: true,
            publishedAt: { OP_NOT: null },
          }),
          include: "CoverAsset",
        },
        headers: {
          "X-Shm-Token": "b2da3017732e698a28a55bb663836c",
          Comid: "5e4b1f5c-40c5-4ab0-b3fb-d5a33e2f7613",
        },
      })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [noOfItems, currentPage]);

  const getNewsItemUrl = (newsItem: iNewsItem) => {
    return `https://r.showmine66.com/item/${newsItem.id}`;
  };

  const getContent = () => {
    if (isLoading === true) {
      return (
        <div className="flex gap-4">
          <Spinner className="w-4" />
          <div>Loading ...</div>
        </div>
      );
    }

    return (
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-8/12">
          {(data?.data || []).map((newsItem) => {
            return (
              <div key={newsItem.id} className="mb-24">
                <div
                  className={`bg-no-repeat bg-center bg-cover rounded-md mb-4`}
                  style={{
                    backgroundImage: `url('${newsItem.CoverAsset?.url || ""}')`,
                  }}
                >
                  <Link
                    href={getNewsItemUrl(newsItem)}
                    className="lg:h-[500px] md:h-[350px] h-[200px] block"
                  >
                    &nbsp;
                  </Link>
                </div>
                <div className="p-4">
                  <Link
                    className="text-2xl hover:font-semibold"
                    href={getNewsItemUrl(newsItem)}
                  >
                    {newsItem.title}
                  </Link>
                  <p className="my-4 leading-8">{newsItem.excerpt || ""} ...</p>
                  <Link
                    href={getNewsItemUrl(newsItem)}
                    className="mt-6 hover:font-semibold block"
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:w-3/12">
          {(data?.data || []).slice(0, 10).map((newsItem) => {
            return (
              <Link
                key={newsItem.id}
                className="block text-xl px-6 py-2 hover:font-semibold"
                href={getNewsItemUrl(newsItem)}
              >
                {newsItem.title}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Page
      title="Blog"
      description="Flow us to get the latest updates"
      pageTitle="Blog"
    >
      <PageSection extraClassName="mb-24 py-10">{getContent()}</PageSection>
    </Page>
  );
};

export default BlogPage;
