const strForReplacement = `Yosypovich 0661137210 Misha`;

const replacedStr = strForReplacement.replace(/(?<=\s)\d+(?=\s)/gi, "$&" );
console.log(replacedStr);