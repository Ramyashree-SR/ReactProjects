import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Layout } from 'antd';
import React from "react";
const { Header, Content } = Layout;


function AddBatch1() {
  return (
    <div border>
    <Layout style={{height:"100px"}}>
      <Header style={{backgroundColor:"White"}}>
        <span>
        <b style={{ color: "rgb(235, 200, 26)" ,justifyContent:"left"}}>BatchList</b>

        {/* <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" htmlFor="form1">Search</label>
        </div>
        <button type="button" className="btn btn-light">
          <i className="fas fa-search" />
        </button>
      </div> */}

         <Button
           icon={<SearchOutlined/>}
          style={{ marginLeft: "450px",
                  width:"250px",
                  height:"40px",
                  backgroundColor:"white",
                  paddingBottom:"50px"

        }}>
          Search
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

        <Button type="primary" style={{
          color:"black",
          backgroundColor:"rgb(235, 200, 26)",
          
          paddingBottom:"50px",
          position:"absolute",
          left:"1050px"

         }} >
          + New Batch
        </Button>

      
</span>
         </Header>

      <Content>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <th scope="col">No.</th>
            <th scope="col">BatchId</th>
            <th scope="col">BatchName</th>
            <th scope="col">MentorName</th>
            <th scope="col">Technologies</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Staus</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <td>01</td>
            <td>#15423653</td>
            <td>abcd</td>
            <td>Chanana</td>
            <td>list</td>
            <td>14 mar 2022</td>
            <td>14 apr 2022</td>
            <td>inprogress</td>
            <td>delete edit</td>
          </tr>
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <td>01</td>
            <td>#15423653</td>
            <td>abcd</td>
            <td>Chanana</td>
            <td>list</td>
            <td>14 mar 2022</td>
            <td>14 apr 2022</td>
            <td>inprogress</td>
            <td>delete edit</td>
          </tr>
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </th>
            <td>01</td>
            <td>#15423653</td>
            <td>abcd</td>
            <td>Chanana</td>
            <td>list</td>
            <td>14 mar 2022</td>
            <td>14 apr 2022</td>
            <td>inprogress</td>
            <td>delete edit</td>
          </tr>
        </tbody>
      </table>
   </Content>
     </Layout>
       
    </div>
  );
}

export default AddBatch1;
