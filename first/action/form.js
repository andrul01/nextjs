"use server";

const submitAction = async (e) => {
    console.log("Form submitted", e.target.name.value, e.target.email.value, e.target.message.value);
}  

