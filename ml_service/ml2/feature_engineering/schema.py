from pydantic import BaseModel
from typing import List, Optional, Dict

# INPUT SCHEMA (from backend)

class WeeklyMetric(BaseModel):
    week: int
    exam_scores: List[float]
    exam_count: int
    activity_count: int
    completion_count: int


class LearningStyleInput(BaseModel):
    user_id: int
    # dua minggu data untuk perbandingan progress
    previous_week: WeeklyMetric
    current_week: WeeklyMetric



# OUTPUT SCHEMA 

class ProgressComparison(BaseModel):
    exam_improvement: float          # perubahan nilai rata-rata
    activity_improvement: float      # perubahan aktivitas
    completion_improvement: float    # perubahan penyelesaian


class LearningStyleOutput(BaseModel):
    label: str                       
    probabilities: Dict[str, float]  
    metrics_current_week: Dict[str, float]  # untuk radar chart
    progress: ProgressComparison     # untuk laporan mingguan
    feedback: str                    # saran berdasarkan gaya belajar
