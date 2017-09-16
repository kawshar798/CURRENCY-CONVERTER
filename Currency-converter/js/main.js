

$("select[name=from]").change(function(){
	$("select[name=to] option").removeAttr("disabled");
	$("select[name=to] option[value=" + $("select[name=from]").val() + "]").attr("disabled", "disabled");
    });


 function resetform()
            {
                document.getElementById("converted_amount").value="";
            }
            
    function resetform() {
     document.getElementById("currencyConvert").reset();
 }

 function currency_convert() {
     var amount = document.currencyConvert.amount.value;
    
     if (amount == "") {
         alert("pleaser enter amount");
     }
     else{
         var amount = parseFloat(amount);
         if (isNaN(amount)) {
             alert(" please enter  Integer or Float");
             return;
         }
         else{
             var from = document.currencyConvert.from.selectedIndex;
             var fromValue = document.currencyConvert.from.options[from].text;
             var to = document.currencyConvert.to.selectedIndex;
             var toValue = document.currencyConvert.to.options[to].text;
             if (fromValue == "US Dollar" && toValue == "Taka") {
                 var result = amount * 79.92;
                 document.getElementById('converted_amount').innerHTML = parseFloat(result);
             }
             else if (fromValue == "Euro" && toValue == "Taka") {
                 var result = amount * 84.89;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Indian Rupee" && toValue == "Taka") {
                 var result = amount * 1.19;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Taka" && toValue == "US Dollar") {
                 var result = amount * 0.013;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Euro" && toValue == "US Dollar") {
                 var result = amount * 1.06;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Indian Rupee" && toValue == "US Dollar") {
                 var result = amount * 0.015;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Taka" && toValue == "Euro") {
                 var result = amount * 0.012;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Indian Rupee" && toValue == "Euro") {
                 var result = amount * 0.014;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "US Dollar" && toValue == "Euro") {
                 var result = amount * 0.94;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Taka" && toValue == "Indian Rupee") {
                 var result = amount * 0.84;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "Euro" && toValue == "Indian Rupee") {
                 var result = amount * 70.75;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
             else if (fromValue == "US Dollar" && toValue == "Indian Rupee") {
                 var result = amount * 66.94;
                 document.getElementById("converted_amount").innerHTML = parseFloat(result);
             }
         }
     }   
     
 }