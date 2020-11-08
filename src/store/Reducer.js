
  const initialState = {

    addressInfo: [{
      country: "",
      firstName: "",
      lastName: "",
      company: "",
      streetAddress: "",
      postalCode: "",
      city: ""
    }],
    updateInfo:{
          countryUpdate: '',
          firstNameUpdate: '',
          lastNameUpdate: '',
          companyUpdate: '',
          streetAddressUpdate: '',
          postalCodeUpdate: '',
          cityUpdate: '',
    }

  }


const cardReducer = (state=initialState, action) =>{
   
    switch (action.type) {
        case 'ADD_CARD':
          const newCard = {
            country: action.payload.country,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            company: action.payload.company,
            streetAddress: action.payload.streetAddress,
            postalCode: action.payload.postalCode,
            city: action.payload.city
          }

            return {...state, addressInfo: [...state.addressInfo,newCard ]}
            
        case 'DELETE_CARD':
         
          const finalOutput = state.addressInfo.filter(address => address.firstName !== action.payload)
          return {
            ...state, addressInfo: finalOutput
          }
        
        case 'ADD_UPDATE':
          const update ={
              countryUpdate: action.payload.countryUpdate,
              firstNameUpdate: action.payload.firstNameUpdate,
              lastNameUpdate: action.payload.lastNameUpdate,
              companyUpdate: action.payload.companyUpdate,
              streetAddressUpdate: action.payload.streetAddressUpdate,
              postalCodeUpdate: action.payload.postalCodeUpdate,
              cityUpdate: action.payload.cityUpdate,

              }

              return {...state, updateInfo: {...state.updateInfo, update}}

        case 'MAKE_CHANGE':
          const change ={
            country: action.payload.countryUpdate,
            firstName: action.payload.firstNameUpdate,
            lastName: action.payload.lastNameUpdate,
            company: action.payload.companyUpdate,
            streetAddress: action.payload.streetAddressUpdate,
            postalCode: action.payload.postalCodeUpdate,
            city: action.payload.cityUpdate
          }
          const changed = state.addressInfo.map(address => {
            if(address.firstName === change.firstName){
              return change 
            } 
            else {
              return address
            }
          })
          return {...state, addressInfo: changed}

        default:
            return state;
    }

}
export default cardReducer;