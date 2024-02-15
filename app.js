function validate() {
    var status = false;

    // name
    var hoten = document.myForm.hoTen.value;
    if(hoten === "") {
        document.getElementById('ht').innerHTML = "Không để trống dữ liệu";
        status = true;
    } else {
        document.getElementById('ht').innerHTML = '';
    }

    var email = document.myForm.email.value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email === "") {
        document.getElementById('email').innerHTML = "Không để trống dữ liệu";
        status = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email').innerHTML = "Không đúng định dạng email";
        status = true;
    } else {
        document.getElementById('email').innerHTML = '';
    }

    return !status;
}