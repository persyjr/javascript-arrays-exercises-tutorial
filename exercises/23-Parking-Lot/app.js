let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState (array){
  let totalSlots=0;
  let availableSlots=0;
  let occupiedSlots=0;
  const state= {};

    for(index=0;index<array.length;index++){
         for(i=0;i<array.length;i++){
      
        switch(array[index][i]) {
          case 1:
            occupiedSlots=occupiedSlots+1;
            break;
          case 2:
            availableSlots=availableSlots+1;
            break;
          default:
            "default";
        }
      
      }
    }
      
    totalSlots=occupiedSlots+availableSlots;
    state.totalSlots=totalSlots;
    state.availableSlots=availableSlots;
    state.occupiedSlots=occupiedSlots; 
    return state;

}
console.log(getParkingLotState(parking_state))
