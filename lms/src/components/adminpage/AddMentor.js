import React from 'react'
import { Divider, Radio, Table } from 'antd';
import { useState } from 'react';
import { Layout } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
const { Header} = Layout;


function AddMentor(){
const columns = [
    {
        title: 'No',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
      },
  {
    title: 'MentorName',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'EmployeeId',
    dataIndex: 'employeeid',
  },
  {
    title: 'EmailId',
    dataIndex: 'emailid',
  },
  {
    title: 'Skills',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
];

const data = [];
  
  for (let i = 1; i<=10; i++) {
    data.push({
      key: i,
      No:`${i}`,
      Mentorname: ` ${i}`,
      EmployeeId:"",
      EmailID:"",
      Skills:"",
      Action:""
      
    });
  }
 // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

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
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  
  return (
    <div>
         
      <Layout style={{height:"40px",
            width:"1000px"}}>
       <Header style={{backgroundColor:"White" ,height:"30px"}}> 
        <span >
        <b style={{ color: "rgb(235, 200, 26)",marginRight:'1000px',}}>Mentor List</b>


        <input
            type="text"
            placeholder="search"
            className="search pt-2 fs-6 fw-dark align-self-center display-6 font-weight-light border border-secondary"
            style={{ marginLeft: "450px",
                  width:"250px",
                  height:"10px",
                  backgroundColor:"white",
                  paddingBottom:"20px",
                  // position:"absolute",
                  // left:"350px",
                  // top:"152px",
                  borderRadius:"10px 10px 10px 10px"
                  }}
                  />


        <Button type="primary" className="p-0 border border-info align-center" style={{
          color:"black",
          backgroundColor:"rgb(235, 200, 26)",
          padding:"0px -10px -10px 0px",
          // position:"absolute",
          // left:"1050px",
          // top:"152px",
          textAlign:"center",
          borderRadius:"10px 10px 10px 10px",
          height:"30px"
       }} >
          + New Mentor
        </Button>
   </span>
          </Header> 

         <div
        style={{
          marginBottom: 0,
          height:"100px",
          width:"900px",
          position:"absolute",
          left:"-20px",
          top:"40px"

        }}
      >
        {/* <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          + New Batch
        </Button> */}
        <span
          style={{
            marginLeft: 0,
            width:"100%"
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>

      <Table rowSelection={rowSelection} columns={columns} dataSource={data}  
      style={{height:"70px",
      width:"100%",
      padding:"0px 10px -100px 0px",
      position:"relative",
      left:"-30px",
      top:"-19px"
      }}/>
      </Layout>
    </div>
    )
    }
  }
export default AddMentor;