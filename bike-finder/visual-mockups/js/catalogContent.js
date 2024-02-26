document.addEventListener("DOMContentLoaded", function () {
    const bikes = [
        {
            "image": "bike1.png",
            "brand": "giant",
            "model": "ToughRoad SLR GX 3",
            "specs": "DT Swiss ARC 1400 Dicut db, Shimano Ultegra Di2 R8150, 12-speed",
            "rating": 4.5,
            "ratedBy": 63,
            "price": 1699
        },
        {
            "image": "bike2.png",
            "brand": "trek",
            "model": "S-Works Turbo Creo SL",
            "specs": "Roval CLX 50 Disc, Shimano Dura-Ace Di2, 12-speed",
            "rating": 4.7,
            "ratedBy": 34,
            "price": 1350
        },
        {
            "image": "bike3.png",
            "brand": "Raleigh",
            "model": "Rapid Fire",
            "specs": "Carbon frame with integrated shifters, Shimano 21-speed derailleur, mechanical disc brakes",
            "rating": 4.1,
            "ratedBy": 42,
            "price": 950
        },
        {
            "image": "bike4.png",
            "brand": "Merida",
            "model": "Mountain 100",
            "specs": "Shimano 24-speed gearing system, hydraulic disc brakes for superior stopping power",
            "rating": 4.3,
            "ratedBy": 18,
            "price": 1200
        },
        {
            "image": "bike5.png",
            "brand": "Cannondale",
            "model": "Trail 7",
            "specs": "Shimano Altus 27-speed drivetrain, SR Suntour suspension fork for smooth rides",
            "rating": 4.4,
            "ratedBy": 12,
            "price": 2100
        },
        {
            "image": "bike6.png",
            "brand": "Bianchi",
            "model": "Impulso E-Road",
            "specs": "Aero carbon fiber frame, compact Shimano 11-speed electronic groupset, integrated battery with pedal-assist technology",
            "rating": 4.6,
            "ratedBy": 25,
            "price": 2200
        },
        {
            "image": "bike7.png",
            "brand": "Scott",
            "model": "Aspect 940",
            "specs": "Hydraulic disc brakes for all-weather stopping power, Shimano 24-speed drivetrain",
            "rating": 4.2,
            "ratedBy": 7,
            "price": 3100
        },
        {
            "image": "bike8.png",
            "brand": "Specialized",
            "model": "Rockhopper 29",
            "specs": "29-inch wheels for superior traction, Shimano hydraulic disc brakes, 24-speed drivetrain for versatile performance",
            "rating": 4.5,
            "ratedBy": 19,
            "price": 3200
        },
        {
            "image": "bike9.png",
            "brand": "Orbea",
            "model": "Gain D30",
            "specs": "Orbea Gain Hydro, Shimano Tiagra 4700, 10-speed, FSA Omega MegaExo 34x50T, Shimano RS170 700x30C wheels",
            "rating": 4.7,
            "ratedBy": 22,
            "price": 3999
        },
        {
            "image": "bike10.png",
            "brand": "Cube",
            "model": "Aim Race",
            "specs": "Aluminium Lite, AMF, Internal Cable Routing, Easy Mount Kickstand Ready, Cube ZX20, 24-speed Shimano RD-M360-SGS",
            "rating": 4.0,
            "ratedBy": 42,
            "price": 850
        },
        {
            "image": "bike11.png",
            "brand": "GT",
            "model": "Avalanche",
            "specs": "GT 6061 T6 Aluminum Frame, Triple Triangle, Shimano Deore, 10-speed, WTB Ranger Comp, 27.5/29 x 2.25 tires",
            "rating": 4.3,
            "ratedBy": 34,
            "price": 1150
        },
        {
            "image": "bike12.png",
            "brand": "Norco",
            "model": "Fluid FS",
            "specs": "Norco Fluid FS, Aluminum, 120mm travel, Shimano SLX M7100, 12-speed, RockShox Judy Silver TK, 29-inch wheels",
            "rating": 4.8,
            "ratedBy": 8,
            "price": 2850
        },
        {
            "image": "bike13.png",
            "brand": "Kona",
            "model": "Process 134",
            "specs": "RockShox Recon RL Solo Air 140mm fork, Shimano Deore 11-speed, WTB ST i30 TCS 2.0 rims",
            "rating": 4.8,
            "ratedBy": 3,
            "price": 3650
        },
        {
            "image": "bike14.png",
            "brand": "Fuji",
            "model": "Nevada",
            "specs": "SR Suntour SF19-XCE 29 fork, Shimano Altus 8-speed, Tektro M280 mechanical disc brakes",
            "rating": 4.2,
            "ratedBy": 47,
            "price": 990
        }
    ];

    const container = document.querySelector('.catalog-container');

    bikes.forEach((bike, index) => {
        const ratingPercentage = bike.rating / 5 * 100;
        const formattedPrice = `$${bike.price.toLocaleString()}`;
        const imagePath = `assets/bikes/bike${index + 1}.png`;
        const card = document.createElement('div');
        card.className = 'catalog-card';
        card.innerHTML = `
            <div class="catalog-card-top">
                <img src="${imagePath}" alt="${bike.model}">
            </div>
            <div class="catalog-card-bottom">
                <div class="card-bottom-text">
                    <p>${bike.brand}</p>
                    <p>${bike.model}</p>
                    <p>${bike.specs}</p>
                    <div class="ratingContainer">
                        <span>${bike.rating}</span>
                        <div class="rating" style="background: linear-gradient(to right, #FFEA50 ${ratingPercentage}%, #f0f0f0 ${ratingPercentage}%);">
                            <img src="assets/star-neg.png" alt="stars">
                        </div>
                        <span>(${bike.ratedBy})</span>
                    </div>
                </div>
                <p class="bike-price">${formattedPrice}</p>
            </div>
        `;

        container.appendChild(card);
    });
});
