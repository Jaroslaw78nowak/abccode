function abccode(str) {
    const alphabet = 'abcdefghijklmnoprstw';
    return str
      .split('')
      .reverse()
      .sort()
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join(' ');
}
  


abccode("rdbg");
console.log(abccode("rdbg"));
