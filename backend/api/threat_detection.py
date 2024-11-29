import random

def detect_threats():
    # Simulated AI-based threat detection
    threats = [
        {"id": 1, "type": "Suspicious login attempt", "severity": random.choice(["Low", "Medium", "High"])},
        {"id": 2, "type": "Data anomaly detected", "severity": random.choice(["Low", "Medium", "High"])},
    ]
    return threats
