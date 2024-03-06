document.addEventListener('DOMContentLoaded', function () {
    const fullSpecCheckbox = document.querySelector('.full-spec-btn input[type="checkbox"]');
    const fullSpecTable = document.querySelector('.fullspec-table');
    const tableContent = document.querySelector('.fullspec-table .table');
    const closeTable = document.querySelector('.close-table');

    function toggleFullSpecDisplay() {
        if (fullSpecCheckbox.checked) {
            fullSpecTable.style.display = 'flex';
        } else {
            fullSpecTable.style.display = 'none';
        }
    }
    fullSpecCheckbox.addEventListener('change', toggleFullSpecDisplay);
    fullSpecTable.addEventListener('click', function () {
        if (!tableContent.contains(event.target)) {
            fullSpecCheckbox.checked = false;
            toggleFullSpecDisplay();
        }
    });
    closeTable.addEventListener('click', function () {
        fullSpecCheckbox.checked = false;
        toggleFullSpecDisplay();
    });
});