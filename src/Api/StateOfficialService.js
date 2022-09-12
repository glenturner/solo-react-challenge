
const baseUrl = 'http://localhost:3000';

export const SearchRepresentativesByState = async (state) => {
    const response = await fetch(`${baseUrl}/representatives/${state}`);
    try {
        return response.json();
    } catch (error) {
        console.log('error when fetching representative: ', error);
    }
}

export const SearchSenatorsByState = async (state) => {
    const response = await fetch(`${baseUrl}/senators/${state}`);
    try {
        return response.json();
    } catch (error) {
        console.log('error when fetching senator: ', error);
    }
}