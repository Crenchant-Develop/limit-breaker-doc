async function TextLoader(textFile) {
    const response = await fetch(textFile);
    const textData = await response.text(); 
    
    return textData;
}

export default TextLoader;

//var lineDisposed = isLineDispose ? textData.replace(/^\n|\n$/, '') : textData;