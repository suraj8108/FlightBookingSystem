import axios from "axios";
//Get The Token
const authService = async (JwtData) => {
    await fetch(`http://localhost:9969/token`, {
        method: 'POST',   
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(JwtData)
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log(data);
        if (data["token"]) {
          localStorage.setItem("token", data["token"].split(" ")[0]);
          console.log("Login Success");
          //window.alert(JSON.stringify(data));
        } else {
          // window.alert("Wrong Email or Password!!")
          console.log("Login Filed");
        }
      })
      //Then with the error genereted...
      .catch((error) => {
        window.alert("Something went Wrong!!");
        console.error("Error:", error);
      });
  };

//Get User Details
const userDetails = async (tokenDetails) => {
  console.log(tokenDetails);
  // const data = await fetch(`http://localhost:9969/user/getMyDetails`,{
  //   method: "GET",
  //   headers: {
  //       'Authorization': `Bearer ${localStorage.getItem("token")}`,
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Credentials': true
  //   },
  // }
  // )
  // .then(data => {
  //   console.log(data);
  //   return data
  // }).catch((error) => {
  //   // window.alert("Something went Wrong!!");
  //       console.error("Error:", error);
  //       return error;
  // })

  axios.post("http://localhost:9969/user/getMyDetails",{
    "data": 'sample',
   },
   {
     headers: {
     'authorization':'Bearer '+tokenDetails,
     'Content-Type':'application/json'
     }
   })
   .then((res) => {
     console.log(res);
   })

  return "Hello";

}
  const signup = async (myBody, user) => {
    console.log(myBody, user)
    const status = await fetch(`https://apiflipxo.azurewebsites.net/${user}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        if (data["success"]) {
          console.log("Register Success");
          return true;
        } else {
          return false;
        }
      })
      //Then with the error genereted...
      .catch((error) => {
        window.alert("Something went Wrong!!");
        console.error("Error:", error);
        return false
      });
      return status
  };

const logoutUser = () => {
    localStorage.removeItem("token");
  };


  export { authService , userDetails , signup , logoutUser};