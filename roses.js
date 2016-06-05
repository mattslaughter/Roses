

//start with what you know (givens)...
var bulkRoseBuy = (0.50 * 12 * 10);
var retailRose = 2.0;
var totalRosesStart = 120;
var startingBalance = 200.0;
var pl;
var week = 7;
var year = 52
var balance;
    

//just declare everything you can think of that's part of the model
//you may not even use them all but it helps you start to visualize 
//the model in code.
    
    
function init()
    {
        balance = startingBalance;
        pl = 0;
    }    
    
    
//function that runs the daily numbers

  function simulate()
{
    
    var dayzWrkd = document.getElementById('daysWorked').value;   
    var content ='';
    
    
    for(var i=0; i<dayzWrkd; i++){
    d = i+1;
    content += 'Starting Balance: Day'+(d)+'- $'+pl;
    content += '<br/>';    
    content += 'Buy 10 dozen roses.';
    balance =  - bulkRoseBuy + pl;
    content += '<br/>';    
    content += 'Sell roses all day.';
    content += '<br/>';        
    rosesSold = getSold()
    revenue = rosesSold*2
    content += 'Roses Sold: '+rosesSold;    
    content += '<br/>';
    content += 'Daily Revenu: '+revenue;
    content += '<br/>';    
    pl = revenue + balance
    content += 'Profit Loss: '+pl;
    content += '<br/>';        
    content += '';
    content += '<br/>';        
    content += '';
    
    
   
    }
    
    
    document.getElementById('simulator').innerHTML += content +'<br/>';
        
}
  
function getSold()
{

var min = 10;
var max = 120;
var dayOfSales = Math.random() * (max - min) + min; 
return dayOfSales;  
}
    
    
    
    
    
    
    
    
    
    
    
    

init();