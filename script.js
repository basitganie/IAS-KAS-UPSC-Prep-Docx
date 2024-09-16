document.addEventListener('DOMContentLoaded', () => {
    const pdfList = document.getElementById('pdf-list');

    // List of PDFs (update this with actual PDF file names and paths)
    const pdfs = [
        { name: 'UPSC Syllabus', url: 'pdfs/pre-historic_era.pdf uploaded ' },
        { name: 'IAS Study Material', url:'pdfs/India_and_the_contemporary_world.pdf' },
        { name: 'KAS Preparation Guide', url: 'pdfs/kas-prep-guide.pdf' }
    ];

    // Dynamically create PDF list
    pdfs.forEach(pdf => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        
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

    uploadStatus.textContent = 'File upload functionality is not supported on GitHub Pages.';
}
