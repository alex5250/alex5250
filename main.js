function pageScroll() {
    setTimeout(function() {
        var langs = document.getElementById("langs");
        window.location.hash = langs.hash;
    }, 5000);

}

function contact() {
    alert("Email: alex.zaslavskis2021@gmail.com");
}

function info() {
    const a = `Currently study:
      F#
      AI on Python
      Hackell
      Favorite OS : Windows XP / RebornOS / Fedora 35 with KDE
      Laptop: Asus Zenbook UX331U with 2TB hard drive
      Keyboard : Logitech K380`;
    alert(a);
}

function show_projects() {

    document.getElementById('text').style.animation = 'disappear 2s ';

    const myTimeout = setTimeout(myStopFunction, 2000);
}

function myStopFunction() {
    document.getElementById('text').remove();
    document.getElementById('hidden').classList.remove('not_visible');
    document.getElementById('hidden').classList.add('visible');
    document.getElementById('hidden').style.animation = 'appear 2s ';
}


function legacy() {
  window.open('https://github.com/alex5250/alex5250/raw/main/deps/legasy.zip');
}
