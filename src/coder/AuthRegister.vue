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
              href="login"
              class="form__singUp--haveAcc"
              :class="{ disabled: isLoading }"
              >Have account?</a
            ><br />
            <a
              href="login"
              class="form__singUp--signUp"
              :class="{ disabled: isLoading }"
              >Sign in</a
            >
          </div>
        </div>

        <!--form body  -->
        <div class="form__body">
          <h1 class="form__body__title">Sign Up</h1>

          <div class="form__body__button flex--space-between">
            <button
              class="form__body__button--google"
              :class="{ disabled: isLoading }"
            >
              <span>
                <img src="../coder/assets/img/google.png" />
                Sign up with Google
              </span>
            </button>

            <button
              class="form__body__button--github"
              :class="{ disabled: isLoading }"
            >
              <img src="../coder/assets/img/github.png" alt="" />
            </button>
          </div>

          <form action="" @submit.prevent="">
            <div class="form__body__inputGroup">
              <!-- Email -->
              <span class="form__body__inputGroup--title"> </span>
              <InputText
                :class="{ warning: isError.email }"
                @dataUpdated="setEmail"
                :value="input.email"
                :disabled="(isLoading = false)"
                :require="true"
                placeholder="Enter your email"
                @input="isError.email = false"
              />
              <p
                class="form__body__inputGroup--warningMessage"
                v-show="isError.email"
              >
                {{ errorMessages.email }}
              </p>
            </div>
            <!-- Username -->
            <div class="form__body__inputGroup">
              <span class="form__body__inputGroup--title"> </span>
              <InputText
                :class="{ warning: isError.username }"
                @dataUpdated="setUsername"
                :value="input.username"
                :disabled="isLoading"
                :require="true"
                placeholder="Enter your username"
                @input="isError.username = false"
              />
              <p
                class="form__body__inputGroup--warningMessage"
                v-show="isError.username"
              >
                {{ errorMessages.username }}
              </p>
            </div>
            <!-- Password -->
            <div class="form__body__inputGroup">
              <span class="form__body__inputGroup--title flex--space-between">
              </span>
              <InputPass
                :class="{ warning: isError.password }"
                @dataUpdated="setPassword"
                :disabled="isLoading"
                :require="true"
                placeholder="Password"
                @input="isError.password = false"
              />
              <p
                class="form__body__inputGroup--warningMessage"
                v-show="isError.password"
              >
                {{ errorMessages.password }}
              </p>
            </div>
            <!-- Confirm your password -->
            <div class="form__body__inputGroup">
              <span class="form__body__inputGroup--title flex--space-between">
              </span>
              <InputPass
                :class="{ warning: isError.confirmPassword }"
                @dataUpdated="setConfirmPassword"
                :disabled="isLoading"
                :require="true"
                placeholder="Confirm your password"
                @input="isError.confirmPassword = false"
              />
              <p
                class="form__body__inputGroup--warningMessage"
                v-show="isError.confirmPassword"
              >
                Not match password
              </p>
            </div>

            <Button
              class="sign-up"
              des="Sign up"
              :disabled="isLoading"
              @clicked="handleRegister"
              text="Sign up"
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
        src="../coder/assets/img/SignUpBoy.png"
        alt="Vũ Đặng Anh Quân"
      />
    </template>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { login } from "../coder/auth";
import { register } from "../coder/auth";
import AuthLayout from "./AuthLayout.vue";
import User from "../coder/user";
import InputText from "./components/InputText.vue";
import InputPass from "./components/InputPass.vue";
import Button from "./components/Button.vue";
import LoadingIcon from "./components/LoadingIcon.vue";
import errorHandler from "../shared/helpers/errorHandler";
import Alert from "../shared/components/general/Alert.vue";
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
      errorMessages: {
        email: "",
        username: "",
        password: "",
      },
      isError: {
        email: false,
        username: false,
        password: false,
        confirmPassword: false,
      },
      input: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  watch: {
    confirmPassword(value) {
      this.input.confirmPassword = value;
      this.setConfirmPassword(value);
    },
  },

  methods: {
    setEmail(value: string) {
      this.input.email = value;
    },

    setUsername(value: string) {
      this.input.username = value;
    },

    setPassword(value: string) {
      this.input.password = value;
    },

    setConfirmPassword(value: any) {
      this.input.confirmPassword = value;
    },

    confirmPasswordValidation() {
      if (this.input.password != this.input.confirmPassword) {
        this.isError.confirmPassword = true;
        return false;
      } else {
        this.isError.confirmPassword = false;
        return true;
      }
    },

    async login(user: any) {
      try {
        const data = await login(user);
        localStorage.setItem("accessToken", JSON.parse(data).token);
        localStorage.setItem("coderId", JSON.parse(data).coderId)
        localStorage.setItem("username", JSON.parse(data).username)
      } catch (error: any) {
        this.isLoading = false;
        errorHandler(error);
      }
    },

    setUser() {
      const user = new User();
      try {
        user.setEmail(this.input.email);
      } catch (error: any) {
        this.isError.email = true;
        this.errorMessages.email = error.message;
      }
      try {
        user.setName(this.input.username);
      } catch (error: any) {
        this.isError.username = true;
        this.errorMessages.username = error.message;
      }
      try {
        user.setPassword(this.input.password);
      } catch (error: any) {
        this.isError.password = true;
        this.errorMessages.password = error.message;
      }
      return user;
    },

    userValidate(user: any) {
      if (!user.getName() || !user.getPassword() || !user.getEmail()) {
        return false;
      }
      return true;
    },

    async handleRegister() {
      const user = this.setUser();
      if (this.confirmPasswordValidation() && this.userValidate(user)) {
        try {
          // login after register
          // store accessToken to localStorage
         
        const data = await register(this.setUser());
        
      
         localStorage.clear()
         localStorage.setItem("accessToken", JSON.parse(data).token);
         localStorage.setItem("coderId", JSON.parse(data).coderId)
          localStorage.setItem("username", JSON.parse(data).username)
           this.$store.dispatch('coderStore/setUser', user)
           // move to dashboard
          this.$router.push("/");
        } catch (error: any) {
          errorHandler(error);
        }
      }
    },
  },
});
</script>

<style scoped>
* {
  font-style: normal;
  font-weight: 700;
}
.loading {
  opacity: 0.4;
}

.disabled {
  pointer-events: none;
  cursor: default;
}

.content {
  width: 100%;
  height: 100%;
}

.warning {
  border-color: red;
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
  margin-bottom: 0.4em;
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
  margin-bottom: 5px;
}

.form__body__inputGroup--title {
  font-size: 15px;
  color: #9288c1;
}

.form__body__inputGroup--title p {
  margin-left: 2px;
  margin-bottom: 12px;
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
  margin-bottom: 25px;
}
.form__body__inputGroup input::placeholder {
  color: #9288c1;
  font-size: 16px;
  font-weight: 400;
}
.form__body__inputGroup--warningMessage {
  color: red;
  margin-left: 1rem;
  margin-top: -0.9rem;
  font-size: 14px;
}
.sign-up {
  width: 25%;
}
img {
  width: 700px;
}
</style>
