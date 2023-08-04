var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
   this.classList.toggle("click");
   nav.classList.toggle("open");
})
 
 /* Animasi Mengetik */
var typed = new Typed(".input", {
  strings: ["Gamers","Noobs","Students","Noleps"],
  typeSpeed: 70,
  backSpeed: 15,
  loop: true
})
 
window.addEventListener('load', function() {
  var loadingContainer = document.querySelector('.loading-container');
  var contentContainer = document.getElementById('kontennya');
  var isLoading = sessionStorage.getItem('isLoading');
  
  //Cek Apakah Animasi Loading Sudah Di Tampilkan Sebelumnya
  if (isLoading) {
    loadingContainer.style.display = 'none';
    contentContainer.style.display = 'block';
    contentContainer.classList.add('fade-in');
  } else {
    sessionStorage.setItem('isLoading', true);
    setTimeout(function() {
      loadingContainer.style.display = 'none';
      contentContainer.style.display = 'block';
      contentContainer.classList.add('fade-in');
    },  2500);
  }
})

document.getElementById('myButton').addEventListener('click', function() {
  Swal.fire({
    title: 'Ini Adalah Key Login Anda!',
    text: '1cs0cs5cs3cs6csucs0cs_csacs5cs3cs6',
    icon: 'success',
    confirmButtonText: 'Copy'
  }).then((result) => {
    if (result.isConfirmed) {
      const textToCopy = '1cs0cs5cs3cs6csucs0cs_csacs5cs3cs6';
      const tempInput = document.createElement('input');
      tempInput.setAttribute('value', textToCopy);
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      Swal.fire({
        title: 'BERHASIL!',
        text: 'Key berhasil disalin ke papan klip.',
        icon: 'success'
      });
    }
  });
});