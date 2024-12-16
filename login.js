function handlesubmit(event) {
    event.preventdefault()
    const inlogin = document.querySelectorAll("form:last-of-type input");
    const formIn = new FormData();
    inlogin.forEach((input) => {
        if (input.type === "text") {
            formIn.append(input.name, input.value);
        }
        if (input.type === "password") {
            formIn.append(input.name, input.value);
        }
    });
    for (let key of formIn.keys()) {
        console.log(key, formIn.get(key));
    }
    console.log(new URLSearchParams(formIn).toString());

}