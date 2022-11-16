<template>
  <AuthLayout>
    <!-- form -->
    <template #layoutcontent>
      <div class="form" :class="{ loading: isLoading }">
        <!-- form heading -->
        <div class="form__heading flex--space-between">
          <div class="form__heading__logoContainer">
            <img src="https://cdn.dribbble.com/users/2328616/screenshots/12472594/media/b1fc462905004066ffd045edf0890478.png?compress=1&resize=400x300&vertical=top" alt="logo" />
            <h2>Heap Overflow</h2>
          </div>
          <div class="form__singUp">
            <a
              href="register"
              class="form__singUp--noAcc"
              :class="{ disabled: isLoading }"
              >No account?</a
            ><br />
            <a
              href="register"
              class="form__singUp--signUp"
              :class="{ disabled: isLoading }"
              >Sign up</a
            >
          </div>
        </div>

        <!--form body  -->
        <div class="form__body">
          <h1 class="form__body__title">Sign In</h1>

          <div class="form__body__button flex--space-between">
            <button
              class="form__body__button--google"
              :class="{ disabled: isLoading }"
            >
              <span>
                <img src="../coder/assets/img/google.png" />
                Sign in with Google
              </span>
            </button>

            <button
              class="form__body__button--github"
              :class="{ disabled: isLoading }"
            >
              <img src="../coder/assets/img/github.png" alt="" />
            </button>
          </div>

          <form action="" @submit.prevent="handleLogin">
            <div class="form__body__inputGroup">
              <span class="form__body__inputGroup--title">
                <p>Username or Email Address</p>
              </span>
              <InputText
                :class="{ warning: isError.usernameEmpty }"
                @dataUpdated="setEmailOrUsername"
                :value="input.username || input.email"
                :disabled="isLoading"
                :require="true"
                placeholder="Username or email"
                @input="isError.usernameEmpty = false"
              />
              <p
                class="form__body__inputGroup--warningMessage"
                v-show="isError.usernameEmpty"
              >
                Can't let be empty
              </p>
            </div>

            <div class="form__body__inputGroup">
              <span class="form__body__inputGroup--title flex--space-between">
                <p>Password</p>
                <a href="">Forgot Password?</a>
              </span>
              <InputPass
                :class="{ warning: isError.passwordEmpty }"
                @dataUpdated="setPassword"
                :disabled="isLoading"
                :require="true"
                placeholder="Password"
                @input="isError.passwordEmpty = false"
              />
              <p
                class="form__body__inputGroup--warningMessage"
                v-show="isError.passwordEmpty"
              >
                Can't let be empty
              </p>
            </div>
            <Button
              class="sign-in"
              des="login"
              :disabled="isLoading"
              @clicked="handleLogin"
              text="Sign in"
              type="primary"
            />
          </form>
        </div>
      </div>
    </template>

    <!-- image -->
    <template #image>
      <img
        class="rightImage img2"
        src="../coder/assets/img/signInBoy.png"
        alt=""
      />
    </template>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { login } from "../coder/auth";
