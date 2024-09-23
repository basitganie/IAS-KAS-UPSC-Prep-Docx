document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = async () => {
        const content = reader.result.split(',')[1]; // Get base64 content
        const token = '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'; // Replace with your token
        const repo = 'https://github.com/basitganie/IAS-KAS-UPSC-Prep-Docx/'; // Replace with your repo
        const path = 'pdfs/' + file.name; // Define the path in the repo

        const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                message: 'Upload file',
                content: content,
                sha: '', // Optional: specify the sha of the file if you're updating
            })
        });

        if (response.ok) {
            alert('File uploaded successfully!');
        } else {
            alert('Upload failed: ' + response.statusText);
        }
    };
    reader.readAsDataURL(file);
});
              
