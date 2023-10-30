import React from "react";
import './footer.css'
function Footer() {
  return (
    <>
      <div className="mt-5">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#6B7AA1" }}
        >
          <div className="container p-4 pb-0">
            <section className>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    At Doctors Point
                  </h6>
                  <p>
                    General
                  </p>
                  <p>
                    Cardiology
                  </p><p>
                    Surgical
                  </p><p>
                    Urology
                  </p><p>
                    Orthology
                  </p><p>
                    Dermatilogist
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a className="text-white">Blog</a>
                  </p>
                  <p>
                    <a className="text-white">Appointment</a>
                  </p>
                  <p>
                    <a className="text-white">Doctors</a>
                  </p>
                  <p>
                    <a className="text-white">About</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3" /> Ahmedabad, GJ, India
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> DoctorsPoint@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>
              </div>
            </section>
            <hr className="my-3" />
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © {new Date().getFullYear()} Copyright:
                    <span className="text-white" ></span>
                  </div>
                  <span className="text-white" ></span>
                </div>
                <span className="text-white"></span>
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <span className="text-white" ></span>
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-google" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
