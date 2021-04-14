const isAnagram = (str1, str2) => {
    // str1 = str1.replace(/[0-9]|\s+/g, '');
    // str2 = str2.replace(/[0-9]|\s+/g, '');
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
};
console.log(isAnagram('parse', 'spare'));
