"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import separator from "@/public/assets/separator.svg";

type BreadcrumbProps = {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClassName?: string;
  listClassName?: string;
  activeItemClassName?: string;
  capitalizeLinks?: boolean;
};

const defaultProps: BreadcrumbProps = {
  separator: (
    <Image
      src={separator}
      alt="Separator"
      width={7}
      height={7}
      className="mx-2"
    />
  ),
  containerClassName: "flex flex-col pb-4 bg-[#FBFBFB]",
  listClassName: "flex text-xs items-center text-[#667085]",
  activeItemClassName: "text-sm font-medium text-[#667085]",
  capitalizeLinks: true,
};

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const {
    homeElement,
    separator,
    containerClassName,
    listClassName,
    activeItemClassName,
    capitalizeLinks,
  } = { ...defaultProps, ...props };

  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const asPathWithoutQuery = pathname.split("?")[0];

    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      const title = capitalizeLinks
        ? subpath
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : subpath;

      return { href, title };
    });

    return [{ href: "/", title: "Dashboard" }, ...crumbList];
  };

  const breadcrumbs = generateBreadcrumbs();

  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];

  return (
    <nav aria-label="breadcrumb" className={containerClassName}>
      {lastBreadcrumb && (
        <h1 className="text-2xl font-semibold text-[#1D1F2C] mb-2">
          {lastBreadcrumb.title}
        </h1>
      )}
      <ol className={listClassName}>
        {breadcrumbs.map((crumb, idx) => {
          const isLastItem = idx === breadcrumbs.length - 1;
          return (
            <li key={idx} className="flex items-center">
              {idx === 0 ? (
                <Link
                  href={crumb.href}
                  className="flex text-sm font-medium text-[#2086BF] gap-1 transition-colors"
                >
                  {homeElement}
                  {crumb.title}
                </Link>
              ) : (
                <>
                  <span className="mx-2 text-gray-400">{separator}</span>
                  {isLastItem ? (
                    <span className={activeItemClassName}>{crumb.title}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {crumb.title}
                    </Link>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
