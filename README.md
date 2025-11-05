<div align="center">

# AI Learning Insight

**Proyek Capstone Tim A25-CS212**

Platform berbasis AI yang menganalisis aktivitas belajar siswa untuk memberikan wawasan personal tentang pola belajar, rekomendasi konten, dan prediksi performa. Sistem ini membantu siswa memahami gaya belajar mereka dan mendapatkan panduan yang disesuaikan untuk meningkatkan hasil belajar.

</div>

---

## 👥 Team Members

| No  | Cohort ID   | Nama                                              | Role                      | GitHub                                             |
| --- | ----------- | ------------------------------------------------- | ------------------------- | -------------------------------------------------- |
| 1   | R014D5Y0809 | I Putu Arya Putra Raditya                         | Backend Developer         | [@dektu](https://github.com/dektu)                 |
| 2   | R014D5X1590 | Pyari Visvapujita Devi Dasi                       | Frontend Developer        | [@pyarivisva](https://github.com/pyarivisva)       |
| 3   | M014D5X0932 | Kadek Indri Anisa Putri                           | Machine Learning Engineer | [@indrianisaptr](https://github.com/indrianisaptr) |
| 4   | M014D5X0780 | I Gusti Ayu Tiksna Apsari                         | Machine Learning Engineer | [@tiksnaapsr](https://github.com/tiksnaapsr)       |
| 5   | R014D5Y0776 | I Gusti Agung Ngurah Lucien Yudistira Purnawarman | Fullstack Developer       | [@lucienthewizz](https://github.com/lucienthewizz) |

---

## 🛠️ Tech Stack

Proyek ini menggunakan arsitektur _monorepo_ yang mengintegrasikan beberapa layanan:

- **Frontend:** ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- **Backend:** ![Hapi.js](https://img.shields.io/badge/Hapi.js-F26D21?style=for-the-badge&logo=hapi&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

- **Machine Learning:** ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

- **Database:** ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

- **Environment:** ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 📋 System Requirements

Sebelum mulai, pastikan perangkat kamu telah memenuhi persyaratan berikut:

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker_Desktop-2496ED?style=for-the-badge&logo=docker&logoColor=white)

> **Catatan:** Kamu **tidak perlu** menginstal Node.js, Python, atau PostgreSQL secara manual. Seluruh lingkungan telah dikelola sepenuhnya oleh Docker.

---

## 🚀 Getting Started

Berikut adalah langkah-langkah untuk menjalankan seluruh aplikasi di lingkungan pengembangan lokal.

### 1. Clone Repository

Buka terminal dan jalankan perintah berikut untuk mengunduh kode sumber proyek.

```bash
git clone https://github.com/A25-CS212/DC-08-AI-Learning-Insight.git
cd DC-08-AI-Learning-Insight
```

### 2. Environment Configuration (`.env`)

Layanan kita memerlukan kredensial untuk terhubung ke database. Informasi ini harus disimpan dalam file `.env`.

- Buat file baru bernama `.env` di direktori root proyek.
- Salin konten di bawah ini ke dalam file `.env` kamu. Untuk mendapatkan `POSTGRES_PASSWORD`, silakan hubungi Fullstack Developer.

```properties
# File ini berisi variabel lingkungan dan kredensial rahasia.
# JANGAN commit file ini ke repositori Git.

# Kredensial untuk Database PostgreSQL
POSTGRES_USER=a25_cs212
POSTGRES_PASSWORD= # Minta dari Fullstack Developer
POSTGRES_DB=ai_learning_insight
```

### 3. Run The Environment

Gunakan perintah berikut untuk membangun dan menjalankan semua layanan.

```bash
docker-compose up -d
```

Perintah ini akan menjalankan semua kontainer di latar belakang. Proses inisialisasi pertama kali mungkin memerlukan waktu lebih lama.

---

## ✅ Service Verification

Setelah proses `docker-compose up` selesai, kamu dapat memverifikasi bahwa setiap layanan berjalan dengan mengakses URL berikut:

- **Frontend (React):** [http://localhost:5173](http://localhost:5173)
- **Backend (Hapi.js):** [http://localhost:8000](http://localhost:8000)
- **ML Service (FastAPI):** [http://localhost:5000/docs](http://localhost:5000/docs)
- **Database (Postgres):** Dapat diakses melalui klien database dengan konfigurasi:
  - **Host:** `localhost`
  - **Port:** `5433`
  - **User:** `a25_cs212`
  - **Password:** (Gunakan password dari Fullstack Developer)
  - **Database:** `ai_learning_insight`

---

## 🔧 Useful Docker Commands

- **Untuk menghentikan semua layanan:**
  ```bash
  docker-compose down
  ```
- **Untuk melihat log dari semua layanan:**
  ```bash
  docker-compose logs -f
  ```
- **Untuk melihat log dari satu layanan spesifik (contoh: `backend`):**
  ```bash
  docker-compose logs -f backend
  ```

---

## 🎯 Running Specific Services

Jika kamu hanya ingin menjalankan atau memperbarui satu layanan spesifik tanpa memengaruhi yang lain, kamu bisa menyebutkan nama layanannya. Ini sangat berguna jika kamu hanya membuat perubahan di satu bagian saja (misalnya, hanya di frontend).

- **Menjalankan hanya database:**
  ```bash
  docker-compose up -d db
  ```
- **Menjalankan hanya frontend:**
  ```bash
  docker-compose up -d frontend
  ```
- **Menjalankan hanya backend (dan database yang menjadi dependensinya):**
  ```bash
  docker-compose up -d backend
  ```
- **Menjalankan hanya layanan ML:**
  ```bash
  docker-compose up -d ml_service
  ```
