import Table from 'react-bootstrap/Table';

function TableComponent(prop) {
    const {data}=prop
    console.log(data)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cat Image</th>
          <th>Width</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((each,index)=>{
            const{id,url,width,height}=each
            return(
            <tr key={index}>
                <td>{id}</td>
                <td><img src={url} alt="cat" width={150} height={150}></img></td>
                <td>{width}</td>
                <td>{height}</td>
              </tr>
            )
        })
       }
       
      </tbody>
    </Table>
  );
}

export default TableComponent;