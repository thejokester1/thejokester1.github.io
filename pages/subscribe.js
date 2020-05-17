function emailSubscribe() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
     {
        const data = {
            members: [
              {
                email_address: document.getElementsByClassName("email input"),
                status: 'subscribed'
              }
            ]
          };

          const postData = JSON.stringify(data);

          fetch('https://cors-anywhere.herokuapp.com/https://us19.api.mailchimp.com/3.0/lists/8128081672', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Authorization': 'auth 566bb7d18b008e5c7ed72db3d6ff6669-us19',
            },
            body: postData
          })
            .then(function(response) {
            response.statusCode === 200 ?
            alert("You have been successfully subscribed to StreamIntra. An email should be arriving shortly.") :
            alert("An error has occurred, please try again later.")
            .catch(err => console.log(response))
            })
           } else {
       alert("You have entered an invalid email address!")
     }
  }