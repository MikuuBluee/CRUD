// Object
const siswa1 = {
    nama: "Rosa",
    jenisKelamin: "P",
    umur: 17,
    warnaFavorit: "kuning"
}

const siswa2 = {
    nama: "Ambar",
    jenisKelamin: "P",
    umur: 16,
    warnaFavorit: "merah"
}

const siswa3 = {
    nama: "Rizki",
    jenisKelamin: "L",
    umur: 16,
    warnaFavorit: "ungu"
}

const siswa4 = {
    nama: "Mila",
    jenisKelamin: "P",
    umur: 18,
    warnaFavorit: "biru"
}

const siswa5 = {
    nama: "Bagas",
    jenisKelamin: "L",
    umur: 15,
    warnaFavorit: "coklat"
}

// Object dalam array
const daftarSiswa = [
    {
        nama: "Rosa",
        jenisKelamin: "P",
        umur: 17,
        warnaFavorit: "Kuning"
    },
    {
        nama: "Ambar",
        jenisKelamin: "P",
        umur: 16,
        warnaFavorit: "Merah"
    },
    {
        nama: "Rizki",
        jenisKelamin: "L",
        umur: 16,
        warnaFavorit: "Hijau"
    },
    {
        nama: "Mila",
        jenisKelamin: "P",
        umur: 18,
        warnaFavorit: "Biru"
    },
    {
        nama: "Bagas",
        jenisKelamin: "L",
        umur: 15,
        warnaFavorit: "Coklat"
    },
    
]

let index = 'tambah'

// Arrow function

// Menampilkan siswa
const tampilkanSiswa = () => {
    const tblSiswa = document.getElementById('tblSiswa')
    tblSiswa.innerHTML = `<tr><th scope="row">No</th><th>Nama</th><th>JenKel</th><th>Umur</th><th>Warna</th><th>Action/Edit</th></tr>`

    for (let siswa in daftarSiswa){
        console.log(`${parseInt(siswa)+1}. ${daftarSiswa[siswa].nama} berjenis kelamin ${daftarSiswa[siswa].jenisKelamin}, berumur ${daftarSiswa[siswa].umur}, dan menyukai warna ${daftarSiswa[siswa].warnaFavorit}`)

        tblSiswa.innerHTML += `<tr><th scope="row">${parseInt(siswa)+1}</th><td>${daftarSiswa[siswa].nama}</td><td>${daftarSiswa[siswa].jenisKelamin}</td><td>${daftarSiswa[siswa].umur}</td><td>${daftarSiswa[siswa].warnaFavorit}</td><td><button type="button" class="btn btn-outline-danger" onclick="hapusSiswa('${daftarSiswa[siswa].nama}'), tampilkanSiswa()">Delete</button><button type="button" class="btn btn-outline-warning" onclick="editSiswa('${daftarSiswa[siswa].nama}')">Edit</button></td></tr>`
    }
}
tampilkanSiswa()

// Menambah siswa
const tambahSiswa = () => {
    // const nama = prompt('Masukkan Nama : ')
    // const jenisKelamin = prompt('Masukkan Jenis Kelamin (P/L) : ')
    // const age = parseInt(prompt('Masukkan Umur : '))
    // const warnaFavorit = prompt('Masukkan Warna Favorit : ')

    const nama = document.getElementById('nama').value
    const jenisKelamin = document.getElementById('jenKel').value
    const age = document.getElementById('umur').value
    const warnaFavorit = document.getElementById('wFavorit').value

    const siswaBaru = {
        nama: nama,
        jenisKelamin: jenisKelamin,
        umur: age,
        warnaFavorit: warnaFavorit
    }

    if (index === 'tambah'){
    daftarSiswa.push(siswaBaru)
    } else{
        daftarSiswa[index] = siswaBaru
    }
    tampilkanSiswa()

    // const tblSiswa = document.getElementById('tblSiswa')
    // tblSiswa.innerHTML += `<tr><th scope="row">${daftarSiswa.length}</th><td>${siswaBaru.nama}</td><td>${siswaBaru.jenisKelamin}</td><td>${siswaBaru.umur}</td><td>${siswaBaru.warnaFavorit}</td></tr>`

    document.getElementById('nama').value = ''
    document.getElementById('jenKel').value = ''
    document.getElementById('umur').value = ''
    document.getElementById('wFavorit').value = ''

    index = 'tambah'
}

// Cari index untuk menghapus siswa
const cariIndex = (nama) => {
    for (let i =  0; i < daftarSiswa.length; i++) {
        if (daftarSiswa[i].nama === nama) {
            return i
        }
    }
}

// Menghapus siswa
const hapusSiswa = (target) => {
    const indexDihapus = cariIndex(target)
    daftarSiswa.splice(indexDihapus, 1)
}

// Mengedit siswa
const editSiswa = (target) => {
    const indexEdit = cariIndex(target)

    console.log(target)
    console.log(indexEdit)

    console.log(daftarSiswa[indexEdit])

    const siswaDiedit = daftarSiswa[indexEdit]

     document.getElementById('nama').value = siswaDiedit.nama
     document.getElementById('jenKel').value = siswaDiedit.jenisKelamin
     document.getElementById('umur').value = siswaDiedit.umur
     document.getElementById('wFavorit').value = siswaDiedit.warnaFavorit

     index = indexEdit
    
    // const namaBaru = prompt('Masukkan Nama : ')
    // const jenisKelaminBaru = prompt('Masukkan Jenis Kelamin (P/L)')
    // const umurBaru = parseInt(prompt('Masukkan Umur : '))
    // const warnaFavoritBaru = prompt('Masukkan Warna Favorit : ')

    // daftarSiswa[indexEdit] = {
    //     nama : namaBaru,
    //     jenisKelamin : jenisKelaminBaru,
    //     umur : umurBaru,
    //     warnaFavorit : warnaFavoritBaru
    // }
}

const cancel = () => {
    index = 'tambah'
}