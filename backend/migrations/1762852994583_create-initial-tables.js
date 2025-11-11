/* eslint-disable camelcase */

exports.shorthands = undefined;

/**
 * @param {import('node-pg-migrate').MigrationBuilder} pgm
 */
exports.up = (pgm) => {
  // 1. Tabel Users
  pgm.createTable("users", {
    id: "id", // Auto-incrementing PRIMARY KEY
    email: { type: "varchar(255)", notNull: true, unique: true },
    full_name: { type: "varchar(255)" },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  // 2. Tabel Developer Journeys (Daftar Kelas)
  pgm.createTable("developer_journeys", {
    id: "id",
    journey_name: { type: "varchar(255)", notNull: true },
    description: { type: "text" },
  });

  // 3. Tabel Developer Journey Tutorials (Daftar Materi)
  pgm.createTable("developer_journey_tutorials", {
    id: "id",
    tutorial_name: { type: "varchar(255)", notNull: true },
    journey_id: {
      type: "integer",
      references: "\"developer_journeys\"",
      onDelete: "CASCADE",
    },
  });

  // 4. Tabel Developer Journey Trackings (Aktivitas Belajar)
  pgm.createTable("developer_journey_trackings", {
    id: "id",
    student_id: {
      type: "integer",
      notNull: true,
      references: "\"users\"",
      onDelete: "CASCADE",
    },
    tutorial_id: {
      type: "integer",
      notNull: true,
      references: "\"developer_journey_tutorials\"",
      onDelete: "CASCADE",
    },
    status: { type: "varchar(50)" },
    duration_seconds: { type: "integer" },
    tracked_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  // 5. Tabel Exam Registrations (Registrasi Kuis)
  pgm.createTable("exam_registrations", {
    id: "id",
    examinee_id: {
      type: "integer",
      notNull: true,
      references: "\"users\"",
      onDelete: "CASCADE",
    },
    tutorial_id: {
      type: "integer",
      notNull: true,
      references: "\"developer_journey_tutorials\"",
      onDelete: "CASCADE",
    },
    registered_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  // 6. Tabel Exam Results (Hasil Kuis)
  pgm.createTable("exam_results", {
    id: "id",
    registration_id: {
      type: "integer",
      references: "\"exam_registrations\"",
      onDelete: "CASCADE",
    },
    examinee_id: {
      type: "integer",
      notNull: true,
      references: "\"users\"",
      onDelete: "CASCADE",
    },
    score: { type: "real" },
    finished_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

/**
 * @param {import('node-pg-migrate').MigrationBuilder} pgm
 */
exports.down = (pgm) => {
  // Hapus dalam urutan terbalik
  pgm.dropTable("exam_results");
  pgm.dropTable("exam_registrations");
  pgm.dropTable("developer_journey_trackings");
  pgm.dropTable("developer_journey_tutorials");
  pgm.dropTable("developer_journeys");
  pgm.dropTable("users");
};
