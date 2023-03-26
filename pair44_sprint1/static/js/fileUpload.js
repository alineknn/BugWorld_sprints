const openBugFile = async function (event) {
    let input = event.target;

    let file = input.files[0];
    let text = file.text();
    text.then((value) => {
        try {
            let instruction = new Assembler().assemble(value); // change the variable later
        }
        catch(err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.error(err);
        alert("file upload failed");
    })
};

const openWorldMap = function (event) {
    let input = event.target;

    let file = input.files[0];
    console.log(file.lastModifiedDate);
};