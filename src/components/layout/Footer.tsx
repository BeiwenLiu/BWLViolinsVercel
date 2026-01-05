import { Link } from "react-router-dom";
import { Music, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rich-brown text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Music className="h-8 w-8 text-honey-gold" />
              <span className="font-serif text-xl font-semibold">
                BWL Music
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Quality string instruments, rentals, sales, and expert service in Savannah, Georgia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-honey-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sales" className="hover:text-honey-gold transition-colors">
                  Sales
                </Link>
              </li>
              <li>
                <Link to="/rentals" className="hover:text-honey-gold transition-colors">
                  Rentals & Policy
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-honey-gold transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/teaching" className="hover:text-honey-gold transition-colors">
                  Teaching Program
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-honey-gold">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-honey-gold transition-colors">
                  F.A.Q.
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-honey-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rental-form" className="hover:text-honey-gold transition-colors">
                  Rental Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-honey-gold">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-honey-gold flex-shrink-0" />
                <span>8312 Kent Drive<br />Savannah, GA 31406</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-honey-gold flex-shrink-0" />
                <span>(912) 596-3897</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-honey-gold flex-shrink-0" />
                <a href="mailto:BWLViolins@juno.com" className="hover:text-honey-gold transition-colors">
                  BWLViolins@juno.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} BWL Music String Instruments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
