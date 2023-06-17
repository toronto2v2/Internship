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

const getTotalDuration = (data) => {

    return data.reduce((output, next) => {

        if(Array.isArray(next)){
            next.forEach(item => output+=item.duration)
        }else{
            output+= next.duration
        }
    
        return output
    },0)
}


const component = document.querySelector('.component__wrapper');
const fullData = groupObjectsByShortTime(determineEmptySpaces(data));
const totalDuration = getTotalDuration(fullData);
const componentWidth = component.offsetWidth;   




fullData.forEach((el) => {
    let itemPercentWidth = Math.ceil(el.duration * 100 / totalDuration);
    const newDiv = document.createElement('div');
    if(el.isEmptySpace){
        newDiv.classList.add('emptyElement');
        newDiv.style.cssText = `width: ${itemPercentWidth}%;`;
        component.append(newDiv);
    }else if(Array.isArray(el)){
        el.forEach((innerEl,i) => {
            itemPercentWidth =  Math.ceil(innerEl.duration * 100 / totalDuration);
            const togetherDiv = document.createElement('div')
            togetherDiv.classList.add('elementTogether');
            togetherDiv.style.cssText = `width: ${itemPercentWidth}%; margin-left: ${i>0? -13:0}px`;
            component.append(togetherDiv);
        })

    }else{
        newDiv.classList.add('normalElement');
        newDiv.style.cssText = `width: ${itemPercentWidth}%;`;
        component.append(newDiv);
    }

})