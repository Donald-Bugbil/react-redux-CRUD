import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddressCard from './Components/AddressCard';
import Form from './Components/addressformjsx';
import FormUpdate from './Components/addressformupdatejsx';
import {connect} from 'react-redux';
import {addCard} from './store/action';
import {deleteCard} from './store/action';
import {addUpdateCard} from './store/action';
import {makeChangesToCard} from './store/action';

class App extends React.Component {


  deleteMethod = cardName =>{
    this.props.deleteCard(cardName)
  }
  addUpdate = (firstName,lastName,streetAddress,company,city,postalCode,country) =>{
    const update ={
      countryUpdate: country,
      firstNameUpdate: firstName,
      lastNameUpdate: lastName,
      companyUpdate: company,
      streetAddressUpdate: streetAddress,
      postalCodeUpdate: postalCode,
      cityUpdate: city,
    }
    this.props.addUpdateCard(update)
  }


  addAddress = info => {
 
      this.props.addCard(info) 
  }
  makeChange = change =>{
    this.props.makeChangesToCard(change)
  }

  render() {
    return (
        <div className="container" style={{marginTop: '10vh', marginBottom: '10vh'}}>
          <div className="row">
            <div className="col-6">
              <h4>Add to Address Book form</h4><hr style={{backgroundColor: '#6ba4ff'}}/>
                  <Form addAddress={this.addAddress}/>
            
              <h4 style={{marginTop:'10vh'}}>Edit Address form </h4><hr style={{backgroundColor: '#6ba4ff'}}/>
                <FormUpdate updateData={this.props.updateInfo} onMakeChange={this.makeChange}/>
            </div>
            <div className="col-6">
                {
                  this.props.addressInfo.map( (item,index)  => { 
                    return (
                       <AddressCard 
                          key={index}
                          country={item.country} 
                          firstName={item.firstName}
                          lastName={item.lastName}
                          company={item.company}
                          streetAddress={item.streetAddress}
                          postalCode={item.postalCode}
                          city={item.city}
                          onDelete={this.deleteMethod}
                          onUpdate = {this.addUpdate}
                    /> 
                    )
                  })
                }
            
            </div>
          </div>
          
        </div>

    )
  }

}
const mapStateToProps = (state) => {
  return {
    addressInfo: state.addressInfo,
    updateInfo: state.updateInfo
  }
}
const mapDispatchToProps = {

  addCard: addCard,
  deleteCard: deleteCard,
  addUpdateCard: addUpdateCard,
  makeChangesToCard: makeChangesToCard
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
