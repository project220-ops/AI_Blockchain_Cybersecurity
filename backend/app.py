from flask import Flask, jsonify, request
from api.threat_detection import detect_threats
from api.secure_data import store_secure_data, retrieve_secure_data
from api.blockchain_service import record_event, fetch_event

app = Flask(__name__)

@app.route('/api/threats', methods=['GET'])
def get_threats():
    threats = detect_threats()
    return jsonify(threats)

@app.route('/api/secure-data', methods=['POST'])
def post_secure_data():
    data = request.json
    result = store_secure_data(data)
    record_event(data['key'], "Data securely stored in blockchain")
    return jsonify(result)

@app.route('/api/secure-data/<key>', methods=['GET'])
def get_secure_data(key):
    data = retrieve_secure_data(key)
    return jsonify(data)

@app.route('/api/blockchain/<key>', methods=['GET'])
def get_blockchain_event(key):
    event = fetch_event(key)
    return jsonify(event)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
