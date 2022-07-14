function redirect(url) {
  location.href = url;
}


// idr
let xsaldo = document.querySelectorAll(".mySALDO");
for (let i = 0, len = xsaldo.length; i < len; i++) {
  let num = Number(xsaldo[i].innerHTML).toLocaleString("id");
  xsaldo[i].innerHTML = num;
  xsaldo[i].classList.add("currSign");
}

function mt() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "error",
    title: "Produk dalam pemeliharaan !",
  });
}