export const options = {
    allowedConnections: ['Username-Password-Authentication'],
    additionalSignUpFields: [{
    name: "address",
    placeholder: "enter your address",
    // The following properties are optional
    icon: "https://example.com/assests/address_icon.png",
    prefill: "street 123",
    validator: function(address:any) {
      return {
         valid: address.length >= 10,
         hint: "Must have 10 or more chars" // optional
      };
    }
  },
  {
    name: "full_name",
    placeholder: "Enter your full name"
  }]
} 