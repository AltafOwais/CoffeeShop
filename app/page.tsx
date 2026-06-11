import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">

      <Navbar />

      <main className="content">

        <div className="heroText">

          <h1>Welcome to Shahi Cafe</h1>

          <p>
            Enjoy the taste of fresh coffee made with
            premium beans. Start your day with our
            special coffee.
          </p>
          <br />
          <br />

          <Link href="/Menu">

            <button>
              Explore Menu
            </button>

          </Link>

        </div>


        <Image
          src="/Coffee.png"
          width={800}
          height={400}
          className="coffeeImage"
          alt="coffee"
          priority
        />


      </main>

      <Footer />

    </div>
  );
}