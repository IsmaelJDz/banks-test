import Head from "next/head";

import { MainLayoutProps } from "./MainLayout.types";

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
        <div className="p-4 mb-4 bg-pink-500">
          <p className="text-center text-cyan-50">Developed by Ismael</p>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}

export { MainLayout };
