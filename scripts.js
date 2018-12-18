$(document).ready(()=>{
    // the dom is done loading. Go get em js
    const stockForm = document.querySelector('.stock-form');
    console.log(stockForm)
    
    $('.stock-form').submit((event)=>{
        event.preventDefault();
        console.log(event);

        const symbol = $('#symbol').val();
        console.log(symbol);
        
        const url = `https://api.iextrading.com/1.0/stock/${symbol}/quote`
             // getJSON method takes 2 args:
            // 1. where to get JSON
            // 2. function to run when Im back
        $.getJSON(url,(theDataJSFoundIfAny)=>{
         console.log(theDataJSFoundIfAny)
            $('#stock-body').html(`
        <tr>
            <td>${theDataJSFoundIfAny.symbol}</td>
            <td>${theDataJSFoundIfAny.companyName}</td>
            <td>${theDataJSFoundIfAny.high}</td>
            <td>${theDataJSFoundIfAny.low}</td>
            <td>${theDataJSFoundIfAny.change}</td>
         </tr>
         
           `)
        })
    
    })
});

