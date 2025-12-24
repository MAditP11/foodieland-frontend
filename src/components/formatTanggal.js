export default function FormatTanggal(dateString) {
  const date = new Date(dateString)
  const bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]

  const hari = date.getDate()
  const bulanNama = bulan[date.getMonth()]
  const tahun = date.getFullYear()

  return `${hari} ${bulanNama} ${tahun}`
}
