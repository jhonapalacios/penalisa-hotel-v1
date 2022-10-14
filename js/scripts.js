
$('.slide_room').slick({
        dots: true
      });
$('.slide_showmore').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
});

$('.slide_events').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
});

// Toggle calendar

const selectFecha = document.querySelector('.toggle_dates');
const openCalendar = document.querySelector('.content_dates');
const valueStart = document.querySelector('#start-date');
const valueEnd = document.querySelector('#end-date');
const dateStart = document.querySelector('#start');
const dateEnd = document.querySelector('#end');


activaFunciones();

function activaFunciones(){
        selectFecha.addEventListener('click' , activaFechas);
        dateStart.addEventListener('input',changeValues);
        dateEnd.addEventListener('input',changeValues);
}
// Abre caja de inputs calendar
function activaFechas (){
        if(openCalendar.classList.contains('active')){
                openCalendar.classList.remove('active');
        }else{
                openCalendar.classList.add('active');
        }
}

// sobreescribe valores en los campos de información de fechas en descktop
function changeValues (e) {
        if(e.target.id == "start"){
                valueStart.innerHTML = e.target.value;
        }else{
                valueEnd.innerHTML = e.target.value;
        }
}

// Tabs de reserva

const tabSelecionado = document.querySelectorAll('.tabs .tab_items .item');
const contentTabs = document.querySelectorAll('.tabs .tab_content');

tabSelecionado[0].addEventListener("click" ,activaTab)
tabSelecionado[1].addEventListener("click" , activaTab)

function changeTabs (e) {
        contentTabs.forEach((elm) => {
                elm.classList.remove('active')
                if(e.target.id == "tab_1"){
                        contentTabs[0].classList.add('active')   
                }
                if(e.target.id == "tab_2"){
                        contentTabs[1].classList.add('active')   
                }
        })
}
function activaTab(sel){
        tabSelecionado.forEach((tab) => {
                tab.classList.remove('active')
                if(sel.target.id == "tab_1"){
                        tabSelecionado[0].classList.add('active')   
                }
                if(sel.target.id == "tab_2"){
                        tabSelecionado[1].classList.add('active')   
                }
        })
        changeTabs(sel);
}
