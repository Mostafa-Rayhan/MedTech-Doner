import { Link } from "react-router-dom";
import bannerBg2 from "../../assets/images/banner-bg-two.png";
const NotFound = () => {
  return (
    <div>
      <section
        className="banner bg-img dark-overlay dark-overlay--secondary"
        data-background={bannerBg2}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Error 404</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to="/" >Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        404
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="error section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-area wow fadeInUp">
                <h1>404</h1>
                <h2 className="light">Page Not Found</h2>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable
                </p>
                <Link to="/" className="button button--effect">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
