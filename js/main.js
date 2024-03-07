console.log("hehehehe");

function elementsFactory(tag, classes, idAttr = "", innerHTML = false) {
    let tmpElement = document.createElement(tag);

    // Check if classes are provided and not empty
    if (classes && classes.trim() !== "") {
        // Split the classes string into an array
        let classList = classes.split(" ");
        // Add each class to the element
        classList.forEach(className => {
            tmpElement.classList.add(className);
        });
    }

    if (idAttr) {
        tmpElement.setAttribute("id", idAttr);
    }

    tmpElement.innerHTML = innerHTML ? innerHTML : "";
    return tmpElement;
}

/* Nasledjivanje Elemenata */
function appendChildToParent(parent, child) {
	return parent.appendChild(child);
}


/* Kreiranje Header sekcije */
var TagHeader = document.querySelector('header');

// Funkcija za izvršavanje AJAX zahteva
function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'navbar.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == "200") {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

// Funkcija za kreiranje elemenata
function createNavbar(navItems) {
    var headerSection = elementsFactory("div", "header_section");
    var containerFluid = elementsFactory("div", "container-fluid");
    var nav = elementsFactory("nav", "navbar navbar-expand-lg navbar-light bg-light d-flex");
    var logo = elementsFactory("div", "logo");
    var logoLink = elementsFactory("a");
    logoLink.setAttribute("href", "index.html");
    var logoImg = elementsFactory("img");
    logoImg.setAttribute("src", "images/logo.png");
    appendChildToParent(logoLink, logoImg);
    appendChildToParent(logo, logoLink);

    var button = elementsFactory("button", "navbar-toggler");
    button.setAttribute("type", "button");
    button.setAttribute("data-toggle", "collapse");
    button.setAttribute("data-target", "#navbarNav");
    button.setAttribute("aria-controls", "navbarNav");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation");

    var span = elementsFactory("span", "navbar-toggler-icon");
    appendChildToParent(button, span);

var divCollapse = elementsFactory("div", "collapse navbar-collapse");
    divCollapse.setAttribute("id", "navbarNav");

var ul = elementsFactory("ul", "navbar-nav ml-auto");

    // Dodavanje stavki navigacije
    navItems.forEach(function(item) {
        var li = elementsFactory("li", "nav-item");
        var a = elementsFactory("a", "nav-link");
        a.setAttribute("href", item.url);
        a.textContent = item.text;
        appendChildToParent(li, a);
        appendChildToParent(ul, li);
    });

    // Dodavanje pretrage
    var searchLi = elementsFactory("li", "nav-item");
    var searchLink = elementsFactory("a", "nav-link");
    searchLink.setAttribute("href", "#");
var searchIcon = elementsFactory("i", "fa fa-search");
    searchLink.appendChild(searchIcon);
    searchLi.appendChild(searchLink);
    appendChildToParent(ul, searchLi);

    // Dodavanje elemenata u DOM
    appendChildToParent(divCollapse, ul);
    appendChildToParent(nav, logo);
    appendChildToParent(nav, button);
    appendChildToParent(nav, divCollapse);
    appendChildToParent(containerFluid, nav);
    appendChildToParent(headerSection, containerFluid);
    
    if(TagHeader){
    appendChildToParent(TagHeader,headerSection);
    }

}

// Pozivamo funkciju za učitavanje JSON fajla i kreiranje navigacionog menija
loadJSON(function(response) {
    var navItems = JSON.parse(response);
    createNavbar(navItems);
});


/********************** START BANNER SECTION *************************/
    


/********************** END BANNER SECTION *************************/


/********************** START ABOUT US SECTION *************************/

// Kreiranje HTML koda kroz JavaScript
var aboutSection = document.querySelector(".about_section");
var container = elementsFactory("div", "container");
var row = elementsFactory("div", "row");

