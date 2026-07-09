import React from "react";
import { Container, Logo, LogoutBtn } from "../../components";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 py-3 shadow-sm backdrop-blur-md">
        <Container>
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="transition-transform duration-200 hover:scale-105"
              >
                <Logo width="70px" />
              </Link>
            </div>

            <ul className="flex items-center gap-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null,
              )}

              {authStatus && (
                <li className="ml-2">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
