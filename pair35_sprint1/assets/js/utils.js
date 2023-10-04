function readFileInternal(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        console.log(file);
        reader.readAsText(file);
    });
}

// Wrapper for reading the file contents using promises
async function readFileAsLines(file) {
    const fileContent = await readFileInternal(file);
    return fileContent.split('\n');
}