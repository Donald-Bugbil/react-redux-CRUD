import React from 'react';

class Form extends React.Component {

    initialState = {
            country: '',
            firstName:'',
            lastName:'',
            company:'',
            streetAddress:'',
            postalCode:'',
            city:''
        }

        state = this.initialState;

    onSubmitHandler = (event) => {
        event.preventDefault()
        const AddressInfo = {
            country: this.state.country,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            company: this.state.company,
            streetAddress: this.state.streetAddress,
            postalCode: this.state.postalCode,
            city: this.state.city
        }
        this.props.addAddress(AddressInfo)
        this.setState({
            country: '',
            firstName: '',
            lastName: '',
            company: '',
            streetAddress: '',
            postalCode: '',
            city: ''
        })
    }
    onChangeHandler = (event) => {
        const{name, value} = event.target;
        this.setState({ 
            [name] : value
            
         })
         console.log(this.state.name)
    }


    render() {
        const{country, firstName, lastName, company, streetAddress, postalCode, city} = this.state;
        
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="country">Country<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="country" onChange={this.onChangeHandler} name="country" value={country}/>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="firstName">First name<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="firstName" onChange={this.onChangeHandler} name="firstName" value={firstName}/>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="lastName">Last name<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="lastName" onChange={this.onChangeHandler} name="lastName" value={lastName}/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="company">Company<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="company" onChange={this.onChangeHandler} name="company" value={company}/>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="streetAddress">Street address<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="streetAddress" onChange={this.onChangeHandler} name="streetAddress" value={streetAddress}/>
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="postalCode">Postal code</label>
                            <input type="text" className="form-control" id="postalCode" onChange={this.onChangeHandler} name="postalCode" value={postalCode}/>
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="city">City<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" id="city" onChange={this.onChangeHandler} name="city" value={city}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                

            </div>
        )
    }
}
export default Form;