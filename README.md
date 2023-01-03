![komputapedia logo](/static/favicon.png)

# Komputapedia (Antarmuka)

Status: Pengembangan Awal

Sebuah inisiatif untuk menyediakan ensiklopedia ilmu komputasi berbahasa Indonesia yang terbuka dan gotong royong.
Proyek ini bertujuan untuk mendemokratisasi wawasan dan menyusun bacaan umum tentang ilmu komputasi.

## 🚀 Cara menjalankan kode ini

Kode ini sebagian besar didominasi oleh bahasa Svelte yang bergantung pada ekosistem javascript, maka perlu menginstall
runtime javascript seperti Git, Node JS dan install paket manajer pnpm.

1. Klon repositori ini dengan perintah berikut: `git clone --recurse-submodules https://github.com/komputapedia/antarmuka`
2. Lalu jalankan perintah `pnpm install` pada konsole yang berlokasi didalam folder hasil klon.
3. Setelah pemasangan ketergantungan selesai, jalankan `pnpm dev` untuk menjalankan situs dalam mode pengembang.
4. Jika kamu ingin berkontribusi pastikan apa yang kamu bikin, di test dengan *preview production* (`pnpm build && pnpm preview`).

### Pembaharuan Ensiklopedia

Perbaharui konten ensiklopedia dapat dilakukan tanpa mengubah basis kode menggunakan perintah : `git submodule update --remote src/content`.

## 🔰 Kontribusi

Panduan sedang dalam proses pembuatan.

## 🤝 Kode etik perilaku (_Code of Conduct_)

[Ikrar Kode Etik Kontributor](./CODE_OF_CONDUCT.md)

## 🪪 Lisensi

```
Copyright (C) 2022 Komputapedia and contributors.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

Komputapedia mengadopsi lisensi GNU GPL versi 3.
