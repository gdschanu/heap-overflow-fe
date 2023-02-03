<template>
  <div class="sidebar">
    <div class="logo-details">
      <i class="bx bxl-c-plus-plus"></i>
      <span class="logo_name">Heap OverFlow</span>
    </div>
    <ul class="nav-links">
      <li>
        <a href="#" class="active">
          <i class="bx bx-grid-alt"></i>
          <span class="links_name">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-box"></i>
          <span class="links_name">Problems</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-pie-chart-alt-2"></i>
          <span class="links_name">Analytics</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-user"></i>
          <span class="links_name">Team</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-message"></i>
          <span class="links_name">Messages</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-cog"></i>
          <span class="links_name">Setting</span>
        </a>
      </li>
      <li class="log_out">
        <a href="#">
          <i class="bx bx-log-out"></i>
          <span class="links_name">Log out</span>
        </a>
      </li>
    </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class="bx bx-menu sidebarBtn"></i>
        <span class="dashboard">Dashboard</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <i class="bx bx-search"></i>
      </div>
      <div class="profile-details">
        <!--<img src="images/profile.jpg" alt="">-->
        <span class="admin_name">Admin's Name</span>
        <i class="bx bx-chevron-down"></i>
      </div>
    </nav>

    <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Problems</div>
            <div class="number">40,876</div>
            <div class="indicator">
              <i class="bx bx-up-arrow-alt"></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class="bx bx-cart-alt cart"></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Contests</div>
            <div class="number">38,876</div>
            <div class="indicator">
              <i class="bx bx-up-arrow-alt"></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class="bx bxs-cart-add cart two"></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Users</div>
            <div class="number">$12,876</div>
            <div class="indicator">
              <i class="bx bx-up-arrow-alt"></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class="bx bx-cart cart three"></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Return</div>
            <div class="number">11,086</div>
            <div class="indicator">
              <i class="bx bx-down-arrow-alt down"></i>
              <span class="text">Down From Today</span>
            </div>
          </div>
          <i class="bx bxs-cart-download cart four"></i>
        </div>
      </div>

      <div class="information-boxes">
        <div class="recent-information box">
          <div class="information-details">
            <ul class="details">
              <li class="topic">IP Adress</li>
              <li><a href="#">116.96.45.149</a></li>
              <li><a href="#">116.96.45.150</a></li>
              <li><a href="#">116.96.45.151</a></li>
              <li><a href="#">116.96.45.152</a></li>
              <li><a href="#">116.96.45.153</a></li>
              <li><a href="#">116.96.45.154</a></li>
              <li><a href="#">116.96.45.155</a></li>
              <li><a href="#">116.96.45.156</a></li>
              <li><a href="#">116.96.45.157</a></li>
            </ul>
            <ul class="details">
              <li class="topic">CPU Cores</li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
              <li><a href="#">Core i5</a></li>
            </ul>
            <ul class="details">
              <li class="topic">CPU Usage</li>
              <li><a href="#">80%</a></li>
              <li><a href="#">65%</a></li>
              <li><a href="#">90%</a></li>
              <li><a href="#">99%</a></li>
              <li><a href="#">92%</a></li>
              <li><a href="#">93%</a></li>
              <li><a href="#">94%</a></li>
              <li><a href="#">86%</a></li>
              <li><a href="#">88%</a></li>
            </ul>
            <ul class="details">
              <li class="topic">RAM</li>
              <li><a href="#">4GB</a></li>
              <li><a href="#">8GB</a></li>
              <li><a href="#">2GB</a></li>
              <li><a href="#">4GB</a></li>
              <li><a href="#">8GB</a></li>
              <li><a href="#">4GB</a></li>
              <li><a href="#">2GB</a></li>
              <li><a href="#">4GB</a></li>
              <li><a href="#">8GB</a></li>
            </ul>
            <ul class="details">
              <li class="topic">RAM Usage</li>
              <li><a href="#">80%</a></li>
              <li><a href="#">65%</a></li>
              <li><a href="#">90%</a></li>
              <li><a href="#">99%</a></li>
              <li><a href="#">92%</a></li>
              <li><a href="#">93%</a></li>
              <li><a href="#">94%</a></li>
              <li><a href="#">86%</a></li>
              <li><a href="#">88%</a></li>
            </ul>
            <ul class="details">
              <li class="topic">JudgingThread</li>
              <li><a href="#">834556</a></li>
              <li><a href="#">635554</a></li>
              <li><a href="#">911312</a></li>
              <li><a href="#">922312</a></li>
              <li><a href="#">563443</a></li>
              <li><a href="#">671212</a></li>
              <li><a href="#">933353</a></li>
              <li><a href="#">863153</a></li>
              <li><a href="#">823454</a></li>
            </ul>
            <ul class="details">
              <li class="topic">VirtualMachineUrls</li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
              <li><a href="#">yada.com:80:127.0.0.1</a></li>
            </ul>
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div class="top-information box">
          <div class="title">Max Judging Thread</div>
          <ul class="top-information-details">
            <li>
              <a href="#">
                <!--<img src="images/sunglasses.jpg" alt="">-->
                <span class="computer">Computer 1</span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!--<img src="images/jeans.jpg" alt="">-->
                <span class="computer">Computer 2 </span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!-- <img src="images/nike.jpg" alt="">-->
                <span class="computer">Computer 3</span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!--<img src="images/scarves.jpg" alt="">-->
                <span class="computer">Computer 4</span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!--<img src="images/blueBag.jpg" alt="">-->
                <span class="computer">Computer 5</span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!--<img src="images/bag.jpg" alt="">-->
                <span class="computer">Computer 6</span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!--<img src="images/addidas.jpg" alt="">-->
                <span class="computer">Computer 7</span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!--<img src="images/shirt.jpg" alt="">-->
                <span class="computer">Computer 8</span>
              </a>
              <span class="Max">xxx</span>
            </li>
            <li>
              <a href="#">
                <!--<img src="images/shirt.jpg" alt="">-->
                <span class="computer">Computer 9</span>
              </a>
              <span class="Max">xxx</span>
            </li>
          </ul>
          <div class="button">
            <a href="#">Update</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Googlefont Poppins CDN Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar {
  position: fixed;
  height: 100%;
  width: 240px;
  background: #0a2558;
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 60px;
}
.sidebar .logo-details {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar .logo-details i {
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  min-width: 60px;
  text-align: center;
}
.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 30px;
  font-weight: 500;
}
.sidebar .nav-links {
  margin-top: 10px;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  height: 50px;
}
.sidebar .nav-links li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active {
  background: #081d45;
}
.sidebar .nav-links li a:hover {
  background: #081d45;
}
.sidebar .nav-links li i {
  min-width: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.sidebar .nav-links li a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
}
.sidebar .nav-links .log_out {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.home-section {
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section {
  width: calc(100% - 60px);
  left: 60px;
}
.home-section nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section nav {
  left: 60px;
  width: calc(100% - 60px);
}
.home-section nav .sidebar-button {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
}
nav .sidebar-button i {
  font-size: 35px;
  margin-right: 10px;
}
.home-section nav .search-box {
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
}
nav .search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
}
nav .search-box .bx-search {
  position: absolute;
  height: 40px;
  width: 40px;
  background: #2697ff;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  transition: all 0.4 ease;
}

.home-section nav .profile-details {
  display: flex;
  align-items: center;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  height: 50px;
  min-width: 190px;
  padding: 0 15px 0 2px;
}
nav .profile-details img {
  height: 40px;
  width: 40px;
  border-radius: 6px;
  object-fit: cover;
}
nav .profile-details .admin_name {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
nav .profile-details i {
  font-size: 25px;
  color: #333;
}
.home-section .home-content {
  position: relative;
  padding-top: 104px;
}
.home-content .overview-boxes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-bottom: 26px;
}
.overview-boxes .box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 15px);
  background: #fff;
  padding: 15px 14px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.overview-boxes .box-topic {
  font-size: 20px;
  font-weight: 500;
}
.home-content .box .number {
  display: inline-block;
  font-size: 24px;
  margin-top: -6px;
  font-weight: 500;
}
.home-content .box .indicator {
  display: flex;
  align-items: center;
}
.home-content .box .indicator i {
  height: 20px;
  width: 20px;
  background: #8fdacb;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
}
.box .indicator i.down {
  background: #e87d88;
}
.home-content .box .indicator .text {
  font-size: 12px;
}
.home-content .box .cart {
  display: inline-block;
  font-size: 32px;
  height: 50px;
  width: 50px;
  background: #cce5ff;
  line-height: 50px;
  text-align: center;
  color: #66b0ff;
  border-radius: 12px;
  margin: -15px 0 0 6px;
}
.home-content .box .cart.two {
  color: #2bd47d;
  background: #c0f2d8;
}
.home-content .box .cart.three {
  color: #ffc233;
  background: #ffe8b3;
}
.home-content .box .cart.four {
  color: #e05260;
  background: #f7d4d7;
}
.home-content .total-order {
  font-size: 20px;
  font-weight: 500;
}
.home-content .information-boxes {
  display: flex;
  justify-content: space-between;
  /* padding: 0 20px; */
}

