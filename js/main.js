$(document).ready(function(){
//secret: d870efa9b149c5976863c9805466e0af

let API_KEY = '76555ccc22643524f5ab2aa528d736d3';
let API_URL = `http://api.petfinder.com/pet.getRandom?key=${API_KEY}&animal=&output=full&format=json`;


console.log(API_URL);

$.ajax({
        type : 'GET',
        data : {},
        url : API_URL+'&callback=?' ,
        dataType: 'json',
        success : function(data) {    
            $("#animal").append("<div class='stat'>" + data.petfinder.pet.animal.$t + "</div>") ;
            $("#name").append("<div class='stat'>" + data.petfinder.pet.name.$t + "</div>") ; 
            $("#age").append("<div class='stat'>" + data.petfinder.pet.age.$t + "</div>") ;
            $("#gender").append("<div class='stat'>" + data.petfinder.pet.sex.$t + "</div>") ;
            $("#mix").append("<div class='stat'>" + data.petfinder.pet.mix.$t + "</div>") ;
            $("#breed").append("<div class='stat'>" + data.petfinder.pet.breeds.breed.$t + "</div>") ;
            $("#id").append("<div class='stat'>" + data.petfinder.pet.id.$t + "</div>") ;
            $("#shelterPetId").append("<div class='stat'>" + data.petfinder.pet.shelterPetId.$t + "</div>") ;
            $("#status").append("<div class='stat'>" + data.petfinder.pet.status.$t + "</div>") ;
            $("#update").append("<div class='stat'>" + data.petfinder.pet.lastUpdate.$t + "</div>") ;
            
            $("#contact").append("<div class='stat'>" + data.petfinder.pet.contact.phone.$t + "</div>") ;
            $("#contact").append("<div class='stat'>" + data.petfinder.pet.contact.address1.$t + "</div>") ;
            $("#contact").append("<div class='stat'>" + data.petfinder.pet.contact.email.$t + "</div>") ;
           





            console.log(data.petfinder.pet.age.$t);
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });
});





