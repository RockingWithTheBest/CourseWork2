
document.getElementById('imgEx').addEventListener('click',()=>{
    document.querySelector('.wrapperCatalog').classList.add('hidden');
    document.querySelector('.container99').classList.remove('hidden');
    console.log('exiting');
    document.querySelector('#bodyCata').style.display = 'none';
});
document.querySelector('.user').addEventListener('click',()=>{
    document.querySelector('#container').classList.remove('hidden');
    document.querySelector('#header').classList.remove('hidden');
    document.querySelector('.form').classList.remove('hidden');
    document.querySelector('.container99').classList.add('hidden');
    console.log('latte cafe');
  })



let btn = document.getElementById("btn");
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
  document.querySelector(".Wrapper").classList.add("dark-theme");
  document.querySelector("#container").classList.add("dark-theme");
  document.querySelector(".modal").classList.add("dark-theme");
  document.querySelector("#coffee").classList.add("dark-theme");
  document.querySelector(".later-header").classList.add("dark-theme");
  document.querySelector(".footer").classList.add("dark-theme");
} else {
  document.querySelector(".Wrapper").classList.remove("dark-theme");
  document.querySelector("#container").classList.remove("dark-theme");
  document.querySelector(".modal").classList.remove("dark-theme");
  document.querySelector("#coffee").classList.remove("dark-theme");
  document.querySelector(".later-header").classList.remove("dark-theme");
  document.querySelector(".footer").classList.remove("dark-theme");
}

