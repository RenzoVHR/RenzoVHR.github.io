from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route("/")
def index():

    return "ok geok"

# API GATEWAY
@app.route("/api/currency/latest")
def api_currency_lattest():
    try:
        with open("data.json") as file:
            data = json.load(file)
    except:
        return jsonify({
            "status" : False
        })
    else:
        response = jsonify(data)
        response.headers.add('Access-Control-Allow-Origin', "*")
        return response

app.run(debug=True)