// bintang

let dataTransaksi = [];

function tambahTransaksi(tanggal, jenis, keterangan, jumlah) {
  const transaksiBaru = {
    tanggal,
    jenis, 
    keterangan,
    jumlah
  };

  dataTransaksi.push(transaksiBaru);
  console.log("\n Transaksi berhasil ditambahkan!\n");
}

// andi

function tampilkanData(data = dataTransaksi) {
  console.log("\n=== DAFTAR TRANSAKSI ===");

  if (data.length === 0) {
    console.log("Belum ada transaksi.");
    return;
  }

  data.forEach((item, index) => {
    console.log(`
No         : ${index + 1}
Tanggal    : ${item.tanggal}
Jenis      : ${item.jenis}
Keterangan : ${item.keterangan}
Jumlah     : Rp ${item.jumlah.toLocaleString("id-ID")}
---------------------------------------`);
  });
}

// rahma

function cariTransaksi(keyword) {
  const hasilCari = dataTransaksi.filter(item =>
    item.tanggal.includes(keyword) ||
    item.keterangan.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(`\n=== HASIL PENCARIAN: "${keyword}" ===`);
  if (hasilCari.length === 0) {
    console.log("Tidak ada data yang cocok.");
  } else {
    tampilkanData(hasilCari);
  }
}

function urutkanTransaksi(urutan) {
  let dataCopy = [...dataTransaksi];

  if (urutan === 1) {
    dataCopy.sort((a, b) => b.jumlah - a.jumlah);
  } else if (urutan === 2) {
    dataCopy.sort((a, b) => a.jumlah - b.jumlah);
  } else {
    console.log("Pilihan tidak valid!");
    return;
  }

  console.log("\n=== HASIL SORTING ===");
  tampilkanData(dataCopy);
}

// semua

const prompt = require("prompt-sync")({ sigint: true });

while (true) {
  console.log(`
====== MENU ======
1. Tambah Transaksi
2. Tampilkan Semua Transaksi
3. Cari Transaksi
4. Urutkan Transaksi
5. Lihat Saldo
0. Keluar
`);

  const pilih = prompt("Pilih menu: ");

  if (pilih === "1") {
    console.log("\n=== TAMBAH TRANSAKSI ===");

    const tanggal = prompt("Tanggal (hari - bulan - tahun): ");
    const jenisInput = prompt("Jenis (1. Pemasukan, 2. Pengeluaran): ");
    const jenis = jenisInput === "1" ? "Pemasukan" : "Pengeluaran";
    const keterangan = prompt("Keterangan: ");
    const jumlah = Number(prompt("Jumlah (Rp): "));

    tambahTransaksi(tanggal, jenis, keterangan, jumlah);
  }

  else if (pilih === "2") tampilkanData();

  else if (pilih === "3") {
    const keyword = prompt("Masukkan kata kunci pencarian: ");
    cariTransaksi(keyword);
  }

  else if (pilih === "4") {
    console.log("\n1. Jumlah terbesar - terkecil");
    console.log("2. Jumlah terkecil - terbesar");
    const jenisSort = Number(prompt("Pilih urutan: "));
    urutkanTransaksi(jenisSort);
  }

  else if (pilih === "5") hitungSaldo();

  else if (pilih === "0") {
    console.log("\nKeluar dari program...");
    break;
  }

  else console.log("Menu tidak valid, coba lagi!");
}
