from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from ML Service API!"}

@app.post("/predict")
def predict():
    # TODO: Tim ML akan load model .pkl di sini
    # dan mengembalikan hasil prediksi
    return {"prediction": "consistent_learner"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)