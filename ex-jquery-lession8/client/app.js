function login(data) {
  return fetch("http://localhost:3000/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

$(document).ready(function () {
  const emailEl = $("#email");
  const pwEl = $("#password");
  $("#form").submit(async function (e) {
    e.preventDefault();
    const user = {
      email: emailEl.val(),
      password: pwEl.val(),
    };
    if (user.email && user.password) {
      const res = await login(user);
      const data = await res.json();
      if (data.isSuccess) {
        alert("Đăng nhập thành công");
      } else {
        alert("Tk hoặc mật khẩu sai");
      }
    } else {
      alert("Tk hoặc mật khẩu không được để trống");
    }
  });
});
