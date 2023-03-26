$(function() {  
    var date = [  
        "Lily",  
        "Lotus",  
        "Tulip",  
        "Crocus",  
        "Hyacinth",  
        "Daisy",  
        "Dandelion",  
        "Orchid",  
        "Cherry blossom",  
        "Rose",  
        "Bluebell",  
        "Sunflower",  
        "Daffodil",  
    ];          
    $( "#txtsanpham" ).autocomplete({  
      source: Flowers  
    });  
  });  