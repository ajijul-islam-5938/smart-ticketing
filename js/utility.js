// Add Background By ID 

function addBgById(element){
    element.classList.add('bg-green-500','text-white');
}

// Append Element
// function append(id,value){
//     let div = document.createElement('div');
//     div.classList.add('flex','justify-between','items-center','p-5');
//     let seatName = document.createElement('span');
//     seatName.innerText = value;
//     let seatType = document.createElement('span');
//     seatType.innerText = 'Economy';
//     let seatPrice = document.createElement('span');
//     seatPrice.innerText = '550';

//     div.appendChild(seatName);
//     div.appendChild(seatType);
//     div.appendChild(seatPrice);

//     id.appendChild(div);
//     console.log(id);
// }
// Add Background By ID 


function removeBgById(elementId){
    elementId.classList.remove('bg-green-500');
}