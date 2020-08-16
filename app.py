from flask import Flask, url_for, redirect, render_template, request

from dotenv import load_dotenv
load_dotenv()
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run()    


