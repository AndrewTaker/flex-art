document.title = "CHEBUREK";

var meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);


const tables = document.querySelectorAll('*');
tables.forEach(table => {
    const attrs = Array.from(table.attributes)
    attrs.forEach(attr => {
        table.removeAttribute(attr.name);
    })
});

