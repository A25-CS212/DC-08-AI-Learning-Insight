# Gunakan image Python
FROM python:3.10-slim

# Set direktori kerja
WORKDIR /app

# Copy file requirements dan install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy semua kode aplikasi
COPY . .

# Perintah untuk menjalankan API saat container start
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000"]