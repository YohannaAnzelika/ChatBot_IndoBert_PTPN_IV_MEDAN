# 🤖 Agrobot PTPN IV – Intelligent Assistant for Enterprise Navigationi

Agrobot PTPN IV adalah asisten virtual berbasis chatbot yang dirancang untuk membantu pengguna dalam mencari informasi terkait sistem, dashboard, dan layanan internal yang tersedia di lingkungan PT Perkebunan Nusantara IV (PTPN IV). Proyek ini mengintegrasikan model NLP berbasis Neural Network sederhana dengan antarmuka frontend modern berbasis React.

---

## 📊 Tujuan Proyek

- Meningkatkan efisiensi pencarian informasi sistem dan aplikasi internal.

- Menyediakan antarmuka tanya-jawab otomatis berbasis intent.

- Menampilkan tautan dashboard atau sistem PTPN IV secara real-time.

---

## 🚀 Fitur Utama

- 🔍 Pencarian sistem dan dashboard PTPN IV berbasis keyword & fuzzy match

- 📎 Tampilkan link aktif dan deskripsi sistem

- 💬 UI modern dengan bubble chat & tampilan responsif

- 🧠 Model klasifikasi NLP menggunakan PyTorch

- 🌐 Integrasi CORS API untuk frontend-backend

---

## Backend

- Python 3.x
- Flask (REST API)
- PyTorch (Model NN klasifikasi intent)
- NLTK (Tokenisasi & Stemming)
- JSON (struktur data intent)

---

## Frontend

- React.js (Vite / CRA)
- TailwindCSS / CSS Modular (custom)
- Fetch API (integrasi ke Flask)

---

## 📂 Struktur Folder

```plaintext
coba-3/
├── backend/
│   ├── app.py                 # Flask API utama
│   ├── model.py               # Definisi NeuralNet
│   ├── save_model.py         # Training & penyimpanan model
│   ├── intents.json          # Dataset pattern & response intent
│   ├── utils.py              # Fungsi NLP: tokenize, stem, BOW
│   └── models/
│       └── model.pth         # Model hasil training
│
├── frontend2/
│   ├── public/               # Logo dan static asset
│   └── src/
│       ├── App.js            # Komponen chatbot utama
│       ├── App.css           # Styling responsif
│       ├── index.js          # Entry point React
```

---

## 🧠 Penjelasan Model AI

Model menggunakan feedforward neural network sederhana: - Input: representasi bag-of-words dari input teks

    - Hidden layers: 2 layer fully-connected dengan ReLU

    - Output: softmax dari label tag intents.json

    - Framework: PyTorch + NLTK preprocessing

---

## ⚙️ Cara Menjalankan Proyek

1. **Clone dan Install**

```bash
git clone https://github.com/your-org/agrobot-ptpn4.git
cd coba-3
```

2. **Setup Backend**

```bash
cd backend
pip install -r requirements.txt
python save_model.py   # Melatih model
python app.py          # Menjalankan API Flask
```

3. **Setup Frontend**

```bash
cd frontend2
npm install
npm run dev
```

---

## 🎨 Tampilan Chatbot

- UI clean dan mobile friendly
- Warna korporat PTPN IV (hijau)
- Mode sambutan awal + chat bubble interaktif
- Indikator typing & scroll behavior seperti ChatGPT

---

## 🧪 Validasi & Akurasi

- Model menggunakan threshold probabilitas ≥ 0.5
- Fallback menggunakan fuzzy matching (difflib) untuk toleransi typo
- Pembersihan input dilakukan via lowercase + stemming

---

## 📌 Contoh Pertanyaan yang Didukung

| Kata Kunci                   | Respon                          |
| ---------------------------- | ------------------------------- |
| `bibit`, `portal bibit`      | Link ke Portal Distribusi Bibit |
| `ims`, `mutu`, `sop`         | Link ke Sistem IMS Mutu         |
| `produksi`, `laporan harian` | Dashboard Produksi Harian       |
| `realiasi`, `cost`, `capex`  | Realisasi Anggaran              |
| `meeting`, `ruangan rapat`   | Sistem Booking Rapat            |
| `tanam ulang`, `replanting`  | Dashboard Replanting            |

---

##🧾 Lisensi & Kontribusi
Proyek ini dikembangkan sebagai bagian dari Kerja Praktik di PT Perkebunan Nusantara IV (Divisi Regional II), dan tidak ditujukan untuk komersialisasi. Hak cipta atas sistem-sistem internal tetap dimiliki oleh PTPN IV.

---

## 📎 Credit & Kontributor

Dikembangkan oleh Tim KP PTPN IV

Backend & AI: **Yohanna Anzelika (122140010)** - _Mahasiswa Informatika - Institut Teknologi Sumatera (ITERA)_

Frontend: **Yohanna Anzelika (122140010)** - _Mahasiswa Informatika - Institut Teknologi Sumatera (ITERA)_

Dibimbing oleh: **Heri Sanjaya Ginting** dan **Gabriel Christian PTPN 4 Medan**

---

- 📧 **Email:** [yohanna.122140010@student.itera.ac.id](mailto:yohanna.122140010@student.itera.ac.id)
- 💼 **LinkedIn:** [linkedin.com/in/yohanna-anzelika-sitepu-401578229](https://www.linkedin.com/in/yohanna-anzelika-sitepu-401578229/)
- 📸 **Instagram:** [@yohannalika](https://www.instagram.com/yohannalika/)
- 💻 **GitHub:** [@YohannaAnzelika](https://github.com/YohannaAnzelika)
