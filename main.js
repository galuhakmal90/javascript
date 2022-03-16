console.log("hello bro")
const namaPanjang = "galuh akmal yudistira wibowo";
const umur = 21;
const tujuanHidup = "ingin menjadi orang sukses dunia kahirat";
console.log(`halo, namaku ${namaPanjang}, aku berusia ${umur}, aku memiliki tujuan hidup ${tujuanHidup}`);

const jikaAkuSukses = true;
const jikaAkuGagal = false;
let nilaiUjianMatematika = 100;
nilaiUjianMatematika = 90;

const ktp = {
  nama: "windah basudara",
  alamat: {
      jalan: "Jl. bocil kematian",
      "rt/rw": "01/09"
  },
  pekerjaan: [
      "youtuber",
      "streamer"
  ]
};

console.log(ktp.nama)
console.log(ktp["alamat"]["rt/rw"])
console.log(ktp.alamat["rt/rw"])


ktp.pekerjaan.forEach(function(item) {
  console.log(`${item} adalah pekerjaan ${ktp.nama}`)
})

const namaKeluarga = ["lina", "devina", "eka"];

const namaKartuKeluarga = [
  "lina",
  "devina",
  "eka"
];

const namaKK = new Array("lina", "devina", "eka");
console.log(namaKeluarga)
console.log(namaKartuKeluarga.length)

const arrays = [namaKeluarga, namaKartuKeluarga]
console.log(arrays)

const fruits = ["appple", "melon", "guava"]
fruits.push("buahpakmu")
console.log(fruits)

const merkMobil = ["toyota", "subaru", "mitsubishi"]
merkMobil.pop("esemka")
console.log(merkMobil)

