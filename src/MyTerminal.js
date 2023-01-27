import React, { Component,useEffect } from 'react'
import Terminal from 'react-console-emulator'
import request from 'sync-request';

function whoami() {
    return "alex5250"
}


function ua() {
  return 'But before we continue... I wanna talk about our world. In 24/02/2022 many of my friends, relatives and people matters a lot for me faced an war in Ukraine... The Russian army is killing people in Ukraine,destroy an cities an kill thousands of civils. Is time to help if we want so see modern world not like in 1984 novel. Is not time to discuss. Is a war is a pain and hell. https://saveua.in.ua/en And many others. Stay strong Ukraine! Slava Ukraine'
}
function ls() {
  var res = request('GET', 'https://raw.githubusercontent.com/alex5250/alex5250/main/projects.json');
  var json = JSON.parse(res.getBody());
  console.log(json)
  var all_projects="";
  var counter=0;
  json.forEach(element => {
    console.log(element)
    if(counter > 3){
      all_projects=all_projects+" "+element['project_name']+"\n";
      counter =0;
      
    }
    else {
      all_projects=all_projects+" "+element['project_name'];
    }
    
    counter++;

  });
  console.log(all_projects)
  return all_projects
}
function contact() {
  return "sahsariga111@gmail.com"
}
  
function cat(args) {
  var res = request('GET', 'https://raw.githubusercontent.com/alex5250/alex5250/main/projects.json');
  var json = JSON.parse(res.getBody());
  console.log(args)
  var final_string="";
  json.forEach(element => {
    if(element['project_name']==args) {
      final_string=final_string+element['project_name']+"\n"
      var res = request('GET', element['project_description_url']);
      final_string=final_string+res.getBody()+"\n"
      
    }
    console.log(final_string)
  });
  return final_string
}

function neofetch() {
  var res = request('GET', 'https://raw.githubusercontent.com/alex5250/alex5250/main/neofetch.txt');
  return res.getBody();
 
}

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
  whoami:{
    description: 'displays website owner username',
    usage: 'whoami',
    fn: whoami,
  },

  cat:{
    description: 'prints output from file',
    usage: 'cat <file>',
    fn: cat,
  },
  ls:{
    description: 'lists all files ',
    usage: 'ls',
    fn: ls,
  },
  contact:{
    description: 'prints contact',
    usage: 'contact',
    fn: contact,
  },
  ua:{
    description: 'Slava Ukraine',
    usage: 'ua',
    fn: ua,
  },
}

export default class MyTerminal extends Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to alex5250 terminal '}
        promptLabel={'alex5250@shell:~$'}
      />
    )
  }
}
