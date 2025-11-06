let dataTransaksi = [];

function tambahTransaksi(tanggal, jenis, keterangan, jumlah) {
  const transaksiBaru = {
    tanggal: tanggal,
    jenis: jenis,
    keterangan: keterangan,
    jumlah: jumlah
  };

  dataTransaksi.push(transaksiBaru);

  console.log('Transaksi berhasil ditambahkan:', transaksiBaru);
  console.log('Daftar Transaksi Saat Ini:', dataTransaksi);
}

console.log('Data Transaksi Awal:', dataTransaksi
function tampilkanData(data = dataTransaksi) {
    console.log("=== DAFTAR TRANSAKSI ===");
  
    if (data.length === 0) {
      console.log("Belum ada data transaksi.");
      return;
    }
  
    data.forEach((item, index) => {
      console.log(
        `${index + 1}. Tanggal: ${item.tanggal}, ` +
        `Jenis: ${item.jenis || "-"}, ` +
        `Keterangan: ${item.keterangan}, ` +
        Jumlah: Rp${item.jumlah}
      );
    });
  
    console.log("========================");
  }

  function tampilkanData() {
  console.log("\n=== DAFTAR TRANSAKSI ===");

  if (dataTransaksi.length === 0) {
    console.log("Belum ada transaksi yang tersimpan.");
    return; 
  }

  dataTransaksi.forEach((item, index) => {
    console.log(`
No         : ${index + 1}
Tanggal    : ${item.tanggal}
Jenis      : ${item.jenis}
Keterangan : ${item.keterangan}
Jumlah     : Rp ${item.jumlah}
-------------------------------`);
  });
}
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

let transaksi = [];

function tambahTransaksi(keterangan, jumlah, tipe) {
  if (!keterangan || jumlah <= 0 || (tipe !== "pemasukan" && tipe !== "pengeluaran")) {
    console.log(" Data tidak valid! Masukkan keterangan, jumlah > 0, dan tipe yang benar.");
    return;
  }

  transaksi.push({ keterangan, jumlah, tipe });
  console.log(` Transaksi '${keterangan}' (${tipe}) sebesar Rp${jumlah.toLocaleString('id-ID')} berhasil ditambahkan.`);

  hitungSaldo();
  let totalPemasukan = 0;
  let totalPengeluaran = 0;

  for (let t of transaksi) {
    if (t.tipe === "pemasukan") totalPemasukan += t.jumlah;
    else totalPengeluaran += t.jumlah;
  }

  const saldoAkhir = totalPemasukan - totalPengeluaran;

  console.log("\n=== Rekap Keuangan ===");
  console.log("Total Pemasukan  : Rp" + totalPemasukan.toLocaleString('id-ID'));
  console.log("Total Pengeluaran: Rp" + totalPengeluaran.toLocaleString('id-ID'));
  console.log("----------------------------");
  console.log("Saldo Akhir      : Rp" + saldoAkhir.toLocaleString('id-ID'));
  console.log("============================\n");
}



