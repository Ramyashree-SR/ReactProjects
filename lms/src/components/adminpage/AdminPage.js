// //  import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
// import { Breadcrumb, Layout, Menu } from "antd";
// import React from "react";
// import AddMentor from "./AddMentor";
// import { Button } from 'antd';
// import { SearchOutlined } from "@ant-design/icons";
// import { useState } from 'react';
// import { Table } from 'antd';
// import Request from "./Request";
// import { Layout } from 'antd';



// const { Header, Content, Sider } = Layout;
// function AdminPage() {
//   const columns = [
//     {
//       title: 'No',
//       dataIndex: 'No',
//     },
//     {
//       title: 'BatchId',
//       dataIndex: 'BatchId',
//     },
//     {
//       title: 'BatchName',
//       dataIndex: 'batchName',
//     },
//     { 
//     title: 'MentorName',
//       dataIndex: 'Mentorname',
//   },
//   {
//       title: 'Tecnologies',
//       dataIndex: 'Technologies',
//   },
//   {
//       title: 'Startdate',
//       dataIndex: 'Startdate',
//   },
//   {
//       title: 'Enddate',
//       dataIndex: 'Enddate',
//   },
//   {
//       title: 'Status',
//       dataIndex: 'status',
//   },
//   {
//       title: 'Active',
//       dataIndex: 'Active',
//   },
//   ];
//   const data = [];
  
//   for (let i = 1; i<=15; i++) {
//     data.push({
//       key: i,
//       No:`${i}`,
//       batchId:"",
//       Batchname: ` ${i}`,
//       mentorname:`${i}`,
//       technologies:"",
//       startdate:"",
//       endstate:"",
//       active:""
      
//     });
//   }
  
//    {
//     const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//     const [loading, setLoading] = useState(false);
  
//     const start = () => {
//       setLoading(true); // ajax request after empty completing
  
//       setTimeout(() => {
//         setSelectedRowKeys([]);
//         setLoading(false);
//       }, 1000);
//     };
  
//     const onSelectChange = (newSelectedRowKeys) => {
//       console.log('selectedRowKeys changed: ', selectedRowKeys);
//       setSelectedRowKeys(newSelectedRowKeys);
//     };
  
//     const rowSelection = {
//       selectedRowKeys,
//       onChange: onSelectChange,
//     };
//     const hasSelected = selectedRowKeys.length > 0;
  
//   return (
//     <div>
//       <Layout>
//         <Header className="header bg-light d-flex-inline-p-7 w-7">
//           <img
//             className="d-md-inline-flex ml-3 align-top col px-md-3 p-2 justify-center "
//             width="175px"
//             height="65px"
//             src="./assets/logo1.png"
//             alt="tc"
//             style={{ marginLeft: "0px",
//              padding: "0px",
//              position:"absolute",
//              left:"60px",
//              top:"20px"
//            }}
//           />
//           <input
//             type="text"
//             placeholder="Search Mentor/Employee"
//             className="search pt-3 fs-5 fw-dark align-self-center display-6 font-weight-light border border-secondary"
//             style={{
//               width: "500px",
//               height: "10px",
//               padding: "12px",
//               boxSizing: "border-box",
//               border: "black",
//               backgroundColor:"white",
//               position:"absolute",
//               left:"400px",
//               top:"50px",
//               fontSize:"small"
//             }}
//                />

//           <button
//             className="logoutbtn btn bg-light p-0 border border-info align-center"
//             type="button"
//             style={{
//               width: "100px",
//               height: "40px",
//               marginLeft: "282px",
//               padding: "12px",
//               position:"absolute",
//               left:"800px",
//               top:"40px"
//             }}
//           >
//             Logout
//           </button>

//           <Menu theme="light" />
//         </Header>
//         <Layout className="l">
//           <Sider width={70} height={300} className="site-layout-background bg-light " >
//             <Menu
//               style={{
//                 height: "900px",
//                 borderRight: 50,
//                 minHeight: 300,
//                 positon:'absolute',
//                 top:"800px"
//               }}
//             >
//               <Button style={{height:"60px",width:"60px",marginLeft:"-7px",marginTop:"10px"} }>
//               <img src="./assets/batch.png" alt="batchimage" style={{marginLeft:"-4px"}}/>
//               </Button>
//               <h6 style={{fontSize:"small",marginLeft:"5px"}}>Batch</h6>
              
