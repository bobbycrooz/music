
import { Link } from "react-router-dom";

import
{
      NavigationMenu,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaSnapchatGhost, FaTiktok, FaYoutube } from "react-icons/fa";

const navLinks = [
      {
            title: "Home",
            href: "",
            description:
                  "",
      },
      {
            title: "About Us",
            href: "",
            description:
                  "",
      }, {
            title: "Services",
            href: "",
            description:
                  "",
      }, {
            title: "Artists",
            href: "",
            description:
                  "",
      }, {
            title: "Tours",
            href: "",
            description:
                  "",
      }, {
            title: "Bookings",
            href: "",
            description:
                  "",
      },

      {
            title: "Blog",
            href: "",
            description:
                  "",
      },

      {
            title: "Contact Us",
            href: "",
            description:
                  "",
      },
];

const iconLinks = [
      {
            link: "",
            icon: <FaTiktok className="social-icon" />
      },
      {
            link: "",
            icon: <BiLogoInstagramAlt className="social-icon" />
      },
      {
            link: "",
            icon: <FaSnapchatGhost className="social-icon" />
      },
      {
            link: "",
            icon: <FaYoutube className="social-icon" />
      },
      {
            link: "",
            icon: <FaFacebookF className="social-icon" />
      }
];

export function NavigationBar()
{
      return (

            <div className="w-full 0 shadow-sm sticky z-20 top-0 bg-primary overflow-hidden h-[70px] transition-all duration-700 ease-in-out hover:h-[120px]">
                  <nav className="w-full px-12 flex items-center justify-between p-2">
                        <div className="w-[200px]">
                              <img src="/logo2-crop.png" className="" alt="" />
                        </div>

                        <div className="flex items-center w-auto">
                              <NavigationMenu className="">
                                    <NavigationMenuList className="space-x-2">
                                          {
                                                navLinks.map((link, index) => (
                                                      <NavigationMenuItem key={index}>
                                                            <Link to={link.href}>
                                                                  <NavigationMenuLink className="px-4 p-2 text-white font-mono">
                                                                        {link.title}
                                                                  </NavigationMenuLink>
                                                            </Link>
                                                      </NavigationMenuItem>
                                                ))
                                          }
                                    </NavigationMenuList>
                              </NavigationMenu>

                              {/* <Button variant={"secondary"} className="ml-8">
        Tour
          </Button> */}
                        </div>
                  </nav>

                  <div className="w-full flex justify-end px-12 p-3 mt-1 bg-secondary">
                        <div className="flex items-center space-x-3 text-white">
                              <div className="w-auto flex gap-6 pr-4">
                                    <p className="sub_nav_link">
                                          AFFLIATE PROGRAM
                                    </p>

                                    <p className="sub_nav_link">
                                          EMPLOYMENT
                                    </p>

                                    <p className="sub_nav_link">
                                          CONTACT
                                    </p>
                                    <p className="sub_nav_link">
                                          TERMS OF SERVICE
                                    </p>

                              </div>

                              {"|"}

                              <div className="flex items-center gap-5 pl-4">
                                    {
                                          iconLinks.map((item, index) => (
                                                <Link href={item.link} key={index}>
                                                      {item.icon}
                                                </Link>
                                          ))
                                    }
                              </div>

                        </div>
                  </div>
            </div>
      );
}

// nav with meny
{/* <NavigationMenuItem>
<NavigationMenuTrigger>Components</NavigationMenuTrigger>
<NavigationMenuContent>
  <div className="w-full h-full bg-secondary-two">one</div>
</NavigationMenuContent>
</NavigationMenuItem> */}

{/* <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
