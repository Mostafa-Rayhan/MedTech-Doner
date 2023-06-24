import { Link } from "react-router-dom";
import banner1 from "../assets/images/banner1.jpg";

const Subject = ({text}) => {
 console.log("props", text);
  return (
    <section
      className="banner bg-img dark-overlay dark-overlay--secondary"
      data-background={banner1}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-area">
              <div className="banner-area__content">
                <h2>{text}</h2> 
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {text}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subject;
