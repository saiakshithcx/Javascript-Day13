function frequencySort(input) {
    const charFrequency = {};
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    const sortedCharacters = Object.keys(charFrequency).sort((a, b) => {
      const freqA = charFrequency[a];
      const freqB = charFrequency[b];
      if (freqA !== freqB) {
        return freqB - freqA;
      }
      if (a.toLowerCase() !== b.toLowerCase()) {
        return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
      }
      return a < b ? -1 : 1;
    });
    let result = '';
    for (const char of sortedCharacters) {
      result += char.repeat(charFrequency[char]);
    }
  
    return result;
  }
  console.log(frequencySort("tree"));  
  console.log(frequencySort("cccaaa")); 
  console.log(frequencySort("Aabb"));   
  