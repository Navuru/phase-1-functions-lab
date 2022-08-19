let hqBlock = 42;

function distanceFromHqInBlocks(customersBlock){
    if (customersBlock > 42){
        return customersBlock - hqBlock;
    }else {
        return hqBlock - customersBlock;
    }
}


function distanceFromHqInFeet(customersBlock){
    return distanceFromHqInBlocks(customersBlock) * 264;
}

function distanceTravelledInFeet(start,end){
    if(end > start){
        return (end - start) *264;
    }else {
        return (start - end) *264;
    }
}

function calculatesFarePrice(start,end){
    const distanceTravelled = distanceTravelledInFeet(start,end);

    
    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return (0.02 * (distanceTravelled - 400));
    }else if (distanceTravelled > 2000 && distanceTravelled <=2500){
        return 25;
    } else {
        return "cannot travel that far"
    }
}