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
