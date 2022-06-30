//https://teachablemachine.withgoogle.com/models/fbag0-d_r/
function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fbag0-d_r/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResult (error, results) {}