import pickle
import numpy as np

# Load the trained model
def load_model(filename="ai_model.pkl"):
    with open(filename, "rb") as file:
        model = pickle.load(file)
    return model

ai_model = load_model()

# Predict anomalies using the loaded model
def predict_anomaly(input_data):
    input_data = np.array(input_data).reshape(1, -1)
    prediction = ai_model.predict(input_data)
    return "Anomaly" if prediction[0] == -1 else "Normal"
