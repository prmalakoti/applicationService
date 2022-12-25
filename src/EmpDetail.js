import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState(null);

    useEffect(() => {
        // node api
        // fetch("http://localhost:3000/v1/getUserById?empId=" + empid).then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     console.log(resp.result);
        //     empdatachange(resp.result[0]);
        // }).catch((err) => {
        //     console.log(err.message);
        // })

        //axios call
        axios.get(`http://localhost:3000/v1/getUserById?empId=${empid}`).then(res => {
            empdatachange(res.data.result[0]);
        }).catch((err) => {
            console.log(err.message);
        })

        // Json-server api
        // fetch("http://localhost:8000/employee/" + empid).then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     empdatachange(resp);
        // }).catch((err) => {
        //     console.log(err.message);
        // })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Employee Create</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>
                            <h2>The Employee name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
                            <h3>Contact Details</h3>
                            <h5>Email is : {empdata.email}</h5>
                            <h5>Employee Id is : {empdata.empId}</h5>
                            <h5>Phone is : {empdata.phone}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;