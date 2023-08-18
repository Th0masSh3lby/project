import { useSelector } from "react-redux";
import { useParams } from "react-router";
import EditForm from "../helper/Edit";
import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

const Details = () => {
  const data = useSelector((state) => state.data);
  const { id } = useParams();
  const currentData = data.filter((obj, index) => {
    if (obj.id == id) {
      return obj;
    }
  });

  const [cuD, setCuD] = useState({});
  const [edit_drawer_open, setEditDrawerOpen] = useState(false);
  const showEditDrawer = (Details) => {
    setEditDrawerOpen(true);
    setCuD({
      date: currentData[0].date,
      payer: currentData[0].payer.name,
      payee: currentData[0].payee.name,
      invoice_no: currentData[0].invoice_no,
      amount: currentData[0].amount,
    });
  };

  const onEditClose = () => {
    setEditDrawerOpen(false);
  };

  return (
    <div className="row d-flex flex-column justify-content-center align-items-center text-center px-5">
      <div className="pt-3 h3">Details</div>
      <div className="border bordered">
        <div className="d-flex flex-row  py-3 align-items-center">
          <div>Invoice No: {currentData[0].invoice_no}</div>
          <div className="btn btn-primary mx-5" onClick={showEditDrawer}>
            Edit Details
          </div>
          <Link to="/">
            <div className="btn btn-primary " onClick={showEditDrawer}>
              Home
            </div>
          </Link>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="col"></div>
          <div className="col">Transaction Date</div>
          <div className="col">:</div>
          <div className="col">{currentData[0].date}</div>
          <div className="col"></div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="col"></div>
          <div className="col">Payer</div>
          <div className="col">:</div>
          <div className="col">{currentData[0].payer.name}</div>
          <div className="col"></div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="col"></div>
          <div className="col">Payee</div>
          <div className="col">:</div>
          <div className="col">{currentData[0].payee.name}</div>
          <div className="col"></div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="col"></div>
          <div className="col">Amount</div>
          <div className="col">:</div>
          <div className="col">{currentData[0].amount} ₹</div>
          <div className="col"></div>
        </div>
        <div className="pb-5 d-flex flex-row justify-content-center">
          <div className="col"></div>
          <div className="col">Stage</div>
          <div className="col">:</div>
          <div className="col">
            {currentData[0].status === "1"
              ? "First"
              : currentData[0].status === "2"
              ? "Second"
              : "Third"}
          </div>
          <div className="col"></div>
        </div>
      </div>
      <Drawer
        title="Edit Details"
        placement="right"
        closable={false}
        onClose={onEditClose}
        open={edit_drawer_open}
      >
        <EditForm details={cuD} onEditClose={onEditClose} id={id} />
      </Drawer>
    </div>
  );
};

export default Details;
