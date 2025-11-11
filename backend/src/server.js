"use strict";

const Hapi = require("@hapi/hapi");
// 1. Impor 'Client' dari 'pg' (driver postgres)
const { Client } = require("pg");

// 2. Buat fungsi untuk tes koneksi DB
const testDbConnection = async () => {
  try {
    // 3. Buat klien baru.
    // 'process.env.DATABASE_URL' secara otomatis dibaca dari .env oleh Docker Compose
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });

    // 4. Coba sambungkan
    await client.connect();

    // 5. Jalankan kueri tes
    const res = await client.query("SELECT NOW()");
    console.log("✅ Berhasil terhubung ke Database:", res.rows[0].now);

    // 6. Tutup koneksi
    await client.end();
  } catch (err) {
    console.error("❌ GAGAL terhubung ke Database:", err.message);
    process.exit(1); // Keluar jika DB gagal terhubung
  }
};

const init = async () => {
  // ⬇️ 7. Jalankan tes koneksi DB SEBELUM server Hapi dimulai
  await testDbConnection();

  const server = Hapi.server({
    port: 8000,
    host: "0.0.0.0",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: () => {
      return { message: "Hello from Hapi.js Backend!" };
    },
  });

  await server.start();
  console.log("Server Hapi.js berjalan di %s", server.info.uri);
};

init();
