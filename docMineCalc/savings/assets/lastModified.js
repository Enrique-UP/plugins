const modifiedDate = new Date(document.lastModified);
const day = String(modifiedDate.getDate()).padStart(2, '0');
const month = String(modifiedDate.getMonth() + 1).padStart(2, '0');
const year = modifiedDate.getFullYear();
const formattedDate = `${day}-${month}-${year}`;
document.querySelector("caption").textContent = formattedDate;