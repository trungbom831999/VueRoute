<template>
  <div>
    <!-- <h1>Welcome: {{$route.params.name}}</h1>
        <h2>Pass: {{$route.params.password}}</h2>
        <h2>Birthday: {{$route.params.birthday}}</h2>
        <h2>Giới tính: {{$route.params.sex}}</h2>
        <h2>Chức vụ: {{$route.params.level}}</h2>
        <h2>Sơ yếu lý lịch: </h2>
    <textarea class="form-control" rows="5" v-model="$route.params.des" disabled></textarea>-->

    <div class="container" id="content">
      <form id="edit-form" @submit.prevent="edit">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 order-1 order-md-1">
            <div class="form-group">
              <label id="fontOther" for="userName">Tên đăng nhập:</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                id="userName"
                name="userName"
                placeholder="Tên đăng nhập"
                pattern="[a-zA-Z0-9]*"
                required
              />
              <p
                id="noti-userName"
              >*Tên đăng nhập gồm chữ thường, chữ in hoa và số (không sử dụng dấu cách)</p>
            </div>
            <div class="form-group">
              <label id="fontOther" for="password">Mật khẩu:</label>
              <input
                v-model="password"
                id="password"
                type="password"
                class="form-control"
                name="password"
                placeholder="Mật khẩu"
                required
              />
              <span toggle="#password" class="fa fa-fw fa-eye field-icon" id="show-pass"></span>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 order-2 order-md-3">
            <div class="form-group">
              <label id="fontOther" for="email">Email:</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Địa chỉ email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            <div class="form-group">
              <label id="fontOther" for="phone">Số điện thoại:</label>
              <input
                v-model="phone"
                type="tel"
                class="form-control"
                id="phone"
                name="phone"
                placeholder="xxxx-xxx-xxx"
              />
              <p id="noti-phone">Số điện thoại bắt đầu là 0 hoặc +84 và có 10 chữ số</p>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 order-3 order-md-2">
            <div class="form-group" id="form-birthday">
              <label id="fontOther" for="birthday">Ngày sinh</label>
              <input
                v-model="birthday"
                type="date"
                class="form-control"
                id="birthday"
                name="birthday"
              />
              <span class="far fa-calendar-alt field-icon" id="icon-calendar"></span>
            </div>

            <div id="sex">
              <div
                v-for="item in list"
                :key="item.id"
                class="custom-control custom-radio custom-control-inline"
              >
                <input
                  v-model="picked"
                  type="radio"
                  class="custom-control-input"
                  :id="item.id"
                  name="sex"
                  :value="item.value"
                />
                <label class="custom-control-label" id="fontOther" :for="item.id">{{item.value}}</label>
              </div>
            </div>

            <div id="level-form">
              <label id="fontOther" for="level">Chức vụ</label>
              <select id="level" name="level" class="custom-select mb-3" v-model="selected">
                <option disabled value="Chưa chọn">Chọn chức vụ của bạn</option>
                <option
                  v-for="option in options"
                  v-bind:value="option.value"
                  :key="option.id"
                >{{option.text}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group" id="form-description">
          <label id="fontOther" for="description">Giới thiệu:</label>
          <textarea
            v-model="description"
            class="form-control"
            rows="3"
            id="description"
            name="description"
            maxlength="100"
            pattern="[a-zA-Z0-9]*"
          ></textarea>
          <span id="textareaLength"></span>
        </div>

        <button type="submit" class="btn-hover btn-color btn-center" id="submit-btn">Lưu</button>
      </form>
    </div>
    <button @click="logOut" class="btn-hover btn-color btn-center">Đăng xuất</button>
  </div>
</template>

<style scoped>
@import "../style/register.css";
</style>

<script>
import $ from "jquery";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      name: this.$route.params.name,
      password: this.$route.params.password,
      birthday: this.$route.params.birthday,
      picked: this.$route.params.sex,
      description: this.$route.params.des,
      selected: this.$route.params.level,
      list: [
        { id: "sex1", name: "nam", value: "Nam" },
        { id: "sex2", name: "nu", value: "Nữ" },
        { id: "sex3", name: "khac", value: "Khác" }
      ],
      options: [
        { id: 1, text: "Chủ tịch", value: "Chủ tịch" },
        { id: 2, text: "Giám đốc", value: "Giám đốc" },
        { id: 3, text: "Phó giám đốc", value: "Phó giám đốc" }
      ]
    };
  },
  methods: {
    logOut() {
      this.$router.push("/");
    },
    checkPhoneNumber: function() {
      var flag = false;
      var phone = $("#phone")
        .val()
        .trim();
      phone = phone.replace("+84", "0");
      phone = phone.replace("0084", "0");
      phone = phone.replace(/ /g, "");
      if (phone.length == 10 && phone.match(/^\d{10}/)) {
        flag = true;
      }
      if (phone == "") {
        flag = true;
      }

      return flag;
    },
    edit: function(e) {
      var name = this.name;
      var password = this.password;
      var birthday = this.birthday;
      var sex = this.picked;
      var level = this.selected;
      var des = this.description;
      var email = this.email;
      var phone = this.phone;

      if (!this.checkPhoneNumber()) {
        $("#phone")
          .parents("div.form-group")
          .addClass("has-error");
        $("#phone").focus();
        e.preventDefault();
      } else {
        if(email == "") email = " ";
        if(phone == "") phone = " ";
        if(des == "") des = " ";
        Swal.fire({
          position: "center",
          // icon: "success",
          title: "Lưu thành công",
          showConfirmButton: false,
          timer: 1000
        });
        this.$router.push({
          path: `/user/name=${name}/pass=${password}/bd=${birthday}/sex=${sex}/level=${level}/email=${email}/phone=${phone}/des=${des}`
        });
      }
    }
  },
  mounted() {
    //show password
    $("#show-pass").bind("mousedown touchstart", function() {
      var input = $($(this).attr("toggle"));
      input.attr("type", "text");
      // console.log("Load show pass");
    });

    $("#show-pass").bind("mouseup touchend", function() {
      var input = $($(this).attr("toggle"));
      input.attr("type", "password");
    });

    //max date
    $(document).ready(function() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear() - 18;
      //console.log(yyyy-18);
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      today = yyyy + "-" + mm + "-" + dd;
      $("#birthday").attr("max", today);
      // console.log("Max date");
    });

    // $("#edit-form").submit(function() {
    //   Swal.fire({
    //     position: "center",
    //     // icon: "success",
    //     title: "Lưu thành công",
    //     showConfirmButton: false,
    //     timer: 1000
    //   });
    // });

    //đếm ký tự textarea
    var theCounter = $("#textareaLength"),
      textarea = $("#description"),
      maxLength = textarea.attr("maxlength");

    theCounter.text(textarea.val().length + " / " + maxLength);
    theCounter.css({
      top: textarea.offset().top + textarea.height() - theCounter.height(),
      left: textarea.offset().left + textarea.width() - theCounter.width()
    });

    textarea.on("keypress", function() {
      // var theLength = $(this).val().length;
      if ($(this).val().length + 1 <= maxLength) {
        theCounter.text($(this).val().length + 1 + " / " + maxLength).css({
          left: textarea.offset().left + textarea.width() - theCounter.width()
        });
      }
    });
  }
};
</script>