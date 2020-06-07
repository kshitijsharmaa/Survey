class Form{
    constructor() {
        this.usrEmail = createInput("Email");
        this.button = createButton('Submit');
        this.question = createElement('h2');
        this.usrAns = createInput('[Yes/No]');
    }
    hide(){
        this.question.hide();
        this.button.hide();
        this.usrEmail.hide();
        this.usrAns.hide();
    }

    display(){
        var title = createElement('h1')
        title.html("Survey");
        title.position(200, 30);

        this.question.html("Should Dogs Be Given The Right To Vote?");
        this.question.position(200,100);
        this.usrEmail.position(200,200);
        this.usrAns.position(200,220);
        this.button.position(200,240);
        var Email = this.usrEmail.value();
        var Answer = this.usrAns.value();
        this.button.mousePressed(()=>{
            this.usrAns.hide();
            this.usrEmail.hide();
            this.button.hide();
            var database = firebase.database();
            var ref = database.ref('Voters');
           // console.log(ref);
            var data = {
              email: Email,
              ans: Answer
            }
            ref.push(data);
        });

    }
}