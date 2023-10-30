const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  function caesarCode(text) {
    let caezar = [];
    for (let i = 0; i < text.length; i++) {
      // Todo пересмотреть решение x,y,z
      if (text[i] === 'x') {
        caezar.push(alphabet[0]);
      } else if (text[i] === 'y') {
        caezar.push(alphabet[1]);
      } else if (text[i] === 'z') {
        caezar.push(alphabet[2]);
      } else {
        for (let j = 0; j < alphabet.length; j++) {
          if (text[i] === alphabet[j]) {
            caezar.push(alphabet[j + 3]);
          }
        }
      }
    }
    console.log(caezar);
    return caezar;
  }
  
  caesarCode('xsyzed');
  