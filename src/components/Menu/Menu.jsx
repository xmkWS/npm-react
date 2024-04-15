import vect from "/menu/Vector.svg";
import filt from "/menu/filter.png";
import "./Menu.css";

export default function Menu() {
  return (
    <section className="Menu">
      <div className="Menu-title">
        <h1>Catalog</h1>
      </div>
      <div className="menu-item">
        <div className="img">
          <img src={vect} alt="" />
        </div>
        <div className="pocket">
          <div className="filter">
            <img src={filt} alt="" />
            <form action="">
              <select name="" id="">
                <option value="0">Popularity</option>
              </select>
            </form>
          </div>
          <div className="search">
            <form action="">
              <input type="text" value="Search" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
