import img1 from "../Images/404-not-found.gif";
export function NotFound() {
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        <img style={{ width: "35%" }} src={img1} />
        <h6 className="mt-5"> Уучлаарай, таны хайсан хуудас олдсонгүй.</h6>
      </div>
    </>
  );
}
