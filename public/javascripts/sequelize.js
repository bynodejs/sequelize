// 사용자 로딩
function getUser() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      let users = JSON.parse(xhr.responseText);
      let tbody = document.querySelector("#user-list tbody");
      tbody.innerHTML = "";

      users.map(function(user) {
        let row = document.createElement("tr");
        let td = document.createElement("td");

        row.addEventListener("click", function() {
          getComment(user.id);
        });

        td.textContent = user.id;
        row.appendChild(td);

        td = document.createElement("td");
        td.textContent = user.name;
        row.appendChild(td);

        td = document.createElement("td");
        td.textContent = user.age;
        row.appendChild(td);

        td = document.createElement("td");
        td.textContent = user.married ? "기혼" : "미혼";
        row.appendChild(td);

        tbody.appendChild(row);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("GET", "/users");
  xhr.send();
}

// 댓글 로딩
function getComment(id) {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      let comments = JSON.parse(xhr.responseText);
      let tbody = document.querySelector("#comment-list tbody");
      tbody.innerHTML = "";

      comments.map(function(comment) {
        let row = document.createElement("tr");
        let td = document.createElement("td");
        let edit = document.createElement("button");
        let remove = document.createElement("button");

        td.textContent = comment.id;
        row.appendChild(td);

        td = document.createElement("td");
        td.textContent = comment.user.name;
        row.appendChild(td);

        td = document.createElement("td");
        td.textContent = comment.comment;
        row.appendChild(td);

        // 수정 클릭 시
        edit.textContent = "수정";
        edit.addEventListener("click", function() {
          editComment(id, comment.id);
        });

        // 삭제 클릭 시
        remove.textContent = "삭제";
        remove.addEventListener("click", function() {
          removeComment(id, comment.id);
        });

        td = document.createElement("td");
        td.appendChild(edit);
        row.appendChild(td);

        td = document.createElement("td");
        td.appendChild(remove);
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("GET", "/comments/" + id);
  xhr.send();
}

function editComment(id, comment) {
  const xhr = new XMLHttpRequest();
  let newComment = prompt("바꿀 내용을 입력하세요");
  if (!newComment) return alert("내용을 반드시 입력하셔야 합니다");

  xhr.onload = function() {
    if (xhr.status === 200) {
      getComment(id);
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("PUT", "/comments/" + comment);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ comment: newComment }));
}

function removeComment(id, comment) {
  const xhr = new XMLHttpRequest();
  let newConfirm = confirm("삭제 하시겠습니까?");
  if (!newConfirm) return alert("삭제가 취소되었습니다.");

  xhr.onload = function() {
    if (xhr.status === 200) {
      getComment(id);
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("DELETE", "/comments/" + comment);
  xhr.send();
}

// 사용자 이름 눌렀을 때 댓글 로딩
document.querySelectorAll("#user-list tr").forEach(function(el) {
  el.addEventListener("click", function() {
    let id = el.querySelector("td").textContent;
    getComment(id);
  });
});

// 사용자 등록 시
document.getElementById("user-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  let name = e.target.username.value;
  let age = e.target.age.value;
  let married = e.target.married.checked;

  if (!name) return alert("이름을 입력하세요");
  if (!age) return alert("나이를 입력하세요");

  xhr.onload = function() {
    if (xhr.status === 201) {
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("POST", "/users");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ name: name, age: age, married: married }));

  e.target.username.value = "";
  e.target.age.value = "";
  e.target.married.checked = false;
});

// 댓글 등록 시
document.getElementById("comment-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  let id = e.target.userid.value;
  let comment = e.target.comment.value;

  if (!id) return alert("아이디를 입력하세요");
  if (!comment) return alert("댓글을 입력하세요");

  xhr.onload = function() {
    if (xhr.status === 201) {
      getComment(id);
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("POST", "/comments");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ id: id, comment: comment }));

  e.target.userid.value = "";
  e.target.comment.value = "";
});
