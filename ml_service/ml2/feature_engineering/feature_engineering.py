import pandas as pd
import numpy as np


def compute_learning_speed(created_at_x, created_at_y):
    """
    Menghitung kecepatan belajar (jam) berdasarkan selisih waktu
    saat user mulai dan selesai.
    """
    t1 = pd.to_datetime(created_at_x, errors="coerce")
    t2 = pd.to_datetime(created_at_y, errors="coerce")

    if pd.isna(t1) or pd.isna(t2):
        return np.nan

    return (t2 - t1).total_seconds() / 3600


def compute_consistency_score(exam_scores):
    """Menghitung stabilitas nilai ujian user (semakin kecil → semakin konsisten)."""
    if not exam_scores:
        return np.nan
    return float(np.std(exam_scores))


def compute_persistence_score(exam_count):
    """Jumlah ujian yang pernah diikuti user."""
    if exam_count is None:
        return np.nan
    return float(exam_count)


def compute_activity_score(activity_count):
    """Jumlah aktivitas user dalam platform."""
    if activity_count is None:
        return np.nan
    return float(activity_count)


def compute_completion_score(completion_count):
    """Jumlah journey materi yang sudah diselesaikan user."""
    if completion_count is None:
        return np.nan
    return float(completion_count)


def prepare_features(user_input: dict):
    """
    Mengubah input JSON menjadi DataFrame 1 baris berisi fitur final.

    Struktur input didasarkan pada dataset hasil EDA ML1.
    """

    df = pd.DataFrame([{
        "user_id": user_input.get("user_id"),

        "learning_speed": compute_learning_speed(
            user_input.get("created_at_x"),
            user_input.get("created_at_y")
        ),

        "consistency_score": compute_consistency_score(
            user_input.get("exam_scores")
        ),

        "persistence_score": compute_persistence_score(
            user_input.get("exam_count")
        ),

        "activity_score": compute_activity_score(
            user_input.get("activity_count")
        ),

        "completion_score": compute_completion_score(
            user_input.get("completion_count")
        ),
    }])

    return df
