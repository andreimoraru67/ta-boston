import Link from 'next/link';

export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <Link href="/" title="Thread affair traveller suit">
            <picture>
              <img src="/images/products/product-01a.jpg" alt="Suit" />
            </picture>
          </Link>
          <span className="badge">%</span>
        </div>

        <h1 className="product-tile-title">
          <Link href="/" title="Thread affair traveller suit">
            <span>Thread Affair</span> Traveller <span>Suit</span>
          </Link>
        </h1>

        <h2 className="product-tile-subtitle">
          <Link href="/" title="Thread affair traveller suit">
            London fit semi slim
          </Link>
        </h2>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price-regular">399.00</span>

        <span className="product-price">
          USD <span> 270.00 </span>
        </span>
      </section>

      <footer className="product-tile-footer mb-5">
        <button className="button" title="Add to cart" type="button">
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
