import Head from "next/head";

export const siteTitle = "PDP - Reubert Barbosa";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Reubert Barbosa life portfolio's" />
        <meta
          property="og:url"
          content="https://barbosa-reubert-blog.vercel.app/"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  );
};
