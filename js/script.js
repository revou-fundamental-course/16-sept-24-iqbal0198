// pas navbar di tombol Message Us dipencet bakal scroll kebawah
document.querySelector('nav ul').addEventListener('click', function(event) {
    if (event.target.textContent === 'Message Us') {
        document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
    } else if (event.target.textContent === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Input username sesuai yg ditulis saat masuk web/ reload index page
document.addEventListener('DOMContentLoaded', function() {
    const userName = prompt('What is your name?');
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.textContent = `Hi ${userName}, Welcome to My Personal Page`;
});

//juga maaf ya variabelnya dipakein bhs eng karna kalo make indo kepanjangan XD.
const form = document.getElementById('messageForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Form validasi
    if (!name || !dob || !gender || !message) {
        alert('All fields are required!');
        return;
    }

    // output saat di klik submit, pesan akan masuk di text area bawah xixi
    
    const formOutput = document.getElementById('formOutput');
    formOutput.value = `
        Name: ${name}
        Date of Birth: ${dob}
        Gender: ${gender}
        Message: ${message}
    `;

    document.getElementById('moreInfoBtn').addEventListener('click', function() {
        const moreInfo = document.getElementById('moreInfo');
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            this.textContent = 'Sembunyikan Info';
        } else {
            moreInfo.style.display = 'none';
            this.textContent = 'Lebih Banyak Info';
        }
    });
    
    
});