var col1 = elementsFactory("div", "col-md-6");
var aboutTaitalMain = elementsFactory("div", "about_taital_main");
var aboutTaital = elementsFactory("div", "about_taital", "", "About Us");
var aboutText1 = elementsFactory("p", "about_text", "", "Full cleaning and housekeeping services for companies and households.");
var aboutText2 = elementsFactory("p", "about_text", "", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply");
var readMore1 = elementsFactory("div", "read_bt");
var readMoreLink = elementsFactory("a");
readMoreLink.setAttribute("href", "#");
readMoreLink.textContent = "Read More";
appendChildToParent(readMore1, readMoreLink);
appendChildToParent(aboutTaitalMain, aboutTaital);
appendChildToParent(aboutTaitalMain, aboutText1);
appendChildToParent(aboutTaitalMain, aboutText2);
appendChildToParent(aboutTaitalMain, readMore1);
appendChildToParent(col1, aboutTaitalMain);

var col2 = elementsFactory("div", "col-md-6");
var aboutImg = elementsFactory("div", "about_img");
var img = elementsFactory("img");
img.setAttribute("src", "images/about-img.png");
appendChildToParent(aboutImg, img);
appendChildToParent(col2, aboutImg);

appendChildToParent(row, col1);
appendChildToParent(row, col2);
appendChildToParent(container, row);

if(aboutSection){
appendChildToParent(aboutSection, container);
}




/********************** END ABOUT US SECTION *************************/


// Funkcija za dohvat podataka putem AJAX zahteva
function fetchData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.open("GET", "gallery.json", true);
    xhr.send();
}


// Pozivamo fetchData funkciju i prosleđujemo funkciju za manipulaciju podacima
fetchData(function(data) {
    // Kreiranje HTML elemenata galerije koristeći podatke iz JSON-a
    var gallerySection = document.querySelector(".gallery_section");
    var container = elementsFactory("div", "container");
    var row1 = elementsFactory("div", "row");
    var col1 = elementsFactory("div", "col-sm-12");
    var galleryTaital = elementsFactory("h1", "gallery_taital", "", "Our Gallery");
    var galleryText = elementsFactory("p", "gallery_text", "", "Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has");
    appendChildToParent(col1, galleryTaital);
    appendChildToParent(col1, galleryText);
    appendChildToParent(row1, col1);
    appendChildToParent(container, row1);

    var galleryData = data; // Podaci iz JSON fajla

    // Kreiranje elemenata galerije koristeći podatke iz JSON-a
    galleryData.forEach(function(item) {
        var col = elementsFactory("div", "col-md-4 mt-5");
        var containerMain = elementsFactory("div", "container_main");
        var img = elementsFactory("img", "image");
        img.setAttribute("src", item.imageSrc);
        img.setAttribute("alt", item.alt);
        var overlay = elementsFactory("div", "overlay");
        var text = elementsFactory("div", "text");
        var link = elementsFactory("a");
        link.setAttribute("href", item.overlay.linkHref);
        var icon = elementsFactory("i", item.overlay.iconClass, "", "");
        if (item.overlay.iconAriaHidden) {
            icon.setAttribute("aria-hidden", "true");
        }
        link.appendChild(icon);
        text.appendChild(link);
        overlay.appendChild(text);
        containerMain.appendChild(img);
        containerMain.appendChild(overlay);
        col.appendChild(containerMain);
        row1.appendChild(col);
    });

    appendChildToParent(container, row1);
    var seemoreBt = elementsFactory("div", "seemore_bt");
    var seeMoreLink = elementsFactory("a");
    seeMoreLink.setAttribute("href", "#");
    seeMoreLink.textContent = "See More";
    appendChildToParent(seemoreBt, seeMoreLink);
    appendChildToParent(container, seemoreBt);

    if(gallerySection){
    appendChildToParent(gallerySection, container);
    }

});


/********************** START ABOUT US SECTION *************************/


// AJAX zahtev
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(xhr.responseText);
        createServicesSection(data);
    }
};
xhr.open("GET", "services.json", true);
xhr.send();

