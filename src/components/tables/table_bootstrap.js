import Table from "react-bootstrap/Table";
import data from "../Map_function/data";
import React from "react";
function TableComponent() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachItem, index) => {
          return (
            <React.Fragment key={index}>
              <tr>
                <td>{eachItem.id}</td>
                <td>{eachItem.title}</td>
                <td>{eachItem.category}</td>
                <td><img src={eachItem.image} alt={eachItem.title} width={100} height={100}/></td>
                <td>{eachItem.price}</td>
              </tr>
            </React.Fragment>
          );
        })}
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default TableComponent;
