  let sendToSquare = () => {

    let purchaseCost = document.getElementById('cost').value
    let customerName = document.getElementById('name').value
    let customerEmail = document.getElementById('email').value
    let customerAddress = document.getElementById('address1').value
    let customerCity = document.getElementById('city').value
    let customerState = document.getElementById('state').value
    let customerZip = document.getElementById('zip').value
    let customerEmployer = document.getElementById('employer').value
    let customerOccupation = document.getElementById('occupation').value
    let customerCertify = document.getElementById('certify').value

    let requiredFields = [
      purchaseCost,
      customerName,
      customerEmail,
      customerAddress,
      customerCity,
      customerState,
      customerZip,
      customerEmployer,
      customerOccupation,
      customerCertify,
    ]

    // Add requiredFields data to dataParameter in "state" field
    // to access customer info in callback URL
    let dataParameter = {
      "amount_money": {
        "amount": parseInt(purchaseCost, 10) * 100,
        "currency_code": "USD",
      },
      "callback_url": "https://192.168.1.230:3000", // Replace with callback URL
      "client_id": "sq0idp-vMnCSh9T6D_IAosDWXLASA", // Application ID
      "version": "1.3",
      "options": {
        "supported_tender_types": ["CREDIT_CARD","CASH"],
      },
    };

    if (requiredFields.includes("")) {
      window.alert('Please enter information in all fields')
    } else if (requiredFields[0] < 1) {
      window.alert('Cost must be at least 1')
    } else if (requiredFields[6].length != 5) {
      window.alert('Zip Code must be at least 5 digits')
    } else if (!requiredFields.includes("") && requiredFields[0] >= 1) {
      let squareURI = "square-commerce-v1://payment/create?data=" +
      encodeURIComponent(JSON.stringify(dataParameter));

      document.getElementById('passBtn').setAttribute("href", squareURI)
      document.getElementById('passBtn').innerText = 'Continue Transaction'
      console.log(dataParameter.amount_money.amount)
    }
  }
