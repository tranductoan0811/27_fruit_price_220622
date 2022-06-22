function myPrice() {
  let fruit, element_label, fruit_label, price, display;
  fruit = document.getElementById("fruit_id").value;
  element_label = document.getElementById("fruit_id");
  fruit_label = element_label.options[element_label.selectedIndex].innerHTML;
  price = '';
  display = '';
  
  switch (fruit) {

    case "oi":
      price = "20.000 VNÐ/kg";
      break;     
    
    case "duahau":
      price = "20.000 VNÐ/kg";
      break; 
      
    case "tao":
      price = "30.000 VNÐ/kg";
      break;
    
    case "xoai":
      price = "30.000 VNÐ/kg";
      break;     
    
    case "cam":
      price = "40.000 VNÐ/kg";
      break;      

    case "chomchom":
      price = "40.000 VNÐ/kg";
      break;    

    case "mangcut":
        price = "50.000 VNÐ/kg";
        break;   

    default:
      price = "Không tìm thấy trái cây.";


  }

  display = (fruit_label + " có giá là: " + price);

 
  document.getElementById("result").innerHTML = display;

}