// All Seats 
const seats = Array.from( document.querySelectorAll('#seats button'));
const displayLeftTicket = document.querySelector('#seatLeft');
const purchaseDisplay = document.querySelector('#purchaseDisplay');
const totalPrice = document.getElementById('totalPrice');



const unitTicketPrice = document.querySelector('#unitPrice').innerText;

const purchedTickets = [];

const name = document.getElementById('name');

for(seat of seats){
    let button = seat;
    button.addEventListener('click',(e)=>{
        if(purchedTickets.length <= 3){
            purchedTickets.push(e.target.innerText)
            addBgById(e.target)

            const leftTickets = seats.length - purchedTickets.length;
            displayLeftTicket.innerText = leftTickets;  
            
            for(ticket of purchedTickets){
                let span = document.createElement('span');
                span.innerText = "";
                span.innerText= ticket;
                purchaseDisplay.appendChild(span)
                console.log(ticket);
            }

            totalPrice.innerText = unitTicketPrice * purchedTickets.length;
        }

    })
    
}

