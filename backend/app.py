from flask import Flask, request, jsonify
from util import preprocess_text, ocr_extract_text, resize_normalize_image
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
# Helper Functions
def allowed_files(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Endpoint to handle image upload and return processed text and image tensor shape
@app.route('/process_predict', methods=['POST'])
def process_predict():
    # Check if the post request has the file part
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400
    
    image = request.files['image']

    # Empty file validation
    if image.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # File type validation
    if not allowed_files(image.filename):
        return jsonify({"error": "File type not allowed"}), 400
    
    os.makedirs("image_test", exist_ok=True)
    image_path = f"image_test/temp_{image.filename}"
    image.save(image_path)
    text, preprocess_txt = ocr_extract_text(image_path)
    preprocess_image= resize_normalize_image(image_path)
    return jsonify({
        "status": "success",
        "message": "Image processed successfully",
        "data": {
            "image_path": image_path,
            "text": text,
            "preprocessed_text": preprocess_txt,
            "image_tensor_shape": list(preprocess_image.shape)
        }
    }), 201

if __name__ == '__main__':
    app.run(debug=True, port=5001)
