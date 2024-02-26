document.addEventListener('DOMContentLoaded', function () {
    const filterData = {
        "filterBlocks": [
            {
                "title": "Status",
                "expanded": true,
                "options": [
                    "In Stock",
                    "On Sale",
                    "New Arrival",
                ]
            },
            {
                "title": "Best For",
                "expanded": true,
                "options": [
                    "Trail",
                    "Downhill",
                    "Cross-Country",
                    "Long Distance"
                ]
            },
            {
                "title": "Price",
                "expanded": true,
                "options": [
                    "<1,000",
                    "1,000-1,999",
                    "2,000-2,999",
                    "3,000-3,999",
                    ">3,999"
                ]
            },
            {
                "title": "Frame Material",
                "expanded": false,
                "options": [
                    "Carbon",
                    "Aluminum",
                    "Steel",
                    "Titanium"
                ]
            },
            {
                "title": "Weight",
                "expanded": false,
                "options": [
                    "10-11 kg",
                    "11-13 kg",
                    "13-15 kg",
                    ">15 kg"
                ]
            },
            {
                "title": "Wheel Size",
                "expanded": false,
                "options": [
                    "26",
                    "27.5",
                    "29"
                ]
            },
            {
                "title": "Brake Type",
                "expanded": false,
                "options": [
                    "Disc",
                    "Rim"
                ]
            },
            {
                "title": "Groupset",
                "expanded": false,
                "options": [
                    "Shimano",
                    "SRAM",
                    "Campagnolo"
                ]
            },
            {
                "title": "Suspension",
                "expanded": false,
                "options": [
                    "Full-Suspension",
                    "Hardtail",
                ]
            },
        ]
    };

    const container = document.querySelector('.filter-container');

    filterData.filterBlocks.forEach(block => {
        const blockDiv = document.createElement('div');
        blockDiv.className = 'filter-block';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'filter-title';
        if (block.expanded) {
            titleDiv.innerHTML = `
        <h5>${block.title}</h5>
        <input type="checkbox" name="filterExpandBtn" title="filterExpandBtn" value="filterExpand">
        <img src="assets/plus.svg" alt="plus" class="filterPlus">
        <img src="assets/minus.svg" alt="minus" class="filterMinus">
    `;
        } else {
            titleDiv.innerHTML = `
        <h5>${block.title}</h5>
        <input type="checkbox" name="filterExpandBtn" title="filterExpandBtn" value="filterExpand" checked>
        <img src="assets/plus.svg" alt="plus" class="filterPlus">
        <img src="assets/minus.svg" alt="minus" class="filterMinus">
    `;
        }
        blockDiv.appendChild(titleDiv);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'filter-options';

        block.options.forEach(label => {
            const optionItemDiv = document.createElement('div');
            optionItemDiv.className = 'filter-option-item';
            optionItemDiv.innerHTML = `
                <div class="customCheckbox"></div>
                <input type="checkbox" name="filterOption" title="filterCheck" value="${label.replace(/\s+/g, '').toLowerCase()}">
                <span>${label}</span>
            `;
            optionsDiv.appendChild(optionItemDiv);
        });

        blockDiv.appendChild(optionsDiv);
        container.appendChild(blockDiv);
    });
});
