import Link from 'next/link';
import Footer from '../compenents/common/footer/Footer';
import Header from '../compenents/common/header/Header';
import BsCatalogPreview from '../compenents/homepage/BsCatalogPreview';
import HomeCatalogPreview from '../compenents/homepage/HomeCatalogPreview';
import HomeNewsletter from '../compenents/homepage/HomeNewsletter';
import HomePayment from '../compenents/homepage/HomePayment';

export default function Home() {
  return (
    <div>
      <header className="header container mt-lg-5 mb-lg-3">
        <Header></Header>
      </header>

      <main className="content">
        <header className="banner-main">
          <div className="banner-main-inner container">
            <div>
              <h1>Office Suits</h1>
              <h2>Get back to work in style</h2>

              <Link
                href="/"
                title="CTA"
                className="banner-cta button button-large"
              >
                Create your suit
              </Link>
            </div>
            <footer className="banner-main-copy">
              <p>
                <span>A Tailored Suit</span> that will fit you perfectly is a
                dream for everybody.
              </p>
              <p>
                We provide you with the design and you choose if you like it or
                if you want to change the details with our online configurator.
              </p>
            </footer>
          </div>
        </header>

        <div className="content-main">
          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeCatalogPreview></HomeCatalogPreview>

          {/* <HomeCatalogPreview></HomeCatalogPreview> */}

          <BsCatalogPreview></BsCatalogPreview>

          <HomePayment></HomePayment>
          <HomeNewsletter></HomeNewsletter>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
