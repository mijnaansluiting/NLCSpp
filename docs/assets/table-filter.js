function filterTable(tableId, filterId, colIndex) {
  const dropdown = document.getElementById(filterId);
  const selected = dropdown.value;
  const table = document.getElementById(tableId);
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const cell = rows[i].getElementsByTagName("td")[colIndex];
    if (!cell) continue;

    const value = cell.textContent || cell.innerText;

    rows[i].style.display =
      selected === "ALL" || value.trim() === selected.trim()
        ? ""
        : "none";
  }
}