btn.onclick = function() {
  document.querySelector(".Wrapper").classList.toggle("dark-theme");
  document.querySelector("#container").classList.toggle("dark-theme");
  document.querySelector(".modal").classList.toggle("dark-theme");
  document.querySelector("#coffee").classList.toggle("dark-theme");
  document.querySelector(".later-header").classList.toggle("dark-theme");
  document.querySelector(".footer").classList.toggle("dark-theme");

  let currentTheme;
  if (document.querySelector(".Wrapper").classList.contains('dark-theme')) {
    currentTheme = 'dark';
  } else {
    currentTheme = 'light';
  }

  localStorage.setItem('theme', currentTheme);
}
      

        const langEl = document.querySelector('.langWrap');
        const langLink = document.querySelectorAll('.langWrap a');
        const DesciptLang1= document.querySelector('.one-p');
        const DesciptLang2= document.querySelector('.two-p');
        const DesciptLang3= document.querySelector('.three-p');
        const DesciptLang4= document.querySelector('.four-p');
        const DesciptLang5= document.querySelector('.fifth-p');
        const titleLang= document.querySelector('.headi');




        const langMenutitle = document.querySelector('.menubtn');
        const langMenu1= document.querySelector('.decript1');
        const langMenu2= document.querySelector('.descript2');
        const langMenu3= document.querySelector('.descript3');
        const btnFoodMenu = document.querySelector('.foodmenu');
        const btndrinkMenu = document.querySelector('.drinkmenu');
        const btntakeawayMenu = document.querySelector('.takeaway');

        const locationtitle = document.querySelector('.loc');
        const locationCuba = document.querySelector('.addi1');
        const locationWellington = document.querySelector('.addi2');
        const hours = document.querySelector('.hor');
        const tueToFrid = document.querySelector('.tur');
        const dueDate = document.querySelector('.due');
        const satsun = document.querySelector('.satsun');
        const sunwork = document.querySelector('.sunwork');
        const monday = document.querySelector('.montitle');
        const closed = document.querySelector('.passagre1');
        const RR = document.querySelector('.passagre2');

        const awardwinnin = document.querySelector('.award1');
        const cafeandBar = document.querySelector('.award2');
        const lorem11 = document.querySelector('.lorem11');
        const lorem2 = document.querySelector('.lorem2');
        const lorem3 = document.querySelector('.lorem3');
        const lorem4 = document.querySelector('.lorem4');
        const lorem5 = document.querySelector('.lorem5');
        const lorem6 = document.querySelector('.lorem6');
        const lorem7 = document.querySelector('.lorem7');

        const home = document.querySelector('.em');
        const about = document.querySelector('.aby');
        const menu = document.querySelector('.meu');
        const info = document.querySelector('.info');
        const contact = document.querySelector('.cnt');
        const boookings = document.querySelector('.bkng');
        const privacyPolicy = document.querySelector('.plan');
        const style = document.querySelector('.guid');
        const license = document.querySelector('.lic');
        const instruct = document.querySelector('.instruct');
        const changelog = document.querySelector('.log');
        const passwordGet = document.querySelector('.paw');
        const number = document.querySelector('.num');
        const charc = document.querySelector('.charac');
        const latcafe = document.querySelector('.latcafe');
        const buby = document.querySelector('.buby');
        const webfl = document.querySelector('.webfl');

        const mapLocation = document.querySelector('.font');

        const menuAbout = document.querySelector('.menfirst');
        const menuMenu = document.querySelector('.mensecond');
        const menuInfo = document.querySelector('.menuthird');
        const menuBooking = document.querySelector('.menfourth');
        const LatteCafeTitler = document.querySelector('.lattecafe');

        const headerOrder = document.querySelector('.headerOrder');
        const Entres = document.querySelector('.Entres');
        const avocado = document.querySelector('.avocado');
        const saratoga = document.querySelector('.saratoga');
        const rocket = document.querySelector('.rocket');
        const smoked = document.querySelector('.smoked');
        const pepe = document.querySelector('.pepe');
        const spaghetti = document.querySelector('.spaghetti');
        const lobster = document.querySelector('.lobster');
        const toast = document.querySelector('.toast');
        const Mains = document.querySelector('.Mains');
        const newyork = document.querySelector('.newyork');
        const fiddlehands = document.querySelector('.fiddlehands');
        const rosemary = document.querySelector('.rosemary');
        const sauce = document.querySelector('.sauce');
        const sea = document.querySelector('.sea');
        const whitegreen = document.querySelector('.whitegreen');
        const lemon = document.querySelector('.lemon');
        const chcikenDuck = document.querySelector('.chcikenDuck');
        const yukon = document.querySelector('.yukon');
        const month = document.querySelector('.month');
        const greenBeans = document.querySelector('.greenBeans');

        const createaccount = document.querySelector('.createaccount');
        const usernamelable = document.querySelector('.usernameLable');
        const errormessage = document.querySelector('.errormessage');
        const birthdaylabel =document.querySelector('.birthdayLabel');
        const contactLabel = document.querySelector('.contactLabel');
        const emailLabel = document.querySelector('.emailLabel');
        const passwordLabel = document.querySelector('.passwordLabel');
        const upper = document.querySelector('.upper');
        const lower = document.querySelector('.lower');
        const special_char = document.querySelector('.special_char');
        const number1 = document.querySelector('.number');
        const length = document.querySelector('.length');
        const ConfirmPasswordLabel = document.querySelector('.ConfirmPasswordLAbel');
        const Nickname = document.querySelector('.Nickname');
        const Next = document.querySelector('.nextvalueButton');
        const Accept = document.querySelector('.acceptButton');
       const Usergreement = document.querySelector('User-Agreement');
        const agree = document.querySelector('.agreement');
        const submit =document.querySelector('.submit');
        const register = document.querySelector('.hey');

        const cred =document.querySelector('.Creditals');
        const userlogindetail = document.querySelector('.userpeep');
        const userlogout =document.querySelector('.logoutIncon');

        const infoname = document.querySelector('.fullnamesLS');
        const userinfo = document.querySelector('.userinformation');
        const infopass = document.querySelector('.passwordLS');
        const infoemail = document.querySelector('.modalemailLS');
        const infocontact = document.querySelector('.contactLS');
        const birthinfo = document.querySelector('.birthdayLS');
        const resetbtn = document.querySelector('.resetbtn');
        const closebtn = document.querySelector('.closebtn')

       const contactme = document.querySelector(".footecontactme");
       const footeremail = document.querySelector(".footeremail");
       const footerphone = document.querySelector(".footerphonenumber");
       const footeraddress = document.querySelector(".footerlocation");
       const footergitHub = document.querySelector(".footergitHub");

       const confirmlaang = document.querySelector(".confirmationheader");
       const namelang = document.querySelector(".forlanguageUSer");
       const   passwordlang = document.querySelector(".passwordlang");
       const submitlang = document.querySelector(".confirmMiddlebtn");

       const coffeeorderlang = document.querySelector(".coffeeorder");
       const drinkorderlang = document.querySelector(".drink");
       const selectdrinkorderlang = document.querySelector(".selectdrink");
       const americanoorderlang = document.querySelector(".americano");
       const mocha =document.querySelector(".mocha");
       const cappuccino = document.querySelector(".cappuccino");
       const espresso = document.querySelector(".espresso");
       const size = document.querySelector(".size");     
        const selectsize = document.querySelector(".selectsize");
        const smallsize = document.querySelector(".smallsize");
        const mediumsize = document.querySelector(".mediumsize");
        const extra = document.querySelector(".extra");
        const name1 = document.querySelector(".name");
         const placeorder = document.querySelector(".placeorder");
        const emails = document.querySelector(".emails");
        const regularsize = document.querySelector(".regularsize"); 
       
    
        langLink.forEach(el =>{
            el.addEventListener('click', () =>{
                langEl.querySelector('.active-lang').classList.remove('active-lang');
                el.classList.add('active-lang');             

                const langAttr = el.getAttribute('language');

                coffeeorderlang.textContent = ordeformMassive[langAttr].coffeeorder;
                drinkorderlang.textContent = ordeformMassive[langAttr].drink;
                selectdrinkorderlang.textContent = ordeformMassive[langAttr].selectdrink;
                americanoorderlang.textContent = ordeformMassive[langAttr].americano;
                mocha.textContent = ordeformMassive[langAttr].mocha;
                cappuccino.textContent = ordeformMassive[langAttr].cappuccino;
                espresso.textContent = ordeformMassive[langAttr].espresso;
                size.textContent = ordeformMassive[langAttr].size;
                selectsize.textContent = ordeformMassive[langAttr].selectsize;
                smallsize.textContent = ordeformMassive[langAttr].smallsize;
                mediumsize.textContent = ordeformMassive[langAttr].mediumsize;
                extra.textContent = ordeformMassive[langAttr].extra;
                name1.textContent = ordeformMassive[langAttr].name;
                placeorder.textContent = ordeformMassive[langAttr].placeorder;
                emails.textContent = ordeformMassive[langAttr].emails;
                regularsize.textContent = ordeformMassive[langAttr].regularsize;





                confirmlaang.textContent = confirmationForm[langAttr].confirmationheader;
                namelang.textContent = confirmationForm[langAttr].forlanguageUSer;
                passwordlang.textContent = confirmationForm[langAttr].passwordlang;
                submitlang.textContent = confirmationForm[langAttr].confirmMiddlebtn;


                contactme.textContent = footerArrays[langAttr].footecontactme;
                footeremail.textContent = footerArrays[langAttr].footeremail;
                footerphone.textContent = footerArrays[langAttr].footerphonenumber;
                footeraddress.textContent = footerArrays[langAttr].footerlocation;
                footergitHub.textContent = footerArrays[langAttr].footergitHub;


                infoname.textContent = UserInformation[langAttr].fullnamesLS;
                userinfo.textContent = UserInformation[langAttr].userinformation;
                infopass.textContent = UserInformation[langAttr].passwordLS;
                infoemail.textContent = UserInformation[langAttr].modalemailLS;
                infocontact.textContent = UserInformation[langAttr].contactLS;
                birthinfo.textContent = UserInformation[langAttr].birthdayLS;
                resetbtn.textContent = UserInformation[langAttr].resetbtn;
                closebtn.textContent = UserInformation[langAttr].closebtn;



                cred.textContent = credentials[langAttr].Creditals;
                userlogindetail.textContent = credentials[langAttr].userpeep;
                userlogout.textContent = credentials[langAttr].logoutIncon;

               createaccount.textContent = Container[langAttr].createaccount;
                usernamelable.textContent = Container[langAttr].usernameLable;
                errormessage.textContent = Container[langAttr].errormessage;
                birthdaylabel.textContent = Container[langAttr].birthdayLabel;
                contactLabel.textContent = Container[langAttr].contactLabel;
               emailLabel.textContent = Container[langAttr].emailLabel;
                passwordLabel.textContent = Container[langAttr].passwordLabel;
                upper.textContent = Container[langAttr].upper;
                lower.textContent = Container[langAttr].lower;
                 special_char.textContent = Container[langAttr].special_char;
                 number1.textContent = Container[langAttr].number;
                 length.textContent = Container[langAttr].length;
                 ConfirmPasswordLabel.textContent = Container[langAttr].ConfirmPasswordLAbel;
                 Nickname.textContent = Container[langAttr].Nickname;
            
            Accept.textContent = Container[langAttr].acceptButton;
            Next.textContent = Container[langAttr].nextvalueButton;
                agree.textContent = Container[langAttr].agreement;

                 submit.textContent = Container[langAttr].submit;
                 register.textContent = Container[langAttr].hey;

              





                headerOrder.textContent = menList[langAttr].headerOrder;
                Entres.textContent = menList[langAttr].Entres;
                avocado.textContent = menList[langAttr].avocado;
                saratoga.textContent = menList[langAttr].saratoga;
                rocket.textContent = menList[langAttr].rocket;
                smoked.textContent = menList[langAttr].smoked;
                pepe.textContent = menList[langAttr].pepe;
                spaghetti.textContent = menList[langAttr].spaghetti;
                lobster.textContent = menList[langAttr].lobster;
                toast.textContent = menList[langAttr].toast;
                Mains.textContent = menList[langAttr].Mains;
                newyork.textContent = menList[langAttr].newyork;
                fiddlehands.textContent = menList[langAttr].fiddlehands;
                rosemary.textContent = menList[langAttr].rosemary;
                sauce.textContent = menList[langAttr].sauce;
                sea.textContent = menList[langAttr].sea;
                whitegreen.textContent = menList[langAttr].whitegreen;
                lemon.textContent = menList[langAttr].lemon;
                chcikenDuck.textContent = menList[langAttr].chcikenDuck;
                yukon.textContent = menList[langAttr].yukon;
                month.textContent = menList[langAttr].month;
                greenBeans.textContent = menList[langAttr].greenBeans;

                menuAbout.textContent = menuMenuArr[langAttr].menfirst;
                menuMenu.textContent = menuMenuArr[langAttr].mensecond;
                menuInfo.textContent = menuMenuArr[langAttr].menuthird;
                menuBooking.textContent = menuMenuArr[langAttr].menfourth;
                LatteCafeTitler.textContent = menuMenuArr[langAttr].lattecafe;

                mapLocation.textContent = MapLocation[langAttr].font;

                home.textContent = footerData[langAttr].em;
                about.textContent = footerData[langAttr].aby;
                menu.textContent = footerData[langAttr].meu;
                info.textContent = footerData[langAttr].info;
                contact .textContent = footerData[langAttr].cnt;
                boookings.textContent = footerData[langAttr].bkng;
                privacyPolicy.textContent = footerData[langAttr].plan;
                style.textContent = footerData[langAttr].guid;
                license .textContent = footerData[langAttr].lic;
                instruct.textContent = footerData[langAttr].instruct;
                changelog.textContent = footerData[langAttr].log;
                passwordGet.textContent = footerData[langAttr].paw;
                number.textContent = footerData[langAttr].num;
                charc.textContent = footerData[langAttr].charac;
                latcafe.textContent = footerData[langAttr].latcafe;
                buby.textContent = footerData[langAttr].buby;
                webfl.textContent = footerData[langAttr].webfl;

                titleLang.textContent = dataAboutUS[langAttr].headi;
                DesciptLang1.textContent = dataAboutUS[langAttr].one;
                DesciptLang2.textContent = dataAboutUS[langAttr].two;
                DesciptLang3.textContent = dataAboutUS[langAttr].three;
                DesciptLang4.textContent = dataAboutUS[langAttr].four;
                DesciptLang5.textContent = dataAboutUS[langAttr].fifth;

                langMenutitle.textContent = dataMenu[langAttr].menubtn;
                langMenu1.textContent = dataMenu[langAttr].decript1;
                langMenu2.textContent = dataMenu[langAttr].descript2;
                langMenu3.textContent = dataMenu[langAttr].descript3;
                btnFoodMenu.textContent = databtnMenu[langAttr].foodmenu;
                btndrinkMenu.textContent = databtnMenu[langAttr].drinkmenu;
                btntakeawayMenu.textContent = databtnMenu[langAttr].takeaway;

                locationtitle.textContent = dataLocationWorkDays[langAttr].loc;
                locationCuba.textContent = dataLocationWorkDays[langAttr].addi1;
                locationWellington.textContent = dataLocationWorkDays[langAttr].addi2;
                hours.textContent = dataLocationWorkDays[langAttr].hor;
                tueToFrid.textContent = dataLocationWorkDays[langAttr].tur;
                dueDate.textContent = dataLocationWorkDays[langAttr].due;
                satsun.textContent = dataLocationWorkDays[langAttr].satsun;
                sunwork.textContent = dataLocationWorkDays[langAttr].sunwork;
                monday.textContent = dataLocationWorkDays[langAttr].montitle;
                closed.textContent = dataLocationWorkDays[langAttr].passagre1;
                RR.textContent = dataLocationWorkDays[langAttr].passagre2;

                awardwinnin.textContent = loremData[langAttr].award1;
                cafeandBar.textContent = loremData[langAttr].award2;
                lorem11.textContent = loremData[langAttr].lorem11;
                lorem2.textContent = loremData[langAttr].lorem2;
                lorem3.textContent = loremData[langAttr].lorem3;
                lorem4.textContent = loremData[langAttr].lorem4;
                lorem5.textContent = loremData[langAttr].lorem5;
                lorem6.textContent = loremData[langAttr].lorem6;
                lorem7.textContent = loremData[langAttr].lorem7;

            })
        });
        var ordeformMassive = {
            "russian" :{
                "coffeeorder":"Заказать Кофе",
                "drink":"Кофе :",
                "selectdrink":"Выберите кофе",
                "americano":"Американо",
                "mocha":"Моча",
                "cappuccino":"Капучино",
                "espresso":"Экспрессо",
                "size":"Размер :",
                "selectsize":"Выберите размер",
                "smallsize":"Маленькое",
                "mediumsize":"Средное",
                "extra":"Дополнительные :",
                "name":"Имя :",
                "placeorder":"Заказать",
                "emails":"Эл.Почта :",
                "regularsize":"Обычное "
            },
            "english" :{
                "coffeeorder":"Coffee Order's",
                "drink":"Drink's :",
                "selectdrink":"Select a drink",
                "americano":"Americano",
                "mocha":"Mocha",
                "cappuccino":"Cappuccino",
                "espresso":"Espresso",
                "size":"Size :",
                "selectsize":"Select size",
                "smallsize":"Small",
                "mediumsize":"Medium",
                "extra":"Extra's :",
                "name":"Names :",
                "placeorder":"",
                "emails":"Place Order",
                "regularsize":"Regular"
            }
        }
        var confirmationForm = {
            "russian" : {
                "confirmationheader":"Подтверждение",
                "forlanguageUSer": "Имя пользователя",
                "passwordlang":"Пароль",
                "confirmMiddlebtn":"Отправки"
            },
            "english" : {
                "confirmationheader":"Confirmation",
                "forlanguageUSer": "User-name",
                "passwordlang":"Password",
                "confirmMiddlebtn":"Submit"
            }
        }

        var footerArrays = {
            "russian":{
                "footecontactme":"Наш контакт :",
                "footeremail":"Эл.Почта :",
                "footerphonenumber":"Номер телефона :",
                "footerlocation":"Местоположение :",
                "footergitHub":"Гитхаб :"
            },
            "english":{
                "footecontactme":"Contact Us :",
                "footeremail":"Email :",
                "footerphonenumber":"Phone :",
                "footerlocation":"Location :",
                "footergitHub":"GitHub :"
            }
        };

        var UserInformation ={
            "russian":{
                "userinformation":"Информация о пользователе",
                "fullnamesLS":"Полное имя : ",
                "passwordLS":"Пароль : ",
                "modalemailLS":"Электроннная почта : ",
                "contactLS":"Контакт : ",
                "birthdayLS":"День рождения : ",
                "resetbtn":"Сброс",
                "closebtn":"Закрывать"
            },
            "english":{
                "userinformation":"User Information",
                "fullnamesLS":"Full Name : ",
                "passwordLS":"Password : ",
                "modalemailLS":"Email : ",
                "contactLS":"Contact : ",
                "birthdayLS":"Birthday : ",
                "resetbtn":"Reset",
                "closebtn":"Close"
            }
        }


        var credentials = {
            "english":{
                "Creditals":"Creditals",
                "userpeep":"Login details",
                "logoutIncon":"Log out"
            },
            "russian":{
                "Creditals":"Полномочия",
                "userpeep":"Данные входа",
                "logoutIncon":"Выйти"
            }
        }
            

        var Container = {
            "english":{
                "createaccount":"Create Account ",
                "usernameLable":"Username",
                "errormessage":"Error Message",
                "birthdayLabel":"Birthday",
                "contactLabel":"Contact",
                "emailLabel":"Email",
                "passwordLabel":"Password",
                "upper":"Atleast one uppercase character",
                "lower":"Atleast one lowercase character",
                "special_char":"Atleast one special symbol(!@#$%^&*)",
                "number":"Atleast one number",
                "length":"Atleast 20 characters",
                "ConfirmPasswordLAbel":"Confirm Password",
                "Nick-name":"Nick-name",
                "nextvalueButton":"Next",
                "acceptButton":"Accept",
                "agreement":"I agree to the terms and conditions",
                "submit":"Submit",
                "hey":"Register"
            },
            "russian": {
                "createaccount":"Cоздать аккаунт",
                "usernameLable":"Имя пользователя",
                "errormessage":"Cообщение об ошибке",
                "birthdayLabel":"День рождения",
                "contactLabel":"Контакт",
                "emailLabel":"Электронная почта",
                "passwordLabel":"Пароль",
                "upper":"По крайней мере, один символ в верхнем регистре",
                "lower":"По крайней мере, один строчный символ",
                "special_char":"По крайней мере, один специальный символ(!@#$%^&*)",
                "number":"Хотя бы одно число",
                "length":"Не менее 20 символов",
                "ConfirmPasswordLAbel":"Подтвердите пароль",
                "Nick-name":"Прозвище",
                "nextvalueButton":"Далее",
                "acceptButton":"Принять",
                "agreement":"Я согласен с правилами и условиями",
                "submit":"Oтправки",
                "hey":"Pегистрация"
            }
        }
         
        var menList = {
            "english":{
                "headerOrder":"LATTE  CAFE",
                "Entres":"ENTRES",
                "avocado":"Avocado Pear Soup",
                "saratoga":"Avocado, Saratoga Chips, Szechuan Button",
                "rocket":"Rocket Raisin Salad",
                "smoked":"Smoked Olive Oil, Fennel, Parmigiano di Reggiano",
                "pep":"Pepe alla Chitarra",
                "spaghetti":"Spaghetti, Pancetta, Pecorino Romano",
                "lobster":"Chilli Lobster",
                "toast":"Served With Texas Toast",
                "Mains":"Mains",
                "newyork":"New York Red Steak",
                "fiddlehands":"Fiddleheads, Day Lily, Arugula, Fingerling Potatoes",
                "rosemary":"Fig and Rosemary Salad",
                "sauce":"Sauce Proposal, Cauliflower, Hazelnuts, Golden Rasins",
                "sea":"Everything From The Sea",
                "whitegreen":"White & Green Asparagus, Spring Onion, Sugar Snaps,",
                "lemon":"Meyer Lemon",
                "chcikenDuck":"Roasted Chicken & Duck Claypot",
                "yukon":"Yukon Gold Potatoes, Broccoli Rabe, Pan Drippings",
                "month":"2-Month Slow Beef in Wine",
                "greenBeans":"Charred Green Beans, Romesco, Beef Fat Balsamic Onion"
            },
            "russian":{
                "headerOrder":"ЛАТТЕ-КАФЕ",
                "Entres":"Записи",
                "avocado":"Суп из авокадо и груш",
                "saratoga":"Авокадо, чипсы Саратога, батон по-сычуаньски",
                "rocket":"Салат из рукколы с изюмом",
                "smoked":"Копченое оливковое масло, фенхель, Пармезан ди Реджано",
                "pep":"Перец на гитаре",
                "spaghetti":"Спагетти, Бекон, Пекорино Романо",
                "lobster":"Лобстер с перцем чили",
                "toast":"Подается С Техасским Тостом",
                "Mains":"Основные блюда",
                "newyork":"Красный стейк по-нью-Йоркски",
                "fiddlehands":"Папайя, Лилейник, руккола, Молодой картофель",
                "rosemary":"Салат из инжира и розмарина",
                "sauce":"Фирменный соус, Цветная капуста, Фундук, Золотистый изюм",
                "sea":"Все, Что Связано С Морем",
                "whitegreen":"Белая и зеленая спаржа, Зеленый лук, Сахарные чипсы,",
                "lemon":"Лимон Мейера",
                "chcikenDuck":"Глиняный горшочек с жареной курицей и уткой",
                "yukon":"Картофель Юкон Голд, брокколи Рабе, соус для запекания",
                "month":"Тушеная говядина в вине на 2 месяца",
                "greenBeans":"Обжаренная зеленая фасоль, Ромеско, Говяжий жир, Бальзамический лук"
            }
        }  
        var menuMenuArr = {

            "english":{
                "menfirst":"About",
                "mensecond":"Menu",
                "menuthird":"Info",
                "menfourth":"Bookings",
                "lattecafe":"LATTE CAFE"
            },
            "russian":{
                "menfirst":"О нас",
                "mensecond":"Меню",
                "menuthird":"Инфо",
                "menfourth":"Заказы",
                "lattecafe":"ЛАТТЕ-КАФЕ"
            }
        }
        var MapLocation={
            "english":{
                "font":"Our Location"
            },
            "russian":{
                "font":"Наша локация"
            }
        }
        var loremData = {
                "english":{
                    "award1":"Award winning",
                    "award2":"cafe and bar.",
                    "lorem11":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    "lorem2":"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
                    "lorem3":"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
                    "lorem4":"ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                    "lorem5":"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
                    "lorem6":"pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
                    "lorem7":"culpa qui officia deserunt mollit anim id est laborum."
                },
                "russian":{
                    "award1":"Удостоенный наград",
                    "award2":"кафе и бар.",
                    "lorem11":"Большое вам спасибо за вашу поддержку и добро пожаловать ",
                    "lorem2":"на рассылку новостей, но сделайте это я боялся боли и страданий",
                    "lorem3":"инопланетян.Аль-Кайимпо крайней мере, любая наша рутинная работа",
                    "lorem4":"приносит пользу,за исключением это своего рода комедия, которая",
                    "lorem5":"следует за этим.У вас что-то болит в машине я раскаюсь в страданиях",
                    "lorem6":"нечестивых, я ни от чего не убегу. равенство. Я исключительный",
                    "lorem7":"фанат, я не в ответственность за закрытие лаборатории на ответчике."
                }
        }

        var footerData = {
            "english":{
                "em":"Home",
                "aby":"About",
                "meu":"Menu",
                "info":"Info",
                "cnt":"Contact",
                "bkng":"Bookings",
                "plan":"Privacy Policy",
                "guid":"Style Guide",
                "lic":"Licenses",
                "instruct":"Instructions",
                "log":"Changelog",
                "paw":"Password",
                "num":"404",
                "charac":"©",
                "latcafe":"Latte Cafe 2022",
                "buby":"Built by Nikolai Bain",
                "webfl":"Powered by Webflow"

            },
            "russian":{
                "em":"Дом",
                "aby":"О нас",
                "meu":"Меню",
                "info":"Инфо",
                "cnt":"Контакт",
                "bkng":"Заказы",
                "plan":"Политика конфиденциальности",
                "guid":"Руководство по стилю",
                "lic":"Лицензии",
                "instruct":"Инструкции",
                "log":"Журнал изменений",
                "paw":"Пароль",
                "num":"404",
                "charac":"©",
                "latcafe":"Латте-кафе 2022",
                "buby":"Построен Николаем Бейном",
                "webfl":"Работает на базе Webflow"
            }
        };

        var dataLocationWorkDays = {
            "english":{
                "loc":"Location",
                "addi1":"101 Cuba St,",
                "addi2":"Te Aro, Wellington",
                "hor":"Hours",
                "tur":"Tuesday to Friday",
                "due":"7AM - 3PM",
                "satsun":"Saturday and Sunday",
                "sunwork":"8AM - 3PM",
                "montitle":"Monday",
                "passagre1":"We are closed on Mondays",
                "passagre2":"to reflect and refuel"
            },
            "russian":{
                "loc":"Местоположение",
                "addi1":"Улица Куба, 101,",
                "addi2":"Те Аро, Веллингтон",
                "hor":"Часов",
                "tur":"Со вторника по пятницу",
                "due":"С 7 УТРА до 3 часов дня",
                "satsun":"Суббота и воскресенье",
                "sunwork":"8 УТРА - 3 часа дня",
                "montitle":"Понедельник",
                "passagre1":"Мы закрыты по понедельникам",
                "passagre2":"чтобы повторная обработка"

            }
        }

        var databtnMenu = {
            "english":{
                "foodmenu":"Food Menu",
                "drinkmenu":"Drink Menu",
                "takeaway":"Takeaway"
            },
            "russian":{
                "foodmenu":"Меню блюд" ,
                "drinkmenu":"Меню Напитки",
                "takeaway":"Еда на вынос"
            }
        }
        var dataMenu = {
            "english":{
                "menubtn":"Menu",
                "decript1":"We change our menu every season.",
                "descript2":"Here is what we are currently",
                "descript3":"dishing up.",

            },
            "russian":{
                "menubtn":"Меню",
                "decript1":"Мы меняем наше меню каждый сезон.",
                "descript2":"Вот чем мы занимаемся в настоящее время",
                "descript3":"выкладываю все на стол."
            }
        }
        var dataAboutUS = {
            "english":{
                "headi":"About Us",
                "one": "Tucked away in the corner of Wellington, Latte Cafe is a",
                "two":"local neighbourhood cafe and bar. Latte is all about doing",   
                "three":"what we love, in a city that we love. We keep stocked", 
                "four":"with local produce and pastries. Bring your family for a", 
                "fifth":"bite, or meet your friends for a coffee or warm drink."   
            },
            "russian":{
                "headi":"O нас",
                "one": "Кафе Латте, расположенное на углу Веллингтона, представляет собой",
                "two":"местное кафе и бар по соседству. Латте - это все, что нужно для приготовления",   
                "three":"то, что мы любим, в городе, который мы любим. У нас есть запас", 
                "four":"с местными продуктами и выпечкой. Приходите всей семьей на", 
                "fifth":"перекусите или встретьтесь с друзьями за чашечкой кофе или теплого напитка."  
            }
        }

        window.addEventListener('scroll', function(){
            var discussionParagraph = document.querySelector(".discussion");
            var headDiscussionParagraph = document.querySelector(".headi");
            var viewContentheadContentParagraph = headDiscussionParagraph.getBoundingClientRect().top;
            var viewContentParagraph = discussionParagraph.getBoundingClientRect().top;
            var screenHeight = this.window.innerHeight/1.2;

            if(viewContentParagraph < screenHeight){
                discussionParagraph.classList.add("active_opacity");
            }
            else{
                discussionParagraph.classList.remove("active_opacity");
            }

            if(viewContentheadContentParagraph < screenHeight){
                headDiscussionParagraph.classList.add("active_opacity");
            }
            else{
                headDiscussionParagraph.classList.remove("active_opacity");
            }
        });


        
        const userImage = document.querySelector('.user');
        const container1 = document.querySelector('.container11');
        const container2 = document.querySelector('.container22');
        const container3 = document.querySelector('.container33');
        const container4 = document.querySelector('.container44');
        const container5 = document.querySelector('.container55');
        const container6 = document.querySelector('.container66');
        const container7 = document.querySelector('.container77');
        const container8 = document.querySelector('.container88');
        const userlogin = document.querySelector('.user');
        const buymecoffees = document.querySelector('.buymecoffee'); 
        const container = document.getElementById('container');
        const uppercase = document.getElementById('upper');
        const lowercase = document.getElementById('lower');
        const specialChar = document.getElementById('special_char');
        const numberChar = document.getElementById('number');
        const charLength = document.getElementById('length');
        const registerButton = document.getElementById('hey');
        const nickname = document.getElementById('nickname');
        const nextvalueButton = document.querySelector('.nextvalueButton');
        const acceptButton = document.querySelector('.acceptButton');
        
        const userAgreement = document.querySelector('.User-Agreement');
        const agreementCheckbox = document.getElementById('agreementCheckbox');
        const coffePurchaseModal = document.getElementById('coffee');
        //PASSOWRD CONFRIMATION TRANS
        const nameTransiton = document.getElementById('usernameconfirm');
        const passwordTransConfirmation = document.getElementById('password-confim');
        const passwordConfirmForm_where_to_apply = document.getElementById('password-transition');
        const buttonMiddleForm = document.getElementById('confirmMiddlebtn');

        let count = 0;
        let isValidForm = true;

        //LATTE CAFFE vairables