// Kreiranje services sekcije
function createServicesSection(data) {
    const container = document.querySelector('.services_section');
   // Kreiranje naslova
const titleRow = elementsFactory('div', 'row');
const titleCol = elementsFactory('div', 'col-sm-12');
const titleHeading = elementsFactory('h1', 'services_taital');
titleHeading.textContent = 'Services';
const titleText = elementsFactory('p', 'services_text');
titleText.textContent = 'Typesetting industry lorem Ipsum is simply dummy text of the';

appendChildToParent(titleCol, titleHeading);
appendChildToParent(titleCol, titleText);
appendChildToParent(titleRow, titleCol);
if(container){
    appendChildToParent(container,titleRow);
}


    // Kreiranje service box-ova
    const servicesSection = elementsFactory('div', 'services_section_2');
    const row = elementsFactory('div', 'row justify-content-center');
    appendChildToParent(servicesSection, row);
    if(container){
    appendChildToParent(container, servicesSection);
    }
    

    data.forEach(item => {
        const serviceBox = elementsFactory('div', 'col-lg-3 col-sm-12 col-md-4');
        const boxMain = elementsFactory('div', 'box_main');

        const houseIcon = elementsFactory('div', 'house_icon');
        const image1 = elementsFactory('img', 'image_1');
        const image2 = elementsFactory('img', 'image_2');

        image1.setAttribute('src', item.imageSrc);
        image2.setAttribute('src', item.imageSrc);

        appendChildToParent(houseIcon, image1);
        appendChildToParent(houseIcon, image2);
        appendChildToParent(boxMain, houseIcon);

        const title = elementsFactory('h3', 'decorate_text');
        title.textContent = item.title;
        appendChildToParent(boxMain, title);

        const description = elementsFactory('p', 'tation_text');
        description.textContent = item.description;
        appendChildToParent(boxMain, description);

        const readmoreBt = elementsFactory('div', 'readmore_bt');
        const link = elementsFactory('a', '');
        link.setAttribute('href', '#');
        link.textContent = 'Read More';
        appendChildToParent(readmoreBt, link);
        appendChildToParent(boxMain, readmoreBt);

        appendChildToParent(serviceBox, boxMain);
        appendChildToParent(row,serviceBox);
        appendChildToParent(servicesSection,row);

        
        

    });
    if(container){
            appendChildToParent(container,servicesSection);
        }
    }



/********************** END SERVICES SECTION *************************/

/********************** START TESTIMONIAL SECTION *************************/

const httpRequestTestimonials = new XMLHttpRequest();
httpRequestTestimonials.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(httpRequestTestimonials.responseText);
        createTestimonials(data);
    }
};
httpRequestTestimonials.open("GET", "testimonial.json", true);
httpRequestTestimonials.send();

function createTestimonials(data) {
    const clientSection = document.querySelector(".client_section")
    const container = elementsFactory('div', 'container');
    const titleRow = elementsFactory('div', 'row');
    const titleCol = elementsFactory('div', 'col-sm-12');
    const titleHeading = elementsFactory('h1', 'client_taital');
    titleHeading.textContent = 'Testimonial';
    const titleText = elementsFactory('p', 'client_text');
    titleText.textContent = 'Eeven slightly believable. If you are going to use a passage of Lorem Ipsum, you need to';

    appendChildToParent(titleCol, titleHeading);
    appendChildToParent(titleCol, titleText);
    appendChildToParent(titleRow, titleCol);
    appendChildToParent(container, titleRow);
    if(clientSection){
        appendChildToParent(clientSection, container);
    }
    

    // Kreiranje karusela za testimonijale
    const carousel = elementsFactory('div', 'carousel slide mt-5');
    carousel.setAttribute('id', 'carouselExampleIndicators');
    carousel.setAttribute('data-ride', 'carousel');
    const carouselIndicators = elementsFactory('ol', 'carousel-indicators');
    const carouselInner = elementsFactory('div', 'carousel-inner');

    data.forEach((item, index) => {
        const carouselItem = elementsFactory('div', 'carousel-item' + (index === 0 ? ' active' : ''));
        const testimonialSection = elementsFactory('div', 'testimonial_section_2');
        const clientName = elementsFactory('h4', 'client_name_text');
        const clientNameSpan = elementsFactory('span', 'quick_icon');
        const quickIcon = elementsFactory('img', '');
        quickIcon.setAttribute('src', 'images/quick-icon.png');
        clientNameSpan.appendChild(quickIcon);
        clientName.appendChild(document.createTextNode(item.clientName));
        clientName.appendChild(clientNameSpan);
        const clientText = elementsFactory('p', 'customer_text');
        clientText.textContent = item.clientText;

        appendChildToParent(testimonialSection, clientName);
        appendChildToParent(testimonialSection, clientText);
        appendChildToParent(carouselItem, testimonialSection);
        appendChildToParent(carouselInner, carouselItem);

        const indicator = elementsFactory('li', '');
        indicator.setAttribute('data-target', '#carouselExampleIndicators');
        indicator.setAttribute('data-slide-to', index.toString());
        if (index === 0) {
            indicator.classList.add('active');
        }
        appendChildToParent(carouselIndicators, indicator);
    });

    appendChildToParent(carousel, carouselIndicators);
    appendChildToParent(carousel, carouselInner);
    appendChildToParent(container, carousel);

    if(clientSection){
        appendChildToParent(clientSection,container);
    }
}

