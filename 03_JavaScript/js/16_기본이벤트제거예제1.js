function checking() {
    const agreement = document.getElementsByName("agreement");

    for (let i = 0; i < agreement.length; i++) {
        if (!agreement[i].checked) {
            console.log(agreement[i].checked+ " " + i); 
            return;
        }
    }

    document.getElementById("button").disabled = false;

    

}