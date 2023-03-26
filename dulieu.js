lst = [];
curItem = null;
$(function() {  
    var date = [  
      {
        
"value":"Quat ban ",
"label":"Quat ban - 178.000",
"tenSp":"Quat ban ",
"maSp":"sp001",
"DG":178.000,
"DVT":"Cái",
"Loại":"Gia dụng",
      } ,{
        "value":"May lanh ",
        "label":"May lanh - 3.200.000",
        "tenSp":"May lanhn ",
        "maSp":"sp002",
        "DG":3200.000,
        "DVT":"Cái",
        "Loại":"Gia dụng",
              } ,{
      }
    ];  
    $( "#txtsanpham" ).autocomplete({  
      source: date,
      select: function(e,ui){
        curItem = ui.ieam.maSp;
//$(#lblchon).html("Ban chon <b>["+ui.item.tensp+"]</b> voi don gia"+formatNumber(ui.item.DG))
      }
    });  
  });  

  function themSp()
  {
lst.push(curItem);
  }