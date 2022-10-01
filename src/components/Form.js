import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';   
export default class Form extends Component {
    state = {
        form: [
               
            {id: '', title:'',status:''}
            
        ],
        'input_id': ' ',
        'input_title': ' ',
        'input_status': '',
        
        
        
        
    };
    
    inputValue = (event) => {
        const Enter_id = event.target.value;
        this.setState({ 'input_id': Enter_id });


    }
    inputValue2 = (event) => {
        const Enter_title = event.target.value;
        this.setState({ 'input_title': Enter_title });


    }
    inputValue3 = (event) => {
        const Enter_status = event.target.value;
        this.setState({ 'input_status': Enter_status });


    }
    onSubmit = (event) => {
        event.preventDefault();
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        const form_data = {
            id: this.state.input_id,
            title: this.state.input_title,
            status: this.state.input_status,
        };
        data.push(form_data);
        
        
        localStorage.setItem("data",JSON.stringify(data))
        // console.log(form_id);
        
        //   console.log(handle);
        this.setState((prevstate) => (
            {
                form: prevstate.form.map(f => {
                    // console.log("hello")
                    return  f;
                    
                    
                    
                    
                    
                })  
            }
            
            
            )
            
            
            )






    };



    render() {
        return (<div>

            <h4>Fill Form</h4>
            <form onSubmit={event => this.onSubmit(event)}>
                <div className="form-group">
                    <label for="">id</label>
                    <input type="text" className="form-control" placeholder="Enter id" onChange={event => this.inputValue(event)} />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label for="">Title</label>
                    <input type="text" className="form-control" placeholder="Title" onChange={event => this.inputValue2(event)} />
                </div>
                {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
                <div className="form-group">
                    <label for="">Status</label>
                    <input type="text" className="form-control" placeholder="Status" onChange={event => this.inputValue3(event)} />
                </div>
                <button   type="submit" className="btn btn-primary">Add</button>
            </form>
            <br></br>
            <h4>Filled Details</h4>
            <p></p>
            <table className="table  table-bordered">
              
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>status</th>
                </tr>
                   {JSON.parse(localStorage.getItem("data")) !== " " ? 
                   
                   
                    JSON.parse(localStorage.getItem("data")).map((da)=>{
                        return <tr>
                        <td>{da.id}</td>
                        <td>{da.title}</td>
                        <td>{da.status}</td>
                        </tr>
                    })
                   
                   : console.log("error")}
          </table>


        </div>);

    }
}
