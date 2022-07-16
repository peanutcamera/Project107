function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-GnSdz2-U/model.json', {probabilityThreshold: 0.7}, modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log('Got Results');
}