
  class stringHelper {
    constructor() {
      this.value = '';
      this.inputField = document.querySelector('#inputValue')
      this.inputField.addEventListener('input', e => this.inputValue(e));
      this.upperFirstLetter = (str) => {
        const words = [];
        for (let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
       }
        return words.join(' ');
      }
      this.createHashtag = (str) => {
        const words = [];
        for (let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
       }
        return '#'+ words[0][0].toLowerCase() + words.join('').slice(1)
      }
    }

    inputValue(e){
     document.querySelector('#lowercase').innerText = this.lowerCase(e.target.value).value;  
     document.querySelector('#uppercase').innerText = this.upperLetter(e.target.value).value;  
     document.querySelector('#upperall').innerText = this.allUpperCase(e.target.value).value;  
     document.querySelector('#reverse').innerText = this.reverseString(e.target.value).value;  
     document.querySelector('#hashtag').innerText = this.hashTag(e.target.value).value;  
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
        this.value = this.createHashtag(value);
        return this;
    }
    upperLetter(value){
        this.value = this.upperFirstLetter(value);
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
  
  a = new stringHelper()
