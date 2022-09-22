<template>
    <div>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" :value="placeholder" placeholder="Search something" @input="searchData">
 
    </div>
     
  </template>
  
  <script>
  export default {
  name: 'InputText',
  props:{
      placeholder:{
          type: String,
          default: "Search something"
      }
  },
  data(){
  return{
      data:''
  }
  },
  methods:{
      searchData(event){
          this.data= event.target.value;
          this.$emit('searchUpdated',this.data)
      }
  }
  }
  </script>
  
  <style scoped>
    i{
        position: absolute;
    }
  input{
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  width: 320px;
  height: 40px;
  border-radius: 20px;
  background: #FFFFFF;
  border: 1px solid #9FC1F9;
  box-sizing: border-box;
  border-radius: 20px;
  }
  input::placeholder{
  height: 21px;
  width: 100%;
  left: 64px;
  top: 15px;
  border-radius: nullpx;
  
  position: absolute;
  left: 20%;
  right: 44.69%;
  top: 28.85%;
  bottom: 30.77%;
  
  /* --h2-font-size */
  
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  
  display: flex;
  align-items: flex-end;
  color: #9FC1F9;
  
  }
  input::before{
      color: #e84118;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  </style>