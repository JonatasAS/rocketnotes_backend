/*A logica desta classe e criar um vetor que ira ficar armazenado na 
memoria do computator para testes, evitando sujar o banco*/
class UserRepositoryInMemory {
    users = [];

    async create({ email, name, password }) {
        const user = {
            id: Math.floor(Math.random() * 1000) + 1,
            email,
            name,
            password
        };

        this.users.push(user);

        return user;
    }

    async findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}

module.exports = UserRepositoryInMemory;
