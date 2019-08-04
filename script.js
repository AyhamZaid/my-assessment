// q1

function Animal(){
    var animalName =  'Lussy' ;
    var type = 'Dog';

}
Animal.prototype.getAnnimalName.innerHtml(){
   return this.animalName();
}
Animal.prototype.createElement.innerHtml(){
    return this.animalName();
}
var instance = new Animal('mark' , 'cat')
$('test').apend(Animal(instance));
document.getElementById('test').innerHTML(Animal(instance));

// q2

class shap{
	constructor(height, length,area){
        this.h = height;
        this.l = length;
        this.a  = area;
        this.getteArea = area;

    }
}

let sh1 = new shap('13cm','12cm','256m2' );

document.write(sh1);

// q3

var array = ['Food','Pasta','Pizza','Eat'];
let lengthArray =(element)=>{
    return array.filter(a =>{
        if(a.length >= 4){
            return a;
        }
    })
    console.log([lengthArray(array)]);
} ;






