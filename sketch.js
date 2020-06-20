var father,popper,sound,bg;
var count,button,input;
var input2,input3,input4,input5,input6,input7,input8,input9,
    input10;
var ans,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9;
count = 0;
function preload(){
  father = loadImage("father.jpeg");
  popper=loadImage("popper.gif");
  bg = loadImage("bg.jpg");
  button = createButton("SUBMIT");
  button.hide();
  input = createInput("ANS1");
  input.hide();
  input2 = createInput("ANS2");
  input2.hide();
  input3 = createInput("ANS3");
  input3.hide();
  input4 = createInput("ANS4");
  input4.hide();
  input5 = createInput("ANS5");
  input5.hide();
  input6 = createInput("ANS6");
  input6.hide();
  input7 = createInput("ANS7");
  input7.hide();
  input8 = createInput("ANS8");
  input8.hide();
  input9 = createInput("ANS9");
  input9.hide();
  input10 = createInput("ANS10");
  input10.hide();
}



function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(247,216,170);
  
  if(count===0){
  image(father,0,0,500,500);
  }
  if(count===1){
    image(popper,50,50,500,500);
    textFont("zapfino");
    textSize("55");
    fill(0);
    text("check how much you know about your father",50,250);
    text("THIS FATHER'S DAY!!!",70,280);   
  }
  if(count===2){
  image(bg,0,0,500,500);
    textFont("zapfino")
    textSize(20);
    fill(255);
    text("Whats your dads favourite colour?",50,100);
    button.show();
    button.position(430,430);
    input.show();
    input.position(250,250);
  }
   if(count===3){
  image(bg,0,0,500,500);
    textFont("zapfino")
    textSize(20);
    fill(255);
    text("Whats your dads favourite colour?",50,100);
    button.show();
    button.position(430,430);
    input.show();
    input.position(250,250);
  }
   if(count===4){
     input.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("What food(cuisine) does he like?",50,100);
    button.show();
    button.position(430,430);
     input2.show();
    input2.position(250,250);
  }
   if(count===5){
   input.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("What food(cuisine) does he like?",50,100);
    button.show();
    button.position(430,430);
     input2.show();
    input2.position(250,250);
  }
   if(count===6){
     input2.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("What does he love to play?",50,100);
    button.show();
    button.position(430,430);
     input3.show();
     input3.position(250,250);
  }
   if(count===7){
  input2.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("What does he love to play?",50,100);
    button.show();
    button.position(430,430);
     input3.show();
     input3.position(250,250);
  }
   if(count===8){
  input3.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("What does he work as?",50,100);
    button.show();
    button.position(430,430);
     input4.show();
     input4.position(250,250);
  }
  if(count===9){
  input3.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("What does he work as?",50,100);
    button.show();
    button.position(430,430);
     input4.show();
     input4.position(250,250);
  }
  if(count===10){
  input4.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Whom does father like the most?",50,100);
    button.show();
    button.position(430,430);
     input5.show();
     input5.position(250,250);
  }
  if(count===11){
  input4.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Whom does father like the most?",50,100);
    button.show();
    button.position(430,430);
     input5.show();
     input5.position(250,250);
  }
  if(count===12){
  input5.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Who is his favourite actor?",50,100);
    button.show();
    button.position(430,430);
     input6.show();
     input6.position(250,250);
  }
  if(count===13){
  input5.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Who is his favourite actor?",50,100);
    button.show();
    button.position(430,430);
     input6.show();
     input6.position(250,250);
  }
  if(count===14){
  input6.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Which app does he use the most?",50,100);
    button.show();
    button.position(430,430);
     input7.show();
     input7.position(250,250);
  }
  if(count===15){
  input6.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Which app does he use the most?",50,100);
    button.show();
    button.position(430,430);
     input7.show();
     input7.position(250,250);
  }
  if(count===16){
  input7.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Does he love you?",50,100);
    button.show();
    button.position(430,430);
     input8.show();
     input8.position(250,250);
  }
  if(count===17){
  input7.hide();
  image(bg,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Does he love you?",50,100);
    button.show();
    button.position(430,430);
     input8.show();
     input8.position(250,250);
  }
  if(count===18){
    ans = input.value();
  ans2 = input2.value();
  ans3= input3.value();
  ans4= input4.value();
  ans5= input5.value();
  ans6= input6.value();
  ans7= input7.value();
  ans8= input8.value();
  input8.hide();
     button.hide();
  image(popper,0,0,500,500);
      textFont("zapfino")
    textSize(20);
    fill(255)
    text("Voila you've completed your test!!",50,100);
    text("Check your answers with your dad!!",50,140);
    textSize(10);
    textFont("hiragino sans");
    fill(0)
    text("Whats your dads favourite colour?",50,230);
   text(ans,250,230);
    text("What food(cuisine) does he like?",50,250);
   text(ans2,250,250);
    text("What does he love to play?",50,270);
   text(ans3,250,270);
    text("What does he work as?",50,290);
   text(ans4,250,290);
    text("Whom does father like the most?",50,310);
   text(ans5,250,310);
    text("Who is his favourite actor?",50,330);
   text(ans6,250,330);
    text("Which app does he use the most?",50,350);
   text(ans7,250,350);
    text("Does he love you?",50,370);
   text(ans8,250,370);
    
  }
}
function mousePressed(){
  count=count+1;
}