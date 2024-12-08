import Head from "next/head";
import Navigation from "./Navigation";
import type { FC } from "react";
import Link from "next/link";

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  metaDescription?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
}) => {
  return (
    <div className="">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <header className="site-header">
        {/* <div className="container center">
          <div className="header-widget">
            <a className="header-image-wrapper" href="/">
              <img
                alt="Daily Sitecore"
                data-height="170"
                data-width="762"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEi2hMLVuYPwck6n5BdKWMRQ7CEjDBcv6pn2gKC0upv78pcDw7TjI3dcYk3ToTun9TkSqNKMt9uyqyw9rwovBE4Ru30gnLACN8e0C4PKozAvomPVTgO5BvJjqRE_KGgfubPilHaqbWH9XNkOGDcNXdy3YMC7AV9HGzXaiDa2vs9OYs0Hte9IbgzCCHUSlZ4=s762"
              />
            </a>
          </div>
        </div> */}

        <div className="container">
          <div className="header-title">
            <Link href="/">
              <span className="header-title-name">ravindra</span>
              mishra
            </Link>
          </div>

          <Navigation className="header-nav" />
        </div>
      </header>

      <main className="">{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="header-title dark">
            <a href="https://ravindra-mishra.github.io">
              <span className="header-title-name">ravindra</span>
              mishra
            </a>
          </div>

          <p>© 2024 Ravindra Mishra</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
