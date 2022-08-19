import("./index.js").then(wasm => {
    fetch('./myTemplate.json')
        .then(response => {
            return response.json();
        })
        .then(doc => {
            console.log(doc);
            // Change the title to show date (now)
            let date = new Date().toLocaleString();
            let title = doc.contents[0].params;
            let contents = doc.contents[1].params;
            // let message = document.getElementById("inputs").value;

            title.text += " (created: " + date + ")";


            // this is how you get parameters from your HTML
            //let message = document.getElementById("inputs").value;
            // console.log(message);


            contents.text += ' You can put your inputs here';

            wasm.createPDF(doc);
        });

    // hello
}).catch(e => console.error("Error importing `index.js`:", e));