const data = [
    {
        duration: 42,
        from: "2023-05-30T05:56:28+00:00",
        to: "2023-05-30T05:57:10+00:00",
    },
    {
        duration: 90,
        from: "2023-05-30T05:57:01+00:00",
        to: "2023-05-30T05:58:31+00:00",
    },
    {
        duration: 65,
        from: "2023-05-30T07:04:21+00:00",
        to: "2023-05-30T07:05:26+00:00",
    },
    {
        duration: 70,
        from: "2023-05-30T08:27:42+00:00",
        to: "2023-05-30T08:28:52+00:00",
    },
    {
        duration: 105,
        from: "2023-05-30T08:29:43+00:00",
        to: "2023-05-30T08:31:28+00:00",
    },
    {
        duration: 107,
        from: "2023-05-30T10:19:15+00:00",
        to: "2023-05-30T10:21:02+00:00",
    },
    {
        duration: 23,
        from: "2023-05-30T16:50:26+00:00",
        to: "2023-05-30T16:50:49+00:00",
    },
    {
        duration: 72,
        from: "2023-05-30T17:03:12+00:00",
        to: "2023-05-30T17:04:24+00:00",
    },
    {
        duration: 44,
        from: "2023-05-30T17:05:11+00:00",
        to: "2023-05-30T17:05:55+00:00",
    },
    {
        duration: 78,
        from: "2023-05-30T19:29:46+00:00",
        to: "2023-05-30T19:31:04+00:00",
    },
    {
        duration: 63,
        from: "2023-05-30T20:42:28+00:00",
        to: "2023-05-30T20:43:31+00:00",
    },
];


const determineEmptySpaces = (data) => {
    return data.reduce((output, next,i,initial) => {
        let nextDateStart = new Date(next.from)
        let prevDateEnd = new Date( initial[i-1]?.to || Date.UTC(nextDateStart.getFullYear(), nextDateStart.getMonth(), nextDateStart.getDate()));
        let timeDiff = (nextDateStart - prevDateEnd) / 1000;
        
        if(timeDiff > 5*60){
            output.push({duration: timeDiff, from: prevDateEnd.toISOString(), to:nextDateStart.toISOString(), isEmptySpace: true})
            output.push(next)
        }else if(timeDiff < 5*60){
            output.push(next)
        }
    
        if(!initial[i+1]){
            nextDateStart = new Date(Date.UTC(nextDateStart.getFullYear(), nextDateStart.getMonth(), nextDateStart.getDate(), 23,59,59));
            prevDateEnd = new Date(next.to)
            timeDiff = (nextDateStart - prevDateEnd) / 1000
            output.push({duration: timeDiff, from: prevDateEnd.toISOString(), to:nextDateStart.toISOString(), isEmptySpace: true})
        }
    
        return output;
    }, [])
}

const groupObjectsByShortTime = (data) => {
    const tempArr = [];

    return data.reduce((output, next) => {

        if(next.isEmptySpace){
            if(tempArr.length > 1){
                output.push([...tempArr]);
                tempArr.length = 0;
            }else if(tempArr.length === 1){
                output.push({...tempArr[0]})
                tempArr.length = 0;
            }
            output.push({...next})
        }else{
            tempArr.push({...next})
        }
    
    
        return output
    },[])
}

const fullData = groupObjectsByShortTime(determineEmptySpaces(data));
console.log(fullData);




// const reducedArr = data.reduce((output, next,i,initial) => {
//     const nextDateStart = new Date(next.from)
//     const prevDateEnd = new Date( initial[i-1]?.to || Date.UTC(nextDateStart.getFullYear(), nextDateStart.getMonth(), nextDateStart.getDate()));
//     const timeDiff = (nextDateStart - prevDateEnd) / 1000;
//     if(timeDiff > 5*60){

//         output.push({duration: timeDiff, from: prevDateEnd.toISOString(), to:nextDateStart.toISOString(), isEmptySpace: true})
//         output.push(next)
//     }else if(timeDiff < 5*60){

//         output.push(next)
        

//     }

//     return output;
// }, [])