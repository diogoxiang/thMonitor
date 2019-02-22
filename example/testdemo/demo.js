


function formatName(str){
    let t
    // 当是 翻倍 
    if (str.indexOf('x')>=0) {
       
        t = str.slice(str.indexOf('x'))
        s = str.slice(0,str.indexOf('x'))
        s=s.replace(/微信零钱/, '')
        // str.replace(t, `<span class="color4">${t}</span>`)
          console.log(`${s} <span class="color4">${t}</span>`);
        return `${s} <span class="color4">${t}</span>`
      
     
    }else{

        s = str.replace(/微信零钱/, '')
        console.log(s);
        return s

    }

   
}

formatName('微信零钱0.88元x4')
formatName('微信零钱0.88元')