const orderSummaryElement = document.getElementById('order-summary');
const confirmOrderButton = document.getElementById('confirm-order');
const cancelOrderButton = document.getElementById('cancel-order');
const orderForm = document.getElementById('order-form');
const orderModal = document.getElementById('orderModel');
const coffeForm = document.getElementById('coffee')
const placeOrderButton = document.querySelector('#order-form button');

placeOrderButton.addEventListener('click', (event) => {
    event.preventDefault();
    const drink = document.getElementById('drink').value.trim();
    console.log(drink);
    const size = document.getElementById('size').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const extra = document.getElementById('extra').value.trim();

    const orderSummarytext = `Drinks: ${drink}\nSize: ${size}\nExtras: ${extra}\nName: ${name}\nEmail: ${email}`;
    orderSummaryElement.textContent = orderSummarytext;


    orderModal.classList.add('show'); 
});
confirmOrderButton.addEventListener('click',() =>{
    console.log('Order confirmed!');
    if(confirm('Thanks for confirming order')){
        orderModal.classList.remove('show');
       form.classList.remove('hidden');
       coffeForm.classList.add('hidden');
       container1.classList.remove('hidden');
       container2.classList.remove('hidden');
       container3.classList.remove('hidden');
       container4.classList.remove('hidden');
       container5.classList.remove('hidden');
       container6.classList.remove('hidden');
       container7.classList.remove('hidden');
       container8.classList.remove('hidden');
    

    }
    
});
cancelOrderButton.addEventListener('click',() =>{
    if(confirm('Are you sure you want to cancel?')){
        orderModal.classList.remove('show');
    }
});


        userImage.addEventListener('click', () => {
          container1.classList.add('hidden');
          container2.classList.add('hidden');
          container3.classList.add('hidden');
          container4.classList.add('hidden');
          container5.classList.add('hidden');
          container6.classList.add('hidden');
          container7.classList.add('hidden');
          container8.classList.add('hidden');
          container.classList.remove('hidden');
        });



        const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');
        const year = document.getElementById('year');
        const phoneContact = document.getElementById('contact');
        const createacoountHeader = document.getElementById('header');

        function formSubmit(event){
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const year = document.getElementById('year').value;
            const phoneContact = document.getElementById('contact').value;
        
            localStorage.setItem('Is_User_Name', username );
            localStorage.setItem('Is_Email', email );
            localStorage.setItem('Is_Password', password );
            localStorage.setItem('Is_Birthday', year );
            localStorage.setItem('Is_Phone_Contact', phoneContact );

            fullnamesLS.textContent = localStorage.getItem('Is_User_Name');
            passwordLS.textContent = localStorage.getItem('Is_Password');
            emailsLS.textContent = localStorage.getItem('Is_Email');
            contactLS.textContent = localStorage.getItem('Is_Phone_Contact');
            birthdayLS.textContent = localStorage.getItem('Is_Birthday');
        
        }
        

        const login_details = document.getElementById("login-details");
        const logOut = document.getElementById("log-out");
        const fullnamesLS = document.getElementById("modal-full-name") 
        const passwordLS = document.getElementById("modal-password"); 
        const emailsLS = document.getElementById("modal-email"); 
        const contactLS = document.getElementById("modal-contact"); 
        const birthdayLS = document.getElementById("modal-birthday"); 
        const usermodalWindow = document.getElementById("user-info-modal"); 

        login_details.addEventListener("click",() => {
            fullnamesLS.textContent = localStorage.getItem('Is_User_Name');
            passwordLS.textContent = localStorage.getItem('Is_Password');
            emailsLS.textContent = localStorage.getItem('Is_Email');
            contactLS.textContent = localStorage.getItem('Is_Phone_Contact');
            birthdayLS.textContent = localStorage.getItem('Is_Birthday');
            usermodalWindow.style.display = "block";

        })



        const resetButtonLS = document.getElementById("reset-btn");
        const closeButtonLS = document.getElementById("close-btn");
        closeButtonLS.addEventListener("click", () => {
            usermodalWindow.style.display = "none";
        })
        resetButtonLS.addEventListener("click", () => {
            if(fullnamesLS.textContent !== ""&&passwordLS!=="" && emailsLS.textContent !== ""&& birthdayLS.textContent !== ""&&contactLS.textContent !== ""){
                fullnamesLS.textContent = "";
                passwordLS.textContent = "";
                emailsLS.textContent = "";
                contactLS.textContent = "";
                birthdayLS.textContent = "";
                localStorage.removeItem('Is_Birthday');
                localStorage.removeItem('Is_User_Name');
                localStorage.removeItem('Is_Password');
                localStorage.removeItem('Is_Email');
                localStorage.removeItem('Is_Phone_Contact');
                alert("All data will be reset.");
            }
            else{
                alert("You haven't logged in.");
            }
        });
        
        logOut.addEventListener("click", () => {
           //fullnamesLS.textContent =   localStorage.getItem('Is_User_Name');
          
            if(fullnamesLS.textContent !== ""&&passwordLS!=="" && emailsLS.textContent !== ""&& birthdayLS.textContent !== ""&&contactLS.textContent !== ""){
                fullnamesLS.textContent = "";
                passwordLS.textContent = "";
                emailsLS.textContent = "";
                contactLS.textContent = "";
                birthdayLS.textContent = "";
                localStorage.removeItem('Is_Birthday');
                localStorage.removeItem('Is_User_Name');
                localStorage.removeItem('Is_Password');
                localStorage.removeItem('Is_Email');
                localStorage.removeItem('Is_Phone_Contact');
                alert("You will be logged out and all data will be reset.");
            }
           
            else if( fullnamesLS.textContent==="")
                 {
                console.log('logout');
                alert("You haven't logged in.");
            }
        });
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            checkInputs();
            RegsitryCheck();
        });

        function checkInputs(){
            //get values from the inputs
            const usernameValue = username.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            const password2Value = password2.value.trim();
            const yearValue = year.value.trim();
            const checkIcon = document.querySelector('#check-icon');
            const checkIconpass = document.querySelector('#check-icon-confirm-password');
        
        
            if(usernameValue ===''){
                //show error
                //add error class
               setErrorFor(username, "Username cannot be blank.");
               checkIcon.classList.add('hidden');
            }
            else{
                //add success classs
                setSuccessFor(username);
                checkIcon.classList.remove('hidden');
                 
            }
        
            if(emailValue ===''){
                setErrorFor(email, "Email cannot be blank.");
                const checkIcon1 = document.querySelector('#check-icon-email');
                 checkIcon1.classList.add('hidden');
            }
            else{
                emailValidation(email);

            }
        
            if(passwordValue ===''){
                setErrorFor(password, "Password cannot be blank.");
                const checkIcon = document.querySelector('#check-icon-password');
                checkIcon.classList.add('hidden');
               
            }
            else{
                //add success class
                implicitCheck(password);
            }
        
            
        
            if(password2Value ===''){
                isValidForm = false;
                setErrorFor(password2, "Password cannot be blank.");
            }
            else if(passwordValue!== password2Value){
                isValidForm = false;
                setErrorFor(password2, "Passwords do not match.");
                checkIconpass.classList.add('hidden');
            }
            else{
                isValidForm = true;
                //add success class
                setSuccessFor(password2);
                checkIconpass.classList.remove('hidden');
            }
        
        
            dateCheck(year);
            phoneValidation(phoneContact);
        }
        
        function setErrorFor(input, message){
            const formControl = input.parentElement;//form-control
            const small = formControl.querySelector('small');
        
            //add error message inside the small tag
            small.innerText = message;
        
            //add error class
            formControl.className = 'form-control error';
        }
        function setSuccessFor(input){
            const formControl  = input.parentElement;//form-control
            formControl.className = 'form-control success';
        }

        function RegsitryCheck() {
            if (isValidForm) {
              registerButton.removeAttribute('disabled');
              console.log('enabled');
            } else {
                registerButton.setAttribute('disabled', 'disabled');
              console.log('disabled');
            }
          }
        
          function emailValidation(emailaddress){
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            const inputValue = emailaddress.value.trim();
            const checkIcon1 = document.querySelector('#check-icon-email');
            checkIcon1.classList.add('hidden');
            if(emailRegex.test(inputValue)){    
                setSuccessFor(email);
                checkIcon1.classList.remove('hidden');
            }
            else if(!emailRegex.test(inputValue)){
                isValidForm = false;
                setErrorFor(email, "Email is not in a valid format.")
                checkIcon1.classList.add('hidden');
            }
        
        }
        function implicitCheck(input){
            const checkIcon = document.querySelector('#check-icon-password');
            if(input.value.match(/[0-9]/)){
                numberChar.style.color = "green";
            }
            else{
                numberChar.style.color = "red";
                
            }
            if(input.value.match(/[A-Z]/)){
                uppercase.style.color = "green";
            }
            else{
                uppercase.style.color = "red";
            }
            if(input.value.match(/[a-z]/)){
                lowercase.style.color = "green";
            }
            else{
                lowercase.style.color = "red";
            }
            if(input.value.match(/[!@#$%^&*]/)){
                specialChar.style.color = "green";
            }
            else {
                specialChar.style.color = "red";
            }
            if(input.value.length >= 8 && input.value.length<= 20){
                charLength.style.color = "green";
                setSuccessFor(password);
                checkIcon.classList.remove('hidden');
            }
            else{
                charLength.style.color = "red";
                checkIcon.classList.add('hidden');
            }
        }
        function dateCheck(input){
            const inputValue = input.value.trim();
            //const checkIcon = document.querySelector('#check-icon-birth');
            if(inputValue === ""){
                isValidForm = false;
                setErrorFor(year, "Year field cannot be blank.");
            }
            else{
                var selectedDate = new Date(input.value.trim());
                var currentDate = new Date();
        
                var minimunAge = 16;
        
                var userAge = currentDate.getFullYear() - selectedDate.getFullYear();
                var userMonth = currentDate.getMonth() - selectedDate.getMonth();
        
                if(userAge < minimunAge){
                    isValidForm = false;
                    setErrorFor(year, "You must be older than 16 to register.");
                 }
                else {
                     setSuccessFor(year);
                     //checkIcon.classList.remove('hidden');
                }
            }
            
        }
        function phoneValidation(input){

            const phoneNumberRegex= /^\+375-\d{2}-\d{3}-\d{4}$/;
            const checkIcon = document.querySelector('#check-icon-phone');
        
            const inputValue = input.value.trim();
        
            if(phoneNumberRegex.test(inputValue)){
                setSuccessFor(phoneContact);
                checkIcon.classList.remove('hidden');
            }
            else if(!phoneNumberRegex.test(inputValue)){
                isValidForm = false;
                setErrorFor(phoneContact, "Phone number is not in correct format."); 
                checkIcon.classList.add('hidden');
            }
            else if(inputValue === ""){
                isValidForm = false;
                setErrorFor(phoneContact, "Phone number cannot be blank.");
                checkIcon.classList.add('hidden');
            }
            else{
                isValidForm = false;
                setErrorFor(phoneContact, "Invalid Phone number is not format.");
                checkIcon.classList.add('hidden');
            }
        }
        function randomNickname(input){
            var indexcount = 0;
           
                var random_str = '';
                var characters = ['John', 'Jane', 'Alice', 'Bob', 'Emily','Michael','Rachael','Паша','Никита','Миша','Леон','Артур','Даша','Глеб','Кирилл','Аня','Соня','Настя','Бен','Алексей','Сергей','Данил'];
            
                // for (var i = 0; i < 10; i++) {
                //     random_str += characters.charAt(Math.floor(Math.random() * characters.length));
                // }
                //nickname.value = random_str;
                var randIndex = Math.floor(Math.random()*characters.length);
                random_str = characters[randIndex];
                nickname.value = random_str;
                console.log(nickname.value);
        }


        nextvalueButton.addEventListener('click',(e)=>{
            e.preventDefault();
        
            if(count< 5){
                const nicknameValue = nickname.value.trim();
                randomNickname(nicknameValue);
                count++;
               }
            else{
                nickname.disabled = false;
            }   
        });
        
        acceptButton.addEventListener('click',(e)=>{
            e.preventDefault();
        
            const nicknameLight = nickname.value.trim();
            setSuccessFor(nickname);
            console.log('accept clciked')
        });

         
        userAgreement.addEventListener('input', () => {
          if (userAgreement.scrollHeight <= userAgreement.offsetHeight) {
            agreementCheckbox.checked = true;
            console.log('true');
          } else {
            agreementCheckbox.checked = false;
            console.log('false');
          }});

          registerButton.addEventListener('click',(e) => {
            e.preventDefault();
         
            if(confirm('Do you wish to buy coffee on the main page?')){
                console.log('added hidden');
                container.classList.add('hidden');
                     form.classList.add('hidden');
                console.log('passed hidden');
                // createacoountHeader.classList.add('hidden');
                
                
                
                         
                container1.classList.remove('hidden');
                container2.classList.remove('hidden');
                container3.classList.remove('hidden');
                container4.classList.remove('hidden');
                container5.classList.remove('hidden');
                container6.classList.remove('hidden');
                container7.classList.remove('hidden');
                container8.classList.remove('hidden');
            }
        });

        buymecoffees.addEventListener('click', ()=>{
            if(fullnamesLS.textContent !== ""&&passwordLS!=="" && emailsLS.textContent !== ""&& birthdayLS.textContent !== ""&&contactLS.textContent !== ""){
                if(confirm("You want to buy coffee?")){
                    container1.classList.add('hidden');
                    container2.classList.add('hidden');
                    container3.classList.add('hidden');
                    container4.classList.add('hidden');
                    container5.classList.add('hidden');
                    container6.classList.add('hidden');
                    container7.classList.add('hidden');
                    container8.classList.add('hidden');
                    passwordConfirmForm_where_to_apply.classList.remove('hidden'); 
                }
            }
            else{
                alert('You neeed to register in order to make a purchase.')
            }
            
        })
        buttonMiddleForm.addEventListener('click',(e) =>{
            e.preventDefault();
            TransConfrimation();
           
            //passwordConfirmForm_where_to_apply.classList.add('hidden');
            
            console.log('ssss');
            //coffeForm.remove('hidden');
            //passwordConfirmForm_where_to_apply.add('hidden');
        });

        function TransConfrimation() {
            var nameTrans = nameTransiton.value.trim();
            var passTrans = passwordTransConfirmation.value.trim();
            
                if(nameTrans=== localStorage.getItem('Is_User_Name') && passTrans === localStorage.getItem('Is_Password'))
                    {
                    container1.classList.add('hidden');
                    container2.classList.add('hidden');
                    container3.classList.add('hidden');
                    container4.classList.add('hidden');
                    container5.classList.add('hidden');
                    container6.classList.add('hidden');
                    container7.classList.add('hidden');
                    container8.classList.add('hidden'); 
                    alert('Correct password and user name');
                    coffePurchaseModal.classList.remove('hidden');
                    passwordConfirmForm_where_to_apply.classList.add('hidden');              
                    console.log('Success');
                }
                else{            
                    console.log('not correct');
                    alert('Incorrect password or Name please re-enter your details'+ passTrans );
                    // if(confirm('Incorrect password or Name please re-enter your details'+ passTrans )){
                    //     TransConfrimation();
                    // }

                    // passwordConfirmForm_where_to_apply.classList.remove('hidden'); 
                }
      
           
        
        }
        






 //Catalog Apperaing
 const carousel = document.querySelector(".carousel");
 const arrowBtns = document.querySelectorAll("#wrapper i");
 const firstCardWidth =  carousel.querySelector(".card").offsetWidth;
 const carouselChildrens =  [...carousel.children];
 
 
 //Get the number of cards that can fit in the carousel at once
 let cardPerView = Math.round(carousel.offsetWidth/firstCardWidth);
 
 
 //Insert copies of the last few cards to beginning of the carousel for infinite scolling
 carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
 })
 
 //Insert copies of the first few cards to beginning of the carousel for infinite scolling
 carouselChildrens.slice(0 , cardPerView).reverse().forEach(card =>{
     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  })
  
 
 let isDragging = false;
 // ,startX, startScrollLEft;
 const dragStart  = ()=>{
     isDragging = true;
     carousel.classList.add("dragging");
 }
 const dragStop = ()=>{
     isDragging = false;
     carousel.classList.remove("dragging");
 }
 const dragging = (e) =>{
 
     if(!isDragging) return; //if isDragging is false return from here
     carousel.scrollLeft = e.pageX;
     //scrollLEft sets or returns the number of pixels an elements content is scrolled horizontally
 }//e.pageX returns the horizontal coordinates of mouse pointer.
 
 
 //Add event listerner for the arrow buttons to scroll the carousel left and right
 arrowBtns.forEach(btn =>{
    
     btn.addEventListener("click", ()=>{
         if (btn.id === "left") {
             carousel.scrollLeft -= firstCardWidth;
           } else {
             carousel.scrollLeft += firstCardWidth;
           }
     })
     //if click btn is left, then subtract first card width from the carousel scrollLwft else add to it.
 })
 
 
 const infiniteScroll = () =>{
     //if the carousel is at the beginning scoll to the end
     if(carousel.scrollLeft  ===0){
         console.log("You've reached to the left End")
         carousel.scrollLeft = carousel.scrollWidth -( 2*carousel.offsetWidth)
     }
     //if the carousel is at the end scoll to the beginning
     else if(Math.ceil(carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth)){
         //scrollWidth returns the width of the elemet's content
         //including content not visible on screen due to overflow
         //offsetWidth returns the viewable width of an element
         console.log("You've reached to the right End");
         carousel.scrollLeft = (carousel.offsetWidth)
     }
 }
 carousel.addEventListener("mousemove", dragging);
 carousel.addEventListener("mousedown", dragStart);
 carousel.addEventListener("mouseup", dragStop);
 carousel.addEventListener("scroll", infiniteScroll);
 
 
 
 
 
 

 const displayUrl = document.querySelector("#wrapper");
 const exitUrl = document.querySelector("#imgEx");
 displayUrl.classList.add("hidden");

 

 
 const exitcatalog = document.querySelector("#imgEx");
 exitcatalog.addEventListener( "click",()=>{
     displayUrl.classList.add("hidden");
     document.querySelector(".menubtn").classList.remove("hidden");
     exitUrl.classList.add("hidden");

     const catalogMain = document.querySelector("#bodyCata");
     const catalog1 = document.querySelector("#Catalog1");
     const wrapper = document.querySelector("#wrapper");
  
 
     catalogMain.classList.add("hidden");
     catalog1.classList.add("hidden");
     wrapper.classList.add("hidden");
     
 
     

    console.log("remove");

    container1.classList.remove('hidden');
    container2.classList.remove('hidden');
    container3.classList.remove('hidden');
    container4.classList.remove('hidden');
    container5.classList.remove('hidden');
    container6.classList.remove('hidden');
    container7.classList.remove('hidden');
    container8.classList.remove('hidden'); 

 });
 



 const fooodMenuBtn = document.querySelector(".foodmenu");
 const catalogMain = document.querySelector("#bodyCata");
 catalogMain.classList.add('hidden');
 const imgEx = document.querySelector("#imgEx").classList.add('hidden');
