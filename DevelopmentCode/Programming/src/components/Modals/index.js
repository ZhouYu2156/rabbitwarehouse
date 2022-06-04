import React from "react";
import sponsorCode from "../../assets/sponsor.JPG";

export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsor: false,
    };
  }
  render() {
    return this.props.sponsor ? null : (
      <div className="modal fade" tabIndex="-1" id="relations">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 style={{ userSelect: "none", textAlign: "center" }}>
                感谢 - 赞助
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src={sponsorCode}
                alt=""
                style={{ width: "15rem", height: "15rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
