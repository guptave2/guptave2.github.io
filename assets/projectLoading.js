//Used ChatGPT on 17th September for activity 5
//Asked ChatGPT how I can do activity 5 
//Asked GPT how I can add a date attribute to the projects dictionary 
//Asked GPT how I can sort in descending order based on the date 


// Array of project objects
const projects = [
    {
      title: 'Geographic Information System Application',
      description: 'A mapping application catered towards university students',
      imageUrl: '/assets/img/mapperMax.png',
      tools: 'C++, GTK, Git, CSS',
      date: '2023-04-20',  // Date of the project
      accomplishments: [
        'Gained development experience in a dynamic environment: explored graphic libraries such as EZGL and GTK widgets using the OpenStreetMap database to extract and render information on the map.',
        'Implemented path-finding algorithms such as Dijkstra’s and A* to find efficient map routes.',
      ],
      links: {
        youtube: 'https://www.youtube.com/watch?v=M7EtkRizJ_g',
      },
    },
    {
      title: 'Billboard Hit Predictor',
      description: 'An AI model that predicts whether a song will make the Billboard Charts or not',
      imageUrl: '/assets/img/billboardThumb.png',
      tools: 'Python, NumPy, PyTorch, Matplotlib, Spotify API, Neural Networks',
      date: '2024-04-01',  // Date of the project
      accomplishments: [
        'An mp3 audio file from the data set is transformed into a visual mel-spectrogram. This is used as the input to RNN and CNN architectures working in parallel to finally combine the output to a binary yes/no as the answer to the hit song classification problem.',
      ],
      links: {
        youtube: 'https://www.youtube.com/watch?v=BkXetU4h8Xk',
        github: 'https://github.com/APS360-TEAM/APS360-PROJECT',
      },
    },
    {
        title: '16-bit Processor',
        description: 'A processor that carries out basic instructions',
        imageUrl: '/assets/img/fpga.jpg',
        tools: 'Verilog, Quartus Prime, ModelSim',
        date: '2023-04-01',  // Date of the project
        accomplishments: [
          'Created a 16-bit processor (in Verilog) similar to the ARM Cortex A9 processor with instructions such as mov, sum, sub, str, ldr, push, pop',
        ],
        links: {

        },
      },
  ];
  
  
  let currentIndex = 0;
  const projectsPerPage = 1; // Number of projects to display at a time

  //sorting by date
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));


    function renderProjects() {
        const recentProjectsContainer = document.getElementById('recent-projects');

        for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projects.length; i++) {
        const project = projects[i];
        // Directly set the outer and inner structure together in the innerHTML
        const projectCard = document.createElement('div');
        projectCard.innerHTML = `
            <div class="col s12 m6 l4">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                <img alt="${project.title}" src="${project.imageUrl}" class="activator" style="height: 100%; width: 100%" />
                </div>
                <div class="card-content">
                <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
                <p>${project.description}</p>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
                <ul>
                    <li><b>Tools:</b> ${project.tools}</li>
                    ${project.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
                </ul>
                <div class="card-action">
                    ${project.links.youtube ? `<a aria-label="Visit " href="${project.links.youtube}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>` : ''}
                    ${project.links.github ? `<a aria-label="Visit the GitHub repo for project" href="${project.links.github}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>` : ''}
                </div>
                </div>
            </div>
            </div>
        `;
        // Append the child to the container
        recentProjectsContainer.appendChild(projectCard.firstElementChild);
        }

        // Update the current index
        currentIndex += projectsPerPage;

        // Show or hide the Load More button
        const loadMoreButton = document.getElementById('load-more');
        if (currentIndex >= projects.length) {
        loadMoreButton.style.display = 'none';
        } else {
        loadMoreButton.style.display = 'block';
        }
    }

  
  // Event listener for the Load More button
  document.getElementById('load-more').addEventListener('click', renderProjects);
  
  // Initial render
  renderProjects();
  