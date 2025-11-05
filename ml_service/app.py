from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])
def read_root():
    return jsonify({"message": "Hello from ML Service API!"})

@app.route("/predict", methods=["POST"])
def predict():
    # Tim ML akan menambahkan logic di sini
    # data = request.json
    return jsonify({"prediction": "consistent_learner"})

if __name__ == "__main__":
    # Jalankan server Flask
    # host='0.0.0.0' penting agar bisa diakses Docker
    app.run(host="0.0.0.0", port=5000, debug=True)