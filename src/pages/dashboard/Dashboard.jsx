import React, { useState } from "react";
import Container from "../../utility/Container";
import Chart from "../../components/Chart";
import Tabs from "../../utility/Tabs";

const Dashboard = () => {
  const tabList = ["Investor", "Customer", "Users"];
  const Users = [
    {
      title: "User Dashboard",
      subtitle: "Profit Gain",
      value: "0000008779",
      color: "success",
      img: "https://verona.primereact.org/demo/images/dashboard/rate.svg",
    },
  ];
  const Customers = [
    {
      title: "Customer Dashboard",
      subtitle: "Profit Margin",
      value: "0000008779",
      color: "info",
      img: "https://verona.primereact.org/demo/images/dashboard/users.svg",
    },
  ];
  const Investor = [
    {
      title: "Investor Dashboard",
      subtitle: "Manage Capital",
      value: "0000008779",
      color: "primary",
      img: "https://verona.primereact.org/demo/images/dashboard/interactions.svg",
    },
  ];
  const months = [
    { title: "Jan", value: 5000 },
    { title: "Feb", value: 7000 },
    { title: "Mar", value: 7000 },
    { title: "Apr", value: 7600 },
    { title: "May", value: 3000 },
    { title: "Jun", value: 5000 },
    { title: "Jul", value: 9300 },
    { title: "Aug", value: 5800 },
    { title: "Sep", value: 9100 },
    { title: "Oct", value: 7800 },
    { title: "Nov", value: 4500 },
    { title: "Dec", value: 6100 },
  ];
  const days = [
    { title: "1", value: 5000 },
    { title: "2", value: 7000 },
    { title: "3", value: 7000 },
    { title: "4", value: 7600 },
    { title: "5", value: 3000 },
    { title: "6", value: 5000 },
    { title: "7", value: 9300 },
    { title: "8", value: 5800 },
    { title: "9", value: 9100 },
    { title: "10", value: 7800 },
    { title: "11", value: 5000 },
    { title: "12", value: 7000 },
    { title: "13", value: 7000 },
    { title: "14", value: 7600 },
    { title: "15", value: 3000 },
    { title: "16", value: 5000 },
    { title: "17", value: 9300 },
    { title: "18", value: 5800 },
    { title: "19", value: 9100 },
    { title: "20", value: 7800 },
    { title: "21", value: 4500 },
    { title: "22", value: 6100 },
    { title: "23", value: 8100 },
    { title: "24", value: 3100 },
    { title: "25", value: 6100 },
    { title: "26", value: 6700 },
    { title: "27", value: 2100 },
    { title: "28", value: 4400 },
    { title: "29", value: 2820 },
    { title: "30", value: 6100 },
  ];
  function DataFlow({ dashboards }) {
    return (
      <div className="grid-cols-1 gap-9">
        {dashboards?.map((dash, index) => (
          <div
            key={index}
            className="pt-10 pb-30 w-full bg-white rounded-5 relative overflow-hidden"
          >
            <div className="px-15">
              <h2 className={`title-text text-${dash?.color}`}>
                {dash?.title}
              </h2>
              <p className="mini-text text-gray">{dash?.subtitle}</p>
              <h3 className={`large-text text-${dash?.color} font-600`}>
                {dash?.value}
              </h3>
              <div className="absolute right-0 bottom-0">
                <img
                  src={dash?.img}
                  alt="Image"
                  style={{ height: "50px", display: "flex" }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="grid-cols-2 gap-8">
          <div className="bg-white rounded-5 flex items-center justify-center py-23">
            <Chart
              type="doughnut"
              label="Activity"
              value={65}
              color="primary"
              size={100}
            />
          </div>
          <div className="bg-white rounded-5 flex items-center justify-center py-23">
            <Chart
              type="doughnut"
              label="Response"
              value={65}
              color="primary"
              size={100}
            />
          </div>
        </div>
        <div className="bg-white grid-cols-1 rounded-5">
          {[
            { name: "Stocks", value: "90%", color: "success" },
            { name: "NIFTY", value: "90%", color: "danger" },
            { name: "NIFTY", value: "90%", color: "success" },
            { name: "NIFTY", value: "90%", color: "success" },
            { name: "Sensex", value: "90%", color: "danger" },
            { name: "Stocks", value: "90%", color: "danger" },
          ].map((item, i) => (
            <div
              key={i}
              className="bordb p-12 flex items-center justify-between"
            >
              <p className="small-text text-dark font-500">{item.name}</p>
              <p className={`mini-text text-${item.color} font-600`}>
                {item.color === "success" ? "▲" : "▼"}
                {item.value}
              </p>
            </div>
          ))}
          <div className="p-12 flex items-center justify-between bg-secondary">
            <p className="small-text text-dark font-500">Overall P&L</p>
            <p className="small-text text-primary font-500">▲2%</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Container>
      {/* <div className="w-65" style={{ margin: "auto", textAlign: "center" }}>
        <input
          value={sel}
          readOnly
          type="date"
          className="border-0 py-4 w-full rounded-5"
        />
        <div className="grid-cols-2 gap-3 mt-5">
          <select
            value={m}
            onChange={(e) => setM(Number(e.target.value))}
            className="mini-text border-0 rounded px-2 py-2"
          >
            {monthss.map((mm, i) => (
              <option key={mm} value={i}>
                {mm}
              </option>
            ))}
          </select>

          <select
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
            className="mini-text border-0 rounded px-2 py-2"
          >
            {years.map((yy) => (
              <option key={yy} value={yy}>
                {yy}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div
            className="small-text text-gray font-500 cursor-pointer"
            onClick={() => change(-1)}
          >
            ◀
          </div>
          <p className="mini-text text-dark font-500">
            {monthss[m]} {y}
          </p>
          <div
            className="small-text text-gray font-500 cursor-pointer"
            onClick={() => change(1)}
          >
            ▶
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7,1fr)",
            gap: 4,
            marginTop: 8,
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <p className="mini-text text-dark font-500" key={d}>
              {d}
            </p>
          ))}

          {dayss.map((d, i) => {
            const cellDate = d ? `${y}-${pad(m + 1)}-${pad(d)}` : "";
            return (
              <p
                key={i}
                className="mini-text font-500"
                onClick={() => d && setSel(cellDate)}
                style={{
                  padding: 4,
                  background:
                    sel === cellDate
                      ? "var(--primary)"
                      : d === ""
                      ? "transparent"
                      : "var(--white)",
                  color:
                    sel === cellDate
                      ? "var(--white)"
                      : d
                      ? "var(--gray)"
                      : "transparent",
                  borderRadius: 2,
                  cursor: d ? "pointer" : "default",
                }}
              >
                {d}
              </p>
            );
          })}
        </div>
      </div> */}
      <div className="flex items-start gap-8 w-full">
        <div className="w-65 grid-cols-1 gap-8">
          <div className="grid-cols-2 gap-12">
            <div className="bg-primary rounded-5 py-20">
              <div className="flex items-center px-20">
                <div className="w-65">
                  <h2 className="head-text font-600 text-white">
                    Position Trend
                  </h2>
                  <p className="small-text text-white">Dash?board</p>
                  <div className="flex items-center gap-12 mt-16">
                    <div>
                      <p className="para-text font-600 text-white">20K +</p>
                      <p className="mini-text text-white">Holdings</p>
                    </div>
                    <div className="mx-4">
                      <p className="para-text font-600 text-white">23.9L +</p>
                      <p className="mini-text text-white">Invest Capital</p>
                    </div>
                  </div>
                </div>
                <div className="w-35">
                  <img
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-1.png"
                    alt="dash-img"
                    className="object-contain"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-5 py-20">
              <div className="flex items-center px-20">
                <div className="w-65">
                  <h2 className="head-text font-600 text-white">
                    Scalper Trend
                  </h2>
                  <p className="small-text text-white">Dashboard</p>
                  <div className="flex items-center gap-12 mt-16">
                    <div>
                      <p className="para-text font-600 text-white">10L +</p>
                      <p className="mini-text text-white">Holdings</p>
                    </div>
                    <div className="mx-4">
                      <p className="para-text font-600 text-white">28CR +</p>
                      <p className="mini-text text-white">Hold Capital</p>
                    </div>
                  </div>
                </div>
                <div className="w-35">
                  <img
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-3.png"
                    alt="dash-img"
                    className="object-contain"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-5">
            <div className="flex items-center bordb">
              <div className="w-60 pl-22">
                <h5 className="head-text font-600 text-gray">
                  Yearly Position
                </h5>
                <p className="mini-text text-gray mt-2">Only 1 Year Updates</p>
              </div>
              <div className="w-40 grid-cols-2">
                <div className="p-16 cursor-pointer bg-primary">
                  <p className="small-text text-white">Profit Gainer</p>
                  <h4 className="head-text text-white">43.8K</h4>
                </div>
                <div className="p-16 cursor-pointer">
                  <p className="small-text text-gray">Loss Taking</p>
                  <h4 className="head-text text-dark">24.3K</h4>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Chart
                type="bar"
                arraydata={months}
                max={10000}
                col={months?.length}
                chartheight={280}
              />
            </div>
          </div>
          <div className="grid-cols-3 gap-10">
            <div className="py-14 w-full bg-primary rounded-5 relative overflow-hidden">
              <div className="px-15">
                <div className="flex items-center gap-8 pb-4">
                  <div className="border-0 rounded-5 p-12 bg-white">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="flex text-primary"
                    >
                      <g>
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h2 className="title-text text-white">Basic</h2>
                    <p className="mini-text text-white">Low Level</p>
                  </div>
                </div>
                <Chart label="" value={90} color="white" bg="transparent" />
              </div>
            </div>
            <div className="py-14 w-full bg-white rounded-5 relative overflow-hidden">
              <div className="px-15">
                <div className="flex items-center gap-8 pb-4">
                  <div className="border-0 rounded-5 p-12 bg-primary">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="flex text-white"
                    >
                      <g>
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h2 className="title-text text-primary">Intermediate</h2>
                    <p className="mini-text text-gray">Mid Level</p>
                  </div>
                </div>
                <Chart label="" value={90} color="primary" />
              </div>
            </div>
            <div className="py-14 w-full bg-white rounded-5 relative overflow-hidden">
              <div className="px-15">
                <div className="flex items-center gap-8 pb-4">
                  <div className="border-0 rounded-5 p-12 bg-primary">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="flex text-white"
                    >
                      <g>
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h2 className="title-text text-primary">Enterprise</h2>
                    <p className="mini-text text-gray">High Level</p>
                  </div>
                </div>
                <Chart label="" value={90} color="primary" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-35 grid-cols-1 gap-8">
          <Tabs tabs={tabList} tabIndex={tabList?.length}>
            <DataFlow dashboards={Investor} />
            <DataFlow dashboards={Customers} />
            <DataFlow dashboards={Users} />
          </Tabs>
        </div>
      </div>
      <div className="w-full bg-white b-shadow rounded-5 overflow-hidden mt-10">
        <div className="flex items-center bordb">
          <div className="w-60 pl-22">
            <h5 className="head-text font-600 text-gray">Daily Position</h5>
            <p className="mini-text text-gray mt-2">Only 1 Month Updates</p>
          </div>
          <div className="w-40 grid-cols-3">
            <div className="p-16 cursor-pointer bg-primary">
              <p className="small-text text-white">Profit Gainer</p>
              <h4 className="head-text text-white">42K</h4>
            </div>
            <div className="p-16 cursor-pointer bordr">
              <p className="small-text text-gray">Loss Taking</p>
              <h4 className="head-text text-dark">87K</h4>
            </div>
            <div className="p-16 cursor-pointer bg-forth">
              <p className="small-text text-gray">Hold Capital</p>
              <h4 className="head-text text-dark">200K</h4>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Chart
            type="bar"
            arraydata={days}
            max={10000}
            col={days?.length}
            chartheight={300}
          />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
