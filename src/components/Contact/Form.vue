<template>

    <form id="form" ref="form" class="contact-form" autocomplete="off" @submit.prevent="onSubmit">
        <h1>Contact Me</h1>
        <input type="hidden" name="_captcha" value="false">
        <div class="group">
            <input id="name" type="text" name="Name" required>
            <label for="name">Full Name</label>
        </div>
        <div class="group">
            <input ref="email" name="Email" type="email" required>
            <label for="email">Email</label>
        </div>
        <div class="group">
            <input id="subject" name="_subject" type="text" required>
            <label for="subject">Subject</label>
        </div>
        <div class="group">
            <textarea id="message" maxlength="296" name="Message" required style="resize: none;"></textarea>
            <label for="message">Message</label>
        </div>
        <button class="button" type="submit">SEND MESSAGE</button>
    </form>
    <div class="contact-icons">
        <a href="https://www.linkedin.com/in/vaorozco17/" target="_blank" rel="noopener noreferrer"><i
                class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/vaorozco" target="_blank" rel="noopener noreferrer"><i
                class="fa-brands fa-github"></i></a>
    </div>
    <div class="contact-message" ref="message" id="message">
        <span>Message sent. Thank you!</span>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        onSubmit() {
            const formData = new FormData(form);
            axios.post('https://formsubmit.co/825c3f0ee6edf063cc01f5ea2ad854a4', formData)
                .then(response => console.log(response))
                .catch(error => console.log(error));
            form.reset();
            this.showMessage();
        },
        showMessage() {
            const message = this.$refs.message;
            message.classList.add("show-message");
            setTimeout(function () { message.classList.add("hide-message") }, 3000);
        }
    },
}
</script>

<style scoped>
.contact-form {
    margin-bottom: 3rem;
}

.contact-form h1 {
    margin-top: 2rem;
    margin-bottom: 3rem;
}

.contact-icons {
    font-size: x-large;
    cursor: pointer;
    color: #FFFFFF;
    display: flex;
    height: 50px;
    align-items: center;
}

.contact-icons a {
    color: #FFFFFF;
    margin: 0 0.3rem;
}

.contact-message {
    text-align: center;
    border-radius: 20px 0px 0px 0px;
    background: #222222;
    height: 70px;
    width: 230px;
    padding: 20px;
    font-size: 15px;
    font-weight: 200;
    align-items: center;
    display: flex;
    visibility: hidden;
    opacity: 0;
    right: 0;
    bottom: 0;
    position: absolute;

}

.show-message {
    visibility: visible;
    opacity: 1;
    max-height: 1000px;
    transition: all 0.7s ease-out;
}

.hide-message {
    visibility: hidden;
    opacity: 0;
    max-height: 1000px;
    transition: all 0.7s ease-in;
}

.group {
    position: relative;
    margin-bottom: 35px;
}

input {
    font-size: 14px;
    letter-spacing: 3px;
    height: 20px;
    padding: 10px 10px 5px 5px;
    display: block;
    width: 500px;
    border: none;
    outline: none;
    border-bottom: 1px solid #B1B1B1;
    color: #B1B1B1;
    background: rgba(0, 0, 0, 0);
    opacity: 0.5;
    transition: 0.5s ease;
}

input:focus {
    outline: none;
    opacity: 1;
}

label {

    color: #B1B1B1;
    font-size: 15px;
    letter-spacing: 5px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 14px;
    opacity: 0.5;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

input:focus~label,
input:valid~label {
    top: -13px;
    font-size: 14px;
    color: #B1B1B1;
    opacity: 1;
}

textarea {
    font-size: 14px;
    letter-spacing: 3px;
    width: 500px;
    height: 90px;
    padding: 10px 10px 5px 5px;
    display: block;
    border: none;
    outline: none;
    border-bottom: 1px solid #B1B1B1;
    color: #B1B1B1;
    background: rgba(0, 0, 0, 0);
    opacity: 0.5;
    transition: 0.5s ease;
}

textarea:focus {
    outline: none;
    opacity: 1;
}

textarea:focus~label,
textarea:valid~label {
    top: -13px;
    font-size: 14px;
    color: #B1B1B1;
    opacity: 1;
}


@media screen and (max-width: 767px) {

    .contact-form {
        width: 90%;
    }

    input,
    textarea {
        width: -webkit-fill-available;
        font-size: 0.75rem;
    }

    .contact-message {
        height: 40px;
        width: 100px;
        padding: 0.875rem;
        font-size: 0.75rem;
    }

}

@media screen and (max-width: 1200px) and (orientation: landscape) {
    .contact-form {
        margin-bottom: 1rem;
    }

    .contact-form h1 {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}

@media screen and (max-width: 992px) and (orientation: landscape) {
    .contact-message {
        bottom: -100vh;
    }
}

@media screen and (max-width: 768px) and (orientation: landscape) {
    .contact-message {
        bottom: 0;
    }
}
</style>