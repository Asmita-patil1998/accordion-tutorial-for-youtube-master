import React from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

class TableComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-9">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                          <h3>About Course</h3>
                        <Table striped bordered hover>
  <thead>
    <tr>
     <th>Date</th>
      <th>Batches</th>
      <th>Timing</th>
      <th>Final Presentation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >7-02-1998</td>
      <td>batch1</td>
      {/* <td>batch2</td> */}
      <td>9:45</td>
      <td>10 april</td>
    </tr>
    <tr>
    <td >7-02-1995</td>
      <td>batch1</td>
      {/* <td>batch2</td> */}
      <td>10:87</td>
      <td>9 april</td>
    </tr>
    <tr>
    <td>7-02-1997</td>
    <td>batch1</td>
      {/* <td>batch2</td> */}
      <td>10:87</td>
      <td>9 april</td>
    </tr>
  </tbody>
</Table>

</div>
                    </div>
                </div>
            </div>
        )
    };
}

export default TableComponent;