import { Home, Palette, Image, Book } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Image className="h-4 w-4" />,
    page: <div>Gallery Page</div>,
  },
  {
    title: "Techniques",
    to: "/techniques",
    icon: <Palette className="h-4 w-4" />,
    page: <div>Techniques Page</div>,
  },
  {
    title: "Biography",
    to: "/biography",
    icon: <Book className="h-4 w-4" />,
    page: <div>Biography Page</div>,
  },
];
