// export function NavbarMain() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container fluid>
//         <Navbar.Brand>Mini Blog</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="ms-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action1">About</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export function NavbarMain() {
  return (
    <>
      <div className="container">
        <header className="blog-header lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1"></div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark " href="/home">
                The News Room
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Хайх</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Нэвтрэх
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a class="p-2 link-secondary news-categories" href="/politics">
              Улс төр
            </a>
            <a className="p-2 link-secondary news-categories" href="/economy">
              Эдийн засаг
            </a>

            <a
              className="p-2 link-secondary news-categories"
              href="/technology"
            >
              Технологи
            </a>

            <a className="p-2 link-secondary news-categories" href="/education">
              Боловсрол
            </a>

            <a className="p-2 link-secondary news-categories" href="/society">
              Нийгэм
            </a>

            <a className="p-2 link-secondary news-categories" href="/business">
              Бизнес
            </a>

            <a className="p-2 link-secondary news-categories" href="/science">
              Шинжлэх ухаан
            </a>

            <a className="p-2 link-secondary news-categories" href="/health">
              Эрүүл мэнд
            </a>

            <a className="p-2 link-secondary news-categories" href="/word">
              Гадаад мэдээ
            </a>

            <a
              className="p-2 link-secondary news-categories"
              href="entertainment"
            >
              Соёл урлаг
            </a>

            <a className="p-2 link-secondary news-categories" href="sport">
              Спорт
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
