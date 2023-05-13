const axios = require('axios');

async function getPopularRepositories() {
    try {
        const response = await axios.get('https://api.github.com/users/google/repos?sort=stars&per_page=10');
        const repositories = response.data;

        console.log('Los 10 repositorios más populares de Google en GitHub son:');
        repositories.forEach((repo, index) => {
            console.log(`${index + 1}. ${repo.name} - ${repo.stargazers_count} estrellas`);
        });
    } catch (error) {
        console.error('Ocurrió un error al obtener los repositorios:', error.message);
    }
}

getPopularRepositories();
