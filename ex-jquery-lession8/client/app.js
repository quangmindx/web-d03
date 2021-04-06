function login(data, callback) {
  $.ajax({
    url: "http://localhost:3000/api/v1/user/login",
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response, textStatus, jqXHR) {
      callback(response);
    },
  });

  // return fetch("http://localhost:3000/api/v1/user/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
}

function handleData(data) {
  console.log(data);
  if (data.isSuccess) {
    alert(`hello ${data.user}`);
  } else {
    alert("Tk hoặc mật khẩu sai");
  }
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
      login(user, handleData);
    } else {
      alert("Tk hoặc mật khẩu không được để trống");
    }
  });
});
