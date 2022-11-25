<template>
    <div class="wrapper">
        <div class="container">
            <div class="myform">
                <form>
                    <h2>ADMIN LOGIN</h2>
                    <input type="text" placeholder="Admin Name">
                    <input type="password" placeholder="Password">
                    <button type="submit">LOGIN</button>
                </form>
            </div>
            <div class="image">
                    <img src="./assets/img/image.jpg">
            </div>
        </div>
    </div>
   

  </template>
  
  <script lang = "ts">
  
  </script>
  

  <style >
.wrapper{
background-color:#E8EDF2;
height: 100vh;
padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: poppins;
}
.container{
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 30px;
  box-shadow: 0 50px 50px -50px darkslategray;
}

.container .myform{
  width: 270px;
  margin-right: 30px;
}

.container .myform h2{
  color: #1c1c1e;
  margin-bottom: 20px;
}

.container .myform input{
  border: none;
  outline: none;
  border-radius: 0;
  width: 100%;
  border-bottom: 2px solid #1c1c1e;
  margin-bottom: 25px;
  padding: 7px 0;
  font-size: 14px;
}
.container .myform button{
  color: white;
  background-color: #1c1c1e;
  border: none;
  outline: none;
  border-radius: 2px;
  font-size: 14px;
  padding: 5px 12px;
  font-weight: 500;
}
.container .image img{
  width: 300px;
}
  </style>
  