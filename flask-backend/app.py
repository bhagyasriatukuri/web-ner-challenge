from flask import Flask
from flask_cors import CORS
import spacy
from flask import request
import json

app = Flask(__name__)
ors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
nlp = spacy.load('en_core_web_sm')  


@app.route("/response",methods=['POST'])
def hello_world():
    
    
    data = json.loads(request.data)
    print(data['query'])
    # sentence = "The pilot, John Doe, flew over the United States in his airplane."
    sentence=data['query']
    
    doc = nlp(sentence)
    m={}
    for ent in doc.ents:
        m[ent.text] = ent.label_
    print(json.dumps(m))
    return json.dumps(m)

    