console.log('hellojs');

const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

const teamListEl = document.querySelector('.team-list');

teamMembers.forEach(member => {
    const { name, role, email, img } = member;



    const card = ` <li class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow-sm h-100 overflow-hidden bg-black">
                            <div class="row g-0 h-100 align-items-center">
                        <div class="col-4 h-100">
            <img 
              src="./${img}" 
              class="img-fluid h-100 w-100 object-fit-cover" 
              alt="Ritratto di ${name}">
          </div>
          <div class="col-8">
                        <div class="card-body">
                            <h2 class="h5 card-title mb-1 fw-bold text-white text-uppercase">${name}</h2>
                            <p class="card-text text-white small fw-semibold mb-0">${role}
                                        </p>
                            <a href="mailto:${name}@team.com"
                            class="text-info small text-decoration-none d-inline-block">
                                            ${email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>`

    teamListEl.innerHTML += card;
});