//               <br />
//               <br/>
//               <Button style={{height:"60px",width:"60px",marginLeft:"-7px",marginTop:"10px"} }>
//               <img src="./assets/Mentor.png" alt="batchimage"  style={{marginLeft:"-4px"}}/>
//               </Button>
//               <h6 style={{fontSize:"small",marginLeft:"5px"}}>Mentor</h6>
//               <br />
//               <br/>

//               <Button style={{height:"60px",width:"60px",marginLeft:"-7px",marginTop:"10px"} }>
//               <img src="./assets/Request.png" alt="batchimage" style={{marginLeft:"-4px"}}/>
//               </Button>
//               <h6 style={{fontSize:"small",marginLeft:"5px"}}>Request</h6>
              
              
//               <br />
//             </Menu>
//           </Sider>
//           <Layout
//           // style={{
//           //   padding: "0 12px 12px",
//           // }}
//           >
//             <Breadcrumb
//               style={{
//                 margin:"-19px",
//                 padding:"0px 0px",
//                 maxHeight: 500,
//               }}
//             >
//               <Breadcrumb.Item>Home</Breadcrumb.Item>
//               <Breadcrumb.Item>Batch</Breadcrumb.Item>
//             </Breadcrumb>
//     <Content
//               className="site-layout-background bg-light pd-1 fs-10"
//               style={{
//                 padding: "-10px ",
//                 minHeight: 40,
//                 width:"1050px",
//                 height:"20px",
//                 marginLeft:"-10px",

//               }}
//             >
              
//                <Layout style={{height:"40px",
//             width:"1000px"}}> 
//        <Header style={{backgroundColor:"White" ,height:"30px"}}> */} 
//          <span style={{border:"dark"}}>
//         <b style={{ color: "rgb(235, 200, 26)",marginRight:'1000px',}}>BatchList</b>
        
          
//         {/* <Button
           
//           style={{ marginLeft: "450px",
//                   width:"200px",
//                   height:"10px",
//                   backgroundColor:"white",
//                   paddingBottom:"25px",
//                   position:"absolute",
//                   left:"300px",
//                   top:"150px"
//                   }}
//                  icon={<SearchOutlined/>}>
//           Search
//         </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
        
//         <input
//             type="text"
//             placeholder="search"
//             className="search pt-2 fs-6 fw-dark align-self-center display-6 font-weight-light border border-secondary"
//             style={{ marginLeft: "450px",
//                   width:"250px",
//                   height:"10px",
//                   backgroundColor:"white",
//                   paddingBottom:"20px",
//                   position:"absolute",
//                   left:"350px",
//                   top:"152px",
//                   // borderRadius:"10px 10px 10px 10px"
//                   }}
//                   /> 


//          <Button type="primary" className="p-0 border border-info align-center" style={{
//           color:"black",
//           backgroundColor:"rgb(235, 200, 26)",
//           padding:"0px -10px -10px 0px",
//           position:"absolute",
//           left:"1050px",
//           top:"152px",
//           textAlign:"center",
//           borderRadius:"10px 10px 10px 10px",
//           height:"30px"
//        }} >
//           + New Batch
//         </Button>
//    </span> 
         

//           <div
//         style={{
//           marginBottom: 0,
//           height:"100px",
//           width:"900px",
//           position:"absolute",
//           left:"-20px",
//           top:"40px"

//         }}
//       > 
       
//          <span
//           style={{
//             marginLeft: -10,
//             width:"100%"
//           }}
//         >
//           {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
//         </span>
//       </div> 
//        <Table rowSelection={rowSelection} columns={columns} dataSource={data}  style={{height:"70px",
//       width:"100%",
//       padding:"0px 10px -100px 0px",
//       position:"relative",
//       left:"-30px",
//       top:"-19px"
//       }}/> 
      
//        </Layout>
//       {/* <AddMentor/> */}
//       {/* <Request/> */}
//       <
// y           </Layout>
//          </Layout>
//       </Layout>
//     </div>
//   );
// }
// }
// export default AdminPage;
