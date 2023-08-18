import { useEffect, useState } from "react";
import Cards from "../components/cards";
import { Table, Select } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { Option } = Select;

const Home = () => {
  const [dataConv, setDataConv] = useState({});
  const data = useSelector((state) => state.data);

  useEffect(() => {
    const fetchConversionRate = async () => {
      await fetch(
        "https://v6.exchangerate-api.com/v6/0317170d200d7497b41becc7/latest/USD"
      )
        .then((res) => {
          let data1 = res.json();
          console.log(data1);
          return data1;
        })
        .then((data) => setDataConv(data.conversion_rates))
        .then(console.log("hi", dataConv))
        .catch((error) => {});
    };

    fetchConversionRate();
  }, []);

  const actions = [
    { id: "1", value: "Value1", label: "label1" },
    { id: "2", value: "Value2", label: "label2" },
    { id: "3", value: "Value3", label: "label3" },
  ];
  const columns = [
    {
      title: "Transaction Date",
      key: "date",
      sorter: {
        compare: (a, b) => Number(a.date[0]) - Number(b.date[0]),
        multiple: 1,
      },

      render: (data) => (
        <Link to={"/" + data?.id} style={{ textDecoration: "none" }}>
          <div className="d-flex text-center text-black">{data.date}</div>
        </Link>
      ),
    },
    {
      title: "Invoice No.",
      key: "invoice_no",

      render: (data) => (
        <Link to={"/" + data?.id} style={{ textDecoration: "none" }}>
          <div className="d-flex text-center text-black">{data.invoice_no}</div>
        </Link>
      ),
    },
    {
      title: "Payer",
      key: "payer",
      render: (data) => (
        <Link to={"/" + data?.id} style={{ textDecoration: "none" }}>
          <div className="d-flex text-black">
            <img
              src={`https://flagicons.lipis.dev/flags/4x3/${data.payer.src}`}
              width={20}
              style={{ marginRight: "5px" }}
            />
            {data.payer.name}
          </div>
        </Link>
      ),
    },

    {
      title: "Payee",
      key: "payee",
      render: (data) => (
        <Link to={"/" + data?.id} style={{ textDecoration: "none" }}>
          <div className="d-flex text-black">
            <img
              src={`https://flagicons.lipis.dev/flags/4x3/${data.payee.src}`}
              width={20}
              style={{ marginRight: "5px" }}
            />
            {data.payee.name}
          </div>
        </Link>
      ),
    },

    {
      title: "Amount",
      key: "amount",
      sorter: {
        compare: (a, b) => Number(a.amount) - Number(b.amount),
        multiple: 1,
      },
      render: (data) => (
        <Link to={"/" + data?.id} style={{ textDecoration: "none" }}>
          <div className="d-flex text-center text-black">{data.amount}₹</div>
        </Link>
      ),
    },
    {
      title: "USD Equivalent",
      key: "usd",
      sorter: {
        compare: (a, b) => Number(a.amount) - Number(b.amount),
        multiple: 1,
      },
      render: (data) => (
        <Link to={"/" + data?.id} style={{ textDecoration: "none" }}>
          <div className="d-flex text-center text-black">
            {Math.round((Number(data.amount) * 100) / Number(dataConv?.INR)) /
              100}
            {"$"}
          </div>
        </Link>
      ),
    },

    {
      title: "Status",
      key: "status",
      sorter: {
        compare: (a, b) => Number(a.status) - Number(b.status),
        multiple: 1,
      },
      render: (data) => (
        <Link to={"/" + data?.id} style={{ textDecoration: "none" }}>
          {data.status === "1" ? (
            <div className="d-flex flex-row gap-2">
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "black" }}
                ></div>
                <div className="text-black fw-bold"> First</div>
              </div>
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "gray" }}
                ></div>
              </div>
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "gray" }}
                ></div>
              </div>
            </div>
          ) : data.status === "2" ? (
            <div className="d-flex flex-row gap-2">
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "black" }}
                ></div>
                <div className="text-black fw-bold"> First</div>
              </div>
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "black" }}
                ></div>
                <div className="text-black fw-bold"> Second</div>
              </div>
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "gray" }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-row gap-2">
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "black" }}
                ></div>
                <div className="text-black fw-bold"> First</div>
              </div>
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "black" }}
                ></div>
                <div className="text-black fw-bold"> Second</div>
              </div>
              <div className="col">
                <div
                  className="w-100"
                  style={{ height: "2px", background: "black" }}
                ></div>
                <div className="text-black fw-bold"> Third</div>
              </div>
            </div>
          )}
        </Link>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      width: 200,

      render: (data) => (
        <>
          <Select className="w-100" placeholder="Select Action ">
            {actions.map((obj) => (
              <Option key={obj.id} value={obj.value}>
                {obj.label}
              </Option>
            ))}
          </Select>
        </>
      ),
    },
  ];

  return (
    <div className="p-5">
      <Cards />
      <div className="border bordered rounded">
        <Table
          rowKey={"id"}
          dataSource={data}
          columns={columns}
          pagination={false}
          scroll={{
            x: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
