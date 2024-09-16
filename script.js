document.addEventListener('DOMContentLoaded', () => {
    const pdfList = document.getElementById('pdf-list');

    // Assuming you have a list of PDFs to add
    const pdfs = [
        { name: 'World History Pre-Era', url: 'pre-historic_era.pdf' },
        { name: 'India And The Contemprary World Pre-Era', url: 'India_and_the_contemporary_world.pdf' }
    ];

    pdfs.forEach(pdf => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = pdf.url;
        link.textContent = pdf.name;
        link.target = '_blank';
        listItem.appendChild(link);
        pdfList.appendChild(listItem);
    });
});

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const uploadStatus = document.getElementById('uploadStatus');

    if (fileInput.files.length === 0) {
        uploadStatus.textContent = 'Please select a file to upload.';
        return;
    }

    // You need a server-side script to handle file uploads; this is just a placeholder
    uploadStatus.textContent = 'File upload functionality is not yet implemented.';
}
