import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const FullYear = new Date().getFullYear();
  return (
    <footer className="max-w-[1240px] mx-auto px-4 pt-16 pb-6 border-t-[0.2px] border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Address Section */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <Image src="/logo.png" width={40} height={30} alt="logo" />
            <h2 className="text-2xl font-bold">LuxeNest</h2>
          </div>
          <address className="not-italic text-sm text-gray-600">
            <p>410 University Drive Suite 222 Coral</p>
            <p>Gables,</p>
            <p>FL 32134 USA</p>
          </address>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h3 className="text-sm text-gray-500">Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/home" className="text-sm hover:text-gray-600">
              Home
            </Link>
            <Link href="/shop" className="text-sm hover:text-gray-600">
              Shop
            </Link>
            <Link href="/contact" className="text-sm hover:text-gray-600">
              Contact
            </Link>
          </nav>
        </div>

        {/* Help Section */}
        <div className="space-y-4">
          <h3 className="text-sm text-gray-500">Help</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/payment-options"
              className="text-sm hover:text-gray-600"
            >
              Payment Options
            </Link>
            <Link href="/returns" className="text-sm hover:text-gray-600">
              Returns
            </Link>
            <Link
              href="/privacy-policies"
              className="text-sm hover:text-gray-600"
            >
              Privacy Policies
            </Link>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-sm text-gray-500">Newsletter</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-300 pb-1 text-sm focus:outline-none focus:border-gray-600 transition-colors bg-transparent"
            />
            <button
              type="submit"
              className="text-sm font-semibold py-2 text-left hover:text-gray-600"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-600">
          {FullYear} Funiro. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
