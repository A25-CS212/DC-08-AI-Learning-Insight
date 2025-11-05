# Proyek Capstone: AI Learning Insight (Tim A25-CS212)

Selamat datang di repositori resmi untuk proyek Capstone tim **A25-CS212**. Repositori ini adalah pusat untuk semua kode sumber, dokumentasi, dan aset terkait proyek kita.

Tujuan dari proyek ini adalah merancang dan membangun fitur **"AI Learning Insight"**. Fitur ini akan menganalisis data aktivitas belajar siswa untuk menghasilkan wawasan (insight) yang dipersonalisasi guna mendukung progres belajar mereka.

---

## Tech Stack

Proyek ini menggunakan arsitektur _monorepo_ yang mengintegrasikan beberapa layanan:

- **Frontend:** Vite (React)
- **Backend:** Hapi.js (Node.js)
- **Machine Learning:** FastAPI (Python)
- **Database:** PostgreSQL
- **Environment:** Docker Compose

---

## System Requirements

Sebelum mulai, pastikan perangkat kamu telah memenuhi persyaratan berikut:

1.  **Git:** Diperlukan untuk kloning dan manajemen versi kode.
2.  **Docker Desktop:** Diperlukan untuk menjalankan lingkungan pengembangan.

> **Catatan:** Kamu **tidak perlu** menginstal Node.js, Python, atau PostgreSQL secara manual. Seluruh lingkungan telah dikelola sepenuhnya oleh Docker.

---

## Getting Started

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
- Salin konten di bawah ini ke dalam file `.env` kamu. Untuk mendapatkan `POSTGRES_PASSWORD`, silakan hubungi ketua tim.

```properties
# File ini berisi variabel lingkungan dan kredensial rahasia.
# JANGAN commit file ini ke repositori Git.

# Kredensial untuk Database PostgreSQL
POSTGRES_USER=a25_cs212
POSTGRES_PASSWORD= # Minta dari ketua tim
POSTGRES_DB=ai_learning_insight
```

### 3. Run The Environment

Gunakan perintah berikut untuk membangun dan menjalankan semua layanan.

```bash
docker-compose up -d
```

Perintah ini akan menjalankan semua kontainer di latar belakang. Proses inisialisasi pertama kali mungkin memerlukan waktu lebih lama.

---

## Service Verification

Setelah proses `docker-compose up` selesai, kamu dapat memverifikasi bahwa setiap layanan berjalan dengan mengakses URL berikut:

- **Frontend (React):** [http://localhost:5173](http://localhost:5173)
- **Backend (Hapi.js):** [http://localhost:8000](http://localhost:8000)
- **ML Service (FastAPI):** [http://localhost:5000/docs](http://localhost:5000/docs)
- **Database (Postgres):** Dapat diakses melalui klien database dengan konfigurasi:
  - **Host:** `localhost`
  - **Port:** `5433`
  - **User:** `a25_cs212`
  - **Password:** (Gunakan password dari ketua tim)
  - **Database:** `ai_learning_insight`

---

### Useful Docker Commands

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

### Running Specific Services

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
