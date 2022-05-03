#.\venv\Scripts\activate
from application import app
from flask_cors import CORS

cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}}) 

if __name__ == "__main__":
    app.run(debug=True)