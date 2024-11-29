import numpy as np
from sklearn.ensemble import IsolationForest
import pickle

# Simulated example data for training
def generate_training_data():
    # Normal data
    normal_data = np.random.normal(loc=0.5, scale=0.1, size=(100, 5))
    # Anomalous data
    anomalous_data = np.random.uniform(low=0.0, high=1.0, size=(20, 5))
    return np.vstack([normal_data, anomalous_data]), [1] * 100 + [-1] * 20

# Train the Isolation Forest model
def train_isolation_forest():
    X, y = generate_training_data()
    model = IsolationForest(n_estimators=100, contamination=0.1, random_state=42)
    model.fit(X)
    return model

# Save the trained model to a file
def save_model(model, filename="ai_model.pkl"):
    with open(filename, "wb") as file:
        pickle.dump(model, file)
    print(f"Model saved to {filename}")

# Train and save the model
if __name__ == "__main__":
    model = train_isolation_forest()
    save_model(model)
