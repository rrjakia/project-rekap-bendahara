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
