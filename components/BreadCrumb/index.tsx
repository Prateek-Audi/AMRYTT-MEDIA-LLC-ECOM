"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BreadcrumbProps = {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClassName?: string;
  listClassName?: string;
  activeItemClassName?: string;
  capitalizeLinks?: boolean;
}

const defaultProps: BreadcrumbProps = {
  separator: `>`,
  containerClassName: "flex items-center p-4 bg-[#FBFBFB]",
  listClassName: "flex text-xs items-center text-[#565656]",
  activeItemClassName: "text-[#565656]",
  capitalizeLinks: true
};

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const {
    homeElement,
    separator,
    containerClassName,
    listClassName,
    activeItemClassName,
    capitalizeLinks
  } = { ...defaultProps, ...props };

  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    // Remove any query parameters, as they're not included in breadcrumbs
    const asPathWithoutQuery = pathname.split("?")[0];

    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter(v => v.length > 0);

    // Map array of route parts to array of breadcrumb objects
    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      const title = capitalizeLinks 
        ? subpath.split("-").map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(" ")
        : subpath;
        
      return { href, title };
    });

    return [{ href: "/", title: "Home" }, ...crumbList];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav aria-label="breadcrumb" className={containerClassName}>
      <ol className={listClassName}>
        {breadcrumbs.map((crumb, idx) => {
          const isLastItem = idx === breadcrumbs.length - 1;
          
          return (
            <li key={idx} className="flex items-center">
              {idx === 0 ? (
                <Link 
                  href={crumb.href}
                  className="flex gap-1 transition-colors"
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