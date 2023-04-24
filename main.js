Webcam.set({
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90
});

camera=document.getElementById("camera")
Webcam.attach("#camera")
function takeSnapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="imagem_Capturada" src="'+data_uri+'">'
  })
}
console.log("versão ml5: ",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qd4rSpm12/model.json",modelload)
function modelload(){
  console.log("modelo carregado")
}
function check(){
  img=document.getElementById("imagem_Capturada")
  classifier.classify(img,gotResult)
}
function gotResult(error,results){
if(error){
  console.error(error)
}else{
  console.log(results)
  document.getElementById("resultObjectName").innerHTML=results[0].label
  precisao=results[0].confidence *100
  document.getElementById("resultObjectAccuracy").innerHTML=precisao.toFixed(2)
}
}