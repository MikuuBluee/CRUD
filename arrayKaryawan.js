// Data Karyawan
const daftarKaryawan = [
    {
        nama : 'Devyn Ramirez',
        NIK : 1011,
        masaKerja : 10,
        gaji : 7000000
    },
    {
        nama : 'Harmony Duncan',
        NIK : 1122,
        masaKerja : 5,
        gaji : 4000000
    },
    {
        nama : 'Clarissa Burgess',
        NIK : 1233,
        masaKerja : 8,
        gaji : 7000000
    },
    {
        nama : 'Reilly Blanchard',
        NIK : 1344,
        masaKerja : 7,
        gaji : 7000000
    },
    {
        nama : 'Zion Brooks',
        NIK : 1455,
        masaKerja : 4,
        gaji : 4000000
    },
    {
        nama : 'Jovanny Mays',
        NIK : 1566,
        masaKerja : 10,
        gaji : 7000000
    },
    {
        nama : 'Cindy Chase',
        NIK : 1677,
        masaKerja : 9,
        gaji : 7000000
    },
    {
        nama : 'Kristin Mcdaniel',
        NIK : 1788,
        masaKerja : 8,
        gaji : 7000000
    },
    {
        nama : 'Macey Sanford',
        NIK : 1899,
        masaKerja : 7,
        gaji : 7000000
    },
    {
        nama : 'Alfredo Faulkner',
        NIK : 1900,
        masaKerja : 10,
        gaji : 7000000
    }
]

let index = 'tambah'

// Menampilkan data karyawan
const tampilkanKaryawan = () => {
    // const daftarKaryawan = JSON.parse(localStorage.getItem('daftarKaryawan'))
    const tblKaryawan = document.getElementById('tblKaryawan');
    tblKaryawan.innerHTML = `<tr><th scope="row">No</th><th>Nama</th><th>NIK</th><th>Masa Kerja</th><th>Gaji</th><th>Delete/Edit</th></tr>`

    for (let karyawan in daftarKaryawan) {
        console.log(`${parseInt(karyawan)+1}. Nama : ${daftarKaryawan[karyawan].nama}, NIK : ${daftarKaryawan[karyawan].NIK}, Masa Kerja : ${daftarKaryawan[karyawan].masaKerja}, Gaji : ${daftarKaryawan[karyawan].gaji}`)

        tblKaryawan.innerHTML += `<tr><th scope="row">${parseInt(karyawan)+1}</th><td>${daftarKaryawan[karyawan].nama}</td><td>${daftarKaryawan[karyawan].NIK}</td><td>${daftarKaryawan[karyawan].masaKerja} Tahun</td><td>${daftarKaryawan[karyawan].gaji}</td><td><button type="button" class="btn btn-outline-danger" onclick="hapusKaryawan('${daftarKaryawan[karyawan].nama}'), tampilkanKaryawan()">Delete</button><button type="button" class="btn btn-outline-warning" onclick="editKaryawan('${daftarKaryawan[karyawan].nama}')">Edit</button></td></tr>`
    }
}
tampilkanKaryawan()

// Menambah data karyawan
const tambahKaryawan = () => {
    const nama = document.getElementById('nama').value
    const NIK = document.getElementById('nik').value
    const masaKerja = document.getElementById('masaKerja').value
    if (masaKerja < 6) {
        gaji  = 4000000
    } else if (masaKerja > 6) {
        gaji = 7000000
    }

    // let daftarKaryawan = JSON.parse(localStorage.getItem('daftarKaryawan'))

    const karyawanBaru = {
        nama : nama,
        NIK : NIK,
        masaKerja : masaKerja,
        gaji : gaji
    }

    if (index === 'tambah'){
        daftarKaryawan.push(karyawanBaru)
    } else {
        daftarKaryawan[index] = karyawanBaru
    }

    // localStorage.setItem('daftarKaryawan', JSON.stringify(daftarKaryawan))

    tampilkanKaryawan()

    document.getElementById('nama').value = ''
    document.getElementById('nik').value = ''
    document.getElementById('masaKerja').value = ''

    index = 'tambah'
}

// Mencari index
const cariSasaran = (nama) => {
    for (let i = 0; i < daftarKaryawan.length; i++) {
        if (daftarKaryawan[i].nama === nama) {
            return i
        }
    }
}

// Menghapus karyawan berdasarkan index yang ditentukan
const hapusKaryawan = (sasaran) => {
    const sasaranDihapus = cariSasaran(sasaran)
    console.log(sasaranDihapus)
    daftarKaryawan.splice(sasaranDihapus, 1)
}

// Mengedit Karyawan
const editKaryawan = (sasaran) => {
    const sasaranEdit = cariSasaran(sasaran)
    console.log(sasaran)
    console.log(sasaranEdit)
    console.log(daftarKaryawan[sasaranEdit])
    
    const karyawanDiedit = daftarKaryawan[sasaranEdit]
    document.getElementById('nama').value = karyawanDiedit.nama
    document.getElementById('nik').value = karyawanDiedit.NIK
    document.getElementById('masaKerja').value = karyawanDiedit.masaKerja

    index = sasaranEdit
    

    // const namaKaryawanBaru = prompt('Masukkan  nama karyawan : ')
    // const NIKKaryawanBaru = parseInt(prompt('Masukkan NIK karyawan : '))
    // const masaKerjaKaryawanBaru = parseInt(prompt('Masukkan masa kerja karyawan : '))
    // if (masaKerjaKaryawanBaru < 6) {
    //     gaji  = 4000000
    // }  else if (masaKerjaKaryawanBaru > 6) {
    //     gaji = 7000000
    // }

    // daftarKaryawan[sasaranEdit] = {
    //     nama : namaKaryawanBaru,
    //     NIK : NIKKaryawanBaru,
    //     masaKerja : masaKerjaKaryawanBaru,
    //     gaji : gaji
    // }
}

const cancel = () => {
    index = 'tambah'
}