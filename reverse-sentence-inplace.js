/*given a  char array representing lengthy String (Assume of really big size, let's say each sentence is of few GB's in size
and each word in the sentence is few mb's in size
Sample input :  ""This is a long string"
Sample output:  "shiT si a gnol gnirtS"
*/

let instr = "This is a long string";
var inarr=instr.split('');

let count=0;

for(let i=0;i<inarr.length;i++){
    count++;
    if(inarr[i]==' '){
        count--;
        let endIndex = i-1;
        let startIndex = (endIndex-count)+1;

        for(let j=startIndex;j<count/2;j++){
            let temp = inarr[j];
            inarr[j]=inarr[endIndex-j];
            inarr[endIndex-j]=temp;
        }
        count=0;
    }
}

console.log(inarr);
