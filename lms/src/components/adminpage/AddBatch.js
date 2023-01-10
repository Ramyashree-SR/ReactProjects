import React from "react";
import { Table } from "antd";
import { useState } from "react";
import { Button, Modal } from 'antd';


import { SearchOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Header } = Layout;

function AddBatch() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "No",
    },
    {
      title: "BatchId",
      dataIndex: "BatchId",
    },
    {
      title: "BatchName",
      dataIndex: "batchName",
    },
    {
      title: "MentorName",
      dataIndex: "Mentorname",
    },
    {
      title: "Tecnologies",
      dataIndex: "Technologies",
    },
    {
      title: "Startdate",
      dataIndex: "Startdate",
    },
    {
      title: "Enddate",
      dataIndex: "Enddate",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Active",
      dataIndex: "Active",
    },
  ];
  const data = [];

  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      No: `${i}`,
      batchId: "",
      Batchname: ` ${i}`,
      mentorname: `${i}`,
      technologies: "",
      startdate: "",
      endstate: "",
      active: "",
    });
  }

  {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
      setLoading(true); // ajax request after empty completing

      setTimeout(() => {
        setSelectedRowKeys([]);
        setLoading(false);
      }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    

    return (
      <div>
        <Layout style={{ height: "40px", width: "100%" }}>
          <Header>
            <b style={{ color: "rgb(235, 200, 26)", marginRight: "1000px" }}>
              BatchList
            </b>

            <input
              type="text"
              placeholder="search"
              className="search pt-2 fs-6 fw-dark align-self-center display-6 font-weight-light border border-secondary"
              style={{
                marginLeft: "200px",
                width: "250px",
                height: "10px",
                backgroundColor: "white",
                paddingBottom: "20px",
                position: "absolute",
                left: "200px",
                top: "25px",
                borderRadius: "10px 10px 10px 10px",
              }}
            />
             
      <Button type="primary" onClick={showModal} style={{marginLeft: "30px"}}>
        New batch
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
          </Header>
          <div
            style={{
              marginBottom: 0,
              height: "100px",
              width: "900px",
              position: "absolute",
              left: "-20px",
              top: "40px",
            }}
          >
            <span
              style={{
                marginLeft: 0,
                width: "100%",
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            style={{
              height: "50px",
              width: "100%",
              padding: "0px 10px -100px 0px",
              position: "relative",
              left: "-30px",
              top: "-19px",
            }}
          />
        </Layout>

      </div>
    );
  }
}
export default AddBatch;
