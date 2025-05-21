from flask import Flask, Blueprint, current_app, request,jsonify
from werkzeug.utils import secure_filename
import json, os

image_bp = Blueprint('images', __name__)

def load_db():
    with open(current_app.config['DATABASE_FILE']) as f:
        return json.load(f)
    
@image_bp.route('/images', methods=["GET"])
def get_images():
    db = load_db()
    return jsonify(db["image"])