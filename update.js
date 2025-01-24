// update.js (Admin)
document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const tanggal = document.getElementById("tanggal").value;
    const masjid = document.getElementById("masjid").value;
    const waktu = document.getElementById("waktu").value;

    // Buat objek jadwal baru
    const newSchedule = {
        tanggal: tanggal,
        masjid: masjid,
        waktu: waktu
    };

    // Ambil jadwal yang sudah ada di localStorage atau buat array kosong
    const scheduleList = JSON.parse(localStorage.getItem("jadwalSubuh")) || [];

    // Tambahkan jadwal baru ke dalam array
    scheduleList.push(newSchedule);

    // Simpan array jadwal ke localStorage
    localStorage.setItem("jadwalSubuh", JSON.stringify(scheduleList));

    // Tampilkan jadwal yang telah diperbarui
    displaySchedules();

    // Konfirmasi perubahan
    const updateMessage = document.getElementById("updateMessage");
    updateMessage.textContent = "Jadwal berhasil diperbarui!";
    updateMessage.classList.remove("hidden");

    // Reset form
    document.getElementById("updateForm").reset();
});

// Fungsi untuk menampilkan jadwal
function displaySchedules() {
    const scheduleList = JSON.parse(localStorage.getItem("jadwalSubuh")) || [];
    const scheduleContainer = document.getElementById("scheduleList");

    // Kosongkan list sebelum merender ulang
    scheduleContainer.innerHTML = "";

    // Loop melalui setiap jadwal dan tampilkan
    scheduleList.forEach((schedule, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${schedule.tanggal} - ${schedule.masjid} - ${schedule.waktu}`;

        // Buat tombol delete
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.addEventListener("click", () => deleteSchedule(index));

        listItem.appendChild(deleteButton);
        scheduleContainer.appendChild(listItem);
    });
}

// Fungsi untuk menghapus jadwal
function deleteSchedule(index) {
    const scheduleList = JSON.parse(localStorage.getItem("jadwalSubuh")) || [];
    scheduleList.splice(index, 1); // Hapus jadwal pada index yang dipilih

    // Simpan daftar jadwal yang sudah diperbarui
    localStorage.setItem("jadwalSubuh", JSON.stringify(scheduleList));

    // Tampilkan kembali jadwal setelah penghapusan
    displaySchedules();
}

// Tampilkan jadwal pada saat halaman dimuat
window.onload = displaySchedules;
