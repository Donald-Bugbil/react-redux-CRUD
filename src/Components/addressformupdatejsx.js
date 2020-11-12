import React from 'react';



class FormUpdate extends React.Component{
    
     state  = {

        info: this.props.updateData
    }

    

    changeHandler = (event) =>{
        const{name, value} = event.target;
        this.setState({

            [name]: value
        
        })
    }
    formSubmit = (event) =>{
        event.preventDefault()
        const change = {
            countryUpdate: this.state.countryUpdate,
            firstNameUpdate: this.state.firstNameUpdate,
            lastNameUpdate: this.state.lastNameUpdate,
            companyUpdate: this.state.companyUpdate,
            streetAddressUpdate: this.state.streetAddressUpdate,
            postalCodeUpdate: this.state.postalCodeUpdate,
            cityUpdate: this.state.cityUpdate,

        }
        this.props.onMakeChange(change)
        this.setState({
                countryUpdate: '',
                firstNameUpdate: '',
                lastNameUpdate: '',
                companyUpdate: '',
                streetAddressUpdate: '',
                postalCodeUpdate: '',
                cityUpdate: '',
        })
    }

    render(){
    
        return(
            <form onSubmit={this.formSubmit}>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="countryInput">Country<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="countryInput" name= "countryUpdate" onChange= {this.changeHandler} value={this.state.info.countryUpdate}/>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="firstName">First name<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="firstName" name="firstNameUpdate" onChange={this.changeHandler} value={this.state.info.firstNameUpdate
                            }/>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="lastName">Last name<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="lastName" name="lastNameUpdate" onChange={this.changeHandler} value={this.state.info.lastNameUpdate}/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="companyInput">Company<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="companyInput" name="companyUpdate" onChange={this.changeHandler} value={this.state.info.companyUpdate}/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="streetAddress">Street address<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="streetAddress" name="streetAddressUpdate" onChange={this.changeHandler} value={this.state.info.streetAddressUpdate}/>
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="postalCode">Postal code</label>
                            <input type="text" className="form-control" id="postalCode" name="postalCodeUpdate" onChange={this.changeHandler} value={this.state.info.postalCodeUpdate}/>
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="cityInput">City<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="cityInput" name="cityUpdate" onChange={this.changeHandler} value={this.state.info.cityUpdate}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
        )
    }
}
export default FormUpdate;