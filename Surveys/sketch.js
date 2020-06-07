
var form;
function setup() {
  createCanvas(800,400);
  form = new Form();
 // console.log(firebase);
  /*var database = firebase.database();
  var ref = database.ref('Voters');
  console.log(ref);
  var data = {
    email: Email,
    ans: Answer
  }
  ref.push(data);*/

}

function draw() {
  background(255,255,255);  
  form.display();
}