/* left box */
.home-content .information-boxes .recent-information {
  width: 72%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.home-content .information-boxes .information-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.information-boxes .box .title {
  font-size: 19px;
  font-weight: 500;
}
.information-boxes .information-details li.topic {
  font-size: 20px;
  font-weight: 500;
}
.information-boxes .information-details li {
  list-style: none;
  margin: 8px 0;
  text-align: center;
}
.information-boxes .information-details li a {
  font-size: 18px;
  color: #333;
  font-size: 400;
  text-decoration: none;
}
.information-boxes .box .button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.information-boxes .box .button a {
  color: #fff;
  background: #0a2558;
  padding: 4px 12px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.information-boxes .box .button a:hover {
  background: #0d3073;
}
.home-content .information-boxes .top-information {
  width: 23%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px 0 0;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.information-boxes .top-information li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
.information-boxes .top-information li a img {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 10px;
  background: #333;
}
.information-boxes .top-information li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.information-boxes .top-information li .computer,
.Max {
  font-size: 17px;
  font-weight: 400;
  color: #333;
}
/* Responsive Media Query */
@media (max-width: 1240px) {
  .sidebar {
    width: 60px;
  }
  .sidebar.active {
    width: 220px;
  }
  .home-section {
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section {
    /* width: calc(100% - 220px); */
    overflow: hidden;
    left: 220px;
  }
  .home-section nav {
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section nav {
    width: calc(100% - 220px);
    left: 220px;
  }
}
@media (max-width: 1150px) {
  .home-content .information-boxes {
    flex-direction: column;
  }
  .home-content .information-boxes .box {
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 30px;
  }
  .home-content .information-boxes .top-information {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .overview-boxes .box {
    width: calc(100% / 2 - 15px);
    margin-bottom: 15px;
  }
}
@media (max-width: 700px) {
  nav .sidebar-button .dashboard,
  nav .profile-details .admin_name,
  nav .profile-details i {
    display: none;
  }
  .home-section nav .profile-details {
    height: 50px;
    min-width: 40px;
  }
  .home-content .information-boxes .information-details {
    width: 560px;
  }
}
@media (max-width: 550px) {
  .overview-boxes .box {
    width: 100%;
    margin-bottom: 15px;
  }
  .sidebar.active ~ .home-section nav .profile-details {
    display: none;
  }
}
@media (max-width: 400px) {
  .sidebar {
    width: 0;
  }
  .sidebar.active {
    width: 60px;
  }
  .home-section {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section {
    left: 60px;
    width: calc(100% - 60px);
  }
  .home-section nav {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section nav {
    left: 60px;
    width: calc(100% - 60px);
  }
}
</style>
