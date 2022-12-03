const darkthemebutton = document.querySelector('.darktheme_button')
const darktheme_background = document.querySelector('.main_section')
const h1_article = document.querySelector('.Better_Notes')
const footer_text = document.querySelector('.footer_h1')
const aside_heading = document.querySelector('.aside_h2')
const aside_list = document.querySelector('.list')
const nav_list = document.querySelector('.nav-container')
const new_note_dark = document.querySelector('.newnote_button')
const darktheme_dark = document.querySelector('.darktheme_button')
const darktheme_text = document.querySelector('.darktheme_button')
const cancel_button_dtheme = document.querySelector('.cancel_button')
const save_button_dtheme = document.querySelector('.save_button')
const aside_background = document.querySelector('aside')
const cancel_button_hide = document.querySelector('.cancel_button')
const save_button_hide = document.querySelector('.save_button')
const textbox_hide = document.querySelector('.textbox')
const new_note_show = document.querySelector('.newnote_button')
const textbox_words = document.querySelector('textarea')
const savebutton_save = document.querySelector('.save_button')
const ul_aside = document.querySelector(".list")

function changeTheme(){
    if (darktheme_text.textContent == "Dark Theme"){
        darktheme_text.textContent = 'Light Theme'
    }

    else{
        darktheme_text.textContent = 'Dark Theme'
    };

    darktheme_background.classList.toggle('article_dark')
    h1_article.classList.toggle('Better_Notes_Dark')
    footer_text.classList.toggle('footer_dark')
    aside_heading.classList.toggle('aside_h2_dark')
    aside_list.classList.toggle('list_dark')
    nav_list.classList.toggle('nav-container-dark')
    new_note_dark.classList.toggle('newnote_button_dark')
    darktheme_dark.classList.toggle('darktheme_button_dark')
    cancel_button_dtheme.classList.toggle('cancel_button_dark')
    save_button_dtheme.classList.toggle('save_button_dark')
    aside_background.classList.toggle('aside_dark')
}
darkthemebutton.addEventListener("click", changeTheme);

function hide(){
    save_button_hide.style.display ="none"  
    textbox_hide.style.display = "none" 
    cancel_button_hide.style.display = "none"
}
cancel_button_hide.addEventListener("click", hide)


function show(){
    console.log(textbox_words.value)
    if (textbox_words.value != null && textbox_hide.style.display === "block") {
        textbox_words.value = ''