/********************** END TESTIMONIAL SECTION *************************/

/********************** START CONTACT SECTION *************************/

// Kreiranje prvog div elementa sa klasom 'contact_section' i unutar njega h1 elementa
const contactMain = document.querySelector('.contact_main');
const contactSection = elementsFactory('div', 'contact_section', 'layout_padding');
const container1 = elementsFactory('div', 'container');
const contactText = elementsFactory('h1', 'contact_text');
contactText.textContent = 'Contact Us';
appendChildToParent(container1, contactText);
appendChildToParent(contactSection, container1);

// Kreiranje drugog div elementa sa klasom 'contact_section_2' i unutar njega div elementa 'container-fluid'
const contactSection2 = elementsFactory('div', 'contact_section_2', 'layout_padding');
const containerFluid = elementsFactory('div', 'container-fluid');

// Kreiranje div elementa sa klasom 'row'
const rowContact = elementsFactory('div', 'row justify-content-center');

// Kreiranje prvog div elementa za unos podataka
const firstColumn = elementsFactory('div', 'col-md-8', 'padding_0');

// Kreiranje div elementa sa klasom 'mail_section'
const mailSection = elementsFactory('div', 'mail_section');

// Kreiranje form elementa
const formElement = document.createElement('form');
formElement.setAttribute('id', 'contactForm');
formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    proveriFormu(); // Call form validation function
});

// Kreiranje input elemenata za unos imena, email-a i telefonskog broja
const nameInput = elementsFactory('input', 'email-bt','tbImeIPrezime');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');
nameInput.setAttribute('name', 'tbImeIPrezime');
formElement.appendChild(nameInput);

const emailInput = elementsFactory('input', 'email-bt mt-5','tbEmail');
emailInput.setAttribute('type', 'text');
emailInput.setAttribute('placeholder', 'Email');
emailInput.setAttribute('name', 'tbEmail');
formElement.appendChild(emailInput);

const phoneInput = elementsFactory('input', 'email-bt mt-5', 'tbBrojTelefona');
phoneInput.setAttribute('type', 'text');
phoneInput.setAttribute('placeholder', 'Phone Number');
phoneInput.setAttribute('name', 'tbBrojTelefona');
formElement.appendChild(phoneInput);

// Kreiranje textarea elementa za unos poruke
const messageTextarea = elementsFactory('textarea', 'massage-bt mt-5','tbTextArea');
messageTextarea.setAttribute('placeholder', 'Message');
messageTextarea.setAttribute('rows', '5');
messageTextarea.setAttribute('id', 'comment');
messageTextarea.setAttribute('name', 'tbTextArea');
formElement.appendChild(messageTextarea);

// Kreiranje p elementa sa atributom id="ispisGreske"
const pTagContact = elementsFactory('p');
pTagContact.id = 'ispisGreske';

// Kreiranje div elementa sa klasom 'send_btn'
const sendBtn = elementsFactory('div', 'send_btn mt-5');

// Kreiranje input elementa tipa button
const mainBtn = elementsFactory('input', 'main_bt');
mainBtn.setAttribute('type', 'button');
mainBtn.setAttribute('value', 'SEND');
sendBtn.appendChild(mainBtn);

