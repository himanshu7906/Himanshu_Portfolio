import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      <div className="mesh-gradient" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="text-center relative z-10 px-6">
        <h1 className="mb-2 text-7xl md:text-8xl font-bold text-gradient">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! This page drifted off into space.</p>
        <a
          href={import.meta.env.BASE_URL}
          className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.35)] transition-all duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