//  const container1 = document.querySelector('.container11');
//  const container2 = document.querySelector('.container22');
//  const container3 = document.querySelector('.container33');
//  const container4 = document.querySelector('.container44');
//  const container5 = document.querySelector('.container55');
//  const container6 = document.querySelector('.container66');
//  const container7 = document.querySelector('.container77');
//  const container8 = document.querySelector('.container88');
//  fooodMenuBtn.addEventListener( "click",()=>{
//     console.log("food menu");
//     const catalogMain = document.querySelector("#bodyCata");
//     const catalog1 = document.querySelector("#Catalog1");
//     const wrapper = document.querySelector("#wrapper");
    

//     catalogMain.classList.remove("hidden");
//     catalog1.classList.remove("hidden");
//     wrapper.classList.remove("hidden");
//     catalogMain.style.display = "flex";

//     container1.classList.add('hidden');
//     container2.classList.add('hidden');
//     container3.classList.add('hidden');
//     container4.classList.add('hidden');
//     container5.classList.add('hidden');
//     container6.classList.add('hidden');
//     container7.classList.add('hidden');
//     container8.classList.add('hidden'); 

//  });




 const exitRegister =document.getElementById('exitReg');
 exitRegister.addEventListener( "click",()=>{
    container1.classList.remove('hidden');
    container2.classList.remove('hidden');
    container3.classList.remove('hidden');
    container4.classList.remove('hidden');
    container5.classList.remove('hidden');
    container6.classList.remove('hidden');
    container7.classList.remove('hidden');
    container8.classList.remove('hidden'); 
    const passwordTra = document.getElementById("container" );
    passwordTra.classList.add('hidden');
 })


 const exitConfirm = document.querySelector('#exitConfirm');
 exitConfirm.addEventListener( "click",()=>{
    container1.classList.remove('hidden');
    container2.classList.remove('hidden');
    container3.classList.remove('hidden');
    container4.classList.remove('hidden');
    container5.classList.remove('hidden');
    container6.classList.remove('hidden');
    container7.classList.remove('hidden');
    container8.classList.remove('hidden'); 

    const transformConf = document.getElementById('password-transition');
    transformConf.classList.add('hidden');
 });




 const exitPruchase = document.getElementById('exitPurchase');
 exitPruchase.addEventListener( "click",()=>{
    container1.classList.remove('hidden');
    container2.classList.remove('hidden');
    container3.classList.remove('hidden');
    container4.classList.remove('hidden');
    container5.classList.remove('hidden');
    container6.classList.remove('hidden');
    container7.classList.remove('hidden');
    container8.classList.remove('hidden'); 

    const coffeeForm =document.getElementById('coffee');
    coffeeForm.classList.add('hidden');

 })



