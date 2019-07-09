function isStartLessThanEnd (start, end) {
    if(start<=end)
    return true;
    else 
    return false;
}
function isInputInRange (start, end) {
    if(start<0||end>1000)
    return false;
    else 
    return true;
}
function createMultiplyTable (start, end,isStartLessThanEnd,isInputInRange) {
    if(!isStartLessThanEnd(start,end))
    return null;
    else if(!isInputInRange(start,end))
    return "out of range";
    else{
        var str='';
        for(var i1=start;i1<=end;i1++){
            for(var i2=start;i2<=i1;i2++){
                if(i2==i1)
                str=str+i2+"*"+i1+"="+i1*i2+"\n";
                else
                str=str+i2+"*"+i1+"="+i1*i2+"\t";
            }
        }
        return str;
    }
}
module.exports ={
    isStartLessThanEnd,
    isInputInRange,
    createMultiplyTable
};
