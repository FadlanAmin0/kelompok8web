// beranda.js (User)
window.onload = function() {
    // Ambil jadwal dari localStorage
    const scheduleList = JSON.parse(localStorage.getItem("jadwalSubuh")) || [];
    const scheduleTableBody = document.getElementById("scheduleTable").getElementsByTagName("tbody")[0];

    // Kosongkan tabel sebelum merender ulang
    scheduleTableBody.innerHTML = "";

    // Loop melalui jadwal dan tambahkan ke tabel
    scheduleList.forEach((schedule, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${schedule.tanggal}</td>
            <td>${schedule.masjid}</td>
            <td>${schedule.waktu}</td>
        `;
        scheduleTableBody.appendChild(row);
    });
};
