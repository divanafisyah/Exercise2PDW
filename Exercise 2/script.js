audio.addEventListener("click", function audio(){
    alert("Lagu");
});

video.addEventListener("click", function video(){
    alert("Video");
});

gambar.addEventListener("click", function gambar(){
    alert("Foto");
});

function kirimData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector("input[name=gender]:checked").value;
    var date = document.getElementById("date").value;
  
    alert(
      "Name : " +
        name +
        "\nEmail : " +
        email +
        "\nCountry : " +
        country +
        "\nGender : " +
        gender +
        "\nDate : " +
        date
    );
  }