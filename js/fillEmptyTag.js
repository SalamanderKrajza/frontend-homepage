// const tagToBeFilled = document.querySelector('.main__p--js')
// tagToBeFilled.innerHTML = 'Kiedyś się tu pojawią =)'
function fillEmptyTag(selector, name, age){
    const tagToBeFilled = document.querySelector(selector);
    tagToBeFilled.innerHTML = `Kiedyś się tu pojawią. A na razie witam Cię na stronie!<br>
        Jestem ${name} i mam ${age} lat!`
}

fillEmptyTag('.main__p--js', 'Aleksander', 27);