document.querySelector('.drinkmenu').addEventListener('click',()=>{
    document.querySelector('.carousel').classList.remove('hidden');

    container1.classList.add('hidden');
    container2.classList.add('hidden');
    container3.classList.add('hidden');
    container4.classList.add('hidden');
    container5.classList.add('hidden');
    container6.classList.add('hidden');
    container7.classList.add('hidden');
    container8.classList.add('hidden');
    document.querySelector('.container99').classList.add('hidden'); 

    document.querySelector("#carousel").classList.remove('hidden');
    document.querySelector('body').style.background = "#28283f";
    
 
});


 const burgerMenu =document.querySelector('.collect');
 burgerMenu.addEventListener( "click",function(){
    burgerMenu.classList.toggle('open');
 });
 


 document.querySelector('.user').addEventListener( 'click',()=>{
    document.querySelector('.container99').classList.add('hidden');
 });

 document.querySelector('#exitReg').addEventListener( 'click',()=>{
    document.querySelector('.container99').classList.remove('hidden');
 });

 document.querySelector('.buymecoffee').addEventListener( 'click',()=>{
    document.querySelector('.container99').classList.add('hidden');

 });

 document.querySelector('#exitConfirm').addEventListener( 'click',()=>{
    document.querySelector('.container99').classList.remove('hidden');
 });


 document.querySelector('.foodmenu').addEventListener( 'click',()=>{ 
    document.querySelector('#imgEx').classList.remove('hidden'); 
    document.querySelector('#bodyCata').classList.remove('hidden'); 
    document.querySelector('.wrapperCatalog').classList.remove('hidden');
    
    document.querySelector('.container99').classList.add('hidden');
  })

  document.querySelector('.hey').addEventListener( 'click',()=>{

    
    document.querySelector('.container99').classList.remove('hidden');
  });

