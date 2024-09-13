const Blog = () => {
  return (
    <main className="blogpost container">
      <div className="blogpost-content">
        <h1>Crafted for those who embrace life, Ruslan Vodka</h1>
        <p>
          Ruslan Vodka delivers a smooth, refined taste crafted from the finest
          ingredients. Its bold character and premium quality make it perfect
          for any occasion. Elevate your moments with the unmistakable spirit of
          Ruslan Vodka.
        </p>
        <div className="blogpost-button">
          <button>Order Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="availabilty">
          <p>Also Avialable On</p>
          <img src="images/Daraz-Logo.png" alt="logo" className="dlogo" />
        </div>
      </div>
      <div className="blogpost-image">
        <img src="/images/product2.png" alt="product" className="productfile" />
      </div>
    </main>
  );
};

export default Blog;
