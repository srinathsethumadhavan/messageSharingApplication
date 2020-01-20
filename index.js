const { hash } = window.location ;
const message = atob(hash.replace('#',''));

if(message)
{
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");
    document.querySelector("h1").innerHTML = message;

}
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();// preventing the default behaviour of the browser to submit the data to the server at the back end

    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");

    const input = document.querySelector("#message-input");
    const encrypted = btoa(input.value);
    const input2= document.querySelector("#link-input");
    input2.value = `${window.location}#${encrypted}`;
    input2.select();
})