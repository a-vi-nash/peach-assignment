let createMathExpression = (integers,number)=>{
    let done = false;
    function permute(numArr,l,r) {
        if(done){
            return true;
        }
        else if (l == r) {
            //apply all combinations of arithmatic operations
            if(arithmaticOperation(numArr,number)){
                done = true;
                return true;
            }
        }
        else
        { 
            for (let i = l; i <= r; i++) 
            { 
                numArr = swap(numArr, l, i); 
                permute(numArr, l + 1, r); 
                numArr = swap(numArr, l, i); 
            } 
        } 
    } 
    
    function swap(numArr,i,j){
        let temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
        return numArr;
    }
    
    function arithmaticOperation(numArr,num){
            const arthArr = ["*","+","-"];
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    for(let k=0;k<3;k++){
                        for(let l=0;l<3;l++){
                            if(eval(`${numArr[0]}${arthArr[i]}${numArr[1]}${arthArr[j]}${numArr[2]}${arthArr[k]}${numArr[3]}${arthArr[l]}${numArr[4]}`) == num){
                                console.log(`${numArr[0]}${arthArr[i]}${numArr[1]}${arthArr[j]}${numArr[2]}${arthArr[k]}${numArr[3]}${arthArr[l]}${numArr[4]}`);
                                return true;
                            }
                        }
                
                    }
                
                }
            }
            return false;
    }

    permute(integers,0,4);
    return done;

}

