export function Home() {
  return (
    <>
      <div className="container">
        <div
          className="p-4 p-md-5 mb-4 rounded"
          style={{ backgroundColor: "#96C7C1" }}
        >
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">
              Мэдээний гарчиг орж ирэх хэсэг
            </h1>
            <p className="lead my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar nibh felis, a porta velit dapibus id. Donec volutpat enim
              vitae dapibus vehicula. Cras iaculis nulla eu enim dignissim
              vestibulum.
            </p>
            <p className="lead mb-0">
              <a href="#" class="text-white fw-bold">
                Унших
              </a>
            </p>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Спорт</strong>
                <h3 class="mb-0"> Мэдээний Гарчиг</h3>
                <div class="mb-1 text-muted">Nov 10</div>
                <p class="card-text mb-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar nibh felis, a porta velit dapibus id.
                </p>
                <a href="#" class="stretched-link">
                  Унших
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#89B5AF" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Зураг
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">
                  Улс төр
                </strong>
                <h3 class="mb-0">Мэдээний гарчиг</h3>
                <div class="mb-1 text-muted">Өчигдөр</div>
                <p class="mb-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar nibh felis, a porta velit dapibus id.
                </p>
                <a href="#" class="stretched-link">
                  Унших
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#89B5AF" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Зураг
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
