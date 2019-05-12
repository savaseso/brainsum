

class StringHelper {
    constructor(value){
        this.value = value;
    }
    lowerCase(value) {
        this.value = value.toLowerCase();
        return this;
     }
     allUpperCase(value) {
       this.value = value.toUpperCase();  
       return this;
     }
     reverseString(value){
         this.value = value.split('').reverse().join('');
         return this;
     }
     hashTag(value){
        const words = [];
        for (let word of value.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
        }
        this.value = '#'+ words[0][0].toLowerCase() + words.join('').slice(1)
        return this;
     }
     upperLetter(value){
        const words = [];
        for (let word of value.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
        }
        this.value =  words.join(' ');
        return this;
     }
     resetMethod(){
         this.value = "";
         return this;
     }
     process(value){
         !this.value ? null : this.value = value;
         return this;
     }
}
const a = new StringHelper()
console.log(a.hashTag('welcome').upperLetter('to').process('my').resetMethod().reverseString('github').value)

document.querySelector('#inputValue').addEventListener('input', (e)=>{
    const value = e.target.value;
    const b = new StringHelper(value);
    document.querySelector('#lowercase').innerText = b.lowerCase(value).value;  
    document.querySelector('#uppercase').innerText = b.upperLetter(value).value;
    document.querySelector('#upperall').innerText = b.allUpperCase(value).value;  
    document.querySelector('#hashtag').innerText = b.hashTag(value).value;  
    document.querySelector('#reverse').innerText = b.reverseString(value).value;  
})

