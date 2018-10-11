let possibleMobileNumbers = (digits,reserved)=>{
			let possibilities = Math.pow(10,digits);
			return reserved.reduce((acc,item)=>{
                        acc = acc - Math.pow(10,digits-item.length);
                        return acc;

                    },possibilities)				
}

