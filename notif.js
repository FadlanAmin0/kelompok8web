document.addEventListener("DOMContentLoaded", function () {
    const hapusButtons = document.querySelectorAll(".hapus-btn");
  
    hapusButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Menampilkan pop-up konfirmasi
        const isConfirmed = confirm("Apakah Anda yakin ingin menghapus notifikasi ini?");
        if (isConfirmed) {
          // Menghapus elemen notifikasi dari DOM
          const listItem = button.closest(".notifikasi-item");
          if (listItem) {
            listItem.remove();
          }
        }
      });
    });
  });