document.querySelector('.collect-exit').addEventListener( 'click',()=>{
    document.querySelector('#carousel').classList.add('hidden');

    container1.classList.remove('hidden');
    container2.classList.remove('hidden');
    container3.classList.remove('hidden');
    container4.classList.remove('hidden');
    container5.classList.remove('hidden');
    container6.classList.remove('hidden');
    container7.classList.remove('hidden');
    container8.classList.remove('hidden');
    document.querySelector('.container99').classList.remove('hidden'); 

    document.querySelector('body').style.background = "none";  
    console.log("background")
});

document.querySelector('.collect-exit-takeaway').addEventListener('click', ()=>{
    document.querySelector('#takeaway-display').classList.add('hidden');

    container1.classList.remove('hidden');
    container2.classList.remove('hidden');
    container3.classList.remove('hidden');
    container4.classList.remove('hidden');
    container5.classList.remove('hidden');
    container6.classList.remove('hidden');
    container7.classList.remove('hidden');
    container8.classList.remove('hidden');
    document.querySelector('.container99').classList.remove('hidden'); 

    document.querySelector('body').style.background = "none";  
}) 
document.querySelector('.takeaway').addEventListener('click', ()=>{  
    container1.classList.add('hidden');
    container2.classList.add('hidden');
    container3.classList.add('hidden');
    container4.classList.add('hidden');
    container5.classList.add('hidden');
    container6.classList.add('hidden');
    container7.classList.add('hidden');
    container8.classList.add('hidden');
    document.querySelector('.container99').classList.add('hidden'); 

    document.querySelector("#takeaway-display").classList.remove('hidden');
    document.querySelector('body').style.background = "#28283f";

  });

