from flask import Flask, request, jsonify
import joblib
import pandas as pd
from tensorflow.keras.models import load_model
from flask_cors import CORS, cross_origin
from sklearn.metrics import classification_report
import io

app = Flask(__name__)
CORS(app, support_credentials=True)


# Load the saved model
# try:
models={
        'xgb':joblib.load('xgb.pkl'),
        'svm':joblib.load('svm.pkl'),
        'randomForest':joblib.load('randomforest.pkl'),
        'naiveBayes':joblib.load('naivebayes.pkl'),
        'logisticRegression':joblib.load('logisticregression.pkl'),
        'knn':joblib.load('knn.pkl'),
        'gradientBoosting':joblib.load('gradientboosting.pkl'),
        'decisionTree':joblib.load('decisiontree.pkl'),
        'ann':load_model('ann.h5')
    }
# except Exception as e:
#     print("Error loading models:", e)

@app.route('/predict/<model_name>', methods=['POST'])
@cross_origin(supports_credentials=True)
def predict(model_name):
    if model_name not in models:
        return jsonify({'error': 'Model not found'}), 404

    model = models[model_name]

    try:
        data = request.get_json(force=True)
        print(pd.DataFrame.from_dict(data))
        # features = data.get('features')
        # if features is None:
        #     return jsonify({'error': 'Features not provided'}), 400
        prediction = model.predict(pd.DataFrame.from_dict(data))  # Assuming 'features' is the key for input features
        print('\n',prediction)
        return jsonify(prediction.tolist())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/accuracy/<model_name>', methods=['POST'])
@cross_origin(supports_credentials=True)
def accuracy(model_name):
    print(model_name)
    if model_name not in models:
        return jsonify({'error': 'Model not found'}), 404

    model = models[model_name]

    try:
        jsonData = request.get_json(force=True)
        data = pd.DataFrame.from_dict(jsonData)
        print(data)
        X = data.iloc[:, :-1]  # Input features (1st 20 columns)
        y = data.iloc[:, -1]   # Output feature (21st column)
        # features = data.get('features')
        # if features is None:
        #     return jsonify({'error': 'Features not provided'}), 400
        accuracy = classification_report(model.predict(pd.DataFrame.from_dict(X)),y)  # Assuming 'features' is the key for input features
        print('\n',accuracy)
        # return jsonify(prediction.tolist())
        return jsonify(modelName=model_name,data=accuracy)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/dataset/<model_name>', methods=['POST'])
@cross_origin(supports_credentials=True)
def dataset(model_name):
    if 'file' not in request.files:
        return 'No file part'
    if model_name not in models:
        return jsonify({'error': 'Model not found'}), 404

    model = models[model_name]

    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    # Read the CSV data from the request
    csv_data = file.read().decode('utf-8')

    # Convert CSV data to Pandas DataFrame
    data = pd.read_csv(io.StringIO(csv_data))
    X = data.iloc[:, :-1]  # Input features (1st 20 columns)
    y = data.iloc[:, -1]

    datasetPred = model.predict(X) # Assuming 'features' is the key for input features
    accuracy = classification_report(datasetPred,y)

    ones_count = sum(1 for num in datasetPred if num == 1)
    zeroes_count = sum(1 for num in datasetPred if num == 0)
    # print('\n',datasetPred)
    return jsonify(ones=ones_count,zeroes=zeroes_count,accuracy=accuracy)

    # Now you have a Pandas DataFrame `df` that you can use for processing or prediction
    # Example: return the DataFrame as JSON
    return jsonify()
    
if __name__ == '__main__':
    app.run(port=5000)