"use client";
import { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Button from "../../components/button";
import Image from "next/image";
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";


const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    const handleResize = () => {
      setMenu(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleLinkClick = (url) => {
    router.push(url);
    setSideBar(false);
  };

  return (
    <div
      className={
        scrolled
          ? `${styles.scrolled} ${styles.heroSection_shadow}`
          : `${styles.heroSection}`
      }
    >
      <div className="container">
        {menu ? (
          <div className="d-flex justify-content-between mt-2">
            <div className="d-flex text_color justify-content-between w-100">
              <div className="col-lg-6">
                <a href="/" className={styles.linker}>
                  <h3
                    className={`${styles.logo} ${
                      scrolled ? "text-dark" : "text-white"
                    }`}
                  >
                    {scrolled ? (
                      <Image
                        src="/images/Color_Logo.png"
                        alt="about"
                        width={180}
                        height={55}
                      />
                    ) : (
                      <Image
                        src="/images/White_Logo.png"
                        alt="about"
                        width={180}
                        height={55}
                      />
                    )}
                  </h3>
                </a>
              </div>

              <p className="mx-4">
                <span
                  className={`${styles.noDecoration} px-1 ${
                    scrolled ? "text-dark" : "text-white"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setSideBar(!sideBar)}
                    className={styles.menu_icon}
                  />
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-between"></div>
        )}

        {menu ? (
          <></>
        ) : (
          <div className="row pt-3">
            <div className="col-lg-6">
              <a href="/" className={styles.linker}>
                <h3
                  className={`${styles.logo} ${
                    scrolled ? "text-dark" : "text-white"
                  }`}
                >
                  {scrolled ? (
                    <Image
                      src="/images/Color_Logo.png"
                      alt="about"
                      width={180}
                      height={55}
                    />
                  ) : (
                    <Image
                      src="/images/White_Logo.png"
                      alt="about"
                      width={180}
                      height={55}
                    />
                  )}
                </h3>
              </a>
            </div>

            <div className="col-lg-6">
              <ul className={styles.listStyle}>
                <Link
                  href="/about"
                  className={`${styles.link} ${
                    pathname === "/about"
                      ? scrolled
                        ? styles.active
                        : styles.active1
                      : ""
                  }`}
                >
                  <li className={scrolled ? "text-dark " : "text-white "}>
                    About
                  </li>
                </Link>

                <div className={`${styles.link}  ${styles.dropdown}`}>
                  <li
                    className={
                      scrolled
                        ? "text-dark dropdown-toggle"
                        : "text-white dropdown-toggle"
                    }
                    onClick={() => handleLinkClick("/services")}
                  >
                    Service
                  </li>

                  <ul
                    className={`${styles.dropdown_child} ${styles.marginTop}`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleLinkClick("/contract-staffing")}
                      >
                        Contract Staffing
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleLinkClick("/permanent-staffing")}
                      >
                        Permanent Staffing
                      </a>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/blogs"
                  className={`${styles.link} ${
                    pathname === "/blogs"
                      ? scrolled
                        ? styles.active
                        : styles.active1
                      : ""
                  }`}
                >
                  <li className={scrolled ? "text-dark" : "text-white"}>
                    Blogs
                  </li>
                </Link>
                <Link
                  href="/careers"
                  className={`${styles.link} ${
                    pathname === "/careers"
                      ? scrolled
                        ? styles.active
                        : styles.active1
                      : ""
                  }`}
                >
                  <li className={scrolled ? "text-dark" : "text-white"}>
                    Careers
                  </li>
                </Link>
                <Link
                  href="/contact_us"
                  className={`${styles.link}`}
                >
                  <li>
                    <Button variant="primary">Contact Us</Button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        <div
          className={
            sideBar ? `${styles.sidebar} ${styles.show}` : styles.sidebar
          }
        >
          <div className="d-flex justify-content-between mt-2 w-100">
            <div className="d-flex text_color justify-content-between w-100">
              <div className="col-lg-6">
                <a href="/" className={styles.linker}>
                  <h3
                    className={`${styles.logo} ${
                      scrolled ? "text-white" : "text-white"
                    }`}
                  >
                    <Image
                      src="/images/White_Logo.png"
                      alt="about"
                      width={150}
                      height={45}
                    />
                  </h3>
                </a>
              </div>

              <p className="mx-4">
                <a href="#" className={styles.noDecoration}>
                  <span
                    className={`px-1 ${scrolled ? "text-white" : "text-white"}`}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={() => setSideBar(!sideBar)}
                      className={styles.menu_cencel}
                    />
                  </span>
                </a>
              </p>
            </div>
          </div>
          <ul className={styles.listStyle}>
            <Link
              href="/homepage"
              className={`${styles.link} ${
                pathname === "/homepage" ? styles.active2 : ""
              }`}
              onClick={() => handleLinkClick("/homepage")}
            >
              <li className={scrolled ? "text-white" : "text-white"}>Home</li>
            </Link>
            <Link
              href="/about"
              className={`${styles.link} ${
                pathname === "/about" ? styles.active2 : ""
              }`}
              onClick={() => handleLinkClick("/about")}
            >
              <li className={scrolled ? "text-white" : "text-white"}>About</li>
            </Link>

            <div className={`${styles.link}  ${styles.dropdown}`}>
              <li
                className={
                  scrolled
                    ? "text-white dropdown-toggle"
                    : "text-white dropdown-toggle"
                }
                onClick={() => router.push("/services")}
              >
                Service
              </li>

              <ul
                className={`${styles.dropdown_child} ${styles.marginTop}`}
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleLinkClick("/contract-staffing")}
                  >
                    Contract Staffing
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleLinkClick("/permanent-staffing")}
                  >
                    Permanent Staffing
                  </a>
                </li>
              </ul>
            </div>
            <Link
              href="/blogs"
              className={`${styles.link} ${
                pathname === "/blogs" ? styles.active2 : ""
              }`}
              onClick={() => handleLinkClick("/blogs")}
            >
              <li className={scrolled ? "text-white" : "text-white"}>Blogs</li>
            </Link>
            <Link
              href="/careers"
              className={`${styles.link} ${
                pathname === "/careers" ? styles.active2 : ""
              }`}
              onClick={() => handleLinkClick("/careers")}
            >
              <li className={scrolled ? "text-white" : "text-white"}>
                Careers
              </li>
            </Link>
            <Link
              href="/contact_us"
              className={`${styles.link} `}
              onClick={() => handleLinkClick("/contact_us")}
            >
              <li>
                <Button variant="primary">Contact Us</Button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
