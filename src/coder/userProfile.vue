<template>
  <div class="main_content">
    <Nav></Nav>
    <form>
      <div class="left_content">
        <div class="left_content_background">
          <h2>Profile information</h2>
          <div class="row">
            <div class="form_control">
              <label for="first_name">First Name</label>
              <input
                name="first_name"
                class="input"
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                
               
              />
            </div>
            <div class="form_control">
              <label for="last_name">Last Name</label>
              <input
                name="last_name"
                class="input"
                id="last_name"
                type="text"
                placeholder="Enter your last name"
              
              />
            </div>
          </div>
          <div class="row">
            <div class="form_control">
              <label for="birthday">Birthday</label>
              <div class="input-group">
                <input
                  name="birthday"
                  data-datepicker=""
                  class="input"
                  id="birthday"
                  type="text"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div class="form_control">
              <label for="gender">Gender</label>

              <select class="input">
                <option selected>Other</option>
                <option selected>Male</option>
                <option selected>Female</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="form_control">
              <label for="email">Email</label>
              <input
                name="email"
                class="input"
                id="email"
                type="email"
                placeholder="name@company.com"
              />
            </div>
            <div class="form_control">
              <label for="phone">Phone</label>
              <input
                name="phone"
                class="input"
                id="phone"
                type="number"
                placeholder="+12-345 678 910"
              />
            </div>
          </div>
          <h2>Address</h2>
          <div class="row">
            <div class="form_control">
              <label for="address">Address</label>
              <input
                name="address"
                class="input"
                id="address"
                type="text"
                placeholder="Enter your home address"
   
              />
            </div>
            <div class="form_control">
              <label for="number">Number</label>
              <input
                name="number"
                class="input"
                id="number"
                type="number"
                placeholder="No."
           
              />
            </div>
          </div>
          <div class="row">
            <div class="form_control">
              <label for="city">City</label>
              <input
                name="city"
                class="input"
                id="city"
                type="text"
                placeholder="City"

              />
            </div>
            <div class="form_control">
              <label for="zip">ZIP</label>
              <input
                name="zip"
                class="input"
                id="zip"
                type="tel"
                placeholder="ZIP"
                              />
            </div>
          </div>
          
            <div class="button">
            <button @click="submitProfile" class="btn btn-primary">
              Update
            </button>
          </div>
          <div class="button">
            <button @click="handlelogout" class="btn btn-primary">
              Logout
            </button>
          
          </div>
         
        </div>
      </div>
      <div class="right_content">
        <div class="right_content_background">
          <div class="profile">
            <div>
              <img src="../coder/assets/img/meme-la-gi.jpg" alt="Opps" />
                <!-- demo -->
              <h4 v-if="user_infor">{{ user_infor.data.coderId }}</h4>
              <h5>Full stack developer</h5>
              <p>Ha Noi, Viet Nam</p>
              <div class="link">
                <a href="#" class="connect"
                  ><span class="fas fa-user-plus"></span> Connect</a
                >

                <a href="#" class="message">Send Message</a>
              </div>
            </div>
          </div>

          <div class="picture">
            <h3>Select profile photo</h3>
            <div class="select_photo">
              <span>
                <span class="fas fa-paperclip mr-2"></span>
              </span>
              <input name="avatar" type="file" />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Nav from "@/shared/components/general/Nav.vue";
import errorHandler from "@/shared/helpers/errorHandler";
import logout from "./api/logoutApi";
import { getUserInfor } from "./auth";
export default defineComponent({
  data() {
    return {
      user_infor : ""
    }
  },
  async created(){
    const data = localStorage.getItem("coderId")
    if (data){  
    const response = await getUserInfor(data)
    console.log(response)
    this.user_infor =JSON.parse(response)
    }
  },
  components: {
    Nav,
  },


  methods: {
    async handlelogout() {
      let response = localStorage.getItem("accessToken");
      if (response) {
        try {
          localStorage.removeItem("accessToken");
          this.$router.push("login");
          await logout(JSON.parse(response));
        } catch (error: any) {
          errorHandler(error);
        }
      }
    },

   submitProfile() {
      
  
    },
  },
});
</script>

<style>
.main_content {
  display: flex;
  height: 100vh;
}
form {
  width: 150%;
  display: flex;
  font-style: normal;
  font-weight: 600;
  color: #9288c1;
  background-color: #f3f6fc;
}
.left_content {
  width: 70%;
  border-radius: 20px;
  margin: 10px 60px 10px 60px;
  background-color: white;
  padding: 20px;
}
h2 {
  margin: 10px 0px 30px;
}
.row {
  display: flex;
  justify-content: space-between;
}
.row .form_control {
  display: grid;
  margin-bottom: 12px;
}
.input {
  border: 1px solid #959595;
  border-radius: 7px;
  height: 40px;
  width: 300px;
  padding: 7px 10px 10px;
  margin-top: 10px;
}
.input::placeholder {
  color: #9288c1;
}
.btn{
  display: flex;
  justify-content: space-between;
}
.button {
  margin-top: 20px;
  background-color: rgb(48, 47, 47);
  width: 16%;
  text-align: center;
  color: #f3f6fc;
  padding: 6px;
  border-radius: 7px;
}

.right_content {
  width: 50%;
  height: 100vh;
}
.right_content_background {
  text-align: center;
}
.profile {
  background-color: white;
  padding: 10px;
  height: 70vh;
  width: 60vh;
  border-radius: 20px;
  margin-top: 10px;
}
.profile img {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  margin-top: 60px;
}
.link {
  margin-top: 20px;
  margin-left: 50px;
}
.connect {
  background-color: rgb(48, 47, 47);
  color: #f3f6fc;
  margin-right: 30px;
  padding: 6px;
  border-radius: 7px;
}
.message {
  background-color: rgb(223, 127, 86);
  color: #f3f6fc;
  margin-right: 30px;
  padding: 6px;
  border-radius: 7px;
}
.picture {
  margin-top: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 43px;
  margin-right: 70px;
}
.select_photo {
  margin-top: 20px;
}




</style>