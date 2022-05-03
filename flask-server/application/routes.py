from application import app
from flask import request
import numpy as np
import joblib

@app.route('/predict',methods = ['POST'])
def predict():
    model = joblib.load('classifyDisease.pkl')
    feature=np.zeros(132)
    arr = request.get_json()
    for i in arr['data']:
        feature[i]=1.0
    feature=feature.reshape(1,-1)
    pred=model.predict(feature)
    
    return {"prediction":pred[0]}