import AuthLayout from "./AuthLayout.vue";
import User from "../coder/user";
import InputText from "./components/InputText.vue";
import InputPass from "./components/InputPass.vue";
import Button from "./components/Button.vue";
import LoadingIcon from "./components/LoadingIcon.vue";
import errorHandler from "../shared/helpers/errorHandler";
import Alert from "../shared/components/general/Alert.vue";
import { mapMutations } from "vuex";
export default defineComponent({
  components: {
    InputText,
    InputPass,
    Button,
    LoadingIcon,
    AuthLayout,
    Alert,
  },
  data() {
    return {
      isLoading: false,
      isError:{
      usernameEmpty: false,
      passwordEmpty: false,
      },
      
      input: {
        email: "",
        username: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapMutations(['set_User']),
    setEmailOrUsername(value: any) {
      // check input type is email or username
      // email -> setEmail, username -> setUsername
      if (this.emailValidation(value)) {
        this.input.email = value;
        this.input.username = "";
      } else if (this.usernameValidation(value)) {
        this.input.email = "";
        this.input.username = value;
      }
    },

    setPassword(value: any) {
      if (this.passwordValidation(value)) {
        this.input.password = value;
      }
    },

    emailValidation(value: any) {
      let filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (filter.test(value)) {
        return true;
      } else {
        return false;
      }
    },

    usernameValidation(value: any) {
      let filter = /^[a-z][^\W_]{7,14}$/i;
      if (filter.test(value)) {
        return true;
      } else {
        return false;
      }
    },

    passwordValidation(value: any) {
      if (!value) {
        return false;
      } else {
        return true;
      }
    },

    setUser() {
      const user = new User();
      if (this.input.email && this.input.password) {
        user.setEmail(this.input.email);
        user.setPassword(this.input.password);
      }
      if (this.input.username && this.input.password) {
        user.setName(this.input.username);
        user.setPassword(this.input.password);
      }
      return user;
      
    },
    repOK() {
      if (!this.input.username && !this.input.email && !this.input.password) {
        this.isError.usernameEmpty = true;
        this.isError.passwordEmpty = true;
        return false;
      }
      if (!this.input.password) {
        this.isError.passwordEmpty = true;
        return false;
      }

      if (this.input.email && this.input.password) {
        this.isError.passwordEmpty = false;
        this.isError.usernameEmpty = false;
        return true;
      } else if (this.input.username && this.input.password) {
        this.isError.passwordEmpty = false;
         this.isError.usernameEmpty = false;
        return true;
      }
      return false;
    },

    directSignUp() {
      this.$router.push("register");
    },

    // where ?
    directForgotPass() {
      //this.router.push("");
    },

    async handleLogin() {
      // check empty
      if (this.repOK()) {
        try {
          this.setUser();
          this.isLoading = true;
          const data = await login(this.setUser());
          // add accessToken to localStorage
         const user = JSON.parse(data)
         localStorage.setItem("accessToken", user.token)
         localStorage.setItem("coderId", user.coderId)
         localStorage.setItem("username", user.username)
          this.$store.dispatch('coderStore/setUser', user)
          // move to dashboard
          this.$router.push("/");
          this.isLoading = false;
        } catch (error: any) {
          this.isLoading = false;
          errorHandler(error);
        }
      }
    },
  },
});
</script>

<style scoped>
/* common css */
* {
  font-style: normal;
  font-weight: 700;
}
.loading {
  opacity: 0.8;
}

.disabled {
  pointer-events: none;
  cursor: default;
}

.content {
  width: 100%;
  height: 100%;
}

/* When user try to submit with empty or wrong user's name/password */
.warning {
  --stroke-color: #f10e0e;
}

.flex--space-between {
  display: flex;
  justify-content: space-between;
}

/* form part */
.form {
  padding: 2em 4em;
  text-align: left;
}

.form__heading {
  margin-bottom: 10px;
}

.form__heading__logoContainer {
  display: flex;
}

.form__heading__logoContainer img {
  width: 4em;
  height: 3em;
}

.form__heading__logoContainer h2 {
  font-size: 16px;
  margin-left: 8px;
  margin-top: 2px;
}

.form__singUp {
  text-align: right;
  color: #7b61ff;
  font-weight: 600;
}

.form__singUp a {
  color: #7b61ff;
}

.form__singUp--signUp {
  text-decoration: underline;
}

.form__body__title {
  font-size: 3.5em;
  margin-bottom: 0.7em;
}

.form__body__button {
  margin-bottom: 2.5em;
}

.form__body__button--google {
  background: #7b61ff;
  border-radius: 16px;
  justify-content: center;
  text-align: center;
  min-width: 85%;
  height: 3em;
}

.form__body__button--google:hover {
  background: #302f4e;
}

.form__body__button--google span {
  font-size: 15px;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: center;
}

.form__body__button--google span img {
  margin-right: 10px;
  width: 1.5em;
}

.form__body__button--github {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #302f4e;
  border-radius: 10px;
  width: 3em;
  height: 3em;
}

.form__body__button--github:hover {
  background: #302f4e56;
}

.form__body__button--github img {
  width: 1.2em;
}

.form__body__inputGroup {
  margin-bottom: 15px;
}

.form__body__inputGroup--title {
  font-size: 15px;
  color: #9288c1;
}

.form__body__inputGroup--title p {
  margin-left: 2px;
  margin-bottom: 16px;
}
.form__body__inputGroup--title a {
  color: #7b61ff;
  text-decoration: underline;
}

.form__body__inputGroup input {
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 12px;
  height: 2.8em;
  padding: 20px;
  margin-bottom: 16px;
}
.form__body__inputGroup input::placeholder {
  color: #9288c1;
  font-size: 16px;
  font-weight: 400;
}
.form__body__inputGroup--warningMessage {
  color: red;
  margin-top: -8px;
  font-size: 14px;
}
.sign-in {
  width: 25%;
}
img {
  width: 700px;
}
</style>
