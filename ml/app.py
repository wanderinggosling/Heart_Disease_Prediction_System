from flask import Flask, request, jsonify
# import pandas as pd
# import numpy as np
import joblib
from flask_cors import CORS

model = joblib.load('model.pkl')

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([list(data.values())])
    output = prediction[0]
    if output == 0:
        return jsonify({'output':False,'result': 'The person does not have heart disease.'})
    else:
        return jsonify({'output':True,'result': 'The person has heart disease.'})
    
@app.route("/")
def home():
    return "Hello, Flask!"