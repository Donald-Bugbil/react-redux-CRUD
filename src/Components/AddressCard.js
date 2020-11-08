import React from 'react';

class  AddressCard extends React.Component {

    render(){

    const{firstName, lastName, streetAddress, company, city, country, postalCode} = this.props;
    
        return(
            
             <div style={{marginLeft: '10vh'}}>
                <p><strong>{firstName} {lastName}</strong> </p> 
                <p>{streetAddress}</p> 
                <p>{company}</p> 
                <p>{city}</p>
                <p>{country} {postalCode} </p>
                <button className="btn btn-danger" onClick={() => this.props.onDelete(firstName) }>Delete</button>
                <button className="btn btn-primary" onClick={() => this.props.onUpdate(firstName,lastName,streetAddress,company,city,postalCode,country)}>Edit</button>
                <hr></hr>
            </div>
            )
            }
}

export default AddressCard;