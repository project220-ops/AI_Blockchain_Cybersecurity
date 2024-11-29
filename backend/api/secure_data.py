database = {}

def store_secure_data(data):
    key = data.get('key')
    value = data.get('value')
    database[key] = value
    return {"status": "success", "message": f"Data stored under key '{key}'."}

def retrieve_secure_data(key):
    value = database.get(key, None)
    if value is None:
        return {"status": "error", "message": f"No data found for key '{key}'."}
    return {"status": "success", "key": key, "value": value}
