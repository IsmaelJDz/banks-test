import Head from "next/head";

import { MainLayoutProps } from "./MainLayout.types";
// import { Navbar, SideMenu } from "../ui";

function MainLayout({
  children,
  title,
  pageDescription,
  imageFullUrl
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />

        {imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        {/* <Navbar /> */}
        <p>Navbar</p>
      </nav>

      {/* <SideMenu /> */}

      <main>{children}</main>
    </>
  );
}

export { MainLayout };
