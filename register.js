function handleregis(event) {
    event.preventDefault();
    const regis = document.querySelectorAll("form:last-of-type input");
    const formregis = {};
    regis.forEach((input) => {
        if (input.type === "text") {
            Object.assign(formregis, { [input.name]: input.value});

        }
        if (input.type === "password")
            Object.assign(formregis, { [input.name]: input.value});
    })
    console.log(formregis);
}