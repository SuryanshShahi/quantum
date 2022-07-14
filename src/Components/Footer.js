import React from "react";
import swal from "sweetalert";

function Footer() {
  return (
    <section id="footer">
      <div className="" style={{ background: "rgb(0,0,0,0.6)" }}>
        <div className="container py-5">
          <div className="row gx-0 py-3">
            <div className="col-lg-6 col-12 px-5 text-white">
                <div className="text-center text-lg-left" style={{ fontSize: "30px", fontWeight: "500" }}>
                  Subscribe Our Newsletter<br></br>For More Update
                </div>
                <div className="py-3 text-center text-lg-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing.
              </div>
            </div>
            <div className="col-lg-6 col-12 px-5 pt-lg-0 pt-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  swal("", "Subscribed", "success", {
                    button: false,
                    timer: 2000,
                  });
                }}
              >
                <input
                  type="email"
                  placeholder="Enter Email"
                  style={{ height: "45px" }}
                  className="form-control bg-transparent emailInput text-white mb-2"
                  required
                />
                <button type="submit" className="btn btn-info px-3">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
