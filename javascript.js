// Select all sections except the header and footer
const sections = document.querySelectorAll('body > *:not(header):not(footer)');

// Set background for the body
const body = document.querySelector('body');
body.style.background = "linear-gradient(to bottom right, #AF1740, #740938)";
body.style.backgroundAttachment = 'fixed';

// Function to create and style a decorative element
function createDecorativeElement() {
    const decorativeElement = document.createElement('div');
    decorativeElement.style.width = '5px';
    decorativeElement.style.height = '5px';
    decorativeElement.style.borderRadius = '50%';
    decorativeElement.style.backgroundColor = '#C0C0C0';
    decorativeElement.style.position = 'absolute';
    decorativeElement.style.top = `${Math.random() * 100}%`;
    decorativeElement.style.left = `${Math.random() * 100}%`;
    decorativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    decorativeElement.style.opacity = '0.5';

    return decorativeElement;
}

// Add decorative elements to each section except the header and footer
sections.forEach(section => {
    section.style.position = 'relative'; // Ensure section has a relative position

    for (let i = 0; i < 100; i++) { // Adjust the number of elements per section
        const decorativeElement = createDecorativeElement();
        section.appendChild(decorativeElement);
    }
});
