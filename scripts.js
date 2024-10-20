let hidden_about = false;


function on_click_button(current_button) {
    const about_me = document.getElementById("about_me");
    switch(current_button) {
        case 0:
            console.log("about me ");

            if (hidden_about=null) {
 about_me.style.visibility = 'visible'

            }
            hidden_about = !hidden_about;
        break;
        case 1:
            
       
        about_me.style.visibility = 'hidden'
        break;
    }

}