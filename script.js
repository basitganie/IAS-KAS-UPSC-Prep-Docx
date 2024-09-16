document.addEventListener('DOMContentLoaded', () => {
    const pdfList = document.getElementById('pdf-list');

    // Updated list of PDFs with actual file names
    const pdfs = [
        { name: 'Pre-Historic Era', url: 'pdfs/pre-historic_era.pdf' },
        { name: 'India and the Contemporary World', url: 'pdfs/India_and_the_contemporary_world.pdf' }
    ];

    // Dynamically create PDF list with viewer and download option
    pdfs.forEach(pdf => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        // Create PDF title
        const title = document.createElement('h4');
        title.textContent = pdf.name;
        listItem.appendChild(title);

        // Create an iframe to display the PDF
        const iframe = document.createElement('iframe');
        iframe.src = pdf.url;
        iframe.width = '100%';
        iframe.height = '500px';
        iframe.style.border = '1px solid #ccc';
        listItem.appendChild(iframe);

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.href = pdf.url;
        downloadLink.textContent = `Download ${pdf.name}`;
        downloadLink.className = 'btn btn-primary mt-2';
        downloadLink.download = pdf.name;
        listItem.appendChild(downloadLink);

        pdfList.appendChild(listItem);
    });
});
