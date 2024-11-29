blockchain_ledger = {}

def record_event(key, event):
    blockchain_ledger[key] = event
    return {"status": "success", "message": f"Event recorded for key '{key}'."}

def fetch_event(key):
    event = blockchain_ledger.get(key, None)
    if event is None:
        return {"status": "error", "message": f"No event found for key '{key}'."}
    return {"status": "success", "key": key, "event": event}
