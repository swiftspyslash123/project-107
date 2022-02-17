https://teachablemachine.withgoogle.com/models/2YIdM5ou4/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2YIdM5ou4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}