//SLIDDER>> << JS BEGIN
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const lastButton = document.querySelector('.carousel-last');
const firstButton = document.querySelector('.carousel-first');

const prevButton2 = document.querySelector('.carousel-prev-2');
const nextButton2 = document.querySelector('.carousel-next-2');
const lastButton2 = document.querySelector('.carousel-last-2');
const firstButton2 = document.querySelector('.carousel-first-2');
const takeawayCarousel = document.querySelectorAll('.carousel-item-takeaway');

let currentIndex = 0;
let currentIndex2 = 0;

function showItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });

}
function showItem2(index2) {
    takeawayCarousel.forEach((item2, i2) => {
      item2.classList.toggle('active2', i2 === index2);
    });
  
  }

// Display the first item by default
showItem(currentIndex);
showItem2(currentIndex2);
console.log('Current'+currentIndex2);

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);

});


nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);

});


lastButton.addEventListener('click', () => {
  currentIndex = carouselItems.length - 1;
  showItem(currentIndex);

});


firstButton.addEventListener('click', () => {
    currentIndex = 0;
    showItem(currentIndex);
  
});


nextButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % takeawayCarousel.length;
    showItem2(currentIndex2);
  console.log('Current'+currentIndex2);
  });
  lastButton2.addEventListener('click', () => {
    currentIndex = takeawayCarousel.length - 1;
    showItem2(currentIndex);
  
  });
  prevButton2.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + takeawayCarousel.length) % takeawayCarousel.length;
    showItem2(currentIndex);
  
  });
  firstButton2.addEventListener('click', () => {
    currentIndex = 0;
    showItem2(currentIndex);
  
});

  

//SLIDDER>> << JS END