// Dodavanje event listenera na dugme za slanje forme
mainBtn.addEventListener('click', function() {
    proveriFormu();
});

// Dodavanje svih elemenata za unos podataka u div 'mail_section'
appendChildToParent(mailSection, nameInput);
appendChildToParent(mailSection, emailInput);
appendChildToParent(mailSection, phoneInput);
appendChildToParent(mailSection, messageTextarea);
appendChildToParent(mailSection, sendBtn);

// Dodavanje 'mail_section' div-a u 'firstColumn' div
appendChildToParent(firstColumn, mailSection);

// Kreiranje drugog div elementa sa klasom 'col-md-6' za prikaz mape
const secondColumn = elementsFactory('div', 'col-md-6', 'padding_0');

// Kreiranje div elementa sa klasom 'map-responsive' za prikaz Google mape
const mapResponsive = elementsFactory('div', 'map-responsive');

// Dodavanje 'firstColumn' i 'secondColumn' div-ova u 'row' div
appendChildToParent(rowContact, firstColumn);


// Dodavanje 'row' div-a u 'container-fluid' div
appendChildToParent(containerFluid, rowContact);

// Dodavanje 'container-fluid' div-a u 'contact_section_2' div
appendChildToParent(contactSection2, containerFluid);

// Dodavanje 'contact_section_2' div-a u odgovarajući roditeljski element
if(contactMain){
    appendChildToParent(contactMain, contactSection);
    appendChildToParent(contactMain, contactSection2);
}


/********************** END CONTACT SECTION *************************/

/********************** START FOOTER SECTION *************************/

// AJAX za dohvat JSON podataka
const footerXHR = new XMLHttpRequest();
footerXHR.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const footerData = JSON.parse(footerXHR.responseText);
        createFooter(footerData);
    }
};
footerXHR.open("GET", "footer.json", true);
footerXHR.send();

// Kreiranje footer-a

var FooterSection = document.querySelector('.footer_section')
function createFooter(data) {
    const container = elementsFactory('div', 'container');
    const row = elementsFactory('div', 'row');
    appendChildToParent(container, row);
    appendChildToParent(FooterSection, container);

    data.forEach(item => {
        const key = Object.keys(item)[0];
        const value = item[key];

        const col = elementsFactory('div', 'col-lg-4', 'col-sm-12');
        const title = elementsFactory('h3', 'useful_text');
        title.textContent = value.title;
        appendChildToParent(col, title);
        const content = elementsFactory('p',"text-white");
        
        
        if (key === "menu") {
            const divMenu = elementsFactory('div', 'footer_menu');
            const ul = elementsFactory('ul');
            value.items.forEach(menuItem => {
                const li = elementsFactory('li');
                const anchor = elementsFactory('a');
                anchor.setAttribute('href', menuItem.url);
                anchor.textContent = menuItem.text;
                appendChildToParent(li, anchor);
                appendChildToParent(ul, li);
            });
            appendChildToParent(divMenu, ul);
            appendChildToParent(col, divMenu);
        } else if (key === "contact_us") {
            const divLocation = elementsFactory('div', 'location_text');
            const ul = elementsFactory('ul');
            const locationItems = ["address", "phone", "email"];

            // Uzmi informacije o ikonama
        const icons = value.icons;

        locationItems.forEach((locationItem, index) => {
            const li = elementsFactory('li');
            const anchor = elementsFactory('a');
            anchor.setAttribute('href', '#');
            
            // Uzmi klasu ikone iz JSON-a
            const iconClass = icons[index].icon;

            // Kreiraj ikonu sa odgovarajućom klasom
            const icon = elementsFactory('i', iconClass);

            const span = elementsFactory('span', 'padding_left_10');
            span.textContent = `${value[locationItem]}`;
            appendChildToParent(anchor, icon);
            appendChildToParent(anchor, span);
            appendChildToParent(li, anchor);
            appendChildToParent(ul, li);
        });
            appendChildToParent(divLocation, ul);
            appendChildToParent(col, divLocation);
        } else {
            content.textContent = value.text;
            appendChildToParent(col, content);
        }

        
        appendChildToParent(row, col);
    });
}

/********************** END FOOTER SECTION *************************/