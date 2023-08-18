import { DollarOutlined } from "@ant-design/icons";
import { FiTrendingUp } from "react-icons/fi";
import { BsClipboardData } from "react-icons/bs";
import NumberCountAnimation from "../helper/NumberAnimator";

const Cards = () => {
  return (
    <div className="row px-3 pb-5 d-flex flex-row justify-content-between gap-5">
      <div
        key={"total transactions"}
        className="col w-100 rounded d-flex flex-row align-items-start justify-content-start"
        style={{ minHeight: "200px", backgroundColor: "#e3e8ff" }}
      >
        <div className="w-25 px-4 pt-5 mt-4 text-primary">
          <BsClipboardData style={{ fontSize: "50px" }} />
        </div>
        <div className=" w-75 d-flex flex-column justify-content-start">
          <div className="pt-3 fw-bold h4">Total Transactions</div>
          <div
            className="col fw-bold text-primary pt-2"
            style={{ fontSize: "40px" }}
          >
            <NumberCountAnimation end={10000} increment={100} />+
          </div>

          <div
            style={{ fontSize: "24px", color: "#1f9c77", fontWeight: "600" }}
          >
            1.25%
            <span className="mx-1 ">
              <FiTrendingUp />
            </span>
          </div>
        </div>
      </div>
      {/*end of card1*/}

      <div
        key={"total amount"}
        className="col w-100 rounded d-flex flex-row align-items-start justify-content-start"
        style={{ minHeight: "200px", backgroundColor: "#e3e8ff" }}
      >
        <div className="w-25 px-4 pt-5 mt-4 text-primary">
          <DollarOutlined style={{ fontSize: "50px" }} />
        </div>
        <div className=" w-75 d-flex flex-column justify-content-start">
          <div className="pt-3 fw-bold h4">Total Amount</div>
          <div
            className="col fw-bold text-primary pt-2"
            style={{ fontSize: "40px" }}
          >
            <NumberCountAnimation end={300} increment={10} />
            K+{" "}
            <span className="text-black" style={{ fontSize: "20px" }}>
              USD
            </span>
          </div>

          <div
            style={{ fontSize: "24px", color: "#1f9c77", fontWeight: "600" }}
          >
            3.25%
            <span className="mx-1 ">
              <FiTrendingUp />
            </span>
          </div>
        </div>
      </div>

      {/*end of card2*/}

      <div
        key={"total transactions in stage3"}
        className="col w-100 rounded d-flex flex-row align-items-start justify-content-start"
        style={{ minHeight: "200px", backgroundColor: "#e3e8ff" }}
      >
        <div className="w-25 px-4 pt-5 mt-4 text-primary">
          <BsClipboardData style={{ fontSize: "50px" }} />
        </div>
        <div className=" w-75 d-flex flex-column justify-content-start">
          <div className="pt-3 fw-bold h4">Transactions(stage 3)</div>
          <div
            className="col fw-bold text-primary pt-2"
            style={{ fontSize: "40px" }}
          >
            <NumberCountAnimation end={4500} increment={45} />+
          </div>

          <div
            style={{ fontSize: "24px", color: "#1f9c77", fontWeight: "600" }}
          >
            2.00%
            <span className="mx-1 ">
              <FiTrendingUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
