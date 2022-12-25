import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        // node api
        // fetch("http://localhost:3000/v1/getUserById?empId=" + empid).then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     console.log(resp.result);
        //     // empdatachange(resp.result[0]);
        //     idchange(resp.result[0].id);
        //     namechange(resp.result[0].name);
        //     emailchange(resp.result[0].email);
        //     phonechange(resp.result[0].phone);
        //     empIdchange(resp.result[0].empId);
        //     passwordchange(resp.result[0].password);
        //     activechange(resp.result[0].isactive);
        // }).catch((err) => {
        //     console.log(err.message);
        // })

        //axios call
        axios.get(`http://localhost:3000/v1/getUserById?empId=${empid}`).then(res => {
            idchange(res.data.result[0].id);
            namechange(res.data.result[0].name);
            emailchange(res.data.result[0].email);
            phonechange(res.data.result[0].phone);
            empIdchange(res.data.result[0].empId);
            passwordchange(res.data.result[0].password);
            activechange(res.data.result[0].isactive);
        }).catch((err) => {
            console.log(err.message);
        })

        // Json-server api
        // fetch("http://localhost:8000/employee/" + empid).then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     idchange(resp.id);
        //     namechange(resp.name);
        //     emailchange(resp.email);
        //     phonechange(resp.phone);
        //     activechange(resp.isactive);
        // }).catch((err) => {
        //     console.log(err.message);
        // })
    }, []);

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [empId, empIdchange] = useState("");
    const [password, passwordchange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        // const empdata = { id, name, email, phone, active };

        const empdata = { id, name, email, phone, password, empId, active };
        /* Node api API */
        // fetch("http://localhost:3000/v1/updateUser", {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(empdata)
        // }).then((res) => {
        //     alert('Updated successfully.')
        //     navigate('/');
        // }).catch((err) => {
        //     console.log(err.message)
        // })

        // axios call
        axios.put(`http://localhost:3000/v1/updateUser`, empdata).then(res => {
            alert('Updated successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message);
        })

        // json server
        // fetch("http://localhost:8000/employee/" + empid, {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(empdata)
        // }).then((res) => {
        //     alert('Saved successfully.')
        //     navigate('/');
        // }).catch((err) => {
        //     console.log(err.message)
        // })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input value="********" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee ID</label>
                                            <input value={empId} onChange={e => empIdchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpEdit;