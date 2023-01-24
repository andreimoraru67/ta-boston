import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information"></Link>Information
          </li>

          <li>
            <Link href="/" title="Contact us"></Link>Contact us
          </li>

          <li>
            <Link href="/" title="Track my order"></Link>Track my order
          </li>

          <li>
            <Link href="/" title="Shipping"></Link>Shipping
          </li>

          <li>
            <Link href="/" title="Free returns*"></Link>Free returns*
          </li>

          <li>
            <Link href="/" title="My account"></Link>My account
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services"></Link>
            Services
          </li>

          <li>
            <Link href="/" title="Ship to store"></Link>
            Ship to store
          </li>

          <li>
            <Link href="/" title="Gift card"></Link>
            Gift card
          </li>

          <li>
            <Link href="/" title="Online only"></Link>
            Online only
          </li>

          <li>
            <Link href="/" title="Tips & tricks"></Link>
            Tips & tricks
          </li>

          <li>
            <Link href="/" title="Home"></Link>
            Home
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty programs"></Link>
            Loyalty programs
          </li>

          <li>
            <Link href="/" title="Sign up tot the Simons"></Link>
            Sign up to the Simons
          </li>

          <li>
            <Link href="/" title="My account"></Link>
            My account
          </li>

          <li>
            <Link href="/" title="Conditions"></Link>
            Conditions
          </li>

          <li>
            <Link href="/" title="FAQ"></Link>
            FAQ
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers"></Link>
            Careers
          </li>

          <li>
            <Link href="/" title="About us"></Link>
            About us
          </li>

          <li>
            <Link href="/" title="Our story"></Link>
            Our story
          </li>

          <li>
            <Link href="/" title="Art & Culture"></Link>
            Art & Culture
          </li>

          <li>
            <Link href="/" title="Our private labels"></Link>
            Our private labels
          </li>

          <li>
            <Link href="/" title="Stores"></Link>
            Stores
          </li>
        </ul>
      </nav>

      <section className="footer-contact my-3 my-lg-0">
        <h1>
          Thread Affair <span>Milano</span>
        </h1>

        <p>
          Largo Augusto 3, Milano, 20122, Milano, IT
          <a href="tel:0039 02 760 003 66" title="Call us">
            Tel: 0039 02 760 003 66
          </a>
          <a href="mailto:office@thread-affair.com" title="Email us">
            office@thread-affair.com
          </a>
        </p>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:1-877-666-1840" title="Support">
              <i className="fa-solid fa-phone"></i>
              <span>Support</span>
            </a>
          </li>

          <li>
            <a href="/" title="Chat">
              <i className="fa-solid fa-comment"></i>
              <span>Chat</span>
            </a>
          </li>

          <li>
            <a href="mailto:office@thread-affair.com" title="Email">
              <i className="fa-solid fa-at"></i>
              <span>Email</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
