document.addEventListener("DOMContentLoaded", function () {

    const filterOptions = [
        {
            "value": "all",
            "label": "All Bike",
            "title": "all bikes for your exploration",
            "checked": true
        },
        {
            "value": "mountain",
            "label": "Mountain Bike",
            "title": "mountain bikes",
        },
        {
            "value": "road",
            "label": "Road Bike",
            "title": "road bikes",
        },
        {
            "value": "city",
            "label": "City Bike",
            "title": "city bikes",
        },
        {
            "value": "gravel",
            "label": "Gravel Bike",
            "title": "gravel bikes",
        },
        {
            "value": "bmx",
            "label": "BMX",
            "title": "bmx bikes",
        },
        {
            "value": "kids",
            "label": "Kids Bike",
            "title": "kids bikes",
        }
    ];

    const bikes = [
        {
            "image": "bike2.png",
            "brand": "giant",
            "model": "ToughRoad SLR GX 3",
            "specs": "DT Swiss ARC 1400 Dicut db, Shimano Ultegra Di2 R8150, 12-speed",
            "colors": ["#393939", "#ffffff"],
            "rating": 4.5,
            "ratedBy": 63,
            "price": 1699,
            "sale": true
        },
        {
            "image": "bike1.png",
            "brand": "Canyon",
            "model": "S-Works Turbo Creo SL",
            "specs": "Roval CLX 50 Disc, Shimano Dura-Ace Di2, 12-speed",
            "rating": 4.7,
            "colors": ["#0EA3C4", "#000000", "#ffffff"],
            "ratedBy": 34,
            "price": 1350,
            "sale": false
        },
        {
            "image": "bike3.png",
            "brand": "Raleigh",
            "model": "Rapid Fire",
            "specs": "Carbon frame with integrated shifters, Shimano 21-speed derailleur, mechanical disc brakes",
            "rating": 4.1,
            "colors": ["#001E42", "#FF2F2F"],
            "ratedBy": 42,
            "price": 950,
            "sale": false
        },
        {
            "image": "bike4.png",
            "brand": "Merida",
            "model": "Mountain 100",
            "specs": "Shimano 24-speed gearing system, hydraulic disc brakes for superior stopping power",
            "rating": 4.3,
            "colors": ["#393939", "#ffffff"],
            "ratedBy": 18,
            "price": 1200,
            "sale": false
        },
        {
            "image": "bike5.png",
            "brand": "Cannondale",
            "model": "Trail 7",
            "specs": "Shimano Altus 27-speed drivetrain, SR Suntour suspension fork for smooth rides",
            "rating": 4.4,
            "colors": ["#B3EC00"],
            "ratedBy": 12,
            "price": 2100,
            "sale": false
        },
        {
            "image": "bike6.png",
            "brand": "Bianchi",
            "model": "Impulso E-Road",
            "specs": "Aero carbon fiber frame, compact Shimano 11-speed electronic groupset, integrated battery with pedal-assist technology",
            "rating": 4.6,
            "colors": ["#0BF2F5"],
            "ratedBy": 25,
            "price": 2200,
            "sale": false
        },
        // {
        //     "image": "bike7.png",
        //     "brand": "Scott",
        //     "model": "Aspect 940",
        //     "specs": "Hydraulic disc brakes for all-weather stopping power, Shimano 24-speed drivetrain",
        //     "rating": 4.2,
        //     "colors": ["#393939", "#FFA800", "#ffffff"],
        //     "ratedBy": 7,
        //     "price": 3100
        // },
        {
            "image": "bike8.png",
            "brand": "Specialized",
            "model": "Rockhopper 29",
            "specs": "29-inch wheels for superior traction, Shimano hydraulic disc brakes, 24-speed drivetrain for versatile performance",
            "rating": 4.5,
            "colors": ["#393939"],
            "ratedBy": 19,
            "price": 3200,
            "sale": false
        },
        {
            "image": "bike9.png",
            "brand": "Orbea",
            "model": "Gain D30",
            "specs": "Orbea Gain Hydro, Shimano Tiagra 4700, 10-speed, FSA Omega MegaExo 34x50T, Shimano RS170 700x30C wheels",
            "rating": 4.7,
            "colors": ["#93F5C0", "#ffffff"],
            "ratedBy": 22,
            "price": 3999,
            "sale": false
        },
        {
            "image": "bike10.png",
            "brand": "Cube",
            "model": "Aim Race",
            "specs": "Aluminium Lite, AMF, Internal Cable Routing, Easy Mount Kickstand Ready, Cube ZX20, 24-speed Shimano RD-M360-SGS",
            "rating": 4.0,
            "colors": ["#E3C67C"],
            "ratedBy": 42,
            "price": 850,
            "sale": false
        },
        {
            "image": "bike11.png",
            "brand": "GT",
            "model": "Avalanche",
            "specs": "GT 6061 T6 Aluminum Frame, Triple Triangle, Shimano Deore, 10-speed, WTB Ranger Comp, 27.5/29 x 2.25 tires",
            "rating": 4.3,
            "colors": ["#000000", "#666666", "#ffffff"],
            "ratedBy": 34,
            "price": 1150,
            "sale": false
        },
        // {
        //     "image": "bike12.png",
        //     "brand": "Norco",
        //     "model": "Fluid FS",
        //     "specs": "Norco Fluid FS, Aluminum, 120mm travel, Shimano SLX M7100, 12-speed, RockShox Judy Silver TK, 29-inch wheels",
        //     "rating": 4.8,
        //     "colors": ["#000000", "#ffffff"],
        //     "ratedBy": 8,
        //     "price": 2850
        // },
        {
            "image": "bike13.png",
            "brand": "Kona",
            "model": "Process 134",
            "specs": "RockShox Recon RL Solo Air 140mm fork, Shimano Deore 11-speed, WTB ST i30 TCS 2.0 rims",
            "rating": 4.8,
            "colors": ["#86a96f", "#000000", "#ffffff"],
            "ratedBy": 3,
            "price": 3650,
            "sale": false
        },
        {
            "image": "bike14.png",
            "brand": "Fuji",
            "model": "Nevada",
            "specs": "SR Suntour SF19-XCE 29 fork, Shimano Altus 8-speed, Tektro M280 mechanical disc brakes",
            "rating": 4.2,
            "colors": ["#13A9EA", "#ffffff"],
            "ratedBy": 47,
            "price": 990,
            "sale": false
        }
    ];

    const catalogContainer = document.querySelector('.catalog-container');

    let selectedFilterOption = 'all';

    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.textContent = filterOptions[0].title;
    const navbarFilterBtnContainer = document.querySelector('.navbar-filter-btn-container');
    navbarFilterBtnContainer.innerHTML = '';
    hero.style.backgroundImage = `url(assets/hero/${selectedFilterOption}.jpg)`;

    filterOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'navbar-filter-btn';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'filterOption';
        input.title = 'filterCheck';
        input.value = option.value;
        input.checked = option.checked;

        input.addEventListener('change', function () {
            selectedFilterOption = this.value;
            hero.style.backgroundImage = `url(assets/hero/${selectedFilterOption}.jpg)`;
            heroTitle.textContent = option.title;
            console.log('Selected filter option:', selectedFilterOption);
        });

        const span = document.createElement('span');
        span.textContent = option.label;

        button.appendChild(input);
        button.appendChild(span);
        navbarFilterBtnContainer.appendChild(button);
    });

    bikes.forEach((bike, index) => {
        const ratingPercentage = bike.rating / 5 * 100;
        const formattedPrice = `$${bike.price.toLocaleString()}`;
        let priceHtml;
        if (bike.sale) {
            const originalPrice = `$${Math.floor(bike.price * 1.2).toLocaleString()}`;
            priceHtml = `
                <p class="bike-price">${formattedPrice}</p>
                <p class="bike-price sale">${originalPrice}</p>
            `;
        } else {
            priceHtml = `<p class="bike-price">${formattedPrice}</p>`;
        }
        const imagePath = `assets/bikes/${bike.image}`;
        const card = document.createElement('a');
        card.className = 'catalog-card';
        card.href = 'detail.html';
        card.innerHTML = `
            <div class="catalog-card-top">
                <img src="${imagePath}" alt="${bike.model}">
            </div>
            <div class="catalog-card-bottom">
                <div class="card-bottom-text">
                    <p>${bike.brand}</p>
                    <p>${bike.model}</p>
                   
                    <div class="ratingContainer">
                        <span>${bike.rating}</span>
                        <div class="rating" style="background: linear-gradient(to right, #FFC700 ${ratingPercentage}%, #f0f0f0 ${ratingPercentage}%);">
                            <img src="assets/star-neg.png" alt="stars">
                        </div>
                        <span>(${bike.ratedBy})</span>
                    </div>

                    <div class="colors">
                        ${bike.colors.map(color => `<div style="background-color: ${color}"></div>`).join('')}
                    </div>
                </div>
                <div class="card-bottom-price">
                    ${priceHtml}
                </div>
            </div>
        `;

        catalogContainer.appendChild(card);
    });

    const morebtn = document.createElement('div');
    morebtn.className = 'morebtn';
    morebtn.innerHTML =
        `
    <button class="morebtn-content">
        <p>Show More</p>
    </button>
    `
    catalogContainer.appendChild(morebtn);
});
