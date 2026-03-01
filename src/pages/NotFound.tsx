import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
    <div className="text-center px-4">
      <div className="font-mono text-6xl font-bold text-[#FF1F23] mb-4">404</div>
      <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
        Route Not Found
      </h1>
      <p className="text-sm text-[#6B7A90] mb-8">
        This endpoint does not exist in the GenoMAX&#178; system.
      </p>
      <Link to="/" className="gx-btn-primary inline-flex items-center gap-2">
        Return to Home <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default NotFound;
