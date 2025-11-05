FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
# Ini sekarang akan meng-install 'Flask'
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# ⬇️ PERUBAHAN DI SINI ⬇️
# Ini adalah command default baru untuk Flask.
# (Walaupun akan di-override oleh '--debug' di docker-compose.yml)
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]